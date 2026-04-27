import { useState, useEffect } from 'react';
import { Code2, ExternalLink, Smartphone, Github, X, Target, Lightbulb, TrendingUp, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { Contenedor } from '../ui';
import { proyectos } from '../../datos/datosPersonales';

const tipoBadge = {
  web: { label: 'Web App', color: 'bg-blue-500/20 text-blue-400' },
  mobile: { label: 'Mobile App', color: 'bg-green-500/20 text-green-400' },
  fullstack: { label: 'Full Stack', color: 'bg-purple-500/20 text-purple-400' },
  appMovil: { label: 'App Móvil', color: 'bg-green-500/20 text-green-400' },
};

export function SeccionProyectos() {
  const proyectosDestacados = proyectos.filter((p) => p.destacado).slice(0, 4);
  const otrosProyectos = proyectos.filter((p) => !p.destacado);
  const [proyectoActivo, setProyectoActivo] = useState<string | number | null>(null);
  const [imagenActiva, setImagenActiva] = useState(0);
  const [imagenAmpliada, setImagenAmpliada] = useState<string | null>(null);

  const proyectoSeleccionado = proyectos.find(p => p.id === proyectoActivo);
  const imagenes = proyectoSeleccionado?.imagenes || [];
  const imagenIdx = imagenAmpliada ? imagenes.indexOf(imagenAmpliada) : -1;

  useEffect(() => {
    if (imagenes.length <= 1) return;
    const interval = setInterval(() => {
      setImagenActiva(prev => (prev + 1) % imagenes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <section id="proyectos" className="py-16 md:py-24">
      <Contenedor className="max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-[#161b22] rounded-lg">
            <Code2 className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Proyectos Destacados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectosDestacados.map((proyecto) => (
            <article
              key={proyecto.id}
              onClick={() => { setProyectoActivo(proyecto.id); setImagenActiva(0); }}
              className="group bg-[#161b22] border border-white/5 rounded-xl overflow-hidden hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all cursor-pointer"
            >
              <div className="p-4 flex items-center gap-3 border-b border-white/5">
                {proyecto.icono ? (
                  <img src={proyecto.icono} alt={proyecto.titulo} className="w-10 h-10 object-contain" />
                ) : (
                  <Code2 className="w-10 h-10 text-gray-600" />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {proyecto.tipo && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${tipoBadge[proyecto.tipo].color}`}>
                        {tipoBadge[proyecto.tipo].label}
                      </span>
                    )}
                    {proyecto.destacado && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">
                        ⭐ Destacado
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold text-white group-hover:text-yellow-400 transition-colors mb-2">
                  {proyecto.titulo}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                  {proyecto.descripcion}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {proyecto.tecnologias.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-[10px] font-medium bg-white/5 text-gray-400 rounded">
                      {tech}
                    </span>
                  ))}
                  {proyecto.tecnologias.length > 3 && (
                    <span className="px-2 py-0.5 text-[10px] font-medium bg-white/5 text-gray-500 rounded">
                      +{proyecto.tecnologias.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {otrosProyectos.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-white mt-12 mb-6">Proyectos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otrosProyectos.map((proyecto) => (
                <article
                  key={proyecto.id}
                  onClick={() => { setProyectoActivo(proyecto.id); setImagenActiva(0); }}
                  className="group bg-[#161b22] border border-white/5 rounded-xl p-4 hover:border-white/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {proyecto.icono ? (
                      <img src={proyecto.icono} alt={proyecto.titulo} className="w-10 h-10 object-contain" />
                    ) : (
                      <Code2 className="w-10 h-10 text-gray-600" />
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white truncate">{proyecto.titulo}</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {proyecto.tecnologias.slice(0, 2).map((tech) => (
                          <span key={tech} className="px-1.5 py-0.5 text-[10px] bg-white/5 text-gray-400 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </Contenedor>

      {proyectoSeleccionado && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => { setProyectoActivo(null); setImagenActiva(0); }}
        >
          <div 
            className="relative w-full max-w-lg bg-[#161b22] rounded-xl max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#161b22]/95 backdrop-blur p-3 md:p-4 border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#21262d] rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                  {proyectoSeleccionado.icono ? (
                    <img src={proyectoSeleccionado.icono} alt={proyectoSeleccionado.titulo} className="w-full h-full object-cover" />
                  ) : (
                    <Code2 className="text-gray-500" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{proyectoSeleccionado.titulo}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {proyectoSeleccionado.tipo && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${tipoBadge[proyectoSeleccionado.tipo].color}`}>
                        {tipoBadge[proyectoSeleccionado.tipo].label}
                      </span>
                    )}
                    {proyectoSeleccionado.destacado && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">
                        ⭐ Destacado
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => { setProyectoActivo(null); setImagenActiva(0); }}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-3 space-y-3">
              {imagenes.length > 0 && (
                <div className="relative rounded-lg overflow-hidden bg-[#0d1117]">
                  <div 
                    className="flex items-center justify-center cursor-pointer"
                    onClick={() => setImagenAmpliada(imagenes[imagenActiva])}
                  >
                    <img 
                      src={imagenes[imagenActiva]} 
                      alt={`Screenshot ${imagenActiva + 1}`} 
                      className="h-40 w-full object-contain hover:opacity-80 transition-opacity"
                    />
                  </div>
                  
                  {imagenes.length > 1 && (
                    <>
                      <div className="flex justify-center gap-2 py-2">
                        {imagenes.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setImagenActiva(idx); }}
                            className={`w-6 h-1 rounded-full transition-all ${idx === imagenActiva ? 'bg-yellow-400' : 'bg-gray-600'}`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setImagenActiva((imagenActiva - 1 + imagenes.length) % imagenes.length); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 rounded-full text-white"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setImagenActiva((imagenActiva + 1) % imagenes.length); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 rounded-full text-white"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Descripción</h4>
                <p className="text-gray-300 text-sm">{proyectoSeleccionado.descripcion}</p>
              </div>

              {(proyectoSeleccionado.desafio || proyectoSeleccionado.solucion || proyectoSeleccionado.impacto) && (
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Case Study</h4>
                  
                  {proyectoSeleccionado.desafio && (
                    <div className="bg-red-500/10 p-2 rounded-lg border-l-2 border-red-500">
                      <h5 className="flex items-center gap-1 text-red-400 font-medium text-xs mb-1">
                        <Target size={12} /> Desafío
                      </h5>
                      <p className="text-gray-400 text-xs">{proyectoSeleccionado.desafio}</p>
                    </div>
                  )}
                  
                  {proyectoSeleccionado.solucion && (
                    <div className="bg-yellow-500/10 p-2 rounded-lg border-l-2 border-yellow-500">
                      <h5 className="flex items-center gap-1 text-yellow-400 font-medium text-xs mb-1">
                        <Lightbulb size={12} /> Solución
                      </h5>
                      <p className="text-gray-400 text-xs">{proyectoSeleccionado.solucion}</p>
                    </div>
                  )}

                  {proyectoSeleccionado.impacto && (
                    <div className="bg-green-500/10 p-2 rounded-lg border-l-2 border-green-500">
                      <h5 className="flex items-center gap-1 text-green-400 font-medium text-xs mb-1">
                        <TrendingUp size={12} /> Impacto
                      </h5>
                      <p className="text-gray-400 text-xs">{proyectoSeleccionado.impacto}</p>
                    </div>
                  )}
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Layers size={12} /> Tecnologías
                </h4>
                
                <div className="flex flex-wrap gap-1.5">
                  {proyectoSeleccionado.tecnologias.slice(0, 10).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium bg-blue-500/15 text-blue-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {proyectoSeleccionado.libreriasML && proyectoSeleccionado.libreriasML.length > 0 && (
                  <div className="mt-2">
                    <p className="text-[10px] text-gray-500 mb-1">ML / IA</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proyectoSeleccionado.libreriasML.slice(0, 6).map((lib) => (
                        <span key={lib} className="px-2 py-1 text-xs font-medium bg-orange-500/15 text-orange-300 rounded">
                          {lib}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2 pt-2 border-t border-white/10">
                {proyectoSeleccionado.playStoreUrl && (
                  <a
                    href={proyectoSeleccionado.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm font-medium"
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
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium"
                  >
                    <ExternalLink size={14} />
                    Ver
                  </a>
                )}

                {proyectoSeleccionado.repoUrl && (
                  <a
                    href={proyectoSeleccionado.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium"
                  >
                    <Github size={14} />
                    Código
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {imagenAmpliada && imagenIdx >= 0 && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={() => setImagenAmpliada(null)}
        >
          <img 
            src={imagenAmpliada} 
            alt="Imagen ampliada" 
            className="max-w-full max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Botón cerrar - fijo arriba derecha */}
          <button 
            onClick={() => setImagenAmpliada(null)}
            className="fixed top-6 right-6 p-3 bg-red-600 rounded-full text-white hover:bg-red-700 shadow-lg z-50"
          >
            <X size={28} />
          </button>

          {/* Navegación - fija a los lados */}
          {imagenes.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setImagenAmpliada(imagenes[(imagenIdx - 1 + imagenes.length) % imagenes.length]); }}
                className="fixed left-6 top-1/2 -translate-y-1/2 p-4 bg-orange-600 hover:bg-orange-500 rounded-full text-white shadow-xl border-2 border-white z-50"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setImagenAmpliada(imagenes[(imagenIdx + 1) % imagenes.length]); }}
                className="fixed right-6 top-1/2 -translate-y-1/2 p-4 bg-orange-600 hover:bg-orange-500 rounded-full text-white shadow-xl border-2 border-white z-50"
              >
                <ChevronRight size={36} />
              </button>
              
              {/* Indicadores - fijo abajo centro */}
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-black/70 px-4 py-2 rounded-full z-50">
                {imagenes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setImagenAmpliada(imagenes[idx]); }}
                    className={`w-4 h-4 rounded-full transition-all border-2 ${idx === imagenIdx ? 'bg-yellow-400 border-white' : 'bg-white/50 border-white hover:bg-white'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}