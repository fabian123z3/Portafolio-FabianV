import { Award, ExternalLink } from 'lucide-react';
import { Contenedor } from '../ui';

const certifications = [
  {
    name: 'JavaScript',
    issuer: 'Ver certificado',
    url: '/Certificaciones/javascript.pdf',
  },
  {
    name: 'Python',
    issuer: 'Ver certificado',
    url: '/Certificaciones/python.pdf',
  },
];

export function SeccionCertificaciones() {
  return (
    <section id="certificaciones" className="py-16 md:py-24">
      <Contenedor className="max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-[#161b22] rounded-lg">
            <Award className="text-yellow-400" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Certificaciones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-[#161b22] border border-white/5 rounded-xl hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)] transition-all"
            >
              <div className="p-3 bg-yellow-500/10 rounded-lg">
                <Award className="text-yellow-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
              <ExternalLink className="text-gray-500 group-hover:text-yellow-400 transition-colors" size={18} />
            </a>
          ))}
        </div>
      </Contenedor>
    </section>
  );
}