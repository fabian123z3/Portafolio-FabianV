import { Briefcase } from 'lucide-react';
import { Contenedor } from '../ui';
import { experiencias } from '../../datos/datosPersonales';

export function SeccionExperiencia() {
  return (
    <section id="experiencia" className="py-16 md:py-24">
      <Contenedor className="max-w-3xl">
        {/* Título con icono */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-[#161b22] rounded-lg">
            <Briefcase className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Experiencia laboral
          </h2>
        </div>

        {/* Timeline de experiencias */}
        <div className="space-y-8">
          {experiencias.map((exp, index) => (
            <div key={exp.id} className="relative flex gap-6">
              {/* Número/punto del timeline */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-[#161b22] rounded-full border border-white/10">
                  <span className="text-xs font-bold text-yellow-400">{index + 1}</span>
                </div>
                {index < experiencias.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 mt-2" />
                )}
              </div>

              {/* Contenido */}
              <div className="flex-1 pb-2">
                {/* Estado actual */}
                {exp.actual && (
                  <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-green-500/10 text-green-400 rounded-full mb-2">
                    Actualmente...
                  </span>
                )}

                <h3 className="text-lg font-semibold text-white">
                  {exp.cargo}
                </h3>

                <p className="text-yellow-400/90 font-medium text-sm mb-2">
                  {exp.empresa}
                  <span className="text-gray-500 ml-2">
                    {exp.fechaInicio} - {exp.fechaFin}
                  </span>
                </p>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {exp.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Contenedor>
    </section>
  );
}
