import { BarraNavegacion } from './componentes/navegacion';
import {
  SeccionHero,
  SeccionSobreMi,
  SeccionAlianzas,
  SeccionHabilidades,
  SeccionProyectos,
  SeccionExperiencia,
  SeccionContacto,
  PiePagina,
} from './componentes/secciones';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BarraNavegacion />
      <main>
        <SeccionHero />
        <SeccionSobreMi />
        <SeccionAlianzas />
        <SeccionHabilidades />
        <SeccionProyectos />
        <SeccionExperiencia />
        <SeccionContacto />
      </main>
      <PiePagina />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
