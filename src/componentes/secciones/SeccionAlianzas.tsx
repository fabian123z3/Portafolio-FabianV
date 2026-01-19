import { Handshake } from 'lucide-react';
import { Contenedor } from '../ui';
import logoZenitx from '../../assets/zenitx.png';

export function SeccionAlianzas() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-transparent to-indigo-950/20" />
      
      <Contenedor className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card principal */}
          <div className="relative group">
            {/* Efecto de brillo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 via-purple-600/30 to-indigo-600/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border border-white/10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                
                {/* Icono y titulo */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-violet-500/10 rounded-2xl">
                    <Handshake className="text-violet-400" size={32} />
                  </div>
                  <div>
                    <p className="text-violet-400 text-sm font-medium uppercase tracking-wider">
                      Alianza Estrategica
                    </p>
                    <h3 className="text-white text-xl font-bold">
                      Partner Oficial
                    </h3>
                  </div>
                </div>

                {/* Separador */}
                <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                {/* Logo y enlace */}
                <a
                  href="https://zenitx.com/nuestra-empresa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center md:justify-start gap-6 group/link"
                >
                  <div className="bg-white rounded-xl p-4 shadow-lg group-hover/link:shadow-violet-500/20 transition-shadow duration-300">
                    <img
                      src={logoZenitx}
                      alt="ZenitX"
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-white text-2xl font-bold group-hover/link:text-violet-400 transition-colors">
                      Zenitx
                    </p>
                    <p className="text-gray-400">
                      Soluciones Informaticas
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
