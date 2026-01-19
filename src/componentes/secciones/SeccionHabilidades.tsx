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
    <section id="habilidades" className="py-24">
      <Contenedor>
        <TituloSeccion
          titulo="Habilidades"
          subtitulo="Tecnologias y herramientas con las que trabajo"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {categorias.map((categoria) => {
            const habilidadesCategoria = habilidades.filter(
              (h) => h.categoria === categoria
            );

            return (
              <div key={categoria} className="bg-gray-800/30 rounded-2xl p-6 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {categoriasNombres[categoria]}
                </h3>
                <div className="space-y-4">
                  {habilidadesCategoria.map((habilidad) => (
                    <div key={habilidad.nombre}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">
                          {habilidad.nombre}
                        </span>
                        <span className="text-violet-400 text-sm">
                          {habilidad.nivel}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
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
