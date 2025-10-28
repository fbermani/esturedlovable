import { Button } from "@/components/ui/button";
import { PointsSystem } from "@/components/PointsSystem";
import { Footer } from "@/components/Footer";
import { Menu, UserCircle, MessageCircle, Shield, FileText, Gift, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const ParentProfile = () => {
  const resources = [
    {
      icon: MessageCircle,
      title: "Comunidad de Padres",
      description: "Conectá con otros padres, compartí experiencias y obtené consejos",
      featured: true,
    },
    {
      icon: Shield,
      title: "Guía de Seguridad",
      description: "Todo lo que necesitás saber sobre la seguridad de tu hijo/a",
    },
    {
      icon: FileText,
      title: "Manual de Comportamiento",
      description: "Normas y reglamentos de las residencias estudiantiles",
    },
    {
      icon: Gift,
      title: "Descuentos y Beneficios",
      description: "Acceso a descuentos en hoteles, transporte y servicios turísticos",
    },
    {
      icon: Users,
      title: "Comunicación con Residencias",
      description: "Contacto directo y transparente con las residencias",
    },
    {
      icon: BookOpen,
      title: "Recursos de Apoyo",
      description: "Guías prácticas para ayudar a tu hijo/a en su vida universitaria",
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
              <a href="/estudiantes" className="text-sm font-medium hover:text-primary transition-colors">
                Para Estudiantes
              </a>
              <a href="/padres" className="text-sm font-medium text-primary">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Portal para Padres</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Acompañá a tu hijo/a con tranquilidad y seguridad. Conectá con la comunidad y accedé a recursos exclusivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero">
              Unirme a la Comunidad Premium
            </Button>
            <Button size="lg" variant="outline">
              Ver Residencias Verificadas
            </Button>
          </div>
        </div>
      </section>

      {/* Featured: Community */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              DESTACADO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comunidad de Padres</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conectá con otros padres que están pasando por la misma experiencia. Compartí consejos, preocupaciones y soluciones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Foro de Discusión</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Participá en conversaciones sobre alojamiento, seguridad y experiencias universitarias
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Eventos y Encuentros</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Conocé a otros padres en eventos organizados cuando visitás a tu hijo/a
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Descuentos Exclusivos</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Accedé a descuentos en hoteles, transporte y servicios para tus visitas
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Points System */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistema de Puntos y Badges</h2>
            <p className="text-lg text-muted-foreground">
              Ganá beneficios mientras ayudás a otros padres y participás en la comunidad
            </p>
          </div>
          <PointsSystem userType="parent" />
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos para Padres</h2>
            <p className="text-lg text-muted-foreground">
              Todas las herramientas que necesitás para estar tranquilo/a
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${resource.featured ? 'border-primary border-2' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        {resource.featured && (
                          <span className="text-xs text-primary font-semibold">Premium</span>
                        )}
                      </div>
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

      {/* Ranking System Explanation */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistema de Evaluación y Confianza</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Entendé cómo funciona el sistema de rankings que protege a tu hijo/a
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Rankings: Más allá de las Residencias</CardTitle>
              <CardDescription className="text-base">
                Los rankings no son sólo para las residencias. Los estudiantes también son evaluados, 
                creando un ambiente de responsabilidad y respeto mutuo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">¿Cómo se Evalúa a los Estudiantes?</h3>
                <p className="text-muted-foreground mb-4">
                  La puntuación de cada estudiante es un mix entre las valoraciones de sus compañeros pasados o actuales, 
                  y la valoración de las residencias. Esto asegura transparencia y confianza en toda la comunidad.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Orden", "Limpieza", "Interacciones", "Empatía", "Tolerancia", "Forma de ser"].map((concept) => (
                    <div key={concept} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="font-medium">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">Perfiles Completos = Mayor Confianza</h3>
                <p className="text-muted-foreground mb-4">
                  Cada estudiante decide qué información mostrar en su perfil público. Mientras más completo sea el perfil:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Mejores beneficios obtiene el estudiante</li>
                  <li>✓ Más fácil es encontrar compañeros compatibles</li>
                  <li>✓ Mayor confianza genera en residencias y la comunidad</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">Evaluación por Residencias</h3>
                <p className="text-muted-foreground">
                  Las residencias también evalúan a cada estudiante. Los llamados de atención o expulsiones 
                  influyen en el puntaje. Solo aparece la advertencia en el perfil, no el detalle de lo sucedido, 
                  manteniendo la privacidad mientras se asegura transparencia.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Privacidad y Seguridad</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tu perfil está vinculado al de tu hijo/a mediante verificación de DNI. Por motivos de privacidad, no podrás contactar directamente a otros estudiantes, pero sí tendrás acceso completo a la información de las residencias y documentación legal.
          </p>
          <Button size="lg" variant="outline">Ver Política de Privacidad</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParentProfile;