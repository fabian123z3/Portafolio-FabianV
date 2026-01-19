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
    
    // Validaciones
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
      // Simulacion de envio (reemplazar con API real)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Mensaje enviado correctamente', {
        description: 'Te respondere lo antes posible. Gracias por contactarme.',
      });
      
      // Limpiar formulario
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
    <section id="contacto" className="py-24 bg-card/50">
      <Contenedor>
        <TituloSeccion
          titulo="Contacto"
          subtitulo="Trabajemos juntos en tu proximo proyecto"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informacion de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Hablemos
            </h3>
            <p className="text-muted-foreground mb-8">
              Estoy disponible para proyectos freelance, oportunidades laborales 
              o simplemente para conversar sobre tecnologia.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a href={`mailto:${contacto.email}`} className="text-foreground hover:text-primary transition-colors">
                    {contacto.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Ubicacion</p>
                  <span className="text-foreground">{contacto.ubicacion}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={manejarEnvio} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                placeholder="Tu nombre"
                disabled={enviando}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formulario.email}
                onChange={manejarCambio}
                placeholder="tu@email.com"
                disabled={enviando}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={manejarCambio}
                placeholder="Cuentame sobre tu proyecto..."
                rows={5}
                disabled={enviando}
              />
            </div>

            <Button type="submit" className="w-full" disabled={enviando}>
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
