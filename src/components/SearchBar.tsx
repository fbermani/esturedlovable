import { Search, MapPin, Home, Users, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export const SearchBar = () => {
  const [roomType, setRoomType] = useState("");
  const [roommateRating, setRoommateRating] = useState([3]);
  const [residenceRating, setResidenceRating] = useState([3]);

  return (
    <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-2 max-w-5xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Ubicación"
            className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
          <Home className="h-5 w-5 text-muted-foreground" />
          <select 
            className="border-0 bg-transparent p-0 w-full text-sm focus:outline-none text-foreground"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="">Tipo de habitación</option>
            <option value="individual">Habitación individual</option>
            <option value="compartida">Habitación compartida</option>
            <option value="apartamento">Apartamento Compartido</option>
          </select>
        </div>

        {(roomType === "compartida" || roomType === "apartamento") && (
          <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
            <Users className="h-5 w-5 text-muted-foreground" />
            <select className="border-0 bg-transparent p-0 w-full text-sm focus:outline-none text-foreground">
              <option value="">Capacidad</option>
              <option value="2">Doble</option>
              <option value="3">Triple</option>
              <option value="4">Cuádruple</option>
              <option value="5">Quintuple</option>
            </select>
          </div>
        )}

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2 bg-background">
              <SlidersHorizontal className="h-5 w-5" />
              Filtros
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filtros avanzados</SheetTitle>
              <SheetDescription>
                Refiná tu búsqueda con características específicas
              </SheetDescription>
            </SheetHeader>
            
            <div className="mt-6 space-y-6">
              <div>
                <Label className="text-base font-semibold mb-3 block">Filtros</Label>
                <div className="space-y-3">
                  {[
                    "Coordinador Presencial",
                    "Cocina Equipada",
                    "Lavandería",
                    "Sala de Estar",
                    "Cámaras de Seguridad",
                    "Sala de Estudio",
                    "Escritorio Personal en Hab.",
                    "Locker de guardado",
                    "Limpieza en Habitaciones",
                    "Atendida por dueños",
                    "Baño Privado x Hab",
                    "Balcón",
                    "Acepta Mascotas",
                    "Aire Acondicionado"
                  ].map((filter) => (
                    <div key={filter} className="flex items-center space-x-2">
                      <Checkbox id={filter} />
                      <label htmlFor={filter} className="text-sm cursor-pointer">
                        {filter}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">
                  Calificación mínima de compañeros: {roommateRating[0]} ★
                </Label>
                <Slider
                  value={roommateRating}
                  onValueChange={setRoommateRating}
                  max={5}
                  min={1}
                  step={0.5}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">
                  Calificación mínima de residencia: {residenceRating[0]} ★
                </Label>
                <Slider
                  value={residenceRating}
                  onValueChange={setResidenceRating}
                  max={5}
                  min={1}
                  step={0.5}
                  className="mt-2"
                />
              </div>

              <Button className="w-full">Aplicar filtros</Button>
            </div>
          </SheetContent>
        </Sheet>
        
        <Button variant="hero" size="lg" className="gap-2">
          <Search className="h-5 w-5" />
          Buscar
        </Button>
      </div>
    </div>
  );
};