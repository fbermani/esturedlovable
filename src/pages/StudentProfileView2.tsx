import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  MapPin,
  GraduationCap,
  Calendar,
  Phone,
  Mail,
  AlertTriangle,
  Award,
  Home,
  Users,
  TrendingUp,
} from "lucide-react";

// Datos de ejemplo de diferentes estudiantes
const studentsData: any = {
  "1": {
    id: "1",
    name: "María González",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    rating: 4.9,
    career: "Medicina",
    university: "Universidad de Buenos Aires",
    age: 21,
    badges: [
      { name: "Estudiante Destacado", icon: "⭐", color: "bg-yellow-500", level: "Gold" },
      { name: "Buen Compañero", icon: "🤝", color: "bg-blue-500", level: "Platinum" },
      { name: "Puntual en Pagos", icon: "💰", color: "bg-green-500", level: "Gold" },
    ],
    warnings: [],
    history: [
      {
        residence: "Residencia San Martín",
        location: "Centro, Buenos Aires",
        from: "Mar 2023",
        to: "Actualidad",
        rating: 5.0,
        comment: "Excelente residente, muy ordenada y respetuosa con los espacios comunes.",
      },
      {
        residence: "Residencia Universitaria Norte",
        location: "Belgrano, Buenos Aires",
        from: "Mar 2022",
        to: "Feb 2023",
        rating: 4.8,
        comment: "Buena compañera, responsable con los pagos y actividades comunitarias.",
      },
    ],
    parentProfile: {
      name: "Carlos González",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      phone: "+54 11 1234-5678",
      email: "carlos.gonzalez@email.com",
    },
    bio: "Estudiante de medicina apasionada por la investigación. Me gusta mantener un ambiente tranquilo para estudiar pero también disfruto de las actividades sociales. Busco un lugar ordenado y con buena energía.",
    interests: ["Estudio", "Yoga", "Lectura", "Cocina saludable"],
    score: 850,
  },
  "2": {
    id: "2",
    name: "Diego Fernández",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diego",
    rating: 4.6,
    career: "Arquitectura",
    university: "Universidad de Palermo",
    age: 22,
    badges: [
      { name: "Buen Compañero", icon: "🤝", color: "bg-blue-500", level: "Silver" },
    ],
    warnings: [
      {
        date: "15/08/2024",
        residence: "Casa Universitaria Norte",
        description: "Ruidos nocturnos que molestaron a otros residentes. Se resolvió con una conversación y compromiso de mejora.",
      },
    ],
    history: [
      {
        residence: "Casa Universitaria Norte",
        location: "Recoleta, Buenos Aires",
        from: "Mar 2024",
        to: "Actualidad",
        rating: 4.5,
        comment: "Buen estudiante, algo desprolijo en espacios comunes pero colabora cuando se le pide.",
      },
      {
        residence: "Residencia Estudiantes UP",
        location: "Palermo, Buenos Aires",
        from: "Mar 2023",
        to: "Feb 2024",
        rating: 4.7,
        comment: "Residente responsable, creativo y sociable.",
      },
    ],
    parentProfile: {
      name: "Roberto Fernández",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
      phone: "+54 11 9876-5432",
      email: "roberto.fernandez@email.com",
    },
    bio: "Estudiante de arquitectura, apasionado por el diseño y el arte. Soy colaborativo y me gusta la convivencia armoniosa. Estoy trabajando en mejorar mis hábitos de orden.",
    interests: ["Diseño", "Música", "Deportes", "Fotografía"],
    score: 740,
  },
};

export default function StudentProfileView2() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = studentsData[id || "1"] || studentsData["1"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            ← Volver
          </Button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sin Fronteras
          </h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>{student.name[0]}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{student.name}</h1>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <GraduationCap className="h-5 w-5" />
                          <span>{student.career} - {student.university}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-5 w-5" />
                          <span>{student.age} años</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="h-6 w-6 fill-accent text-accent" />
                          <span className="text-2xl font-bold">{student.rating}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Calificación</p>
                      </div>
                    </div>

                    {/* Score */}
                    <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Puntuación Total</p>
                        <p className="text-2xl font-bold text-primary">{student.score} pts</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Bio */}
                <div>
                  <h3 className="font-bold mb-2">Sobre mí</h3>
                  <p className="text-muted-foreground">{student.bio}</p>
                </div>

                <Separator className="my-6" />

                {/* Interests */}
                <div>
                  <h3 className="font-bold mb-3">Intereses</h3>
                  <div className="flex flex-wrap gap-2">
                    {student.interests.map((interest: string, idx: number) => (
                      <Badge key={idx} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Badges y Reconocimientos
                </CardTitle>
              </CardHeader>
              <CardContent>
                {student.badges.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {student.badges.map((badge: any, idx: number) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl text-white text-center ${badge.color}`}
                      >
                        <div className="text-4xl mb-2">{badge.icon}</div>
                        <h4 className="font-bold mb-1">{badge.name}</h4>
                        <p className="text-sm opacity-90">Nivel: {badge.level}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    Aún no ha obtenido badges. Continúa participando para ganar reconocimientos.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Warnings */}
            {student.warnings.length > 0 && (
              <Card className="border-destructive/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <AlertTriangle className="h-5 w-5" />
                    Llamados de Atención ({student.warnings.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {student.warnings.map((warning: any, idx: number) => (
                      <div key={idx} className="p-4 bg-destructive/10 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{warning.residence}</h4>
                          <span className="text-sm text-muted-foreground">{warning.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{warning.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Historial de Residencias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {student.history.map((entry: any, idx: number) => (
                    <div key={idx} className="border rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-lg">{entry.residence}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{entry.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-5 w-5 fill-accent text-accent" />
                          <span className="text-xl font-bold">{entry.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{entry.from} - {entry.to}</span>
                      </div>
                      
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-sm italic text-muted-foreground">"{entry.comment}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Parent Profile & Contact */}
          <div className="lg:col-span-1 space-y-6">
            {/* Parent Profile */}
            {student.parentProfile && (
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Perfil del Padre/Madre
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={student.parentProfile.avatar}
                        alt={student.parentProfile.name}
                      />
                      <AvatarFallback>{student.parentProfile.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{student.parentProfile.name}</h4>
                      <p className="text-sm text-muted-foreground">Padre verificado</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{student.parentProfile.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="truncate">{student.parentProfile.email}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Button className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Contactar Padre
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Los padres pueden contactar entre sí para compartir información sobre las residencias
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
