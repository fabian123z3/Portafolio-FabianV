import { Contenedor, TituloSeccion } from '../ui';

const tecnologias = [
  {
    nombre: 'React / React Native',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    nombre: 'TypeScript',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    nombre: 'JavaScript',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    nombre: 'Python',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    nombre: 'Django',
    icono: 'https://img.icons8.com/color/96/django.png',
  },
  {
    nombre: 'FastAPI',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  },
  {
    nombre: 'Docker',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    nombre: 'Git',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    nombre: 'MySQL',
    icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    nombre: 'Notion',
    icono: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
  },
  {
    nombre: 'Make',
    icono: 'https://cdn.simpleicons.org/make/6D00CC',
  },
  {
    nombre: 'shadcn/ui',
    icono: 'https://ui.shadcn.com/apple-touch-icon.png',
  },
  {
    nombre: 'GitHub',
    icono: 'https://cdn.simpleicons.org/github/white',
  },
  {
    nombre: 'n8n',
    icono: 'https://cdn.simpleicons.org/n8n/EA4B71',
  },
  {
    nombre: 'TanStack',
    icono: 'https://avatars.githubusercontent.com/u/72518640?s=200&v=4',
  },
];

export function SeccionHabilidades() {
  return (
    <section id="habilidades" className="py-16 sm:py-20 md:py-24">
      <Contenedor>
        <TituloSeccion
          titulo="Tecnologias"
          subtitulo="Herramientas y tecnologias con las que trabajo"
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4 sm:gap-5 justify-items-center">
            {tecnologias.map((tech) => (
              <div
                key={tech.nombre}
                className="group flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-xl border border-white/10 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <img
                    src={tech.icono}
                    alt={tech.nombre}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-gray-300 text-[10px] sm:text-xs text-center font-medium">
                  {tech.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Contenedor>
    </section>
  );
}
