import { Contenedor, TituloSeccion } from '../ui';

const categoriasHabilidades = [
  {
    titulo: 'Frontend & Móvil',
    tecnologias: [
      { nombre: 'React / Native', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { nombre: 'TypeScript', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { nombre: 'Tailwind CSS', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { nombre: 'Flutter', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { nombre: 'TanStack', icono: 'https://avatars.githubusercontent.com/u/72518640?s=200&v=4' },
      { nombre: 'shadcn/ui', icono: 'https://ui.shadcn.com/apple-touch-icon.png' },
    ],
  },
  {
    titulo: 'Backend & Bases de Datos',
    tecnologias: [
      { nombre: 'Python', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { nombre: 'Django', icono: 'https://img.icons8.com/color/96/django.png' },
      { nombre: 'FastAPI', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { nombre: 'MySQL', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { nombre: 'Milvus', icono: 'https://milvus.io/favicon.ico' },
    ],
  },
  {
    titulo: 'Testing & Calidad',
    tecnologias: [
      { nombre: 'PyTest', icono: 'https://cdn.simpleicons.org/pytest/009FE3' },
      { nombre: 'Ruff', icono: 'https://cdn.simpleicons.org/ruff/fff044' },
      { nombre: 'Jest', icono: 'https://cdn.simpleicons.org/jest/c15d1e' },
      { nombre: 'Vitest', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg' },
    ],
  },
  {
    titulo: 'IA & Machine Learning',
    tecnologias: [
      { nombre: 'YOLO v8', icono: 'https://avatars.githubusercontent.com/u/26833433' },
      { nombre: 'OpenCV', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { nombre: 'PyTorch', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { nombre: 'Google Colab', icono: 'https://cdn.simpleicons.org/googlecolab/F9AB00' },
    ],
  },
  {
    titulo: 'DevOps & Cloud',
    tecnologias: [
      { nombre: 'Docker', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { nombre: 'GitHub Actions', icono: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { nombre: 'Railway', icono: 'https://cdn.simpleicons.org/railway/FFFFFF' },
      { nombre: 'Cloudflare', icono: 'https://cdn.simpleicons.org/cloudflare/F38020' },
      { nombre: 'Google Cloud', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { nombre: 'Vercel', icono: 'https://cdn.simpleicons.org/vercel/white' },
      { nombre: 'Netlify', icono: 'https://cdn.simpleicons.org/netlify/00ADBB' },
      { nombre: 'Git', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
  },
  {
    titulo: 'Herramientas & Automatización',
    tecnologias: [
      { nombre: 'n8n', icono: 'https://cdn.simpleicons.org/n8n/EA4B71' },
      { nombre: 'Make', icono: 'https://cdn.simpleicons.org/make/6D00CC' },
      { nombre: 'Notion', icono: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
      { nombre: 'Slack', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
      { nombre: 'Android Studio', icono: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
    ],
  },
];

export function SeccionHabilidades() {
  return (
    <section id="habilidades" className="py-16 sm:py-20 md:py-24">
      <Contenedor>
        <TituloSeccion
          titulo="Habilidades Técnicas"
          subtitulo="Especializado en arquitecturas modernas, IA y soluciones escalables"
        />

        <div className="max-w-6xl mx-auto space-y-12">
          {categoriasHabilidades.map((categoria) => (
            <div key={categoria.titulo} className="space-y-6">
              <h3 className="text-lg font-semibold text-yellow-400/90 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-yellow-400/30"></span>
                {categoria.titulo}
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-start">
                {categoria.tecnologias.map((tech) => (
                  <div
                    key={tech.nombre}
                    className="group flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-800/30 rounded-xl border border-white/5 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 w-full"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <img
                        src={tech.icono}
                        alt={tech.nombre}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-gray-400 group-hover:text-white text-[10px] sm:text-xs text-center font-medium transition-colors">
                      {tech.nombre}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Contenedor>
    </section>
  );
}
