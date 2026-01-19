import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Contenedor } from '../ui';
import { datosPersonales } from '../../datos/datosPersonales';

export function PiePagina() {
  const { nombre, contacto } = datosPersonales;
  const anioActual = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10">
      <Contenedor>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Desarrollado con <Heart size={14} className="text-red-500" /> por {nombre.split(' ').slice(0, 2).join(' ')}
          </p>

          <p className="text-gray-500 text-sm">
            {anioActual} - Todos los derechos reservados
          </p>

          <div className="flex items-center gap-4">
            {contacto.github && (
              <a
                href={contacto.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {contacto.linkedin && (
              <a
                href={contacto.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            <a
              href={`mailto:${contacto.email}`}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </Contenedor>
    </footer>
  );
}
