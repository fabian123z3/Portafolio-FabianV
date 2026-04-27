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
import carnicero1 from '../assets/Carnicero/WhatsApp Image 2026-04-25 at 19.58.36.jpeg';
import carnicero2 from '../assets/Carnicero/WhatsApp Image 2026-04-25 at 19.58.36 (1).jpeg';
import carnicero3 from '../assets/Carnicero/WhatsApp Image 2026-04-25 at 19.58.36 (2).jpeg';
import carnicero4 from '../assets/Carnicero/WhatsApp Image 2026-04-25 at 19.58.36 (3).jpeg';
import carnicero5 from '../assets/Carnicero/WhatsApp Image 2026-04-25 at 19.58.36 (4).jpeg';
import carnicero6 from '../assets/Carnicero/WhatsApp Image 2026-04-25 at 19.58.37.jpeg';
import carnicero7 from '../assets/Carnicero/WhatsApp Image 2026-04-25 at 19.58.37 (1).jpeg';
import carnicero8 from '../assets/Carnicero/WhatsApp Image 2026-04-25 at 19.58.37 (2).jpeg';
import autoCorreo from '../assets/Automatizacion/correo.png';
import autoFlujo from '../assets/Automatizacion/flujo.png';
import autoSheets from '../assets/Automatizacion/sheets.png';

export const datosPersonales: DatosPersonales = {
  nombre: 'Fabian Alexis Villablanca Vega',
  titulo: 'Desarrollador Full Stack',
  subtitulo: 'Desarrollador Full Stack con manejo en IA',
  descripcion: 'Desarrollador Full Stack con manejo en Inteligencia Artificial. Creo soluciones digitales que funcionan, escalan y llegan a producción. Experiencia en ERP y soluciones integrales.',
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
  { nombre: 'Flutter', nivel: 75, categoria: 'frontend' },
  { nombre: 'React Native', nivel: 85, categoria: 'frontend' },
  { nombre: 'Node.js', nivel: 80, categoria: 'backend' },
  { nombre: 'Python', nivel: 75, categoria: 'backend' },
  { nombre: 'Django', nivel: 80, categoria: 'backend' },
  { nombre: 'FastAPI', nivel: 75, categoria: 'backend' },
  { nombre: 'Milvus', nivel: 70, categoria: 'backend' },
  { nombre: 'Git', nivel: 85, categoria: 'herramientas' },
  { nombre: 'Docker', nivel: 75, categoria: 'herramientas' },
  { nombre: 'GitHub Actions', nivel: 75, categoria: 'herramientas' },
  { nombre: 'Railway', nivel: 80, categoria: 'herramientas' },
  { nombre: 'Vercel', nivel: 85, categoria: 'herramientas' },
  { nombre: 'Netlify', nivel: 80, categoria: 'herramientas' },
  { nombre: 'PyTest', nivel: 75, categoria: 'testing' },
  { nombre: 'Jest', nivel: 75, categoria: 'testing' },
  { nombre: 'Vitest', nivel: 70, categoria: 'testing' },
  { nombre: 'Android Studio', nivel: 70, categoria: 'herramientas' },
];

export const proyectos: Proyecto[] = [
  {
    id: 'automatizacion',
    titulo: 'Automatización de Gastos con Make.com',
    descripcion: 'Diseñé un flujo automatizado con Make AI Agent que monitorea Gmail, extrae datos de transacciones del banco usando IA, registra automáticamente los gastos en Google Sheets y envía correo de confirmación.',
    desafio: 'Registrar manualmente cada gasto del banco tomaba tiempo y era propenso a errores, dificultando el control del flujo de efectivo.',
    solucion: 'Diseñé un flujo en Make.com con Make AI Agent que (1)Monitorea Gmail y detecta correos del banco (2)Usa IA para extraer monto, categoría y fecha (3)Registra automáticamente en Google Sheets (4)Envía email de confirmación.',
impacto: 'Eliminación del registro manual, actualizaciones en tiempo real y notificaciones inmediatas de cada transacción.',
    tecnologias: ['Make AI Agent', 'Make.com', 'Gmail', 'Google Sheets', 'Email Automation', 'No-code'],
    icono: 'https://cdn.simpleicons.org/make/6D00CC',
    imagenes: [autoFlujo, autoCorreo, autoSheets],
    tipo: 'web',
    destacado: false,
  },
  {
    id: 'rh360',
    titulo: 'RH360 - Control de Asistencia',
    descripcion: 'Sistema integral de RRHH multi-tenant con reconocimiento facial, anti-suplantación y control de asistencia. Cumple 100% con normativa chilena DT. Incluye panel admin, gestión de usuarios, roles y permisos (RBAC), reportes, documentos, firmas electrónicas, sync con relojes biométricos y alertas.',
    desafio: 'Crear un sistema de asistencia infalible que cumpliera las leyes laborales chilenas, evitando fraudes como suplantación con fotos. Necesidad de gestión multi-tenant con seguridad por roles y permisos granulares.',
    solucion: '(1)Arquitectura de microservicios con Django para lógica legal y FastAPI para IA (2)Detección de vida Anti-suplantación con YOLO v8 (3)Búsquedas faciales con Milvus (4)Sistema RBAC completo con roles personalizados y permisos granulares (5)Multi-tenant con middleware de aislamiento.',
    impacto: 'Sistema 100% compliant con Dirección del Trabajo. Fraude reducido a cero, tiempos de marcaje < 1 segundo. Más de 500 usuarios activos.',
    tecnologias: [
      'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'React Router', 'Zod', 'Radix UI', 'CMDK', 'React Hook Form',
      'React Native', 'Expo', 'NativeWind', 'Reanimated', 'Expo Location', 'Axios',
      'Django', 'DRF', 'CORS Headers', 'MySQL', 'AWS S3', 'Google Auth', 'Gunicorn', 'Celery',
      'FastAPI', 'Pydantic', 'Uvicorn', 'PyTorch', 'YOLO v8', 'OpenCV', 'face-recognition', 'dlib', 'Milvus', 'Pymilvus',
      'Docker', 'GitHub Actions', 'Ruff', 'PyTest', 'Bandit',
    ],
    libreriasML: ['PyTorch', 'OpenCV', 'Milvus', 'YOLO v8', 'face-recognition', 'dlib', 'Ultralytics'],
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
    descripcion: 'Tu guía de consulta para aprender sobre cortes de carne. Desarrollada con un experto carnicero para que sepas qué corte elegir y cómo prepararlo perfectamente.',
    desafio: 'Las personas no sabían identificar los cortes, sus diferencias, usos culinarios ni cómo cocinarlos correctamente. Necesitaban una guía experta y práctica.',
    solucion: '(1)Guía integral de cortes de carne con descripciones detalladas (2)Recetas asociadas y consejos de experto carnicero (3)Modo Manos Libres con síntesis de voz para seguir recetas sin usar las manos.',
    impacto: 'Usuarios aprenden a distinguir cortes, elegir la pieza correcta para cada preparación y cocinarlos óptimamente. Las reseñas destacan la utilidad educativa y práctica.',
    testimonios: [resena1, resena2, resena3],
    tecnologias: ['React Native', 'Expo', 'TypeScript', 'NativeWind', 'Expo Router'],
    libreriasML: ['DeepSeek API', 'Expo Speech', 'AsyncStorage', 'YouTube Iframe', 'Reanimated'],
    icono: logoCarnicero,
    imagenes: [carnicero1, carnicero2, carnicero3, carnicero4, carnicero5, carnicero6, carnicero7, carnicero8],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.carnicerodebolsillo.app&hl=es_CL',
    tipo: 'appMovil',
    stats: { descargas: '100+', rating: '4.6' },
    destacado: true,
  },
  ];

export const experiencias: Experiencia[] = [
  {
    id: '1',
    cargo: 'Desarrollador Full Stack',
    empresa: 'Zenitx Soluciones Informaticas',
    url: 'https://zenitx.com/',
    fechaInicio: '1 de diciembre de 2025',
    fechaFin: '23 de abril de 2026',
    actual: false,
    descripcion: 'Desarrollo full stack del sistema RH360 (control de asistencia con IA y reconocimiento facial).',
    responsabilidades: [
      'Desarrollo completo módulo web y móvil con React, Django, FastAPI',
      'Lideré y orienté a 3 practicantes en sus proyectos',
      'Gestión directa de clientes empresariales',
      'Revisión de código y mentoring técnico',
    ],
  },
  {
    id: '2',
    cargo: 'Practicante',
    empresa: 'Zenitx Soluciones Informaticas',
    url: 'https://zenitx.com/',
    fechaInicio: '13 de agosto de 2025',
    fechaFin: '30 de noviembre de 2025',
    actual: false,
    responsabilidades: [
      'Desarrollo de módulos web con React',
      'Aprendizaje de Django y FastAPI',
      'Colaboración en proyectos del sistema RH360',
    ],
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
