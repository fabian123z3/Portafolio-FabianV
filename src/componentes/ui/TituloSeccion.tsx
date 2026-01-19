interface TituloSeccionProps {
  titulo: string;
  subtitulo?: string;
}

export function TituloSeccion({ titulo, subtitulo }: TituloSeccionProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {titulo}
      </h2>
      {subtitulo && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {subtitulo}
        </p>
      )}
      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full" />
    </div>
  );
}
