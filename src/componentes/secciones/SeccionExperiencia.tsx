import { Briefcase, Calendar } from 'lucide-react';
import { Contenedor, TituloSeccion } from '../ui';
import { experiencias } from '../../datos/datosPersonales';

export function SeccionExperiencia() {
  return (
    <section id="experiencia" className="py-16 sm:py-20 md:py-24">
      <Contenedor>
        <TituloSeccion
          titulo="Experiencia"
          subtitulo="Mi trayectoria profesional"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Linea del timeline */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 to-indigo-500" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiencias.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Punto del timeline */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-violet-500 rounded-full -translate-x-1.5 sm:-translate-x-2 mt-2 border-2 sm:border-4 border-gray-950" />

                {/* Contenido */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'} pl-10 sm:pl-14 md:pl-0`}>
                  <div className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/5 hover:border-violet-500/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="p-1.5 sm:p-2 bg-violet-500/10 rounded-lg w-fit">
                        <Briefcase className="text-violet-400" size={18} />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white">{exp.cargo}</h3>
                        <p className="text-violet-400 font-medium text-sm sm:text-base">{exp.empresa}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      <Calendar size={12} />
                      <span>
                        {exp.fechaInicio} - {exp.actual ? 'Presente' : exp.fechaFin}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm sm:text-base">{exp.descripcion}</p>
                  </div>
                </div>

                {/* Espacio para el otro lado */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
