import { Github, Linkedin, Mail, FileText, Award, Zap } from 'lucide-react';
import { Contenedor } from '../ui';
import { datosPersonales } from '../../datos/datosPersonales';
import { IconoTiktok } from '../iconos';
import fotoPerfil from '../../assets/fotoperfil.png';

export function SeccionHero() {
  const { nombre, contacto } = datosPersonales;

  return (
    <section id="inicio" className="pt-20 pb-12 md:pt-24 md:pb-16">
      <Contenedor className="max-w-3xl">
        {/* Badge "Disponible para trabajar" */}
        <div className="flex justify-center md:justify-start mb-6">
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
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-6">
          {/* Foto de perfil */}
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-yellow-400/20 ring-offset-2 ring-offset-[#0d1117]">
              <img
                src={fotoPerfil}
                alt={`Foto de ${nombre}`}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0d1117]"></span>
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
              Hey, soy{' '}
              <span className="text-yellow-400">Fabian Villablanca</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-4">
              <span className="text-white font-medium">Full Stack & AI Engineer</span> especializado en apps móviles,{' '}
              plataformas web y{' '}
              <span className="text-yellow-400">microservicios de Inteligencia Artificial</span>.
              <br />
              Creo soluciones digitales que <span className="text-yellow-400/90">funcionan, escalan y llegan a producción</span>.
            </p>

            {/* Badges de habilidades clave */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                <Zap size={12} className="inline mr-1" />React / React Native
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                Python / Django / FastAPI
              </span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                IA · Visión Computacional
              </span>
              <span className="px-3 py-1 bg-sky-500/20 text-sky-400 text-xs rounded-full">
                CI/CD · Docker · Railway
              </span>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                PyTest · Testing
              </span>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Mail size={18} />
            Contáctame
          </a>
          <a
            href="/cartazenitx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
          >
            <FileText size={18} />
            Descargar CV
          </a>
          <a
            href="/certificadoegreso.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-medium rounded-lg hover:bg-yellow-500/30 transition-colors"
          >
            <Award size={18} />
            Certificado de título
          </a>
        </div>

        {/* Franja de métricas de impacto */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-yellow-400">100+</span>
              <span className="text-xs text-gray-500 text-center md:text-left">Descargas en Play Store</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-yellow-400">1+</span>
              <span className="text-xs text-gray-500 text-center md:text-left">Año de experiencia</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-yellow-400">1</span>
              <span className="text-xs text-gray-500 text-center md:text-left">Proyecto en producción</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-yellow-400">1</span>
              <span className="text-xs text-gray-500 text-center md:text-left">App publicada en Google Play</span>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
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
