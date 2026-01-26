import { Contenedor } from '../ui';
import { datosPersonales } from '../../datos/datosPersonales';

export function PiePagina() {
  const { nombre } = datosPersonales;

  return (
    <footer className="py-10 border-t border-white/5">
      <Contenedor className="max-w-3xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">fabian<span className="text-yellow-400">.</span>dev</span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-500">Desarrollado por {nombre.split(' ')[0]}</span>
          </div>

          <nav className="flex items-center gap-4 text-gray-500">
            <a href="#sobre-mi" className="hover:text-white transition-colors">
              Sobre mí
            </a>
            <a href="mailto:fabianvillablanca97@gmail.com" className="hover:text-white transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </Contenedor>
    </footer>
  );
}
