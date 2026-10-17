export interface Service {
  slug: string;
  title: string;
  image: string;
  alt: string;
  badge: string;
  badgeClass: string;
  text: string;
  price: string;
  note: string;
  duration: string;
  intro: string;
  includes: string[];
}

export const services: Service[] = [
  {
    slug: 'reforma-integral',
    title: 'Reforma integral',
    image: '/images/servicio-integral.jpg',
    alt: 'Salón amplio con cocina americana integrada y suelo de roble claro en un piso reformado de Madrid',
    badge: 'Más solicitada',
    badgeClass: 'bg-primary text-on-primary',
    text: 'Tu piso como nuevo: renovación total de fontanería, electricidad bajo normativa, suelos, alisado de paredes, baños y cocina completos.',
    price: 'Desde 39.900€',
    note: '(piso 60 m²)',
    duration: '8 a 10 semanas (vivienda de 75–85 m²)',
    intro:
      'Renovamos tu vivienda de arriba abajo con un único interlocutor, precio cerrado y fecha de entrega por contrato. Nos ocupamos del proyecto, las licencias, la obra y la limpieza final para que recibas las llaves de un piso listo para vivir.',
    includes: [
      'Derribo y desescombro ecológico homologado',
      'Nueva instalación eléctrica bajo reglamento REBT con cuadro general',
      'Fontanería y saneamiento completo con multicapa',
      'Alicatados y suelos porcelánicos o laminados AC5',
      'Reforma íntegra de baños y cocina con mobiliario',
      'Puertas de paso lacadas y ventanas climalit o Kömmerling',
      'Alisado de paredes y pintura plástica lavable',
      'Gestión de licencias con el Ayuntamiento de Madrid',
      'Render 3D gratuito antes de empezar',
      'Limpieza de obra exhaustiva y entrega llave en mano',
    ],
  },
  {
    slug: 'reforma-bano',
    title: 'Reforma de baño',
    image: '/images/servicio-bano.jpg',
    alt: 'Baño reformado con porcelánico beige de gran formato, ducha de obra con mampara y mueble de roble suspendido',
    badge: 'Ejecución en 7 días',
    badgeClass: 'bg-secondary text-on-secondary',
    text: 'Cambio de bañera por plato de resina antideslizante, alicatado porcelánico de gran formato, fontanería multicapa, sanitarios suspendidos y grifería empotrada.',
    price: 'Desde 4.900€',
    note: '(baño estándar)',
    duration: '7 días laborables',
    intro:
      'Transformamos tu baño en una semana con materiales de primeras marcas y un equipo propio de albañiles y fontaneros. Precio cerrado, sin sorpresas y con 3 años de garantía por escrito.',
    includes: [
      'Retirada de bañera, sanitarios y alicatado antiguo',
      'Plato de ducha de resina antideslizante a ras de suelo',
      'Alicatado porcelánico de gran formato',
      'Nueva fontanería multicapa y desagües',
      'Sanitarios suspendidos y grifería empotrada',
      'Mueble de lavabo, espejo e iluminación',
      'Mampara de vidrio templado',
      'Limpieza final y retirada de escombros',
    ],
  },
  {
    slug: 'reforma-cocina',
    title: 'Reforma de cocina',
    image: '/images/servicio-cocina.jpg',
    alt: 'Cocina de diseño con muebles grafito mate, isla con encimera de cuarzo y electrodomésticos integrados',
    badge: 'Mobiliario a medida',
    badgeClass: 'bg-surface-container-highest text-on-surface',
    text: 'Muebles de alta gama con frenos de absorción, encimeras porcelánicas o de cuarzo Silestone/Dekton, nueva distribución eléctrica y extracción de humos eficiente.',
    price: 'Desde 6.900€',
    note: '(cocina completa)',
    duration: '2 a 3 semanas',
    intro:
      'Diseñamos y montamos tu cocina a medida: distribución, mobiliario, encimera e instalaciones. Te enseñamos el resultado en 3D antes de empezar y lo dejamos todo funcionando.',
    includes: [
      'Diseño a medida y render 3D',
      'Muebles de alta gama con frenos de absorción',
      'Encimera porcelánica o de cuarzo Silestone / Dekton',
      'Nueva distribución eléctrica y de enchufes',
      'Fontanería y tomas para electrodomésticos',
      'Extracción de humos eficiente',
      'Alicatado o revestimiento de frentes',
      'Montaje e instalación de electrodomésticos',
    ],
  },
];
