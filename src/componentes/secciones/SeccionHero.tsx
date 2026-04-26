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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-white/20 transition-colors group"
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
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-yellow-400/30 ring-offset-2 ring-offset-[#0d1117]">
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
              Creo soluciones digitales que <span className="text-yellow-400/90">funcionan, escalan y llegan a producción</span>.{' '}
              <span className="text-gray-400">Con experiencia en ERP y soluciones integrales.</span>
            </p>

{/* Badges de habilidades clave */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                <Zap size={12} className="inline mr-1" />React / React Native
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                <Zap size={12} className="inline mr-1" />Python / Django / FastAPI
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                <Zap size={12} className="inline mr-1" />IA · Visión Computacional
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                <Zap size={12} className="inline mr-1" />Docker · Railway · Vercel
              </span>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
          {/* Botón primario */}
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
          >
            <Mail size={18} />
            Contáctame
          </a>
          {/* Botones secundarios */}
          <a
            href="/cartazenitx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-gray-300 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-colors"
          >
            <FileText size={18} />
            Descargar CV
          </a>
          <a
            href="/certificadoegreso.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-gray-300 font-medium rounded-lg hover:bg-white/10 hover:text-white transition-colors"
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
        <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
          {contacto.github && (
            <a
              href={contacto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 border border-white/20 text-white hover:bg-yellow-500 hover:text-gray-900 hover:border-yellow-500 rounded-lg transition-all"
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
              className="p-3 bg-white/10 border border-white/20 text-white hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-lg transition-all"
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
              className="p-3 bg-white/10 border border-white/20 text-white hover:bg-black hover:text-pink-500 hover:border-pink-500 rounded-lg transition-all"
              aria-label="TikTok"
            >
              <IconoTiktok size={22} />
            </a>
          )}
        </div>
      </Contenedor>
    </section>
  );
}
