import { Star, FileText } from 'lucide-react';
import { Contenedor } from '../ui';
import logoZenitx from '../../assets/zenitx.png';
import logoSantoTomas from '../../assets/st.jpg';

const patrocinadores = [
  { nombre: 'Zenitx', logo: logoZenitx, pdf: '/cartazenitx.pdf' },
  { nombre: 'Santo Tomás', logo: logoSantoTomas, pdf: '/RespaldoST.pdf' },
];

const items = [...patrocinadores, ...patrocinadores, ...patrocinadores, ...patrocinadores, ...patrocinadores, ...patrocinadores];

export function SeccionAlianzas() {
  return (
    <section className="py-8 md:py-12 overflow-hidden">
      <Contenedor>
        <div className="flex items-center gap-3 mb-6 justify-center">
          <Star className="text-yellow-400 fill-yellow-400" size={16} />
          <span className="text-gray-500 font-medium text-xs uppercase tracking-widest">
            Respaldado por
          </span>
        </div>

        <div className="flex justify-center items-center overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6 md:gap-10 animate-ticker">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 flex flex-col items-center gap-2"
                title={`Ver carta de ${item.nombre}`}
              >
                <div className="relative bg-white rounded-xl p-3 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all duration-300">
                  <img
                    src={item.logo}
                    alt={item.nombre}
                    className="h-8 w-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <FileText className="text-white" size={16} />
                  </div>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-yellow-400 transition-colors">
                  {item.nombre}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Contenedor>
    </section>
  );
}