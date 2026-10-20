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
  googleMapsHref: 'https://www.google.com/maps?cid=8512497178558288891&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF',
  reviewsCount: 34,
  rating: '4,9',
  guaranteeYears: 3,
  budgetHours: 24,
};

// Datos del titular para las páginas legales.
export const legal = {
  razonSocial: 'Reformas en Madrid',
  cif: 'Pendiente de asignación fiscal definitiva',
  domicilio: site.address,
  registro: 'Empresa de reformas local en la Comunidad de Madrid',
  email: site.email,
  updated: '19 de octubre de 2026',
};

export const nav = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Precios', href: '/precios' },
  { label: 'Opiniones', href: '/opiniones' },
  { label: 'Contacto', href: '/contacto' },
];

// Configuración de analítica y publicidad (Google Ads, GA4, Google Tag Manager).
// Al vender la web al negocio, simplemente deben añadir sus identificadores aquí.
// El sistema de cookies activará automáticamente la medición según el consentimiento del usuario (Google Consent Mode v2).
export const analytics = {
  googleAdsId: '', // Ej: 'AW-123456789'
  ga4Id: '',       // Ej: 'G-XXXXXXXXXX'
  gtmId: '',       // Ej: 'GTM-XXXXXXX'
};

