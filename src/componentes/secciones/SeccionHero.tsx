import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { Contenedor } from '../ui';
import { datosPersonales } from '../../datos/datosPersonales';
import { Boton } from '../ui';
import { IconoTiktok } from '../iconos';
import fotoPerfil from '../../assets/fotoperfil.png';

export function SeccionHero() {
  const { nombre, titulo, subtitulo, contacto } = datosPersonales;

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-violet-950/20 to-gray-950" />
      
      {/* Particulas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse" />
      </div>

      <Contenedor className="relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Contenido texto */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-violet-400 font-medium mb-4 tracking-wider uppercase text-sm">
              Bienvenido a mi portafolio
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hola, soy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                Fabian
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">
              {titulo}
            </h2>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-10 mx-auto lg:mx-0">
              {subtitulo}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <Boton href="#proyectos" variante="primario">
                Ver Proyectos
              </Boton>
              <Boton href="#contacto" variante="contorno">
                Contactame
              </Boton>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {contacto.github && (
                <a
                  href={contacto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-violet-500/20 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
              )}
              {contacto.linkedin && (
                <a
                  href={contacto.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-violet-500/20 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              )}
              {contacto.tiktok && (
                <a
                  href={contacto.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-violet-500/20 transition-all duration-300"
                  aria-label="TikTok"
                >
                  <IconoTiktok size={22} />
                </a>
              )}
            </div>
          </div>

          {/* Foto de perfil */}
          <div className="flex-shrink-0 relative">
            {/* Circulo decorativo exterior animado */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 opacity-20 blur-xl animate-pulse" />
            
            {/* Borde con gradiente */}
            <div className="relative p-1 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500">
              <div className="relative">
                <img
                  src={fotoPerfil}
                  alt={`Foto de ${nombre}`}
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-950/30 to-transparent" />
              </div>
            </div>

            {/* Elementos decorativos flotantes */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet-500 rounded-full opacity-60 animate-bounce" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-indigo-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={28} />
        </div>
      </Contenedor>
    </section>
  );
}
