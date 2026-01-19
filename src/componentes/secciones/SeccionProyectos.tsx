import { ExternalLink, Github } from 'lucide-react';
import { Contenedor, TituloSeccion } from '../ui';
import { proyectos } from '../../datos/datosPersonales';

export function SeccionProyectos() {
  const proyectosDestacados = proyectos.filter((p) => p.destacado);

  return (
    <section id="proyectos" className="py-16 sm:py-20 md:py-24 bg-gray-900/50">
      <Contenedor>
        <TituloSeccion
          titulo="Proyectos"
          subtitulo="Algunos de mis trabajos mas recientes"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {proyectosDestacados.map((proyecto) => (
            <article
              key={proyecto.id}
              className="group bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Imagen placeholder con gradiente */}
              <div className="h-36 sm:h-44 md:h-48 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 flex items-center justify-center">
                <span className="text-5xl sm:text-6xl font-bold text-white/10">
                  {proyecto.titulo.charAt(0)}
                </span>
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-violet-400 transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {proyecto.descripcion}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-violet-500/10 text-violet-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-3 sm:pt-4 border-t border-white/5">
                  {proyecto.repoUrl && (
                    <a
                      href={proyecto.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      <Github size={14} />
                      Codigo
                    </a>
                  )}
                  {proyecto.demoUrl && (
                    <a
                      href={proyecto.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                  {!proyecto.repoUrl && !proyecto.demoUrl && (
                    <span className="text-gray-500 text-xs sm:text-sm">Proyecto privado</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Contenedor>
    </section>
  );
}
