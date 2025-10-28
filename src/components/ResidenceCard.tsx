import { Star, MapPin, Users, Shield, ChevronDown, Wifi } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface Roommate {
  name: string;
  avatar: string;
  rating: number;
  description: string;
}

interface ResidenceCardProps {
  image: string;
  title: string;
  location: string;
  priceMin: number;
  priceMax: number;
  rating: number;
  reviews: number;
  verified: boolean;
  availability: string[];
  currentResidents: number;
  residentsRating: number;
  highlightedService: string;
  roommates: Roommate[];
}

export const ResidenceCard = ({
  image,
  title,
  location,
  priceMin,
  priceMax,
  rating,
  reviews,
  verified,
  availability,
  currentResidents,
  residentsRating,
  highlightedService,
  roommates,
}: ResidenceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="overflow-hidden cursor-pointer group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {verified && (
            <Badge className="bg-secondary text-secondary-foreground gap-1">
              <Shield className="h-3 w-3" />
              Verificada
            </Badge>
          )}
          {availability.length > 0 && (
            <Badge className="bg-primary text-primary-foreground gap-1">
              {availability.join(" • ")}
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center gap-1 shrink-0 ml-2">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Wifi className="h-4 w-4" />
          <span>{highlightedService}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm mb-4">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{currentResidents} residentes</span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-accent text-accent" />
            <span className="font-semibold text-xs">{residentsRating}</span>
          </div>
        </div>
        
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-2xl font-bold text-primary">${priceMin.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">- ${priceMax.toLocaleString()}/mes</span>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-0 h-auto font-semibold text-sm">
              Conocé a tus posibles compañeros
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 space-y-3">
            {roommates.map((roommate, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={roommate.avatar} alt={roommate.name} />
                  <AvatarFallback>{roommate.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{roommate.name}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      <span className="text-xs font-semibold">{roommate.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{roommate.description}</p>
                </div>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Button variant="outline" className="w-full">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};
