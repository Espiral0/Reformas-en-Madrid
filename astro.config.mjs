// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Las páginas siguen siendo estáticas; solo /api/* se ejecuta como función de Vercel
  adapter: vercel(),
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      LEAD_TO_EMAIL: envField.string({ context: 'server', access: 'secret', default: 'info@reformasenmadrid.biz' }),
      LEAD_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', default: 'Reformas en Madrid <onboarding@resend.dev>' }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
