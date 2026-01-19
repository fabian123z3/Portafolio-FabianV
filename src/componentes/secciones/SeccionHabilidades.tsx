import { Contenedor, TituloSeccion } from '../ui';
import { habilidades } from '../../datos/datosPersonales';

const categoriasNombres = {
  frontend: 'Frontend',
  backend: 'Backend',
  herramientas: 'Herramientas',
  otros: 'Otros',
};

export function SeccionHabilidades() {
  const categorias = ['frontend', 'backend', 'herramientas'] as const;

  return (
    <section id="habilidades" className="py-16 sm:py-20 md:py-24">
      <Contenedor>
        <TituloSeccion
          titulo="Habilidades"
          subtitulo="Tecnologias y herramientas con las que trabajo"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categorias.map((categoria) => {
            const habilidadesCategoria = habilidades.filter(
              (h) => h.categoria === categoria
            );

            return (
              <div key={categoria} className="bg-gray-800/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/5">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">
                  {categoriasNombres[categoria]}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {habilidadesCategoria.map((habilidad) => (
                    <div key={habilidad.nombre}>
                      <div className="flex justify-between mb-1.5 sm:mb-2">
                        <span className="text-gray-300 font-medium text-sm sm:text-base">
                          {habilidad.nombre}
                        </span>
                        <span className="text-violet-400 text-xs sm:text-sm">
                          {habilidad.nivel}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-1000"
                          style={{ width: `${habilidad.nivel}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Contenedor>
    </section>
  );
}
