import { Button } from "@/components/ui/button";
import { ResidenceCard } from "@/components/ResidenceCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Bell, X } from "lucide-react";

export default function AllResidences() {
  const [waitlistDialog, setWaitlistDialog] = useState<string | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<string>("");
  const [email, setEmail] = useState("");

  // Residencias disponibles
  const availableResidences = [
    {
      images: [
        new URL("@/assets/hostel-room-1.jpg", import.meta.url).href,
        new URL("@/assets/hostel-room-3.jpg", import.meta.url).href,
      ],
      title: "Residencia ***",
      location: "Centro - Av. Corrientes y San Martín",
      priceMin: 38000,
      priceMax: 55000,
      rating: 4.8,
      reviews: 127,
      verified: true,
      availability: ["Doble", "Triple"],
      currentResidents: 24,
      residentsRating: 4.6,
      services: [
        { name: "WiFi Alta Velocidad", icon: "Wifi" },
        { name: "Cocina Equipada", icon: "Utensils" },
        { name: "Seguridad 24hs", icon: "Shield" },
      ],
      roommates: [
        {
          name: "María G.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
          rating: 4.9,
          description: "Estudiante de medicina",
          badges: ["⭐", "🤝"],
          score: 850
        }
      ]
    },
    {
      images: [
        new URL("@/assets/hostel-common-2.jpg", import.meta.url).href,
        new URL("@/assets/hostel-room-1.jpg", import.meta.url).href,
      ],
      title: "Casa Universitaria ***",
      location: "Recoleta - Av. Santa Fe y Callao",
      priceMin: 45000,
      priceMax: 62000,
      rating: 4.9,
      reviews: 95,
      verified: true,
      availability: ["Individual", "Doble"],
      currentResidents: 18,
      residentsRating: 4.8,
      services: [
        { name: "Gym Incluido", icon: "Flame" },
        { name: "WiFi Alta Velocidad", icon: "Wifi" },
        { name: "Limpieza", icon: "Sparkles" },
      ],
      roommates: [
        {
          name: "Sofia M.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
          rating: 5.0,
          description: "Derecho",
          badges: ["⭐", "💰", "🤝"],
          score: 920
        }
      ]
    },
    {
      images: [
        new URL("@/assets/hostel-room-3.jpg", import.meta.url).href,
        new URL("@/assets/hostel-common-2.jpg", import.meta.url).href,
      ],
      title: "Residencia del ***",
      location: "Palermo - Av. Santa Fe y Scalabrini Ortiz",
      priceMin: 40000,
      priceMax: 58000,
      rating: 4.7,
      reviews: 143,
      verified: true,
      availability: ["Triple", "Cuádruple"],
      currentResidents: 32,
      residentsRating: 4.5,
      services: [
        { name: "Zona de Estudio 24hs", icon: "BookOpen" },
        { name: "WiFi Alta Velocidad", icon: "Wifi" },
        { name: "Cocina Equipada", icon: "Utensils" },
      ],
      roommates: [
        {
          name: "Martín L.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Martin",
          rating: 4.8,
          description: "Economía",
          badges: ["💰", "🤝"],
          score: 810
        }
      ]
    },
  ];

  // Residencias sin disponibilidad
  const unavailableResidences = [
    {
      images: [
        new URL("@/assets/hostel-room-1.jpg", import.meta.url).href,
        new URL("@/assets/hostel-room-3.jpg", import.meta.url).href,
      ],
      title: "Residencia Premium ***",
      location: "Palermo - Av. Córdoba y Juan B. Justo",
      priceMin: 48000,
      priceMax: 68000,
      rating: 5.0,
      reviews: 93,
      verified: true,
      availability: [],
      currentResidents: 15,
      residentsRating: 4.9,
      services: [
        { name: "Servicio de Limpieza", icon: "Sparkles" },
        { name: "WiFi Alta Velocidad", icon: "Wifi" },
        { name: "Seguridad 24hs", icon: "Shield" },
      ],
      roommates: [],
      soldOut: true,
      roomTypes: ["Individual", "Doble"]
    },
    {
      images: [
        new URL("@/assets/hostel-common-2.jpg", import.meta.url).href,
        new URL("@/assets/hostel-room-1.jpg", import.meta.url).href,
      ],
      title: "Residencia Central ***",
      location: "Centro - Av. de Mayo y 9 de Julio",
      priceMin: 42000,
      priceMax: 60000,
      rating: 4.6,
      reviews: 78,
      verified: true,
      availability: [],
      currentResidents: 28,
      residentsRating: 4.4,
      services: [
        { name: "Cocina Equipada", icon: "Utensils" },
        { name: "WiFi Alta Velocidad", icon: "Wifi" },
        { name: "Lavandería", icon: "Shirt" },
      ],
      roommates: [],
      soldOut: true,
      roomTypes: ["Triple", "Cuádruple"]
    }
  ];

  const handleWaitlist = (residenceTitle: string) => {
    setWaitlistDialog(residenceTitle);
  };

  const handleSubmitWaitlist = () => {
    // Aquí se enviaría al backend
    console.log(`Waitlist para: ${waitlistDialog}, Tipo: ${selectedRoomType}, Email: ${email}`);
    setWaitlistDialog(null);
    setSelectedRoomType("");
    setEmail("");
    alert("¡Te avisaremos cuando haya disponibilidad! Completá tu perfil para tener prioridad.");
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
          <div className="w-20" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Residencias Disponibles */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Residencias con Disponibilidad</h2>
            <p className="text-muted-foreground">Reservá ahora y asegurá tu lugar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableResidences.map((residence, index) => (
              <ResidenceCard key={index} {...residence} residenceId={`residence-${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Residencias Sin Disponibilidad */}
        <div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Sin Disponibilidad Actual</h2>
            <p className="text-muted-foreground">Anotate en la lista de espera para recibir notificaciones</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unavailableResidences.map((residence, index) => (
              <Card key={index} className="overflow-hidden opacity-75 hover:opacity-100 transition-opacity">
                <div className="relative">
                  <Badge className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground">
                    Sin Disponibilidad
                  </Badge>
                  <img
                    src={residence.images[0]}
                    alt={residence.title}
                    className="w-full h-48 object-cover grayscale-[30%]"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{residence.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{residence.location}</p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => window.location.href = `/residencia/residence-${index + 4}`}
                    >
                      Ver información completa
                    </Button>
                    <Button
                      className="w-full gap-2"
                      onClick={() => handleWaitlist(residence.title)}
                    >
                      <Bell className="h-4 w-4" />
                      Avisarme cuando haya lugar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Waitlist Dialog */}
      {waitlistDialog && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Lista de Espera</h3>
                <Button variant="ghost" size="sm" onClick={() => setWaitlistDialog(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                Te notificaremos cuando haya disponibilidad en <strong>{waitlistDialog}</strong>.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-primary mb-2">💡 Consejo Importante</p>
                <p className="text-xs text-muted-foreground">
                  Completá tu perfil de estudiante para tener prioridad. Las residencias pueden elegir 
                  a qué estudiantes contactar según sus perfiles, así que asegurate de tener toda tu 
                  información actualizada.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="roomType">Tipo de habitación de interés</Label>
                  <select
                    id="roomType"
                    className="w-full mt-1 p-2 border rounded-md"
                    value={selectedRoomType}
                    onChange={(e) => setSelectedRoomType(e.target.value)}
                  >
                    <option value="">Seleccionar tipo</option>
                    <option value="Individual">Individual</option>
                    <option value="Doble">Doble</option>
                    <option value="Triple">Triple</option>
                    <option value="Cuádruple">Cuádruple</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="email">Email de notificación</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button
                  className="w-full"
                  onClick={handleSubmitWaitlist}
                  disabled={!selectedRoomType || !email}
                >
                  Unirme a la lista de espera
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
