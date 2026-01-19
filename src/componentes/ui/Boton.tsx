import type { ReactNode } from 'react';

interface BotonProps {
  children: ReactNode;
  variante?: 'primario' | 'secundario' | 'contorno';
  href?: string;
  onClick?: () => void;
  className?: string;
  tipo?: 'button' | 'submit';
}

export function Boton({
  children,
  variante = 'primario',
  href,
  onClick,
  className = '',
  tipo = 'button',
}: BotonProps) {
  const estilosBase = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer';
  
  const variantes = {
    primario: 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-violet-500/25',
    secundario: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
    contorno: 'border-2 border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white',
  };

  const estilosCombinados = `${estilosBase} ${variantes[variante]} ${className}`;

  if (href) {
    const esEnlaceInterno = href.startsWith('#');
    return (
      <a 
        href={href} 
        className={estilosCombinados} 
        target={esEnlaceInterno ? undefined : '_blank'} 
        rel={esEnlaceInterno ? undefined : 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={tipo} onClick={onClick} className={estilosCombinados}>
      {children}
    </button>
  );
}
