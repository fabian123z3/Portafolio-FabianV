import { ExternalLink, Github } from 'lucide-react';
import { Contenedor, TituloSeccion } from '../ui';
import { proyectos } from '../../datos/datosPersonales';

export function SeccionProyectos() {
  const proyectosDestacados = proyectos.filter((p) => p.destacado);

  return (
    <section id="proyectos" className="py-24 bg-gray-900/50">
      <Contenedor>
        <TituloSeccion
          titulo="Proyectos"
          subtitulo="Algunos de mis trabajos mas recientes"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosDestacados.map((proyecto) => (
            <article
              key={proyecto.id}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Imagen placeholder con gradiente */}
              <div className="h-48 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/10">
                  {proyecto.titulo.charAt(0)}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {proyecto.descripcion}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-violet-500/10 text-violet-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  {proyecto.repoUrl && (
                    <a
                      href={proyecto.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Github size={16} />
                      Codigo
                    </a>
                  )}
                  {proyecto.demoUrl && (
                    <a
                      href={proyecto.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  {!proyecto.repoUrl && !proyecto.demoUrl && (
                    <span className="text-gray-500 text-sm">Proyecto privado</span>
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
