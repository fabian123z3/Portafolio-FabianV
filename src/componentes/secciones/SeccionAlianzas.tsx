import { Star, ExternalLink, FileText } from 'lucide-react';
import { Contenedor } from '../ui';
import logoZenitx from '../../assets/zenitx.png';
import logoSantoTomas from '../../assets/st.jpg';

export function SeccionAlianzas() {
  return (
    <section className="py-8 md:py-12">
      <Contenedor className="max-w-3xl">
        <div className="bg-[#161b22] border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
          
          {/* Etiqueta */}
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400 fill-yellow-400" size={18} />
            <span className="text-gray-400 font-medium text-sm">
              Respaldado por
            </span>
          </div>

          {/* Separador */}
          <div className="hidden sm:block w-px h-8 bg-white/10" />

          {/* Logos */}
          <div className="flex items-center gap-4">
            {/* Zenitx */}
            <a 
              href="https://zenitx.com/nuestra-empresa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-lg p-2.5 hover:scale-105 transition-all duration-300 block overflow-hidden"
            >
              <img
                src={logoZenitx}
                alt="Zenitx"
                className="h-7 w-auto object-contain"
              />
              <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-lg">
                <ExternalLink className="text-white" size={14} />
              </div>
            </a>

            {/* Santo Tomas */}
            <a 
              href="/RespaldoST.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-lg p-2.5 hover:scale-105 transition-all duration-300 block overflow-hidden"
            >
              <img
                src={logoSantoTomas}
                alt="Santo Tomas"
                className="h-7 w-auto object-contain"
              />
              <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center rounded-lg">
                <FileText className="text-white" size={14} />
              </div>
            </a>
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
