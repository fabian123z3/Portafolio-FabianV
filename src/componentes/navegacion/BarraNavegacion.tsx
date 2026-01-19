import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const enlaces = [
  { nombre: 'Inicio', href: '#inicio' },
  { nombre: 'Sobre Mi', href: '#sobre-mi' },
  { nombre: 'Habilidades', href: '#habilidades' },
  { nombre: 'Proyectos', href: '#proyectos' },
  { nombre: 'Experiencia', href: '#experiencia' },
  { nombre: 'Contacto', href: '#contacto' },
];

export function BarraNavegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="text-xl font-bold text-white">
            <span className="text-violet-400">F</span>V
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {enlaces.map((enlace) => (
              <a
                key={enlace.nombre}
                href={enlace.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {enlace.nombre}
              </a>
            ))}
          </div>

          {/* Boton Menu Movil */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Menu"
          >
            {menuAbierto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Movil */}
        {menuAbierto && (
          <div className="md:hidden py-4 border-t border-white/10">
            {enlaces.map((enlace) => (
              <a
                key={enlace.nombre}
                href={enlace.href}
                className="block py-3 text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuAbierto(false)}
              >
                {enlace.nombre}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
