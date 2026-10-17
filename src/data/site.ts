// Datos de contacto y navegación compartidos por toda la web
export const site = {
  name: 'Reformas en Madrid',
  phone: '644 73 40 50',
  phoneHref: 'tel:644734050',
  whatsappHref: 'https://wa.me/34644734050',
  email: 'info@reformasenmadrid.biz',
  address: 'P.º del Comandante Fortea, 4, 28008 Madrid',
  hours: 'Lunes a Viernes: 8:00 - 19:30',
  logo: '/images/logo.png',
};

// Datos del titular para las páginas legales. COMPLETAR antes de publicar la web.
export const legal = {
  razonSocial: '[Reformas en Madrid]',
  cif: '[CIF/NIF]',
  domicilio: site.address,
  registro: 'No aplicable (profesional autónomo)',
  email: site.email,
  updated: '17 de octubre de 2026',
};

export const nav = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Precios', href: '/precios' },
  { label: 'Opiniones', href: '/opiniones' },
  { label: 'Contacto', href: '/contacto' },
];
