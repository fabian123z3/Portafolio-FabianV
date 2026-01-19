import { Handshake } from 'lucide-react';
import { Contenedor } from '../ui';
import logoZenitx from '../../assets/zenitx.png';

export function SeccionAlianzas() {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-transparent to-indigo-950/20" />
      
      <Contenedor className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card principal */}
          <a
            href="https://zenitx.com/nuestra-empresa/"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            {/* Efecto de brillo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 via-purple-600/30 to-indigo-600/30 rounded-2xl sm:rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                
                {/* Icono y titulo */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
                  <div className="p-3 sm:p-4 bg-violet-500/10 rounded-xl sm:rounded-2xl">
                    <Handshake className="text-violet-400" size={28} />
                  </div>
                  <div>
                    <p className="text-violet-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                      Alianza Estrategica
                    </p>
                    <h3 className="text-white text-lg sm:text-xl font-bold">
                      Partner Oficial
                    </h3>
                  </div>
                </div>

                {/* Separador */}
                <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="sm:hidden w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Logo y nombre */}
                <div className="flex-1 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg group-hover:shadow-violet-500/20 transition-shadow duration-300">
                    <img
                      src={logoZenitx}
                      alt="Zenitx"
                      className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-white text-xl sm:text-2xl font-bold group-hover:text-violet-400 transition-colors">
                      Zenitx
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Soluciones Informaticas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Contenedor>
    </section>
  );
}
