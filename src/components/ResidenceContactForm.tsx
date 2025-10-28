import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ResidenceContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ResidenceContactForm = ({ open, onOpenChange }: ResidenceContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    residenceName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Gracias por tu interés! Nos contactaremos pronto.");
    onOpenChange(false);
    setFormData({ name: "", email: "", phone: "", residenceName: "", message: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Registrar mi residencia</DialogTitle>
          <DialogDescription className="text-base space-y-3 pt-2">
            <p>
              Para aparecer en nuestro listado, la única condición es utilizar nuestro <strong>PMS gratuito</strong>, 
              ya que conecta la disponibilidad en tiempo real con nuestro buscador.
            </p>
            <p>
              Tu residencia deberá pasar nuestro <strong>proceso de verificación</strong> para garantizar 
              la confianza de la comunidad.
            </p>
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="residenceName">Nombre de la residencia *</Label>
            <Input
              id="residenceName"
              required
              value={formData.residenceName}
              onChange={(e) => setFormData({ ...formData, residenceName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje adicional</Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Contanos sobre tu residencia..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Enviar solicitud
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
