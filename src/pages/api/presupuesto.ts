import type { APIRoute } from 'astro';
import { RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL } from 'astro:env/server';
import { Resend } from 'resend';
import { parseLead, leadEmail } from '../../lib/leads';

export const prerender = false;

// Límite sencillo en memoria: máx. 5 envíos por IP cada 10 minutos
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ ok: false, message: 'Solicitud no válida.' }, 400);
  }

  // Campo trampa: los bots lo rellenan, las personas no lo ven
  if (String(data.get('empresa') ?? '').trim() !== '') {
    return json({ ok: true });
  }

  if (rateLimited(clientAddress)) {
    return json({ ok: false, message: 'Has enviado demasiadas solicitudes. Inténtalo de nuevo en unos minutos o llámanos.' }, 429);
  }

  const { lead, errors } = parseLead(data);
  if (!lead) {
    return json({ ok: false, message: 'Revisa los campos marcados.', errors }, 422);
  }

  const email = leadEmail(lead);

  if (!RESEND_API_KEY) {
    if (import.meta.env.DEV) {
      console.log(`\n[presupuesto] RESEND_API_KEY no configurada: el email NO se ha enviado.\nPara: ${LEAD_TO_EMAIL}\nAsunto: ${email.subject}\n${email.text}\n`);
      return json({ ok: true });
    }
    console.error('[presupuesto] Falta RESEND_API_KEY');
    return json({ ok: false, message: 'No hemos podido enviar tu solicitud. Llámanos o escríbenos por WhatsApp.' }, 500);
  }

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: LEAD_FROM_EMAIL,
    to: LEAD_TO_EMAIL,
    subject: email.subject,
    text: email.text,
    html: email.html,
  });

  if (error) {
    console.error('[presupuesto] Error de Resend:', error);
    return json({ ok: false, message: 'No hemos podido enviar tu solicitud. Llámanos o escríbenos por WhatsApp.' }, 502);
  }

  return json({ ok: true });
};
