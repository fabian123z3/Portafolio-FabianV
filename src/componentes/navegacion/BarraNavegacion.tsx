import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const enlaces = [
  { nombre: 'Experiencia', href: '#experiencia' },
  { nombre: 'Proyectos', href: '#proyectos' },
  { nombre: 'Sobre mí', href: '#sobre-mi' },
  { nombre: 'Contacto', href: 'mailto:fabianvillablanca97@gmail.com' },
];

export function BarraNavegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8">
      <nav className="max-w-3xl mx-auto flex items-center justify-between bg-[#161b22]/80 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10">
        {/* Logo/Nombre */}
        <a 
          href="#inicio" 
          className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors"
        >
          fabian<span className="text-yellow-400">.</span>dev
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {enlaces.map((enlace) => (
            <a
              key={enlace.nombre}
              href={enlace.href}
              className="px-3 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200 text-sm"
            >
              {enlace.nombre}
            </a>
          ))}
        </div>

        {/* Boton Menu Movil */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-2"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Menu"
        >
          {menuAbierto ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Menu Movil Dropdown */}
      {menuAbierto && (
        <div className="md:hidden max-w-3xl mx-auto mt-2">
          <div className="bg-[#161b22]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4">
            {enlaces.map((enlace) => (
              <a
                key={enlace.nombre}
                href={enlace.href}
                className="block py-3 text-gray-400 hover:text-white transition-colors border-b border-white/5 last:border-0"
                onClick={() => setMenuAbierto(false)}
              >
                {enlace.nombre}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
