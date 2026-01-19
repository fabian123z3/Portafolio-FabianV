import { Contenedor } from '../ui';
import logoZenitx from '../../assets/zenitx.png';

export function SeccionAlianzas() {
  return (
    <section className="py-16 border-y border-white/5">
      <Contenedor>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <p className="text-gray-400 text-lg font-medium">
            Alianza Estrategica
          </p>
          
          <a
            href="https://zenitx.com/nuestra-empresa/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-4 px-6 py-4 bg-white/5 rounded-xl border border-white/10 hover:border-violet-500/50 transition-all duration-300">
              <img
                src={logoZenitx}
                alt="ZenitX - Alianza Estrategica"
                className="h-12 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <p className="text-white font-semibold">ZenitX</p>
                <p className="text-gray-400 text-sm">Partner Oficial</p>
              </div>
            </div>
          </a>
        </div>
      </Contenedor>
    </section>
  );
}
