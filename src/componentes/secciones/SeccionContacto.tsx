import { useState } from 'react';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Contenedor, TituloSeccion } from '../ui';
import { datosPersonales } from '../../datos/datosPersonales';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function SeccionContacto() {
  const { contacto } = datosPersonales;
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
    
    if (!formulario.nombre.trim()) {
      toast.error('Por favor ingresa tu nombre');
      return;
    }
    if (!formulario.email.trim()) {
      toast.error('Por favor ingresa tu email');
      return;
    }
    if (!formulario.mensaje.trim()) {
      toast.error('Por favor ingresa un mensaje');
      return;
    }

    setEnviando(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Mensaje enviado correctamente', {
        description: 'Te respondere lo antes posible. Gracias por contactarme.',
      });
      
      setFormulario({
        nombre: '',
        email: '',
        mensaje: '',
      });
    } catch {
      toast.error('Error al enviar el mensaje', {
        description: 'Por favor intenta nuevamente.',
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-24 bg-card/50">
      <Contenedor>
        <TituloSeccion
          titulo="Contacto"
          subtitulo="Trabajemos juntos en tu proximo proyecto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto">
          {/* Informacion de contacto */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Hablemos
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
              Estoy disponible para proyectos freelance, oportunidades laborales 
              o simplemente para conversar sobre tecnologia.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs sm:text-sm">Email</p>
                  <a href={`mailto:${contacto.email}`} className="text-foreground hover:text-primary transition-colors text-sm sm:text-base break-all">
                    {contacto.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs sm:text-sm">Ubicacion</p>
                  <span className="text-foreground text-sm sm:text-base">{contacto.ubicacion}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={manejarEnvio} className="space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="nombre" className="text-sm sm:text-base">Nombre</Label>
              <Input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                placeholder="Tu nombre"
                disabled={enviando}
                className="h-10 sm:h-11"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formulario.email}
                onChange={manejarCambio}
                placeholder="tu@email.com"
                disabled={enviando}
                className="h-10 sm:h-11"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="mensaje" className="text-sm sm:text-base">Mensaje</Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={manejarCambio}
                placeholder="Cuentame sobre tu proyecto..."
                rows={4}
                disabled={enviando}
              />
            </div>

            <Button type="submit" className="w-full h-10 sm:h-11" disabled={enviando}>
              {enviando ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar Mensaje
                </>
              )}
            </Button>
          </form>
        </div>
      </Contenedor>
    </section>
  );
}
