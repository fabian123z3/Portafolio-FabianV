import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Contenedor } from '../ui';
import { datosPersonales } from '../../datos/datosPersonales';
import { Boton } from '../ui';

export function SeccionHero() {
  const { nombre, titulo, subtitulo, contacto } = datosPersonales;

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-violet-950/20 to-gray-950" />
      
      {/* Particulas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Contenedor className="relative z-10 text-center py-20">
        <p className="text-violet-400 font-medium mb-4 tracking-wider uppercase">
          Bienvenido a mi portafolio
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {nombre.split(' ').slice(0, 2).join(' ')}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
            {nombre.split(' ').slice(2).join(' ')}
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
          {titulo}
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          {subtitulo}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Boton href="#proyectos" variante="primario">
            Ver Proyectos
          </Boton>
          <Boton href="#contacto" variante="contorno">
            Contactame
          </Boton>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center justify-center gap-6">
          {contacto.github && (
            <a
              href={contacto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          )}
          {contacto.linkedin && (
            <a
              href={contacto.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          )}
          <a
            href={`mailto:${contacto.email}`}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={28} />
        </div>
      </Contenedor>
    </section>
  );
}
