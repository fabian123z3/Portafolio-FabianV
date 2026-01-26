import { useState } from 'react';
import { Mail, ChevronDown, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Contenedor } from '../ui';

// Web3Forms - servicio gratuito para envío de emails
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export function SeccionContacto() {
  const [abierto, setAbierto] = useState(false);
  const [enviando, setEnviando] = useState(false);
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

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formulario.nombre.trim() || !formulario.email.trim() || !formulario.mensaje.trim()) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    setEnviando(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: formulario.nombre,
          email: formulario.email,
          message: formulario.mensaje,
          to: 'fabianvillablanca97@gmail.com',
          subject: `Nuevo mensaje de ${formulario.nombre} - Portafolio`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Mensaje enviado correctamente', {
          description: 'Te responderé lo antes posible.',
        });
        setFormulario({ nombre: '', email: '', mensaje: '' });
        setAbierto(false);
      } else {
        throw new Error('Error al enviar');
      }
    } catch {
      toast.error('Error al enviar el mensaje', {
        description: 'Por favor intenta de nuevo o escríbeme directamente a fabianvillablanca97@gmail.com',
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="py-10 md:py-14">
      <Contenedor className="max-w-3xl">
        {/* Header desplegable */}
        <button
          onClick={() => setAbierto(!abierto)}
          className="w-full flex items-center justify-between p-4 bg-[#161b22] border border-white/10 rounded-xl hover:border-white/20 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-400/10 rounded-lg">
              <Mail className="text-yellow-400" size={20} />
            </div>
            <div className="text-left">
              <h3 className="text-white font-semibold">¿Quieres contactarme?</h3>
              <p className="text-gray-500 text-sm">Escríbeme un mensaje</p>
            </div>
          </div>
          <ChevronDown 
            className={`text-gray-400 transition-transform duration-300 ${abierto ? 'rotate-180' : ''}`} 
            size={20} 
          />
        </button>

        {/* Formulario desplegable */}
        <div className={`overflow-hidden transition-all duration-300 ${abierto ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
          <form onSubmit={manejarEnvio} className="bg-[#161b22] border border-white/10 rounded-xl p-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="block text-sm text-gray-400 mb-1.5">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Tu nombre"
                  disabled={enviando}
                  className="w-full px-3 py-2 bg-[#0d1117] border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-400/50 transition-colors disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="tu@email.com"
                  disabled={enviando}
                  className="w-full px-3 py-2 bg-[#0d1117] border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-400/50 transition-colors disabled:opacity-50"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="mensaje" className="block text-sm text-gray-400 mb-1.5">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={manejarCambio}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={3}
                disabled={enviando}
                className="w-full px-3 py-2 bg-[#0d1117] border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-yellow-400/50 transition-colors resize-none disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg transition-colors disabled:opacity-50"
            >
              {enviando ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Enviar mensaje
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-500">
              O escríbeme directamente a{' '}
              <a href="mailto:fabianvillablanca97@gmail.com" className="text-yellow-400 hover:underline">
                fabianvillablanca97@gmail.com
              </a>
            </p>
          </form>
        </div>
      </Contenedor>
    </section>
  );
}
