import type { DatosPersonales, Habilidad, Proyecto, Experiencia } from '../tipos';
import logoRH360 from '../assets/logoapk.png';
import logoCarnicero from '../assets/icononuevo.png';
import resena1 from '../assets/reseña1.png';
import resena2 from '../assets/reseña2.png';
import resena3 from '../assets/reseña3.png';

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
    titulo: 'RH360 - Modulo Control Electrónico de Asistencia',
    descripcion: 'Plataforma integral de RRHH que cumple con la estricta normativa chilena (Resolución Exenta N°38).',
    desafio: 'El reto principal fue crear un sistema de asistencia infalible que cumpliera con las exigentes leyes laborales chilenas, evitando fraudes comunes como la suplantación de identidad con fotos.',
    solucion: 'Diseñé una arquitectura de microservicios: Django para la lógica legal y de negocio, y FastAPI dedicado a la IA. Implementé detección de "vida" (Anti-Spoofing) con YOLO v8 para rechazar intentos de fraude con fotos, y Milvus para búsquedas faciales instantáneas.',
    impacto: 'Logramos un sistema 100% compliant con la Dirección del Trabajo. El fraude por suplantación se redujo a cero y los tiempos de marcaje son menores a 1 segundo.',
    tecnologias: ['React', 'React Native', 'Django', 'FastAPI', 'MySQL', 'Railway', 'TanStack', 'Docker'],
    libreriasML: ['PyTorch', 'OpenCV', 'Milvus', 'YOLO v8', 'face-recognition', 'dlib', 'Google Colab'],
    icono: logoRH360,
    demoUrl: 'https://zenitx.com/rh360/',
    destacado: true,
  },
  {
    id: 'carnicero-app',
    titulo: 'Carnicero de Bolsillo',
    descripcion: 'Asistente culinario inteligente que transforma la manera de cocinar con IA y funciones manos libres.',
    desafio: 'Los usuarios encontraban difícil seguir recetas en el celular con las manos ocupadas o sucias. Además, necesitaban respuestas inmediatas y personalizadas que un recetario estático no podía dar.',
    solucion: 'Integré la API de DeepSeek para ofrecer un asistente gastronómico contextual en tiempo real. Desarrollé una función "Manos Libres" con Expo Speech que narra las recetas paso a paso, permitiendo cocinar sin tocar la pantalla.',
    impacto: 'La retención de usuarios aumentó significativamente gracias a la función de voz. Las reseñas destacan la utilidad del asistente IA para resolver dudas específicas sobre cortes de carne.',
    testimonios: [resena1, resena2, resena3],
    tecnologias: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Expo Router'],
    libreriasML: ['DeepSeek API', 'Expo Speech', 'AsyncStorage', 'YouTube Iframe', 'Reanimated'],
    icono: logoCarnicero,
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
    cargo: 'Supervisor de Practicantes',
    empresa: 'Zenitx Soluciones Informaticas',
    fechaInicio: '2024',
    fechaFin: 'Presente',
    actual: true,
    descripcion: 'Supervisión y mentoría de estudiantes en práctica. Guía en proyectos reales, revisión de código y apoyo en su desarrollo profesional.',
  },
  {
    id: '2',
    cargo: 'Desarrollador Full Stack',
    empresa: 'Zenitx Soluciones Informaticas',
    fechaInicio: '2023',
    fechaFin: 'Presente',
    actual: true,
    descripcion: 'Liderazgo técnico en proyectos web y móviles. Desarrollo de soluciones a medida para clientes de diversos rubros.',
  },
  {
    id: '3',
    cargo: 'Desarrollador Freelance',
    empresa: 'Independiente',
    fechaInicio: '2021',
    fechaFin: '2023',
    actual: false,
    descripcion: 'Desarrollo de sitios web y aplicaciones para pequeñas y medianas empresas. Gestión directa con clientes.',
  },
];
