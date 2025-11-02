import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { PointsSystem } from "@/components/PointsSystem";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, UserCircle, BookOpen, Users, Award, GraduationCap, Trophy, Star, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const StudentProfile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const badges = [
    {
      level: "Novato",
      icon: Target,
      color: "bg-gray-500",
      requirements: "0-100 puntos",
      description: "Estás comenzando tu camino. Completá tu perfil y realizá tu primera evaluación.",
      benefits: ["Acceso básico al portal", "Búsqueda de residencias"]
    },
    {
      level: "Bronce",
      icon: Award,
      color: "bg-amber-700",
      requirements: "100-300 puntos",
      description: "¡Buen comienzo! Ya tenés evaluaciones positivas y tu perfil está completo.",
      benefits: ["10% descuento en primera reserva", "Prioridad en respuestas"]
    },
    {
      level: "Plata",
      icon: Star,
      color: "bg-gray-400",
      requirements: "300-600 puntos",
      description: "Excelente convivencia. Tus compañeros y residencias te valoran positivamente.",
      benefits: ["15% descuento", "Badge visible en perfil", "Acceso a eventos exclusivos"]
    },
    {
      level: "Oro",
      icon: Trophy,
      color: "bg-yellow-500",
      requirements: "600-1000 puntos",
      description: "Sos un ejemplo de convivencia. Tu comportamiento es destacado en la comunidad.",
      benefits: ["20% descuento", "Prioridad en reservas", "Acceso VIP a nuevas residencias"]
    },
    {
      level: "Platino",
      icon: GraduationCap,
      color: "bg-purple-500",
      requirements: "1000+ puntos",
      description: "¡Nivel máximo! Sos referente en la comunidad y tu perfil es ejemplo para otros.",
      benefits: ["25% descuento permanente", "Programa de embajador", "Beneficios premium de por vida"]
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Tutorías y Apoyo Académico",
      description: "Conectá con tutores verificados o ofrecé tu ayuda a otros estudiantes",
    },
    {
      icon: Users,
      title: "Guía de Convivencia",
      description: "Aprendé las mejores prácticas para una convivencia armoniosa",
    },
    {
      icon: Award,
      title: "Sistema de Calificaciones",
      description: "Entendé cómo funcionan las reseñas y calificaciones entre compañeros",
    },
    {
      icon: GraduationCap,
      title: "Recursos Estudiantiles",
      description: "Descuentos en cursos, gimnasios, eventos y más beneficios exclusivos",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sin Fronteras
              </h1>
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="/#featured-residences" className="text-sm font-medium hover:text-primary transition-colors">
                Buscar
              </a>
              <a href="/estudiantes" className="text-sm font-medium text-primary">
                Para Estudiantes
              </a>
              <a href="/padres" className="text-sm font-medium hover:text-primary transition-colors">
                Para Padres
              </a>
              <a href="/residencias-pms" className="text-sm font-medium hover:text-primary transition-colors">
                Para Residencias
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>Menú</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="/#featured-residences" className="text-base font-medium hover:text-primary transition-colors py-2">
                    Buscar
                  </a>
                  <a href="/estudiantes" className="text-base font-medium text-primary py-2">
                    Para Estudiantes
                  </a>
                  <a href="/padres" className="text-base font-medium hover:text-primary transition-colors py-2">
                    Para Padres
                  </a>
                  <a href="/residencias-pms" className="text-base font-medium hover:text-primary transition-colors py-2">
                    Para Residencias
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
            <Button variant="outline" size="sm" className="gap-2">
              <UserCircle className="h-4 w-4" />
              <span className="hidden md:inline">Ingresar</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portal para Estudiantes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontrá tu residencia ideal, conectá con compañeros y accedé a recursos exclusivos
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Behavior Counts Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tu Comportamiento También Cuenta</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Los rankings no son sólo para las residencias. Tu comportamiento tiene puntaje y beneficios.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">¿Cómo Funciona Tu Puntuación?</CardTitle>
              <CardDescription className="text-base">
                Tu puntuación es un mix entre las valoraciones de tus compañeros pasados o actuales, 
                y la valoración de las residencias hacia vos.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Conceptos de Convivencia Valorados:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Orden", "Limpieza", "Interacciones", "Empatía", "Tolerancia", "Forma de ser"].map((concept) => (
                    <div key={concept} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="font-medium">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">Tu Perfil, Tu Decisión:</h3>
                <p className="text-muted-foreground mb-4">
                  Cada estudiante escribe en su perfil lo que quiere para describirse, y elige qué muestra y qué no al público.
                </p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                  <p className="font-semibold text-accent-foreground mb-2">
                    💡 Mientras más completes y muestres tu perfil:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Mejores beneficios obtenés</li>
                    <li>✓ Más probable es que consigas compañeros acorde a tus características</li>
                    <li>✓ Mayor confianza generás en residencias y otros estudiantes</li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">Evaluación de las Residencias:</h3>
                <p className="text-muted-foreground">
                  Las residencias también completan un perfil de cada estudiante. Los llamados de atención o expulsiones 
                  influyen en el puntaje, apareciendo únicamente la advertencia en cada perfil, pero no el detalle de lo sucedido.
                  Esto mantiene tu privacidad mientras asegura transparencia en la comunidad.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Points System and Badges */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistema de Puntos y Badges</h2>
            <p className="text-lg text-muted-foreground">
              Ganá beneficios mientras ayudás a la comunidad
            </p>
          </div>
          <PointsSystem userType="student" />

          {/* Badges Detail */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Niveles de Badges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`h-12 w-12 rounded-xl ${badge.color} flex items-center justify-center`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{badge.level}</CardTitle>
                          <Badge variant="secondary" className="text-xs">{badge.requirements}</Badge>
                        </div>
                      </div>
                      <CardDescription className="text-sm">{badge.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-2">Beneficios:</p>
                      <ul className="space-y-1">
                        {badge.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos para Estudiantes</h2>
            <p className="text-lg text-muted-foreground">
              Aprovechá todas las herramientas disponibles para tu vida universitaria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{resource.title}</CardTitle>
                    </div>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Explorar</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Basic Coexistence Rules */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Normas de Convivencia Básicas</h2>
            <p className="text-lg text-muted-foreground">
              Principios fundamentales para una convivencia armoniosa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Respeto Mutuo</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Respetá los horarios de estudio y descanso de tus compañeros. La empatía es clave para una buena convivencia.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comunicación Clara</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Hablá abiertamente sobre expectativas y necesidades. La comunicación previene conflictos.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Responsabilidad Compartida</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Participá en la limpieza y mantenimiento de espacios comunes. Todos somos responsables del entorno.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentProfile;