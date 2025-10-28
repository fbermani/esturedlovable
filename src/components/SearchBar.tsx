import { Search, MapPin, Home, Star, SlidersHorizontal } from "lucide-react";
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
  const [rating, setRating] = useState(0);
  const [roommateRating, setRoommateRating] = useState([3]);

  return (
    <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-2 max-w-5xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Ubicación"
            className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
          <Home className="h-5 w-5 text-muted-foreground" />
          <select className="border-0 bg-transparent p-0 w-full text-sm focus:outline-none text-foreground">
            <option value="">Tipo de habitación</option>
            <option>Habitación individual</option>
            <option>Habitación compartida</option>
            <option>Apartamento completo</option>
          </select>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
          <Star className="h-5 w-5 text-muted-foreground" />
          <select 
            className="border-0 bg-transparent p-0 w-full text-sm focus:outline-none text-foreground"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value="0">Calificación</option>
            <option value="5">5 estrellas</option>
            <option value="4">4+ estrellas</option>
            <option value="3">3+ estrellas</option>
            <option value="2">2+ estrellas</option>
            <option value="1">1+ estrellas</option>
          </select>
        </div>

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
                <Label className="text-base font-semibold mb-3 block">Servicios</Label>
                <div className="space-y-3">
                  {["WiFi", "Lavandería", "Cocina equipada", "Gimnasio", "Estudio compartido", "Limpieza incluida"].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox id={service} />
                      <label htmlFor={service} className="text-sm cursor-pointer">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Características</Label>
                <div className="space-y-3">
                  {["Cerca de universidades", "Transporte público", "Seguridad 24/7", "Mascotas permitidas", "Baño privado", "Balcón"].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox id={feature} />
                      <label htmlFor={feature} className="text-sm cursor-pointer">
                        {feature}
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