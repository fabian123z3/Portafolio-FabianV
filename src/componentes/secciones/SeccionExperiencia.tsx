import { Briefcase, Calendar } from 'lucide-react';
import { Contenedor, TituloSeccion } from '../ui';
import { experiencias } from '../../datos/datosPersonales';

export function SeccionExperiencia() {
  return (
    <section id="experiencia" className="py-24">
      <Contenedor>
        <TituloSeccion
          titulo="Experiencia"
          subtitulo="Mi trayectoria profesional"
        />

        <div className="relative">
          {/* Linea del timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 to-indigo-500" />

          <div className="space-y-12">
            {experiencias.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Punto del timeline */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-violet-500 rounded-full -translate-x-1.5 md:-translate-x-2 mt-1.5 border-4 border-gray-950" />

                {/* Contenido */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="bg-gray-800/50 rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-violet-500/10 rounded-lg">
                        <Briefcase className="text-violet-400" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.cargo}</h3>
                        <p className="text-violet-400 font-medium">{exp.empresa}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <Calendar size={14} />
                      <span>
                        {exp.fechaInicio} - {exp.actual ? 'Presente' : exp.fechaFin}
                      </span>
                    </div>

                    <p className="text-gray-400">{exp.descripcion}</p>
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
