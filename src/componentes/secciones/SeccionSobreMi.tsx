import { Code, Flame, Video, Target } from 'lucide-react';
import { Contenedor, TituloSeccion } from '../ui';

const rasgos = [
  {
    icono: Flame,
    titulo: 'Apasionado',
    descripcion: 'Disfruto cada linea de codigo',
  },
  {
    icono: Target,
    titulo: 'Perseverante',
    descripcion: 'No paro hasta lograr el objetivo',
  },
  {
    icono: Video,
    titulo: 'Creador',
    descripcion: 'Comparto en TikTok lo que aprendo',
  },
];

export function SeccionSobreMi() {
  return (
    <section id="sobre-mi" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Decoracion de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      
      <Contenedor className="relative z-10">
        <TituloSeccion titulo="Sobre Mi" />

        <div className="max-w-4xl mx-auto">
          {/* Texto principal con diseño destacado */}
          <div className="relative mb-12">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full" />
            <blockquote className="pl-8 text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic">
              "Soy Fabian, desarrollador full stack con ganas de hacer las cosas bien. 
              Me motivan los desafios, soy perseverante cuando algo no sale a la primera 
              y me gusta compartir lo que aprendo en mi TikTok sobre programacion."
            </blockquote>
          </div>

          {/* Tarjetas de rasgos */}
          <div className="grid md:grid-cols-3 gap-6">
            {rasgos.map((rasgo) => (
              <div
                key={rasgo.titulo}
                className="group p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 bg-violet-500/10 rounded-xl mb-4 group-hover:bg-violet-500/20 transition-colors">
                  <rasgo.icono className="text-violet-400" size={28} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{rasgo.titulo}</h3>
                <p className="text-gray-400 text-sm">{rasgo.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
