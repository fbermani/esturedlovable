import { Star, MapPin, Users, Shield } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ResidenceCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  capacity: string;
  verified: boolean;
}

export const ResidenceCard = ({
  image,
  title,
  location,
  price,
  rating,
  reviews,
  capacity,
  verified,
}: ResidenceCardProps) => {
  return (
    <Card className="overflow-hidden cursor-pointer group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {verified && (
          <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground gap-1">
            <Shield className="h-3 w-3" />
            Verificada
          </Badge>
        )}
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
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm mb-4">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{capacity}</span>
        </div>
        
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-primary">${price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">/mes</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Button variant="outline" className="w-full">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};
