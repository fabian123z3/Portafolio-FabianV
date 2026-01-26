import { useState } from 'react';
import { Code2, ExternalLink, Smartphone, Github, X, Target, Lightbulb, TrendingUp, MessageSquare, Cpu } from 'lucide-react';
import { Contenedor } from '../ui';
import { proyectos } from '../../datos/datosPersonales';

export function SeccionProyectos() {
  const proyectosDestacados = proyectos.filter((p) => p.destacado).slice(0, 4);
  const [proyectoActivo, setProyectoActivo] = useState<string | number | null>(null);

  const proyectoSeleccionado = proyectos.find(p => p.id === proyectoActivo);

  return (
    <section id="proyectos" className="py-16 md:py-24">
      <Contenedor className="max-w-3xl">
        {/* Título con icono */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-[#161b22] rounded-lg">
            <Code2 className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Proyectos
          </h2>
        </div>

        {/* Grid compacto 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectosDestacados.map((proyecto) => (
            <article
              key={proyecto.id}
              className="group bg-[#161b22]/50 border border-white/5 rounded-xl p-4 hover:border-white/15 transition-all cursor-pointer"
              onClick={() => setProyectoActivo(proyecto.id)}
            >
              {/* Header con icono y título */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#21262d] border border-white/5 flex-shrink-0 flex items-center justify-center">
                  {proyecto.icono ? (
                    <img 
                      src={proyecto.icono} 
                      alt={proyecto.titulo}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sm font-bold text-gray-500">
                      {proyecto.titulo.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors truncate">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {proyecto.descripcion}
                  </p>
                </div>
              </div>

              {/* Tecnologías compactas */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {proyecto.tecnologias.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-medium bg-white/5 text-gray-400 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links compactos */}
              <div className="flex items-center gap-3 text-xs">
                {proyecto.repoUrl && (
                  <a
                    href={proyecto.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors"
                  >
                    <Github size={12} />
                    Code
                  </a>
                )}
                {proyecto.playStoreUrl && (
                  <a
                    href={proyecto.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors"
                  >
                    <Smartphone size={12} />
                    Play
                  </a>
                )}
                {proyecto.demoUrl && (
                  <a
                    href={proyecto.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={12} />
                    Preview
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Contenedor>

      {/* Modal de Detalle */}
      {proyectoSeleccionado && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setProyectoActivo(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#161b22] sm:rounded-xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border-t sm:border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#21262d] rounded-lg flex items-center justify-center overflow-hidden border border-white/5">
                  {proyectoSeleccionado.icono && (
                    <img 
                      src={proyectoSeleccionado.icono} 
                      alt={proyectoSeleccionado.titulo}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {proyectoSeleccionado.titulo}
                </h3>
              </div>
              <button 
                onClick={() => setProyectoActivo(null)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Contenido */}
            <div className="p-5 overflow-y-auto">
              <p className="text-gray-300 leading-relaxed mb-6">
                {proyectoSeleccionado.descripcion}
              </p>

              {/* Case Study */}
              {(proyectoSeleccionado.desafio || proyectoSeleccionado.solucion || proyectoSeleccionado.impacto) && (
                <div className="space-y-4 mb-6">
                  {proyectoSeleccionado.desafio && (
                    <div className="bg-white/5 p-4 rounded-lg border-l-2 border-red-500">
                      <h4 className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-2">
                        <Target size={16} /> El Desafío
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{proyectoSeleccionado.desafio}</p>
                    </div>
                  )}
                  
                  {proyectoSeleccionado.solucion && (
                    <div className="bg-white/5 p-4 rounded-lg border-l-2 border-yellow-500">
                      <h4 className="flex items-center gap-2 text-yellow-400 font-semibold text-sm mb-2">
                        <Lightbulb size={16} /> La Solución
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{proyectoSeleccionado.solucion}</p>
                    </div>
                  )}

                  {proyectoSeleccionado.impacto && (
                    <div className="bg-white/5 p-4 rounded-lg border-l-2 border-green-500">
                      <h4 className="flex items-center gap-2 text-green-400 font-semibold text-sm mb-2">
                        <TrendingUp size={16} /> Impacto
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{proyectoSeleccionado.impacto}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Tecnologías */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {proyectoSeleccionado.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {proyectoSeleccionado.libreriasML && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Cpu size={12} /> Librerías & APIs
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {proyectoSeleccionado.libreriasML.map((lib) => (
                        <span
                          key={lib}
                          className="px-2 py-1 text-xs font-medium bg-orange-500/10 text-orange-300 rounded"
                        >
                          {lib}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Testimonios */}
              {proyectoSeleccionado.testimonios && proyectoSeleccionado.testimonios.length > 0 && (
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-gray-400 font-semibold text-sm mb-3">
                    <MessageSquare size={14} /> Reseñas de usuarios
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {proyectoSeleccionado.testimonios.map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden border border-white/5">
                        <img src={img} alt={`Testimonio ${idx + 1}`} className="w-full h-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Botones */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                {proyectoSeleccionado.playStoreUrl && (
                  <a
                    href={proyectoSeleccionado.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <Smartphone size={16} />
                    Google Play
                  </a>
                )}
                
                {proyectoSeleccionado.demoUrl && (
                  <a
                    href={proyectoSeleccionado.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Ver Preview
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
