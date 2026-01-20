import { useState } from 'react';
import { ExternalLink, Smartphone, X, ChevronRight, Star, Cpu } from 'lucide-react';
import { Contenedor, TituloSeccion } from '../ui';
import { proyectos } from '../../datos/datosPersonales';

export function SeccionProyectos() {
  const proyectosDestacados = proyectos.filter((p) => p.destacado);
  const [proyectoActivo, setProyectoActivo] = useState<string | number | null>(null);

  const proyectoSeleccionado = proyectos.find(p => p.id === proyectoActivo);

  return (
    <section id="proyectos" className="py-20 relative overflow-hidden">
      {/* Fondo de ruido/textura opcional */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <Contenedor className="relative z-10">
        <TituloSeccion
          titulo="Mis Proyectos"
          subtitulo="Soluciones desarrolladas con código y creatividad"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {proyectosDestacados.map((proyecto, index) => {
            // El primer proyecto (RH360) tendrá un estilo un poco diferente pero mismo tamaño
            const esPrincipal = index === 0;

            return (
              <article
                key={proyecto.id}
                onClick={() => setProyectoActivo(proyecto.id)}
                className={`
                  group relative flex flex-col h-full
                  bg-gray-900/40 backdrop-blur-md 
                  border border-white/5 
                  rounded-2xl overflow-hidden 
                  cursor-pointer 
                  transition-all duration-500
                  hover:shadow-2xl hover:shadow-violet-900/20
                  hover:border-violet-500/30
                  hover:-translate-y-2
                `}
              >
                {/* Gradiente sutil para el proyecto principal */}
                {esPrincipal && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-transparent opacity-50" />
                )}

                <div className="p-6 flex flex-col h-full relative z-10">
                  {/* Header de la tarjeta */}
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shadow-lg
                      ${esPrincipal ? 'bg-violet-600 shadow-violet-900/30' : 'bg-gray-800 border border-white/10'}
                    `}>
                      {proyecto.icono ? (
                        <img 
                          src={proyecto.icono} 
                          alt={proyecto.titulo}
                          className="w-7 h-7 object-contain"
                        />
                      ) : (
                        <span className="text-xl font-bold text-white">
                          {proyecto.titulo.charAt(0)}
                        </span>
                      )}
                    </div>
                    {esPrincipal ? (
                      <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-[10px] font-bold uppercase tracking-wider rounded-full border border-violet-500/20 flex items-center gap-1">
                        <Star size={10} className="fill-current" />
                        Destacado
                      </span>
                    ) : (
                      <div className="p-2 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -mr-2 -mt-2">
                        <ChevronRight size={16} className="text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Título y descripción */}
                  <div className="mb-auto">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors line-clamp-1">
                      {proyecto.titulo}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {proyecto.descripcion}
                    </p>
                  </div>

                  {/* Footer de la tarjeta: Tecnologías */}
                  <div className="pt-4 mt-2 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {proyecto.tecnologias.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-medium bg-white/5 text-gray-300 rounded-md group-hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {proyecto.tecnologias.length > 3 && (
                        <span className="px-2 py-1 text-[11px] font-medium text-gray-500">
                          +{proyecto.tecnologias.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Contenedor>

      {/* Modal / Dialogo de Detalle */}
      {proyectoSeleccionado && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setProyectoActivo(null)}
        >
          <div 
            className="
              relative w-full max-w-2xl bg-gray-900 sm:rounded-2xl 
              max-h-[90vh] flex flex-col shadow-2xl overflow-hidden
              border-t sm:border border-white/10
              animate-in slide-in-from-bottom-10 sm:zoom-in-95 duration-300
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gray-900/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center p-2 border border-white/5">
                  {proyectoSeleccionado.icono && (
                    <img 
                      src={proyectoSeleccionado.icono} 
                      alt={proyectoSeleccionado.titulo}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {proyectoSeleccionado.titulo}
                  </h3>
                  <div className="flex gap-2 text-xs text-gray-400 mt-1">
                     {proyectoSeleccionado.destacado && (
                       <span className="text-violet-400 font-medium">Proyecto Destacado</span>
                     )}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setProyectoActivo(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Contenido Scrollable */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              
              <div className="text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
                {proyectoSeleccionado.descripcion}
              </div>

              {/* Grid de secciones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* Tecnologías */}
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {proyectoSeleccionado.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Machine Learning (si existe) */}
                {proyectoSeleccionado.libreriasML && (
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Cpu size={16} className="text-orange-400" />
                      IA & ML
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {proyectoSeleccionado.libreriasML.map((lib) => (
                        <span
                          key={lib}
                          className="px-2.5 py-1 text-xs font-medium bg-orange-500/10 text-orange-300 border border-orange-500/20 rounded-md"
                        >
                          {lib}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Botones de acción */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
                {proyectoSeleccionado.playStoreUrl && (
                  <a
                    href={proyectoSeleccionado.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all hover:scale-105"
                  >
                    <Smartphone size={18} />
                    <span>Google Play</span>
                  </a>
                )}
                
                {proyectoSeleccionado.demoUrl && (
                  <a
                    href={proyectoSeleccionado.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-all hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    <span>Ver informacion</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
