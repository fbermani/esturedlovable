import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SearchBar = () => {
  return (
    <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-2 max-w-5xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Ciudad o universidad"
            className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Fecha de ingreso"
            type="date"
            className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
          <Users className="h-5 w-5 text-muted-foreground" />
          <select className="border-0 bg-transparent p-0 w-full text-sm focus:outline-none text-foreground">
            <option>Habitación individual</option>
            <option>Habitación compartida</option>
            <option>Apartamento completo</option>
          </select>
        </div>
        
        <Button variant="hero" size="lg" className="gap-2">
          <Search className="h-5 w-5" />
          Buscar
        </Button>
      </div>
    </div>
  );
};
