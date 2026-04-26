import { User, Star, FileText } from 'lucide-react';
import { Contenedor } from '../ui';
import logoZenitx from '../../assets/zenitx.png';
import logoSantoTomas from '../../assets/st.jpg';

export function SeccionSobreMi() {
  return (
    <section id="sobre-mi" className="py-12 md:py-16 bg-[#0a0e13]">
      <Contenedor className="max-w-3xl">
        {/* Título con icono */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#161b22] rounded-lg">
            <User className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Sobre mí
          </h2>
        </div>

        {/* Texto narrativo corto y natural */}
        <div className="space-y-4 text-gray-300 leading-relaxed max-w-2xl">
          <p>
            Soy <span className="text-white">Fabian Villablanca</span>, desarrollador Full Stack y Mobile de Chile. Me especializo en construir soluciones digitales completas que van desde la interfaz hasta el servidor, integrando <span className="text-yellow-400">Inteligencia Artificial</span> cuando el problema lo requiere.
          </p>

          <p>
            Tengo experiencia en el desarrollo e implementación de <span className="text-yellow-400">sistemas ERP y soluciones integrales</span> para empresas, cubriendo módulos de RRHH, control de asistencia biométrico y gestión de personal, siempre asegurando el cumplimiento de la normativa legal vigente.
          </p>

          <p>
            Trabajo en <span className="text-yellow-400">Zenitx</span> donde empecé como practicante y hoy participo activamente en proyectos para diversos clientes. También creo contenido sobre programación en TikTok.
          </p>
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
                href="/cartazenitx.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center overflow-hidden">
                  <img
                    src={logoZenitx}
                    alt="Zenitx"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Zenitx</span>
                <FileText size={10} className="text-gray-500" />
              </a>

              {/* Santo Tomas */}
              <a 
                href="/RespaldoST.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center overflow-hidden">
                  <img
                    src={logoSantoTomas}
                    alt="Santo Tomas"
                    className="w-5 h-5 object-contain"
                  />
                </div>
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
