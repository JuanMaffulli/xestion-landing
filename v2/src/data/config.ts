/* ============================================
   DATOS DE CONFIGURACIÓN - XESTION
   Todos los textos, precios y datos editables
   ============================================ */

export const CONTACTO = {
  whatsapp: '5491128839719',
  whatsappUrl: 'https://wa.me/5491128839719',
  calendly: 'https://calendly.com/xestion/consulta-general',
  email: 'contacto@xestion.com',
} as const;

// ---------- Testimonios ----------
export interface Testimonio {
  empresa: string;
  subtitulo: string;
  imagen: string;
  texto: string;
}

export const TESTIMONIOS: Testimonio[] = [
  {
    empresa: 'Bronx Concept',
    subtitulo: '@bronx.concept',
    imagen: '/img/testimonios/empresa1.jpg',
    texto: 'Servicio super personalizado. Nos acompañaron todo el proceso siempre atentos a crear un programa a nuestra medida.',
  },
  {
    empresa: 'Upparnyn',
    subtitulo: 'Sindicato de Panaderías RN/NQN',
    imagen: '/img/testimonios/empresa2.png',
    texto: 'Hacen el sistema a medida y la relación costo-beneficio es óptima. Son profesionales en Excel.',
  },
  {
    empresa: 'PerfuCasa',
    subtitulo: '@perfucasa',
    imagen: '/img/testimonios/empresa3.jpg',
    texto: 'Excelente calidad de servicio, siempre atentos y dispuestos a ayudar para lograr el mejor resultado.',
  },
  {
    empresa: 'DISTRILU',
    subtitulo: 'Distribuidora',
    imagen: '/img/testimonios/empresa4.jpg',
    texto: 'Excelente servicio, buscan siempre la necesidad del cliente, minimizando costos y siempre dispuestos a mejorar.',
  },
  {
    empresa: 'RC Distribuidora',
    subtitulo: 'La Plata',
    imagen: '/img/testimonios/empresa5.png',
    texto: 'Sistema adaptado a mi necesidad, fácil de usar sin conocimientos de Excel. Ideal para emprendedores.',
  },
  {
    empresa: 'Bahía Punta Chica',
    subtitulo: '@bahiapuntachica',
    imagen: '/img/testimonios/empresa6.jpg',
    texto: 'Me ayudaron a armar un sistema a medida. Interpretaron lo que necesitábamos y nos acercaron propuestas para mejorarlo.',
  },
  {
    empresa: 'Gráfica ACCIN',
    subtitulo: '@acciones.integrales',
    imagen: '/img/testimonios/empresa7.jpg',
    texto: 'Excelente predisposición para armar un producto realmente a medida según las necesidades del cliente.',
  },
  {
    empresa: 'Bolsas Ecológicas',
    subtitulo: '@bolsasecologicas.ok',
    imagen: '/img/testimonios/empresa8.jpeg',
    texto: 'Servicio 100% personalizado a medida de nuestro negocio. Excelente.',
  },
  {
    empresa: 'Inmentex',
    subtitulo: 'Indumentaria',
    imagen: '/img/testimonios/empresa9.jpeg',
    texto: 'Es adaptable al emprendedor. Nos ayuda en la gestión del comercio. El servicio funciona perfecto.',
  },
  {
    empresa: 'OchoSeis',
    subtitulo: '@ochoseis.central',
    imagen: '/img/testimonios/empresa10.jpg',
    texto: 'Excelente todo. Lograron llevar a cabo ideas y hacer eficaces procesos que antes eran lentos.',
  },
];

// ---------- Problemas ----------
export const PROBLEMAS = [
  'Tenés información en <strong>20 archivos diferentes</strong> y nunca encontrás lo que buscás.',
  'Cada vez que necesitás un dato, <strong>perdés media hora</strong> buscando entre planillas.',
  'Los errores en las planillas <strong>te cuestan plata</strong> y dolores de cabeza.',
  'Probaste sistemas de gestión pero <strong>nadie los usa</strong> porque son muy complicados.',
  'Tu equipo siempre <strong>vuelve a Excel</strong> porque es lo que conocen.',
  'No tenés <strong>reportes claros ni gráficos</strong> para entender cómo va tu negocio de un vistazo.',
];

// ---------- Proceso ----------
export const PASOS_PROCESO = [
  {
    titulo: 'Nos contás tu situación',
    descripcion: 'Te escuchamos y entendemos cómo trabaja tu negocio y qué necesitás resolver urgente.',
  },
  {
    titulo: 'Te proponemos una solución',
    descripcion: 'Diseñamos el sistema que necesitás, explicado en palabras simples. Sin tecnicismos ni palabras raras.',
  },
  {
    titulo: 'Construimos tu sistema',
    descripcion: 'Desarrollamos la solución mientras te mantenemos al tanto del avance. Sin sorpresas.',
  },
  {
    titulo: 'Te lo entregamos funcionando',
    descripcion: 'Instalamos, capacitamos a tu equipo y nos aseguramos de que todo ande perfecto.',
  },
  {
    titulo: 'Te acompañamos',
    descripcion: 'Seguimos a tu lado para soporte, mejoras y lo que necesites. No te dejamos solo nunca.',
  },
];

// ---------- Por qué Excel ----------
export const RAZONES_EXCEL = [
  { titulo: 'Tu equipo ya lo conoce', descripcion: 'No hay curva de aprendizaje. Todos saben usar Excel desde el día uno.' },
  { titulo: 'Tus datos, en tu computadora', descripcion: 'Sin depender de internet ni de servidores de terceros. Vos controlás tu información.' },
  { titulo: 'Flexible y adaptable', descripcion: 'Se ajusta a tu forma de trabajar, no al revés. Nada de "así funciona el sistema".' },
  { titulo: 'Funciona sin internet', descripcion: 'Trabajá donde quieras, cuando quieras. Sin depender de la conexión.' },
  { titulo: 'Herramienta probada', descripcion: 'Excel existe hace 40 años. No va a desaparecer mañana.' },
  { titulo: 'Especialistas, no generalistas', descripcion: 'No hacemos de todo. Hacemos Excel profesional, y lo hacemos muy bien.' },
];

// ---------- Sistemas del catálogo ----------
export interface SistemaCatalogo {
  slug: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  tags: string[];
  modulos: string[];
  precio: string;
  moneda: string;
  youtubeUrl?: string;
}

export const SISTEMAS: SistemaCatalogo[] = [
  {
    slug: 'sistema-grafica',
    nombre: 'Sistema para Gráfica',
    descripcion: 'Gestión completa de pedidos, costos y entregas en un solo archivo.',
    imagen: '/img/sistemas/grafica/presentacion.png',
    tags: ['Producción', 'Pedidos'],
    modulos: [
      'Ventas, pedidos y cotizaciones',
      'Control de producción y tareas',
      'Clientes y proveedores con CC',
      'Caja, compras y gastos',
      'Productos e insumos',
      'Personal y reportes',
    ],
    precio: '150.000',
    moneda: 'ARS',
    youtubeUrl: 'https://youtube.com',
  },
  {
    slug: 'sistema-pasteleria',
    nombre: 'Sistema para Pastelería',
    descripcion: 'Con recetas, costos automáticos y control completo de producción.',
    imagen: '/img/sistemas/pasteleria/presentacion.png',
    tags: ['Recetas', 'Costos'],
    modulos: [
      'Recetas con cálculo de costos ⭐',
      'Ventas, pedidos y cotizaciones',
      'Insumos con stock y compras',
      'Clientes y proveedores con CC',
      'Caja, gastos y producción',
      'Personal y reportes',
    ],
    precio: '150.000',
    moneda: 'ARS',
    youtubeUrl: 'https://www.youtube.com/watch?v=VX9iUlqd-4I&t=277s',
  },
];

// ---------- Capturas por sistema ----------
export interface Captura {
  imagen: string;
  alt: string;
  titulo: string;
  descripcion: string;
}

export const CAPTURAS_GRAFICA: Captura[] = [
  { imagen: '/img/sistemas/grafica/venta-nueva.png', alt: 'Nueva Venta', titulo: 'Nueva Venta', descripcion: 'Cargá ventas con todos los datos del cliente, productos y forma de pago.' },
  { imagen: '/img/sistemas/grafica/venta-historial.png', alt: 'Historial de Ventas', titulo: 'Historial de Ventas', descripcion: 'Visualizá todas las operaciones con filtros por fecha, cliente y estado.' },
  { imagen: '/img/sistemas/grafica/caja-movimientos.png', alt: 'Caja', titulo: 'Control de Caja', descripcion: 'Movimientos de ingresos y egresos con saldos automáticos.' },
  { imagen: '/img/sistemas/grafica/cliente-lista.png', alt: 'Clientes', titulo: 'Gestión de Clientes', descripcion: 'Base de clientes con cuenta corriente y estado de deuda.' },
  { imagen: '/img/sistemas/grafica/cotizacion-historial.png', alt: 'Cotizaciones', titulo: 'Cotizaciones', descripcion: 'Historial de cotizaciones con detalle de productos y montos.' },
  { imagen: '/img/sistemas/grafica/producto-lista.png', alt: 'Productos', titulo: 'Listado de Productos', descripcion: 'Catálogo de productos con precios y categorías.' },
  { imagen: '/img/sistemas/grafica/tarea-lista.png', alt: 'Tareas', titulo: 'Control de Tareas', descripcion: 'Seguimiento de tareas de producción y entregas.' },
  { imagen: '/img/sistemas/grafica/reporte.png', alt: 'Reportes', titulo: 'Reportes', descripcion: 'Paneles con indicadores clave del negocio.' },
];

export const CAPTURAS_PASTELERIA: Captura[] = [
  { imagen: '/img/sistemas/pasteleria/venta-nueva.png', alt: 'Nueva Venta', titulo: 'Nueva Venta', descripcion: 'Vendé con productos y cantidades, forma de pago y datos del cliente.' },
  { imagen: '/img/sistemas/pasteleria/producto-receta.png', alt: 'Recetas', titulo: 'Recetas con Costos', descripcion: 'Cada producto con su receta detallada y cálculo de costo automático.' },
  { imagen: '/img/sistemas/pasteleria/insumo-lista.png', alt: 'Insumos', titulo: 'Control de Insumos', descripcion: 'Stock de materias primas con movimientos de compra y consumo.' },
  { imagen: '/img/sistemas/pasteleria/caja-movimientos.png', alt: 'Caja', titulo: 'Control de Caja', descripcion: 'Ingresos y egresos con saldo actualizado en tiempo real.' },
  { imagen: '/img/sistemas/pasteleria/venta-historial.png', alt: 'Historial de Ventas', titulo: 'Historial de Ventas', descripcion: 'Todas las operaciones registradas con filtros y búsqueda.' },
  { imagen: '/img/sistemas/pasteleria/producto-lista.png', alt: 'Productos', titulo: 'Listado de Productos', descripcion: 'Catálogo de productos con precios y recetas asociadas.' },
  { imagen: '/img/sistemas/pasteleria/cotizacion-historial.png', alt: 'Cotizaciones', titulo: 'Cotizaciones', descripcion: 'Historial de cotizaciones con productos y montos.' },
  { imagen: '/img/sistemas/pasteleria/tarea-lista.png', alt: 'Tareas', titulo: 'Control de Producción', descripcion: 'Seguimiento de tareas y producción diaria.' },
];

// ---------- Galería general (home) ----------
export const GALERIA_SISTEMAS = [
  '/img/sistemas/sistema1.png',
  '/img/sistemas/pasteleria/presentacion.png',
  '/img/sistemas/sistema4.jpg',
  '/img/sistemas/sistema5.png',
  '/img/sistemas/sistema6.png',
  '/img/sistemas/sistema7.jpg',
  '/img/sistemas/sistema8.jpg',
  '/img/sistemas/sistema9.jpg',
  '/img/sistemas/sistema10.jpg',
];

// ---------- Opciones de trabajo ----------
export const OPCIONES_TRABAJO = [
  {
    icono: 'Rocket',
    titulo: 'Excel armado',
    descripcion: 'Ideal para arrancar rápido con un sistema ya probado y listo para usar.',
    features: [
      'Base profesional adaptada a tu rubro',
      'Configuración inicial con tus datos',
      'Capacitación breve para usarlo ya',
    ],
    cta: 'Consultar disponibilidad',
    destacado: false,
  },
  {
    icono: 'Sparkles',
    titulo: 'Excel a medida',
    descripcion: 'Cuando tu negocio necesita algo propio, hecho a tu flujo de trabajo.',
    features: [
      'Desarrollo 100% personalizado',
      'Reportes y controles a medida',
      'Acompañamiento durante el proceso',
    ],
    cta: 'Solicitar asesoramiento',
    destacado: true,
  },
  {
    icono: 'Cloud',
    titulo: 'Excel en nube',
    descripcion: 'Para equipos que trabajan en simultáneo y necesitan acceso remoto seguro.',
    features: [
      'Multiusuario real con permisos',
      'Acceso desde varias PCs',
      'Escalabilidad para crecer',
    ],
    cta: 'Pedir propuesta',
    destacado: false,
  },
];
