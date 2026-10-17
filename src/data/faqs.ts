// Las respuestas admiten HTML sencillo (<strong>)
export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: '¿Cuánto cuesta reformar un piso en Madrid?',
    a: 'En la Comunidad de Madrid, el coste medio de una reforma integral de calidad media-alta oscila habitualmente entre los <strong>650€ y 900€ por metro cuadrado</strong> (incluyendo renovación completa de instalaciones de agua, electricidad, alicatados porcelánicos, cocina, baños y carpinterías). Para un piso de 70 m², el rango de inversión parte de aproximadamente 39.900€ con calidades óptimas y garantía completa.',
  },
  {
    q: '¿Cuánto tarda una reforma integral?',
    a: 'Para una vivienda estándar de 75 a 85 m², el plazo habitual de ejecución se sitúa entre <strong>8 y 10 semanas</strong> de trabajo efectivo. Antes de comenzar fijamos este plazo en el contrato con una fecha límite de entrega de llaves y cláusulas de penalización económica por cada día de retraso.',
  },
  {
    q: '¿Qué incluye una reforma integral?',
    a: 'Incluye el derribo y desescombro ecológico homologado, nueva instalación eléctrica bajo reglamento REBT con cuadro general, fontanería y saneamiento completo con multicapa, alicatados y suelos porcelánicos o laminados AC5, reforma íntegra de baños y cocina con mobiliario, puertas de paso lacadas, ventanas climalit o Kömmerling, alisado y pintura plástica lavable, más limpieza de obra exhaustiva.',
  },
  {
    q: '¿Qué garantía tienen los trabajos?',
    a: 'Ofrecemos <strong>3 años de garantía oficial por escrito</strong> para todas nuestras instalaciones y ejecuciones de albañilería, superando el año mínimo legal exigido por la LOE. Además, todas las obras están amparadas por nuestro seguro de responsabilidad civil con cobertura directa de hasta 600.000€.',
  },
  {
    q: '¿Os encargáis de las licencias con el Ayuntamiento?',
    a: 'Sí. Nuestro equipo técnico redacta y presenta toda la documentación: desde Actuaciones Comunicadas hasta Licencias de Obra Menor o Mayor con el Ayuntamiento de Madrid, solicitud de ocupación de contenedores y notificación oficial a la presidencia y administradores de tu comunidad.',
  },
];

export const pricingFaqs: FaqItem[] = [
  faqs[0],
  {
    q: '¿El presupuesto puede cambiar durante la obra?',
    a: 'No. Trabajamos con <strong>precio cerrado por contrato</strong>: el presupuesto se detalla partida por partida y lo que firmas es exactamente lo que pagas. Solo varía si tú decides añadir o cambiar trabajos, y siempre con tu aprobación previa por escrito.',
  },
  {
    q: '¿Cuánto cuesta la visita técnica y el presupuesto?',
    a: 'Nada. La visita de nuestro arquitecto técnico, la toma de medidas, el presupuesto detallado y el <strong>render 3D</strong> son gratuitos y sin compromiso.',
  },
  faqs[2],
];
