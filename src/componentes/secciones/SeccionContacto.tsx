import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Contenedor, TituloSeccion, Boton } from '../ui';
import { datosPersonales } from '../../datos/datosPersonales';

export function SeccionContacto() {
  const { contacto } = datosPersonales;
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui iria la logica de envio
    console.log('Formulario enviado:', formulario);
  };

  return (
    <section id="contacto" className="py-24 bg-gray-900/50">
      <Contenedor>
        <TituloSeccion
          titulo="Contacto"
          subtitulo="Trabajemos juntos en tu proximo proyecto"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informacion de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Hablemos
            </h3>
            <p className="text-gray-400 mb-8">
              Estoy disponible para proyectos freelance, oportunidades laborales 
              o simplemente para conversar sobre tecnologia.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-violet-500/10 rounded-lg">
                  <Mail className="text-violet-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href={`mailto:${contacto.email}`} className="text-white hover:text-violet-400 transition-colors">
                    {contacto.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-violet-500/10 rounded-lg">
                  <MapPin className="text-violet-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Ubicacion</p>
                  <span className="text-white">{contacto.ubicacion}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={manejarEnvio} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-gray-300 mb-2 font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formulario.email}
                onChange={manejarCambio}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-gray-300 mb-2 font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={manejarCambio}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                placeholder="Cuentame sobre tu proyecto..."
              />
            </div>

            <Boton tipo="submit" variante="primario" className="w-full">
              <Send size={18} />
              Enviar Mensaje
            </Boton>
          </form>
        </div>
      </Contenedor>
    </section>
  );
}
