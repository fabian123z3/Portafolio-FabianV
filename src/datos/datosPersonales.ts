import type { DatosPersonales, Proyecto, Habilidad, Experiencia } from '../tipos';

export const datosPersonales: DatosPersonales = {
  nombre: 'Fabian Alexis Villablanca Vega',
  titulo: 'Desarrollador Full Stack',
  subtitulo: 'Programando Experiencias',
  descripcion: 'Desarrollador apasionado por crear soluciones tecnologicas innovadoras. Me especializo en el desarrollo de aplicaciones web modernas, combinando un diseno atractivo con una arquitectura solida y escalable.',
  contacto: {
    email: 'fabianvillablanca97@gmail.com',
    ubicacion: 'Chile',
    linkedin: 'https://www.linkedin.com/in/fabian-villablanca-29717b38a/',
    github: 'https://github.com/fabian123z3',
    tiktok: 'https://www.tiktok.com/@soluciones.informaticasf',
  },
};

export const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: 'Sistema de Gestion RH360',
    descripcion: 'Plataforma integral para la gestion de recursos humanos con control de asistencia, turnos y reportes automatizados.',
    tecnologias: ['React', 'TypeScript', 'Django', 'PostgreSQL'],
    destacado: true,
  },
  {
    id: 2,
    titulo: 'E-Commerce Premium',
    descripcion: 'Tienda online con carrito de compras, pasarela de pagos y panel de administracion completo.',
    tecnologias: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    destacado: true,
  },
  {
    id: 3,
    titulo: 'App Fitness Tracker',
    descripcion: 'Aplicacion movil para seguimiento de entrenamientos, nutricion y progreso fisico.',
    tecnologias: ['React Native', 'Expo', 'Firebase'],
    destacado: true,
  },
  {
    id: 4,
    titulo: 'Dashboard Analytics',
    descripcion: 'Panel de control interactivo con visualizacion de datos en tiempo real y reportes personalizados.',
    tecnologias: ['Vue.js', 'D3.js', 'FastAPI', 'Redis'],
    destacado: false,
  },
];

export const habilidades: Habilidad[] = [
  { nombre: 'React', nivel: 95, categoria: 'frontend' },
  { nombre: 'TypeScript', nivel: 90, categoria: 'frontend' },
  { nombre: 'Next.js', nivel: 85, categoria: 'frontend' },
  { nombre: 'Tailwind CSS', nivel: 90, categoria: 'frontend' },
  { nombre: 'Vue.js', nivel: 75, categoria: 'frontend' },
  { nombre: 'Node.js', nivel: 85, categoria: 'backend' },
  { nombre: 'Python', nivel: 90, categoria: 'backend' },
  { nombre: 'Django', nivel: 85, categoria: 'backend' },
  { nombre: 'PostgreSQL', nivel: 80, categoria: 'backend' },
  { nombre: 'MongoDB', nivel: 75, categoria: 'backend' },
  { nombre: 'Git', nivel: 90, categoria: 'herramientas' },
  { nombre: 'Docker', nivel: 75, categoria: 'herramientas' },
  { nombre: 'AWS', nivel: 70, categoria: 'herramientas' },
  { nombre: 'Figma', nivel: 80, categoria: 'herramientas' },
];

export const experiencias: Experiencia[] = [
  {
    id: 1,
    empresa: 'Tech Solutions',
    cargo: 'Desarrollador Full Stack Senior',
    fechaInicio: '2023',
    descripcion: 'Liderazgo tecnico en proyectos de desarrollo web, implementacion de arquitecturas escalables y mentoring a desarrolladores junior.',
    actual: true,
  },
  {
    id: 2,
    empresa: 'Digital Agency',
    cargo: 'Desarrollador Frontend',
    fechaInicio: '2021',
    fechaFin: '2023',
    descripcion: 'Desarrollo de interfaces de usuario modernas y responsivas, optimizacion de rendimiento y mejora de experiencia de usuario.',
  },
  {
    id: 3,
    empresa: 'Startup Innovation',
    cargo: 'Desarrollador Junior',
    fechaInicio: '2020',
    fechaFin: '2021',
    descripcion: 'Desarrollo de funcionalidades para aplicaciones web, mantenimiento de codigo y colaboracion en equipo agil.',
  },
];
