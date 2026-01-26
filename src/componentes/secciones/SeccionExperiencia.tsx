import { Briefcase } from 'lucide-react';
import { Contenedor } from '../ui';
import { experiencias } from '../../datos/datosPersonales';

export function SeccionExperiencia() {
  return (
    <section id="experiencia" className="py-16 md:py-24">
      <Contenedor className="max-w-3xl">
        {/* Título con icono como midudev */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-[#161b22] rounded-lg">
            <Briefcase className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Experiencia laboral
          </h2>
        </div>

        {/* Timeline de experiencias */}
        <ol className="relative border-l border-white/10 ml-3">
          {experiencias.map((exp, index) => (
            <li key={exp.id} className="mb-10 ml-8 last:mb-0">
              {/* Punto del timeline */}
              <span className="absolute flex items-center justify-center w-7 h-7 bg-[#161b22] rounded-full -left-3.5 ring-4 ring-[#0d1117] border border-white/10">
                <span className="text-xs font-bold text-yellow-400">{index + 1}</span>
              </span>

              {/* Contenido */}
              <div className="group">
                {/* Estado actual */}
                {exp.actual && (
                  <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-green-500/10 text-green-400 rounded-full mb-2">
                    Actualmente...
                  </span>
                )}

                <h3 className="text-lg font-semibold text-white flex items-center gap-2 flex-wrap">
                  {exp.cargo}
                </h3>

                <p className="text-yellow-400/90 font-medium text-sm mb-2">
                  {exp.empresa}
                  {!exp.actual && (
                    <span className="text-gray-500 ml-2">
                      {exp.fechaInicio} - {exp.fechaFin}
                    </span>
                  )}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {exp.descripcion}
                </p>

                {/* Link "Saber más" si hay URL */}
                {exp.actual && (
                  <a
                    href="#proyectos"
                    className="inline-flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300 mt-3 transition-colors"
                  >
                    Ver proyectos →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Contenedor>
    </section>
  );
}
