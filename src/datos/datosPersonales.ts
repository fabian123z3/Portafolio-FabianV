import type { DatosPersonales, Habilidad, Proyecto, Experiencia } from '../tipos';
import logoRH360 from '../assets/logoapk.png';
import logoCarnicero from '../assets/icononuevo.png';
import resena1 from '../assets/reseña1.png';
import resena2 from '../assets/reseña2.png';
import resena3 from '../assets/reseña3.png';
import serca1 from '../assets/Serca/1.png';
import serca2 from '../assets/Serca/2.png';
import serca3 from '../assets/Serca/3.png';
import serca4 from '../assets/Serca/4.png';

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
    titulo: 'RH360 - Control de Asistencia',
    descripcion: 'Sistema integral de RRHH con reconocimiento facial y anti-spoofing. Cumple con normativa chilena DT.',
    desafio: 'Crear un sistema de asistencia infalible que cumpliera las leyes laborales chilenas, evitando fraudes como suplantación con fotos.',
    solucion: 'Arquitectura de microservicios: Django para lógica legal + FastAPI para IA. Implementé detección de vida (Anti-Spoofing) con YOLO v8 y búsquedas faciales con Milvus.',
    impacto: 'Sistema 100% compliant con Dirección del Trabajo. Fraude reducido a cero, tiempos de marcaje < 1 segundo.',
    tecnologias: ['React', 'React Native', 'Django', 'FastAPI', 'MySQL', 'TanStack', 'Docker'],
    libreriasML: ['PyTorch', 'OpenCV', 'Milvus', 'YOLO v8', 'face-recognition', 'dlib'],
    icono: logoRH360,
    imagenes: [serca1, serca2, serca3, serca4],
    demoUrl: 'https://zenitx.com/rh360/',
    tipo: 'fullstack',
    stats: { usuarios: '500+', rating: '4.8' },
    destacado: true,
  },
  {
    id: 'carnicero-app',
    titulo: 'Carnicero de Bolsillo',
    descripcion: 'Asistente culinario inteligente con IA y funciones manos libres para Cooking.',
    desafio: 'Usuarios no podían seguir recetas con manos ocupadas o sucias. Necesitaban respuestas inmediatas y personalizadas.',
    solucion: 'Integré DeepSeek API para asistente gastronómico contextual en tiempo real. Desarrollé función "Manos Libres" con Expo Speech que narra recetas paso a paso.',
    impacto: 'La retención de usuarios aumentó significativamente. Reseñas destacan la utilidad del asistente IA para dudas sobre cortes de carne.',
    testimonios: [resena1, resena2, resena3],
    tecnologias: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Expo Router'],
    libreriasML: ['DeepSeek API', 'Expo Speech', 'AsyncStorage', 'YouTube Iframe', 'Reanimated'],
    icono: logoCarnicero,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.carnicerodebolsillo.app&hl=es_CL',
    tipo: 'mobile',
    stats: { descargas: '10K+', rating: '4.6' },
    destacado: true,
  },
  {
    id: 'fuerza-total',
    titulo: 'Fuerza Total',
    descripcion: 'App de fitness para crear rutinas personalizadas, seguimiento de progreso con gráficos y gestión de planes nutricionales.',
    tecnologias: ['React Native', 'Expo', 'Node.js', 'Express'],
    icono: 'https://cdn-icons-png.flaticon.com/512/2964/2964514.png',
    tipo: 'mobile',
    destacado: true,
  },
  {
    id: 'auto-seguro',
    titulo: 'Auto Seguro',
    descripcion: 'Plataforma web para cotizar y contratar seguros de auto con comparador de precios entre aseguradoras.',
    tecnologias: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    icono: 'https://cdn-icons-png.flaticon.com/512/741/741407.png',
    tipo: 'web',
    stats: { usuarios: '200+' },
    destacado: true,
  },
  {
    id: 'gestor-ventas',
    titulo: 'Gestor Ventas App',
    descripcion: 'App para controlar ventas desde celular. Incluye escáner de códigos, inventario en tiempo real y reportes automáticos.',
    tecnologias: ['React Native', 'Expo', 'SQLite'],
    icono: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
    tipo: 'mobile',
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
    cargo: 'Supervisor de Practicantes',
    empresa: 'Zenitx Soluciones Informaticas',
    fechaInicio: '13 de agosto de 2025',
    fechaFin: '11 de marzo de 2026',
    actual: false,
    descripcion: 'Supervisión y mentoría de estudiantes en práctica. Guía en proyectos reales, revisión de código y apoyo en su desarrollo profesional.',
  },
  {
    id: '2',
    cargo: 'Desarrollador Full Stack',
    empresa: 'Zenitx Soluciones Informaticas',
    fechaInicio: '13 de agosto de 2025',
    fechaFin: '11 de marzo de 2026',
    actual: false,
    descripcion: 'Liderazgo técnico en proyectos web y móviles. Desarrollo de soluciones a medida para clientes de diversos rubros.',
  },
  {
    id: '3',
    cargo: 'Practicante',
    empresa: 'Zenitx Soluciones Informaticas',
    fechaInicio: '13 de agosto de 2025',
    fechaFin: '11 de marzo de 2026',
    actual: false,
    descripcion: 'Práctica profesional desarrollando módulos web y aprendiendo buenas prácticas de desarrollo.',
  },
];

// Carta de respaldo Zenitx
export const cartasRespaldo = [
  {
    empresa: 'Zenitx Soluciones Informaticas',
    nombre: 'Carta de respaldo',
    contenido: 'Zenitx respalda la experiencia y desempeño de Fabián Villablanca durante su periodo en la empresa, destacando su profesionalismo, capacidad técnica y compromiso en proyectos clave.',
  },
];
