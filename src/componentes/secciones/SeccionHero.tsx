import { Github, Linkedin, Mail } from 'lucide-react';
import { Contenedor } from '../ui';
import { datosPersonales } from '../../datos/datosPersonales';
import { IconoTiktok } from '../iconos';
import fotoPerfil from '../../assets/fotoperfil.png';

export function SeccionHero() {
  const { nombre, contacto } = datosPersonales;

  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Contenedor className="max-w-3xl">
        {/* Badge "Disponible para trabajar" */}
        <div className="flex justify-center md:justify-start mb-8">
          <a
            href={contacto.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#161b22] border border-white/10 rounded-full hover:border-green-500/50 transition-colors group"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              Disponible para trabajar
            </span>
          </a>
        </div>

        {/* Contenedor principal con foto y texto */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8">
          {/* Foto de perfil */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-yellow-400/20 ring-offset-2 ring-offset-[#0d1117]">
              <img
                src={fotoPerfil}
                alt={`Foto de ${nombre}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Indicador online */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0d1117]"></span>
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Hey, soy{' '}
              <span className="text-yellow-400">Fabian</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              <span className="text-white font-medium">Desarrollador Full Stack</span> de Chile 🇨🇱. 
              Especializado en{' '}
              <span className="text-yellow-400/90">React, React Native, Django y FastAPI</span>. 
              Creo soluciones digitales que funcionan y escalan.
            </p>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="mailto:fabianvillablanca97@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Mail size={18} />
            Contáctame
          </a>
          <a
            href={contacto.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center justify-center md:justify-start gap-3 mt-8">
          {contacto.github && (
            <a
              href={contacto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {contacto.linkedin && (
            <a
              href={contacto.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          )}
          {contacto.tiktok && (
            <a
              href={contacto.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              aria-label="TikTok"
            >
              <IconoTiktok size={20} />
            </a>
          )}
        </div>
      </Contenedor>
    </section>
  );
}
