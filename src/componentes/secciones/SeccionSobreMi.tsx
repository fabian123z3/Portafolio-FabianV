import { User } from 'lucide-react';
import { Contenedor } from '../ui';
import fotoPerfil from '../../assets/fotoperfil.png';

export function SeccionSobreMi() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-[#0a0e13]">
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

        {/* Contenido estilo midudev - foto pequeña + texto narrativo */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Foto de perfil */}
          <div className="flex-shrink-0">
            <img
              src={fotoPerfil}
              alt="Fabian Villablanca"
              className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover"
            />
          </div>

          {/* Texto narrativo */}
          <div className="flex-1 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Me llamo <span className="text-white">Fabian</span> y soy desarrollador porque me gusta crear cosas que la gente realmente use. Empecé programando sitios sencillos y hoy lidero proyectos completos con tecnologías modernas.
            </p>

            <p>
              Actualmente trabajo en <span className="text-yellow-400">Zenitx Soluciones Informáticas</span>, donde desarrollo aplicaciones web y móviles para diversos clientes. Además, superviso y mentoreo a estudiantes en práctica, ayudándoles en su desarrollo profesional.
            </p>

            <p>
              Uno de mis proyectos más desafiantes fue crear un <span className="text-white">sistema de control de asistencia con reconocimiento facial</span> que cumple con la normativa laboral chilena. Esto me permitió profundizar en IA aplicada con PyTorch, OpenCV y Milvus.
            </p>

            <p>
              Como <span className="text-white">creador de contenido</span>, comparto lo que aprendo sobre programación en TikTok. Mi objetivo es hacer el desarrollo de software más accesible y ayudar a otros a mejorar sus habilidades técnicas.
            </p>
          </div>
        </div>

        {/* Link estilo midudev */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
          <a
            href="https://github.com/fabian123z3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
          >
            fabian123z3
          </a>
          <span className="text-gray-600">·</span>
          <a
            href="#sobre-mi"
            className="text-gray-500 hover:text-white text-sm transition-colors"
          >
            Sobre mí
          </a>
          <span className="text-gray-600">·</span>
          <a
            href="mailto:fabianvillablanca97@gmail.com"
            className="text-gray-500 hover:text-white text-sm transition-colors"
          >
            Contacto
          </a>
        </div>
      </Contenedor>
    </section>
  );
}
