import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Calendar, User } from "lucide-react";
import { useState } from "react";

interface BookingFormProps {
  residenceName: string;
  roomType: string;
  price: number;
  onClose: () => void;
}

export const BookingForm = ({ residenceName, roomType, price, onClose }: BookingFormProps) => {
  const [step, setStep] = useState(1);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Formulario de Reserva</h2>
      <p className="text-muted-foreground mb-6">
        {residenceName} - Habitación {roomType}
      </p>

      {step === 1 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <User className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Datos del estudiante</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Nombre</Label>
              <Input id="firstName" placeholder="Juan" />
            </div>
            <div>
              <Label htmlFor="lastName">Apellido</Label>
              <Input id="lastName" placeholder="Pérez" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="juan@email.com" />
          </div>

          <div>
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" type="tel" placeholder="+54 11 1234-5678" />
          </div>

          <div>
            <Label htmlFor="dni">DNI</Label>
            <Input id="dni" placeholder="12345678" />
          </div>

          <div>
            <Label htmlFor="university">Universidad</Label>
            <Input id="university" placeholder="Universidad de Buenos Aires" />
          </div>

          <div className="flex items-center gap-2 mt-6 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Período de estadía</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startDate">Fecha de entrada</Label>
              <Input id="startDate" type="date" />
            </div>
            <div>
              <Label htmlFor="endDate">Fecha de salida (estimada)</Label>
              <Input id="endDate" type="date" />
            </div>
          </div>

          <Separator className="my-6" />

          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Precio mensual</span>
              <span className="font-semibold">${price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Depósito (1 mes)</span>
              <span className="font-semibold">${price.toLocaleString()}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total inicial</span>
              <span className="text-primary">${(price * 2).toLocaleString()}</span>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Cancelar
            </Button>
            <Button className="flex-1" onClick={() => setStep(2)}>
              Continuar al pago
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Información de pago</h3>
          </div>

          <div>
            <Label htmlFor="cardNumber">Número de tarjeta</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Vencimiento</Label>
              <Input id="expiry" placeholder="MM/AA" />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" />
            </div>
          </div>

          <div>
            <Label htmlFor="cardName">Nombre en la tarjeta</Label>
            <Input id="cardName" placeholder="JUAN PEREZ" />
          </div>

          <Separator className="my-6" />

          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex justify-between text-lg font-bold">
              <span>Total a pagar</span>
              <span className="text-primary">${(price * 2).toLocaleString()}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Se procesará el pago del primer mes + depósito
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
              Volver
            </Button>
            <Button className="flex-1">
              Confirmar pago
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};