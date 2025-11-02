import { Button } from "@/components/ui/button";
import { PointsSystem } from "@/components/PointsSystem";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, UserCircle, MessageCircle, Shield, FileText, Gift, Users, BookOpen, CheckCircle2, Trophy, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const ParentProfile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [evaluationOpen, setEvaluationOpen] = useState(false);

  const badges = [
    {
      level: "Nuevo Miembro",
      icon: Users,
      color: "bg-gray-500",
      requirements: "0-50 puntos",
      description: "Bienvenido a la comunidad. Comenzá participando y conociendo otros padres.",
      benefits: ["Acceso a foro básico", "Visualización de residencias verificadas"]
    },
    {
      level: "Colaborador",
      icon: MessageCircle,
      color: "bg-blue-500",
      requirements: "50-150 puntos",
      description: "Ya participás activamente en la comunidad compartiendo experiencias.",
      benefits: ["5% descuento en eventos", "Acceso a grupos privados", "Newsletter mensual"]
    },
    {
      level: "Miembro Activo",
      icon: Star,
      color: "bg-indigo-500",
      requirements: "150-350 puntos",
      description: "Tu participación es valiosa. Ayudás a otros padres con tus consejos.",
      benefits: ["10% descuento en hoteles", "Invitaciones a eventos premium", "Asesoría prioritaria"]
    },
    {
      level: "Experto",
      icon: Trophy,
      color: "bg-yellow-500",
      requirements: "350-600 puntos",
      description: "Sos referente en la comunidad. Tus aportes son muy valorados.",
      benefits: ["15% descuento permanente", "Moderador de grupos", "Acceso VIP a recursos"]
    },
    {
      level: "Embajador",
      icon: Award,
      color: "bg-purple-600",
      requirements: "600+ puntos",
      description: "Nivel máximo. Representás lo mejor de nuestra comunidad de padres.",
      benefits: ["20% descuento de por vida", "Eventos exclusivos", "Participación en decisiones de la plataforma"]
    }
  ];

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
              <a href="/#featured-residences" className="text-sm font-medium hover:text-primary transition-colors">
                Buscar
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
                  <a href="/estudiantes" className="text-base font-medium hover:text-primary transition-colors py-2">
                    Para Estudiantes
                  </a>
                  <a href="/padres" className="text-base font-medium text-primary py-2">
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

      {/* Privacy and Security */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Privacidad y Seguridad</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tu perfil está vinculado al de tu hijo/a mediante verificación de DNI. Por motivos de privacidad, podrás contactar con otros padres pero no con estudiantes directamente.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded text-left">
              <p className="font-semibold mb-3">Tendrás acceso completo a:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Información de residencias y documentación legal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Foro de padres y grupos de discusión privados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Comunicación directa con las residencias</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Perfil y evaluaciones de tu hijo/a</span>
                </li>
              </ul>
            </div>
            <Button size="lg" variant="outline" className="mt-6">Ver Política de Privacidad</Button>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proceso de Verificación de Residencias</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Garantizamos la calidad y seguridad de cada residencia en nuestra plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Visitas Personales</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Recorremos personalmente todas las residencias y corroboramos las instalaciones y servicios ofrecidos.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Conocemos a los Responsables</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Nos reunimos con dueños y coordinadores para asegurar compromiso con la calidad y bienestar estudiantil.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Feedback de Estudiantes</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Hablamos con estudiantes actuales para obtener feedback honesto sobre cada residencia.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Plan de Mejoras</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Implementamos un plan de mejoras y otorgamos sugerencias para aumentar la calidad de cada establecimiento.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">COMUNIDAD</Badge>
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

          {/* Badges Detail */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Niveles de Membresía</h3>
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

      {/* Evaluation System - Collapsible */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistema de Evaluación y Confianza</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Entendé cómo funciona el sistema de rankings que protege a tu hijo/a
            </p>
          </div>

          <Collapsible open={evaluationOpen} onOpenChange={setEvaluationOpen}>
            <Card>
              <CardHeader>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                    <CardTitle className="text-2xl text-left">Rankings: Más allá de las Residencias</CardTitle>
                    <MessageCircle className={`h-5 w-5 transition-transform ${evaluationOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CardDescription className="text-base mt-2">
                  Los rankings no son sólo para las residencias. Los estudiantes también son evaluados.
                </CardDescription>
              </CardHeader>
              <CollapsibleContent>
                <CardContent className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-bold text-lg mb-3">¿Cómo se Evalúa a los Estudiantes?</h3>
                    <p className="text-muted-foreground mb-4">
                      La puntuación de cada estudiante es un mix entre las valoraciones de sus compañeros y las residencias.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {["Orden", "Limpieza", "Interacciones", "Empatía", "Tolerancia", "Forma de ser"].map((concept) => (
                        <div key={concept} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="font-medium text-sm">{concept}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-3">Perfiles Completos = Mayor Confianza</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Mejores beneficios obtiene el estudiante</li>
                      <li>✓ Más fácil es encontrar compañeros compatibles</li>
                      <li>✓ Mayor confianza genera en residencias y la comunidad</li>
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-bold text-lg mb-3">Evaluación por Residencias</h3>
                    <p className="text-muted-foreground">
                      Las residencias evalúan a cada estudiante. Los llamados de atención influyen en el puntaje, 
                      apareciendo solo la advertencia en el perfil, manteniendo la privacidad.
                    </p>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
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

      {/* Disclaimer */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-2 border-muted">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Descargo de Responsabilidad
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Sin Fronteras actúa como plataforma de conexión entre estudiantes, padres y residencias. 
                No somos responsables por los servicios otorgados, incidentes, o situaciones que ocurran en las residencias. 
                Cada residencia es responsable de sus propios servicios, instalaciones y gestión.
              </p>
              <p className="mt-4">
                Realizamos verificaciones periódicas y mantenemos estándares de calidad, pero la relación contractual 
                y responsabilidad legal es directamente entre el estudiante/padre y la residencia elegida.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParentProfile;