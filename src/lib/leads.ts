// Validación y formato de las solicitudes de presupuesto

export const tiposReforma: Record<string, string> = {
  integral: 'Reforma integral',
  bano: 'Reforma de baño',
  cocina: 'Reforma de cocina',
  parcial: 'Reforma parcial / redistribución',
  otro: 'Reforma parcial o local comercial',
};

const formularios: Record<string, string> = {
  hero: 'Formulario principal (cabecera)',
  contacto: 'Formulario de contacto (final de página)',
};

export interface Lead {
  nombre: string;
  telefono: string;
  cp: string;
  tipo: string;
  formulario: string;
}

export type LeadErrors = Partial<Record<keyof Lead | 'privacidad', string>>;

export function parseLead(data: FormData): { lead?: Lead; errors: LeadErrors } {
  const get = (key: string) => String(data.get(key) ?? '').trim();
  const errors: LeadErrors = {};

  const nombre = get('nombre').replace(/\s+/g, ' ');
  if (nombre.length < 2 || nombre.length > 100) errors.nombre = 'Indica tu nombre.';

  // Acepta "644 73 40 50", "644-734-050", "+34 644734050"...
  const telefono = get('telefono').replace(/[\s.\-()]/g, '').replace(/^(\+34|0034)/, '');
  if (!/^[6789]\d{8}$/.test(telefono)) errors.telefono = 'Introduce un teléfono español válido de 9 cifras.';

  const cp = get('cp');
  if (!/^\d{5}$/.test(cp)) errors.cp = 'El código postal debe tener 5 cifras.';

  const tipo = get('tipo');
  if (!(tipo in tiposReforma)) errors.tipo = 'Selecciona un tipo de reforma.';

  if (!data.get('privacidad')) errors.privacidad = 'Debes aceptar la política de privacidad.';

  const formulario = get('formulario') in formularios ? get('formulario') : 'hero';

  if (Object.keys(errors).length > 0) return { errors };
  return { lead: { nombre, telefono, cp, tipo, formulario }, errors };
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const formatPhone = (t: string) => t.replace(/^(\d{3})(\d{2})(\d{2})(\d{2})$/, '$1 $2 $3 $4');

export function leadEmail(lead: Lead) {
  const tipo = tiposReforma[lead.tipo];
  const telefono = formatPhone(lead.telefono);
  const fecha = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid', dateStyle: 'full', timeStyle: 'short' });
  const rows: [string, string][] = [
    ['Nombre', lead.nombre],
    ['Teléfono', telefono],
    ['Código postal', lead.cp],
    ['Tipo de reforma', tipo],
    ['Origen', formularios[lead.formulario]],
    ['Recibida', fecha],
  ];

  const subject = `Nueva solicitud de presupuesto: ${tipo} · ${lead.nombre} (${lead.cp})`;

  const text = [
    'Nueva solicitud de presupuesto desde la web',
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    `Llamar: tel:+34${lead.telefono}`,
    `WhatsApp: https://wa.me/34${lead.telefono}`,
  ].join('\n');

  const html = `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1b1c1a">
  <div style="background:#9a4023;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0">
    <p style="margin:0;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.85">Reformas en Madrid</p>
    <h1 style="margin:4px 0 0;font-size:20px">Nueva solicitud de presupuesto</h1>
  </div>
  <div style="background:#fbf9f6;padding:24px;border:1px solid #e4dfd7;border-top:0;border-radius:0 0 12px 12px">
    <table style="width:100%;border-collapse:collapse;font-size:15px">
      ${rows
        .map(
          ([k, v]) => `<tr>
        <td style="padding:8px 0;color:#56423d;width:40%;border-bottom:1px solid #e4dfd7">${k}</td>
        <td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #e4dfd7">${escapeHtml(v)}</td>
      </tr>`,
        )
        .join('')}
    </table>
    <p style="margin:24px 0 0">
      <a href="tel:+34${lead.telefono}" style="display:inline-block;background:#9a4023;color:#fff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold;margin-right:8px">Llamar a ${escapeHtml(telefono)}</a>
      <a href="https://wa.me/34${lead.telefono}" style="display:inline-block;background:#25d366;color:#fff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold">WhatsApp</a>
    </p>
  </div>
</div>`;

  return { subject, text, html };
}
