import { Button } from "@/components/ui/button";
import { PointsSystem } from "@/components/PointsSystem";
import { Footer } from "@/components/Footer";
import { Menu, UserCircle, LayoutDashboard, Users, CreditCard, Wrench, FileText, TrendingUp, Package, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResidencePMS = () => {
  const pmsFeatures = [
    {
      icon: Users,
      title: "Gestión de Estudiantes",
      description: "Registrá y administrá toda la información de tus residentes",
    },
    {
      icon: CreditCard,
      title: "Control de Pagos",
      description: "Seguimiento automático de pagos, cuotas y moratorias",
    },
    {
      icon: Wrench,
      title: "Mantenimiento",
      description: "Gestión de incidencias y solicitudes de mantenimiento",
    },
    {
      icon: FileText,
      title: "Documentación",
      description: "Almacenamiento seguro de contratos y documentos legales",
    },
    {
      icon: TrendingUp,
      title: "Reportes y Estadísticas",
      description: "Análisis financiero y operativo en tiempo real",
    },
    {
      icon: LayoutDashboard,
      title: "Panel Integrado",
      description: "Todo lo que necesitás en un solo lugar, fácil de usar",
    },
  ];

  const resources = [
    {
      icon: Package,
      title: "Proveedores Verificados",
      description: "Accedé a proveedores confiables de limpieza, mantenimiento y servicios",
    },
    {
      icon: FileText,
      title: "Asesoría Contable",
      description: "Recursos contables y fiscales para gestionar tu residencia",
    },
    {
      icon: Users,
      title: "Recursos Humanos",
      description: "Guías para contratar personal y gestionar equipos",
    },
    {
      icon: Building2,
      title: "Buenas Prácticas",
      description: "Aprende de las mejores residencias y mejorá continuamente",
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
              <a href="/padres" className="text-sm font-medium hover:text-primary transition-colors">
                Para Padres
              </a>
              <a href="/residencias-pms" className="text-sm font-medium text-primary">
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
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground">SISTEMA DE GESTIÓN PROFESIONAL</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">PMS para Residencias Estudiantiles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Profesionalizá tu residencia con nuestro sistema de gestión completo. Todo lo que necesitás en una sola plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero">
              Solicitar Demo Gratuita
            </Button>
            <Button size="lg" variant="outline">
              Ver Precios
            </Button>
          </div>
        </div>
      </section>

      {/* PMS Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funcionalidades del PMS</h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitás para gestionar tu residencia de forma profesional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pmsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir nuestro PMS?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Sincronización Automática</h3>
                <p className="text-muted-foreground">
                  Tu perfil público en el portal se actualiza automáticamente desde el PMS. Sin duplicar trabajo.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Mayor Visibilidad</h3>
                <p className="text-muted-foreground">
                  Apareció en las búsquedas de miles de estudiantes y padres que buscan residencias confiables.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Sistema de Reputación</h3>
                <p className="text-muted-foreground">
                  Mejorá tu posicionamiento con buenas calificaciones y ganá descuentos en tu plan mensual.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Soporte Dedicado</h3>
                <p className="text-muted-foreground">
                  Equipo de soporte para ayudarte con cualquier duda o problema que tengas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points System */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistema de Puntos y Badges</h2>
            <p className="text-lg text-muted-foreground">
              Mejorá tu servicio y obtené descuentos en tu plan mensual
            </p>
          </div>
          <PointsSystem userType="residence" />
        </div>
      </section>

      {/* Ranking System Explanation */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistema de Evaluación Bidireccional</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              En nuestra plataforma, no solo evaluás: también sos evaluado. Un sistema justo que beneficia a todos.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Evaluá y Mejorá Continuamente</CardTitle>
              <CardDescription className="text-base">
                Los rankings no son sólo para las residencias. Los estudiantes también tienen puntuaciones basadas en 
                su comportamiento y convivencia.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">¿Cómo Evaluás a tus Residentes?</h3>
                <p className="text-muted-foreground mb-4">
                  Podés evaluar a cada estudiante en conceptos de convivencia. Tu opinión, junto con la de otros compañeros, 
                  forma la puntuación del estudiante:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Orden", "Limpieza", "Interacciones", "Empatía", "Tolerancia", "Forma de ser"].map((concept) => (
                    <div key={concept} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="font-medium">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">Beneficios del Sistema</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                    <p className="font-semibold text-accent-foreground mb-2">Para tu Residencia:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>✓ Atraé estudiantes responsables</li>
                      <li>✓ Reducí conflictos de convivencia</li>
                      <li>✓ Mejorá tu reputación y descuentos</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
                    <p className="font-semibold mb-2">Para los Estudiantes:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>✓ Mayor transparencia y confianza</li>
                      <li>✓ Incentivos para buen comportamiento</li>
                      <li>✓ Mejores oportunidades de alojamiento</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">Gestión de Advertencias</h3>
                <p className="text-muted-foreground">
                  Los llamados de atención o expulsiones que registres influyen en el puntaje del estudiante. 
                  Solo aparece la advertencia en su perfil, no el detalle completo, manteniendo su privacidad 
                  mientras asegurás transparencia en la comunidad.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos para Residencias</h2>
            <p className="text-lg text-muted-foreground">
              Accedé a proveedores verificados y recursos de gestión profesional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" size="sm">Ver más</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para profesionalizar tu residencia?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Comenzá gratis con una demo de 30 días. Sin compromiso.
          </p>
          <Button size="lg" variant="outline" className="bg-background text-primary hover:bg-background/90 border-0">
            Solicitar Demo Ahora
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResidencePMS;