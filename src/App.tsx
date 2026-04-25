import { BarraNavegacion } from './componentes/navegacion';
import {
  SeccionHero,
  SeccionExperiencia,
  SeccionProyectos,
  SeccionHabilidades,
  SeccionSobreMi,
  SeccionContacto,
  PiePagina,
} from './componentes/secciones';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <BarraNavegacion />
      <main>
        <SeccionHero />
        <SeccionSobreMi />
        <SeccionExperiencia />
        <SeccionProyectos />
        <SeccionHabilidades />
        <SeccionContacto />
      </main>
      <PiePagina />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
