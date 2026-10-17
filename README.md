# Reformas en Madrid

Web de Reformas en Madrid, hecha con [Astro](https://astro.build) y Tailwind CSS v4 y publicada en Vercel.

## Desarrollo

Requiere Node.js 22.22 o superior.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # compila para producción
```

## Variables de entorno

Copia `.env.example` como `.env` en local, o configúralas en Vercel (Settings → Environment Variables):

| Variable | Descripción |
| --- | --- |
| `RESEND_API_KEY` | API key de [Resend](https://resend.com) para enviar las solicitudes de presupuesto |
| `LEAD_TO_EMAIL` | Correo que recibe las solicitudes (por defecto `info@reformasenmadrid.biz`) |
| `LEAD_FROM_EMAIL` | Remitente; requiere el dominio verificado en Resend |

Sin `RESEND_API_KEY`, en desarrollo las solicitudes se muestran en la consola y en producción el formulario devuelve un error.

## Estructura

- `src/data/`: contenido editable (datos de contacto y legales, servicios, proyectos, opiniones, equipo, FAQ)
- `src/content/blog/`: artículos del blog en Markdown
- `src/components/sections/`: secciones de las páginas
- `src/pages/`: rutas de la web; `src/pages/api/presupuesto.ts` es el endpoint de los formularios
- `src/styles/global.css`: tokens del sistema de diseño
- `design/`: diseño original de referencia
