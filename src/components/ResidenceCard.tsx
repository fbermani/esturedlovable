import { Star, MapPin, Users, Shield, ChevronDown, Wifi, BookOpen, Utensils, Shirt, Wind, Flame, Sparkles } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Roommate {
  name: string;
  avatar: string;
  rating: number;
  description: string;
  badges?: string[];
  score?: number;
  hasWarning?: boolean;
}

interface AvailableRoom {
  type: string;
  price: number;
  occupants: Roommate[];
}

interface ResidenceCardProps {
  residenceId: string;
  images: string[];
  title: string;
  location: string;
  rating: number;
  reviews: number;
  verified: boolean;
  currentResidents: number;
  residentsRating: number;
  services: { name: string; icon: string }[];
  availableRooms: AvailableRoom[];
}

const iconMap: Record<string, any> = {
  Wifi, BookOpen, Utensils, Shirt, Wind, Flame, Sparkles, Shield
};

export const ResidenceCard = ({
  residenceId,
  images,
  title,
  location,
  rating,
  reviews,
  verified,
  currentResidents,
  residentsRating,
  services,
  availableRooms,
}: ResidenceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden cursor-pointer group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full h-full"
        >
          <CarouselContent>
            {images.map((img, idx) => (
              <CarouselItem key={idx}>
                <img
                  src={img}
                  alt={`${title} - Imagen ${idx + 1}`}
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {verified && (
            <Badge className="bg-secondary text-secondary-foreground gap-1">
              <Shield className="h-3 w-3" />
              Verificada
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
        
        <TooltipProvider>
          <div className="flex items-center gap-2 mb-3">
            {services.slice(0, 5).map((service, idx) => {
              const IconComponent = iconMap[service.icon] || Wifi;
              return (
                <Tooltip key={idx}>
                  <TooltipTrigger asChild>
                    <div className="p-1.5 rounded-md bg-muted/50 hover:bg-muted transition-colors">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">{service.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>
        
        <div className="flex items-center gap-2 text-sm mb-4">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{currentResidents} residentes</span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-accent text-accent" />
            <span className="font-semibold text-xs">{residentsRating}</span>
          </div>
        </div>
        
        {/* Available Rooms with Occupants */}
        <div className="space-y-3 mb-4">
          {availableRooms.map((room, roomIdx) => (
            <div key={roomIdx} className="border rounded-lg p-3 bg-muted/20">
              <div className="flex items-baseline justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {room.type}
                </Badge>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-primary">${room.price.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground">/mes</span>
                </div>
              </div>
              
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto font-medium text-xs mb-2">
                    {room.occupants.length > 0 ? 'Conocé a tus compañeros' : 'Ver habitación'}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mt-2">
                  {room.occupants.map((occupant, occIdx) => (
                    <div 
                      key={occIdx}
                      className="flex items-start gap-2 p-2 rounded-md bg-background hover:bg-muted/50 cursor-pointer transition-colors"
                      onClick={() => window.location.href = `/estudiante/${occIdx + 1}`}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={occupant.avatar} alt={occupant.name} />
                        <AvatarFallback>{occupant.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                          <span className="font-semibold text-xs">{occupant.name}</span>
                          <div className="flex items-center gap-0.5">
                            <Star className="h-2.5 w-2.5 fill-accent text-accent" />
                            <span className="text-[10px] font-semibold">{occupant.rating}</span>
                          </div>
                          {occupant.badges && occupant.badges.length > 0 && (
                            <div className="flex gap-0.5">
                              {occupant.badges.slice(0, 2).map((badge, bIdx) => (
                                <span key={bIdx} className="text-[10px]">{badge}</span>
                              ))}
                            </div>
                          )}
                        </div>
                        {occupant.score && (
                          <div className="text-[10px] text-primary font-semibold mb-0.5">
                            {occupant.score} pts
                          </div>
                        )}
                        <p className="text-[10px] text-muted-foreground line-clamp-1">{occupant.description}</p>
                      </div>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => {
            navigate(`/residencia/${residenceId}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};
