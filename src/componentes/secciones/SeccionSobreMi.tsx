import { User } from 'lucide-react';
import { Contenedor } from '../ui';

export function SeccionSobreMi() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24">
      <Contenedor className="max-w-3xl">
        {/* Título con icono como midudev */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-[#161b22] rounded-lg">
            <User className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Sobre mí
          </h2>
        </div>

        {/* Contenido narrativo estilo midudev */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            Me llamo <span className="text-white font-medium">Fabian Villablanca</span> y soy{' '}
            <span className="text-yellow-400">desarrollador porque me gusta crear cosas que la gente realmente use</span>.
            Empecé programando sitios sencillos y hoy lidero proyectos completos con tecnologías
            modernas.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Mi enfoque es práctico: <span className="text-white">código limpio, arquitecturas estables y soluciones 
            que no den dolores de cabeza</span>. Entiendo que detrás de cada requerimiento técnico hay una 
            necesidad de negocio, y mi trabajo es cubrirla de la forma más eficiente posible.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Actualmente trabajo en <span className="text-yellow-400/90">Zenitx Soluciones Informáticas</span>,{' '}
            donde desarrollo aplicaciones web y móviles para diversos clientes. 
            Uno de mis proyectos más desafiantes fue crear un{' '}
            <span className="text-white">sistema de control de asistencia con reconocimiento facial</span>{' '}
            que cumple con la normativa laboral chilena.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Como <span className="text-white">creador de contenido</span>, comparto lo que aprendo sobre 
            programación en TikTok. Mi objetivo es hacer el desarrollo de software más accesible 
            y ayudar a otros a mejorar sus habilidades técnicas.
          </p>
        </div>

        {/* Link al perfil */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <a
            href="https://github.com/fabian123z3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 font-medium inline-flex items-center gap-2 transition-colors"
          >
            fabian123z3 →
          </a>
        </div>
      </Contenedor>
    </section>
  );
}
