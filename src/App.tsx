import { BarraNavegacion } from './componentes/navegacion';
import {
  SeccionHero,
  SeccionSobreMi,
  SeccionHabilidades,
  SeccionProyectos,
  SeccionExperiencia,
  SeccionContacto,
  PiePagina,
} from './componentes/secciones';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <BarraNavegacion />
      <main>
        <SeccionHero />
        <SeccionSobreMi />
        <SeccionHabilidades />
        <SeccionProyectos />
        <SeccionExperiencia />
        <SeccionContacto />
      </main>
      <PiePagina />
    </div>
  );
}

export default App;
