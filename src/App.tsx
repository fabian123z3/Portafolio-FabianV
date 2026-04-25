import { BarraNavegacion } from './componentes/navegacion';
import {
  SeccionHero,
  SeccionHabilidades,
  SeccionProyectos,
  SeccionCertificaciones,
  SeccionExperiencia,
  SeccionAlianzas,
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
        <SeccionHabilidades />
        <SeccionProyectos />
        <SeccionCertificaciones />
        <SeccionExperiencia />
        <SeccionAlianzas />
        <SeccionContacto />
      </main>
      <PiePagina />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
