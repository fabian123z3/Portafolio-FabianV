import { BarraNavegacion } from './componentes/navegacion';
import {
  SeccionHero,
  SeccionExperiencia,
  SeccionProyectos,
  SeccionSobreMi,
  PiePagina,
} from './componentes/secciones';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <BarraNavegacion />
      <main>
        <SeccionHero />
        <SeccionExperiencia />
        <SeccionProyectos />
        <SeccionSobreMi />
      </main>
      <PiePagina />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
