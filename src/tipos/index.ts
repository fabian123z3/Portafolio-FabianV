// Tipos para proyectos del portafolio
export interface Proyecto {
  id: string | number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  libreriasML?: string[];
  icono?: string;
  imagenUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  playStoreUrl?: string;
  destacado?: boolean;
}

// Tipos para habilidades tecnicas
export interface Habilidad {
  nombre: string;
  nivel: number;
  categoria: 'frontend' | 'backend' | 'herramientas' | 'otros';
}

// Tipos para experiencia laboral
export interface Experiencia {
  id: string | number;
  empresa: string;
  cargo: string;
  fechaInicio: string;
  fechaFin?: string;
  descripcion: string;
  actual?: boolean;
}

// Tipos para informacion de contacto
export interface InfoContacto {
  email: string;
  telefono?: string;
  ubicacion: string;
  linkedin?: string;
  github?: string;
  tiktok?: string;
}

// Tipos para datos personales
export interface DatosPersonales {
  nombre: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  contacto: InfoContacto;
}
