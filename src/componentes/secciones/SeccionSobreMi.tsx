import { User, Star, ExternalLink, FileText } from 'lucide-react';
import { Contenedor } from '../ui';
import fotoPerfil from '../../assets/fotoperfil.png';
import logoZenitx from '../../assets/zenitx.png';
import logoSantoTomas from '../../assets/st.jpg';

export function SeccionSobreMi() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-[#0a0e13]">
      <Contenedor className="max-w-3xl">
        {/* Título con icono */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-[#161b22] rounded-lg">
            <User className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Sobre mí
          </h2>
        </div>

        {/* Contenido - foto + texto */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Foto de perfil */}
          <div className="flex-shrink-0">
            <img
              src={fotoPerfil}
              alt="Fabian Villablanca"
              className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover"
            />
          </div>

          {/* Texto narrativo corto y natural */}
          <div className="flex-1 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Soy <span className="text-white">Fabian Villablanca</span>, desarrollador full stack de Chile. Me gusta construir cosas que funcionen y que la gente realmente use.
            </p>

            <p>
              Trabajo en <span className="text-yellow-400">Zenitx</span> donde empecé como practicante y hoy lidero proyectos y superviso a nuevos talentos. También creo contenido sobre programación en TikTok.
            </p>
          </div>
        </div>

        {/* Respaldos - integrado de forma sutil */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Star className="text-yellow-400 fill-yellow-400" size={14} />
              <span>Respaldado por</span>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Zenitx */}
              <a 
                href="https://zenitx.com/nuestra-empresa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <img
                  src={logoZenitx}
                  alt="Zenitx"
                  className="h-4 w-auto object-contain"
                />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Zenitx</span>
                <ExternalLink size={10} className="text-gray-500" />
              </a>

              {/* Santo Tomas */}
              <a 
                href="/RespaldoST.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <img
                  src={logoSantoTomas}
                  alt="Santo Tomas"
                  className="h-4 w-auto object-contain"
                />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Santo Tomás</span>
                <FileText size={10} className="text-gray-500" />
              </a>
            </div>
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
