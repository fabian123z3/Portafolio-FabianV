import { useState } from 'react';
import { ExternalLink, Smartphone, X, ChevronRight } from 'lucide-react';
import { Contenedor, TituloSeccion } from '../ui';
import { proyectos } from '../../datos/datosPersonales';

export function SeccionProyectos() {
  const proyectosDestacados = proyectos.filter((p) => p.destacado);
  const [proyectoActivo, setProyectoActivo] = useState<string | number | null>(null);

  const proyectoSeleccionado = proyectos.find(p => p.id === proyectoActivo);

  return (
    <section id="proyectos" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      
      <Contenedor className="relative z-10">
        <TituloSeccion
          titulo="Mis Proyectos"
          subtitulo="Lo que he construido con pasion"
        />

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosDestacados.map((proyecto, index) => (
            <article
              key={proyecto.id}
              onClick={() => setProyectoActivo(proyecto.id)}
              className={`group cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Fondo con gradiente */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                index === 0 
                  ? 'from-violet-600/20 via-purple-600/10 to-indigo-600/20' 
                  : 'from-gray-800/80 to-gray-900/80'
              }`} />
              
              {/* Borde brillante en hover */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-violet-500/50 transition-colors" />
              
              <div className={`relative p-6 ${index === 0 ? 'sm:p-8' : ''}`}>
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${index === 0 ? 'w-16 h-16' : 'w-12 h-12'} bg-white/10 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0`}>
                    {proyecto.icono ? (
                      <img 
                        src={proyecto.icono} 
                        alt={proyecto.titulo}
                        className={`${index === 0 ? 'w-10 h-10' : 'w-7 h-7'} object-contain`}
                      />
                    ) : (
                      <span className="text-2xl font-bold text-violet-400">
                        {proyecto.titulo.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-white font-bold mb-1 group-hover:text-violet-400 transition-colors ${
                      index === 0 ? 'text-xl sm:text-2xl' : 'text-lg'
                    }`}>
                      {proyecto.titulo}
                    </h3>
                    {index === 0 && (
                      <span className="inline-block px-2 py-0.5 bg-violet-500/20 text-violet-400 text-xs font-medium rounded-full">
                        Proyecto Destacado
                      </span>
                    )}
                  </div>
                </div>

                {/* Descripcion */}
                <p className={`text-gray-400 mb-4 line-clamp-3 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                  {proyecto.descripcion}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proyecto.tecnologias.slice(0, index === 0 ? 6 : 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-medium bg-white/5 text-gray-300 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {proyecto.tecnologias.length > (index === 0 ? 6 : 4) && (
                    <span className="px-2 py-0.5 text-[10px] font-medium text-gray-500">
                      +{proyecto.tecnologias.length - (index === 0 ? 6 : 4)}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-violet-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver detalles <ChevronRight size={16} />
                  </span>
                  
                  {proyecto.playStoreUrl && (
                    <a
                      href={proyecto.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-2 py-1 bg-green-600/20 text-green-400 rounded-lg text-xs font-medium hover:bg-green-600/30 transition-colors"
                    >
                      <Smartphone size={12} />
                      Play Store
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Contenedor>

      {/* Modal de detalle */}
      {proyectoSeleccionado && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setProyectoActivo(null)}
        >
          <div 
            className="relative bg-gray-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-violet-500/20 rounded-xl flex items-center justify-center">
                  {proyectoSeleccionado.icono ? (
                    <img 
                      src={proyectoSeleccionado.icono} 
                      alt={proyectoSeleccionado.titulo}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-violet-400">
                      {proyectoSeleccionado.titulo.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {proyectoSeleccionado.titulo}
                </h3>
              </div>
              <button 
                onClick={() => setProyectoActivo(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="text-gray-400" size={24} />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              <div className="text-gray-300 text-lg leading-relaxed mb-6 whitespace-pre-line">
                {proyectoSeleccionado.descripcion}
              </div>

              {/* Tecnologias completas */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Tecnologias utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {proyectoSeleccionado.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium bg-violet-500/10 text-violet-400 rounded-lg border border-violet-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Librerias ML */}
              {proyectoSeleccionado.libreriasML && proyectoSeleccionado.libreriasML.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="text-orange-400">ML</span> Machine Learning
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {proyectoSeleccionado.libreriasML.map((lib) => (
                      <span
                        key={lib}
                        className="px-3 py-1.5 text-sm font-medium bg-orange-500/10 text-orange-400 rounded-lg border border-orange-500/20"
                      >
                        {lib}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {(proyectoSeleccionado.playStoreUrl || proyectoSeleccionado.demoUrl) && (
                <div className="flex flex-wrap gap-3">
                  {proyectoSeleccionado.playStoreUrl && (
                    <a
                      href={proyectoSeleccionado.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      <Smartphone size={18} />
                      Descargar en Play Store
                    </a>
                  )}
                  {proyectoSeleccionado.demoUrl && (
                    <a
                      href={proyectoSeleccionado.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Ver Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
