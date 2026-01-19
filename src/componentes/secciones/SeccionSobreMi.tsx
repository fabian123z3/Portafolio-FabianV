import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { Contenedor, TituloSeccion } from '../ui';
import { datosPersonales } from '../../datos/datosPersonales';

const caracteristicas = [
  {
    icono: Code,
    titulo: 'Codigo Limpio',
    descripcion: 'Escribo codigo mantenible, escalable y bien documentado.',
  },
  {
    icono: Lightbulb,
    titulo: 'Solucion Creativa',
    descripcion: 'Encuentro soluciones innovadoras a problemas complejos.',
  },
  {
    icono: Users,
    titulo: 'Trabajo en Equipo',
    descripcion: 'Colaboro eficientemente con equipos multidisciplinarios.',
  },
  {
    icono: Coffee,
    titulo: 'Aprendizaje Continuo',
    descripcion: 'Siempre actualizado con las ultimas tecnologias.',
  },
];

export function SeccionSobreMi() {
  const { descripcion } = datosPersonales;

  return (
    <section id="sobre-mi" className="py-24 bg-gray-900/50">
      <Contenedor>
        <TituloSeccion
          titulo="Sobre Mi"
          subtitulo="Conoce un poco mas sobre quien soy y lo que hago"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido texto */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {descripcion}
            </p>
            <p className="text-gray-400 leading-relaxed">
              Con experiencia en el desarrollo de aplicaciones web y moviles, 
              me enfoco en crear productos digitales que no solo funcionen bien, 
              sino que tambien ofrezcan una experiencia de usuario excepcional.
            </p>
          </div>

          {/* Tarjetas de caracteristicas */}
          <div className="grid grid-cols-2 gap-4">
            {caracteristicas.map((item) => (
              <div
                key={item.titulo}
                className="p-6 bg-gray-800/50 rounded-xl border border-white/5 hover:border-violet-500/50 transition-all duration-300 group"
              >
                <item.icono className="text-violet-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-white font-semibold mb-2">{item.titulo}</h3>
                <p className="text-gray-400 text-sm">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
