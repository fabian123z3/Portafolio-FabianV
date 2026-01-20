import { Flame, Target, Video } from 'lucide-react';
import { Contenedor, TituloSeccion } from '../ui';



export function SeccionSobreMi() {
  return (
    <section id="sobre-mi" className="py-16 sm:py-20 md:py-24 bg-card/30 relative overflow-hidden">
      {/* Decoracion de fondo */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      
      <Contenedor className="relative z-10">
        <TituloSeccion titulo="Sobre Mi" />

        <div className="max-w-4xl mx-auto">
          {/* Texto principal con diseño destacado */}
          <div className="relative mb-8 sm:mb-12">
            <div className="absolute -left-3 sm:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full" />
            <blockquote className="pl-6 sm:pl-8 sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              <span className="text-white font-medium block mb-4 text-xl sm:text-2xl">
                Soy desarrollador porque me gusta crear cosas que la gente realmente use.
              </span>
              Mi enfoque es práctico: código limpio, arquitecturas estables y soluciones que no den dolores de cabeza. Entiendo que detrás de cada requerimiento técnico hay una necesidad de negocio, y mi trabajo es cubrirla de la forma más eficiente posible.
              <br /><br />
              Soy de los que investigan, prueban y resuelven. Si no sé algo, lo aprendo rápido. No necesito que me lleven de la mano; me das un objetivo y busco la mejor forma de cumplirlo.
            </blockquote>
          </div>

          {/* Tarjetas de rasgos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="group p-5 sm:p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-xl sm:rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300">
              <div className="inline-flex p-3 sm:p-4 bg-violet-500/10 rounded-lg sm:rounded-xl mb-3 sm:mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Target className="text-violet-400" size={24} />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Sin Vueltas</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Evito la complejidad innecesaria. Desarrollo soluciones pensadas para funcionar hoy y escalar mañana.</p>
            </div>

            <div className="group p-5 sm:p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-xl sm:rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300">
              <div className="inline-flex p-3 sm:p-4 bg-violet-500/10 rounded-lg sm:rounded-xl mb-3 sm:mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Flame className="text-violet-400" size={24} />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Resolutivo</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Los problemas técnicos son parte del día a día; yo me encargo de que no frenen el desarrollo del proyecto.</p>
            </div>

            <div className="group p-5 sm:p-6 bg-gradient-to-br from-white/5 to-white/0 rounded-xl sm:rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-300">
              <div className="inline-flex p-3 sm:p-4 bg-violet-500/10 rounded-lg sm:rounded-xl mb-3 sm:mb-4 group-hover:bg-violet-500/20 transition-colors">
                <Video className="text-violet-400" size={24} />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Claridad Técnica</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Crear contenido me ha enseñado a traducir conceptos complejos a lenguaje simple, vital para el trabajo en equipo.</p>
            </div>
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
