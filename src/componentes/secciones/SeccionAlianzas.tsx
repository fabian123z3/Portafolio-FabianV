import { Star } from 'lucide-react';
import { Contenedor } from '../ui';
import logoZenitx from '../../assets/zenitx.png';
import logoSantoTomas from '../../assets/st.jpg';

export function SeccionAlianzas() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/10 via-transparent to-indigo-950/10" />
      
      <Contenedor className="relative z-10 w-full">
        <div className="max-w-3xl mx-auto">
          <div className="
            relative bg-white/5 backdrop-blur-sm 
            rounded-2xl border border-white/10 
            p-6 sm:p-8 
            flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10
            hover:bg-white/10 transition-colors duration-300
          ">
            
            {/* Etiqueta */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-400/10 rounded-full">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
              </div>
              <span className="text-gray-300 font-medium text-lg">
                Respaldado por
              </span>
            </div>

            {/* Separador (solo desktop) */}
            <div className="hidden sm:block w-px h-12 bg-white/10" />

            {/* Logos */}
            <div className="flex items-center gap-6">
              {/* Zenitx */}
              <a 
                href="https://zenitx.com/nuestra-empresa/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-3 shadow-lg hover:scale-105 transition-transform duration-300 block"
              >
                <img
                  src={logoZenitx}
                  alt="Zenitx"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </a>

              {/* Santo Tomas */}
              <a 
                href="https://www.santotomas.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-3 shadow-lg hover:scale-105 transition-transform duration-300 block"
              >
                <img
                  src={logoSantoTomas}
                  alt="Santo Tomas"
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
