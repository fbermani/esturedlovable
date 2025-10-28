import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { PointsSystem } from "@/components/PointsSystem";
import { Footer } from "@/components/Footer";
import { Menu, UserCircle, BookOpen, Users, Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const StudentProfile = () => {
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
              <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Residencias
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <UserCircle className="h-4 w-4" />
              <span className="hidden md:inline">Ingresar</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Points System */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistema de Puntos y Badges</h2>
            <p className="text-lg text-muted-foreground">
              Ganá beneficios mientras ayudás a la comunidad
            </p>
          </div>
          <PointsSystem userType="student" />
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

      {/* Convivencia Guide */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Normas de Convivencia</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Aprendé las mejores prácticas para una convivencia exitosa en residencias estudiantiles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Respeto Mutuo</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Respetá los horarios de estudio y descanso de tus compañeros
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comunicación Clara</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Hablá abiertamente sobre expectativas y necesidades
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Responsabilidad Compartida</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Participá en la limpieza y mantenimiento de espacios comunes
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