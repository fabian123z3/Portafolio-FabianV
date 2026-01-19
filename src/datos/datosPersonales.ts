import type { DatosPersonales, Habilidad, Proyecto, Experiencia } from '../tipos';

export const datosPersonales: DatosPersonales = {
  nombre: 'Fabian Alexis Villablanca Vega',
  titulo: 'Desarrollador Full Stack',
  subtitulo: 'Transformo ideas en soluciones digitales que funcionan',
  descripcion: 'Desarrollador con pasion por crear cosas que realmente sirvan. Me gusta el codigo limpio y los proyectos desafiantes.',
  contacto: {
    email: 'fabianvillablanca97@gmail.com',
    ubicacion: 'Chile',
    github: 'https://github.com/fabian123z3',
    linkedin: 'https://www.linkedin.com/in/fabian-villablanca-29717b38a/',
    tiktok: 'https://www.tiktok.com/@soluciones.informaticasf',
  },
};

export const habilidades: Habilidad[] = [
  { nombre: 'React', nivel: 90, categoria: 'frontend' },
  { nombre: 'TypeScript', nivel: 85, categoria: 'frontend' },
  { nombre: 'Tailwind CSS', nivel: 90, categoria: 'frontend' },
  { nombre: 'Node.js', nivel: 80, categoria: 'backend' },
  { nombre: 'Python', nivel: 75, categoria: 'backend' },
  { nombre: 'Git', nivel: 85, categoria: 'herramientas' },
];

export const proyectos: Proyecto[] = [
  {
    id: 'rh360',
    titulo: 'RH360 - Sistema RRHH con IA',
    descripcion: 'Desarrolle una plataforma completa de recursos humanos integrando reconocimiento facial para control de asistencia. Construi un microservicio con FastAPI y Milvus para procesar embeddings faciales en tiempo real, una app movil con React Native para que los trabajadores marquen desde terreno, y un panel web en React con TanStack Query. Todo cumpliendo normativa legal chilena.',
    tecnologias: ['React', 'React Native', 'Django', 'FastAPI', 'Milvus', 'PyTorch', 'OpenCV', 'PostgreSQL', 'Docker', 'TanStack'],
    icono: 'https://cdn-icons-png.flaticon.com/512/4727/4727424.png',
    demoUrl: 'https://zenitx.com/rh360/',
    destacado: true,
  },
  {
    id: 'carnicero-app',
    titulo: 'Carnicero de Bolsillo',
    descripcion: 'Cree esta app pensando en los carniceros que necesitan calcular cortes y margenes rapidamente. La desarrolle con React Native y ya esta publicada en Play Store. Permite gestionar inventario, calcular precios por kilo y llevar el control del negocio.',
    tecnologias: ['React Native', 'Expo', 'TypeScript', 'NativeWind'],
    icono: 'https://cdn-icons-png.flaticon.com/512/3143/3143643.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.carnicerodebolsillo.app&hl=es_CL',
    destacado: true,
  },
  {
    id: 'fuerza-total',
    titulo: 'Fuerza Total',
    descripcion: 'Construi esta app de fitness porque me apasiona el entrenamiento. Permite crear rutinas personalizadas, hacer seguimiento del progreso con graficos y gestionar planes nutricionales. La desarrolle con React Native y Expo.',
    tecnologias: ['React Native', 'Expo', 'Node.js', 'Express'],
    icono: 'https://cdn-icons-png.flaticon.com/512/2964/2964514.png',
    destacado: true,
  },
  {
    id: 'auto-seguro',
    titulo: 'Auto Seguro',
    descripcion: 'Desarrolle esta plataforma web para cotizar y contratar seguros de auto. Integre un comparador de precios entre distintas aseguradoras y un flujo de contratacion online completo.',
    tecnologias: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    icono: 'https://cdn-icons-png.flaticon.com/512/741/741407.png',
    destacado: true,
  },
  {
    id: 'gestor-ventas',
    titulo: 'Gestor Ventas App',
    descripcion: 'Cree esta app para negocios que necesitan controlar sus ventas desde el celular. Incluye escaner de codigos de barra, control de inventario en tiempo real y reportes diarios automaticos.',
    tecnologias: ['React Native', 'Expo', 'SQLite'],
    icono: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
    destacado: true,
  },
  {
    id: 'venta-consolas',
    titulo: 'Venta Consolas',
    descripcion: 'Desarrolle este e-commerce especializado en consolas y videojuegos. Tiene carrito de compras, catalogo con filtros avanzados, sistema de busqueda y pasarela de pagos integrada.',
    tecnologias: ['React', 'Vite', 'CSS Modules'],
    icono: 'https://cdn-icons-png.flaticon.com/512/686/686589.png',
    destacado: true,
  },
];

export const experiencias: Experiencia[] = [
  {
    id: '1',
    cargo: 'Desarrollador Full Stack',
    empresa: 'Zenitx Soluciones Informaticas',
    fechaInicio: '2023',
    fechaFin: 'Presente',
    actual: true,
    descripcion: 'Liderazgo tecnico en proyectos web y moviles. Desarrollo de solucones a medida para clientes de diversos rubros.',
  },
  {
    id: '2',
    cargo: 'Desarrollador Freelance',
    empresa: 'Independiente',
    fechaInicio: '2021',
    fechaFin: '2023',
    actual: false,
    descripcion: 'Desarrollo de sitios web y aplicaciones para pequeñas y medianas empresas. Gestion directa con clientes.',
  },
];
