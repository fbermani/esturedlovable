import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  MapPin,
  Shield,
  Wifi,
  Users,
  CheckCircle,
  Phone,
  Mail,
  Home,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

interface RoomDetails {
  type: string;
  price: number;
  available: number;
  total: number;
  occupants: {
    name: string;
    avatar: string;
    rating: number;
    badges?: string[];
    score?: number;
    hasWarning?: boolean;
  }[];
}

export default function ResidenceDetails() {
  const { id } = useParams();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  // Mock data - in a real app this would come from an API based on the ID
  const residence = {
    id,
    title: "Residencia San Martín",
    mainImage: "/src/assets/hostel-room-1.jpg",
    location: "Centro, Buenos Aires",
    fullAddress: "Av. San Martín 1234, Ciudad Autónoma de Buenos Aires",
    rating: 4.8,
    reviews: 127,
    verified: true,
    description:
      "Residencia moderna y acogedora en el corazón del centro porteño. Contamos con espacios comunes amplios, zona de estudio 24hs y una comunidad estudiantil vibrante. Nuestro objetivo es crear un ambiente seguro y propicio para el desarrollo académico y personal de cada residente.",
    proration: true,
    coordinator: "Residencia atendida por coordinador in-site",
    currentResidents: 24,
    services: [
      "WiFi Alta Velocidad",
      "Zona de Estudio 24hs",
      "Cocina Equipada",
      "Lavandería",
      "Aire Acondicionado",
      "Calefacción",
      "Seguridad 24hs",
      "Limpieza de Áreas Comunes",
    ],
    commonAreas: [
      "Living Comunitario",
      "Cocina Integrada",
      "Sala de Estudio",
      "Terraza con Parrilla",
      "Patio Interno",
    ],
    rooms: [
      {
        type: "Doble",
        price: 45000,
        available: 2,
        total: 6,
        occupants: [
          {
            name: "María G.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
            rating: 4.9,
            badges: ["⭐", "🤝"],
            score: 850,
          },
          {
            name: "Lucas R.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
            rating: 4.7,
            badges: ["🤝", "💰"],
            score: 780,
          },
        ],
      },
      {
        type: "Triple",
        price: 38000,
        available: 1,
        total: 4,
        occupants: [
          {
            name: "Ana P.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
            rating: 4.8,
            badges: ["⭐"],
            score: 820,
          },
          {
            name: "Diego F.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diego",
            rating: 4.6,
            badges: ["🤝"],
            score: 740,
            hasWarning: true,
          },
          {
            name: "Sofia M.",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
            rating: 5.0,
            badges: ["⭐", "💰", "🤝"],
            score: 920,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" onClick={() => window.history.back()}>
            ← Volver
          </Button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sin Fronteras
          </h1>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Image & Title */}
        <div className="mb-8">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-6">
            <img
              src={residence.mainImage}
              alt={residence.title}
              className="w-full h-full object-cover"
            />
            {residence.verified && (
              <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground gap-2 text-base px-4 py-2">
                <Shield className="h-5 w-5" />
                Verificada
              </Badge>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{residence.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{residence.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="font-semibold text-foreground">
                    {residence.rating}
                  </span>
                  <span className="text-sm">({residence.reviews} reseñas)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Contactar
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Reservar
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Sobre la residencia</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {residence.description}
                </p>
              </CardContent>
            </Card>

            {/* Services & Amenities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Servicios</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {residence.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm p-3 rounded-lg bg-muted/30"
                    >
                      <Wifi className="h-4 w-4 text-primary" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Common Areas */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Áreas comunes</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {residence.commonAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm p-3 rounded-lg bg-muted/30"
                    >
                      <Home className="h-4 w-4 text-primary" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Room Availability */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Disponibilidad de habitaciones
                </h2>
                <div className="space-y-4">
                  {residence.rooms.map((room, idx) => (
                    <div
                      key={idx}
                      className={`border-2 rounded-xl p-5 transition-all cursor-pointer ${
                        selectedRoom === room.type
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() =>
                        setSelectedRoom(
                          selectedRoom === room.type ? null : room.type
                        )
                      }
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold">{room.type}</h3>
                          <p className="text-sm text-muted-foreground">
                            {room.available} de {room.total} disponibles
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">
                            ${room.price.toLocaleString()}
                          </p>
                          <p className="text-sm text-muted-foreground">/mes</p>
                        </div>
                      </div>

                      {selectedRoom === room.type && (
                        <>
                          <Separator className="my-4" />
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              Conocé a los integrantes
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {room.occupants.map((occupant, oIdx) => (
                                 <div
                                  key={oIdx}
                                  className="flex items-center gap-3 p-3 rounded-lg bg-background border cursor-pointer hover:border-primary transition-colors"
                                  onClick={() => window.location.href = `/estudiante/${oIdx + 1}`}
                                >
                                  <Avatar className="h-12 w-12">
                                    <AvatarImage
                                      src={occupant.avatar}
                                      alt={occupant.name}
                                    />
                                    <AvatarFallback>
                                      {occupant.name[0]}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                      <p className="font-semibold">
                                        {occupant.name}
                                      </p>
                                      {occupant.badges && occupant.badges.length > 0 && (
                                        <div className="flex gap-1">
                                          {occupant.badges.map((badge, bIdx) => (
                                            <span key={bIdx} className="text-sm">{badge}</span>
                                          ))}
                                        </div>
                                      )}
                                      {occupant.hasWarning && (
                                        <Badge variant="destructive" className="text-xs px-1 py-0">⚠️</Badge>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-accent text-accent" />
                                        <span className="text-sm font-semibold">
                                          {occupant.rating}
                                        </span>
                                      </div>
                                      {occupant.score && (
                                        <span className="text-xs text-primary font-semibold">
                                          {occupant.score} pts
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-xs"
                                  >
                                    Ver perfil →
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sticky Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-bold mb-3">Información general</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-muted-foreground">
                          {residence.fullAddress}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <UserCheck className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Gestión</p>
                        <p className="text-muted-foreground">
                          {residence.coordinator}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Residentes actuales</p>
                        <p className="text-muted-foreground">
                          {residence.currentResidents} estudiantes
                        </p>
                        <Button
                          variant="link"
                          className="h-auto p-0 text-xs"
                          onClick={() =>
                            alert("Funcionalidad en desarrollo")
                          }
                        >
                          Ver todos los perfiles →
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Prorrateó de días</p>
                        <p className="text-muted-foreground">
                          {residence.proration
                            ? "Sí, se prorratean los días al ingresar"
                            : "No disponible"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-bold mb-3">Contacto</h3>
                  <div className="space-y-2">
                    <Button className="w-full gap-2" size="lg">
                      <Phone className="h-4 w-4" />
                      Llamar ahora
                    </Button>
                    <Button variant="outline" className="w-full gap-2" size="lg">
                      <Mail className="h-4 w-4" />
                      Enviar consulta
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
