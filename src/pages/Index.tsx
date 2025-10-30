import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { ResidenceCard } from "@/components/ResidenceCard";
import { TrustBadges } from "@/components/TrustBadges";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { ProfileSelector } from "@/components/ProfileSelector";
import { LoginDialog } from "@/components/LoginDialog";
import { ResidenceContactForm } from "@/components/ResidenceContactForm";
import { Menu, UserCircle, X } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-residence-optimized.jpg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Index = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const featuredResidences = [
    {
      image: "/src/assets/hostel-room-1.jpg",
      title: "Residencia San Martín",
      location: "Centro, Buenos Aires",
      priceMin: 38000,
      priceMax: 55000,
      rating: 4.8,
      reviews: 127,
      verified: true,
      availability: ["Doble", "Triple"],
      currentResidents: 24,
      residentsRating: 4.6,
      highlightedService: "WiFi Alta Velocidad",
      roommates: [
        {
          name: "María G.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
          rating: 4.9,
          description: "Estudiante de medicina, organizada y tranquila. Me gusta estudiar por las tardes y cocinar los fines de semana."
        },
        {
          name: "Lucas R.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
          rating: 4.7,
          description: "Ingeniería, fan del deporte y música. Respetuoso con los horarios de estudio y descanso."
        },
        {
          name: "Ana P.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
          rating: 4.8,
          description: "Estudiante de diseño, creativa y sociable. Me encanta compartir experiencias y mantener todo ordenado."
        }
      ]
    },
    {
      image: "/src/assets/hostel-common-2.jpg",
      title: "Casa Universitaria Norte",
      location: "Recoleta, Buenos Aires",
      priceMin: 45000,
      priceMax: 62000,
      rating: 4.9,
      reviews: 95,
      verified: true,
      availability: ["Individual", "Doble"],
      currentResidents: 18,
      residentsRating: 4.8,
      highlightedService: "Gym Incluido",
      roommates: [
        {
          name: "Sofia M.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
          rating: 5.0,
          description: "Derecho, disciplinada y amigable. Valoro la limpieza y el respeto mutuo."
        },
        {
          name: "Diego F.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diego",
          rating: 4.6,
          description: "Arquitectura, ordenado y colaborativo. Me gusta la convivencia armoniosa."
        },
        {
          name: "Julia S.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia",
          rating: 4.9,
          description: "Psicología, empática y organizada. Busco compañeros responsables y respetuosos."
        }
      ]
    },
    {
      image: "/src/assets/hostel-room-3.jpg",
      title: "Residencia del Parque",
      location: "Palermo, Buenos Aires",
      priceMin: 40000,
      priceMax: 58000,
      rating: 4.7,
      reviews: 143,
      verified: true,
      availability: ["Triple", "Cuádruple"],
      currentResidents: 32,
      residentsRating: 4.5,
      highlightedService: "Zona de Estudio 24hs",
      roommates: [
        {
          name: "Martín L.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Martin",
          rating: 4.8,
          description: "Economía, responsable y tranquilo. Valoro el orden y la comunicación clara."
        },
        {
          name: "Camila T.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Camila",
          rating: 4.4,
          description: "Comunicación social, sociable y respetuosa. Me adapto fácilmente a diferentes grupos."
        },
        {
          name: "Pablo N.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pablo",
          rating: 4.6,
          description: "Informática, colaborativo y ordenado. Busco un ambiente de estudio tranquilo."
        }
      ]
    },
    {
      image: "/src/assets/hostel-room-1.jpg",
      title: "Residencia Premium Palermo",
      location: "Palermo, Buenos Aires",
      priceMin: 48000,
      priceMax: 68000,
      rating: 5.0,
      reviews: 93,
      verified: true,
      availability: ["Individual"],
      currentResidents: 15,
      residentsRating: 4.9,
      highlightedService: "Servicio de Limpieza",
      roommates: [
        {
          name: "Valentina R.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Valentina",
          rating: 5.0,
          description: "Medicina veterinaria, súper organizada y respetuosa. Amo los animales y la naturaleza."
        },
        {
          name: "Tomás B.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tomas",
          rating: 4.8,
          description: "Administración, responsable y sociable. Me gusta mantener todo en orden."
        },
        {
          name: "Carolina V.",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carolina",
          rating: 4.9,
          description: "Filosofía y letras, tranquila y considerada. Valoro el respeto y la buena convivencia."
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sin Fronteras
            </h1>
            <nav className="hidden md:flex gap-6">
              <button 
                onClick={() => scrollToSection('featured-residences')} 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Buscar
              </button>
              <button 
                onClick={() => scrollToSection('profile-selector')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                ¿Quién sos?
              </button>
              <a 
                href="/estudiantes" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Para Estudiantes
              </a>
              <a 
                href="/padres" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Para Padres
              </a>
              <a 
                href="/residencias-pms" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Para Residencias
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex"
              onClick={() => scrollToSection('cta-section')}
            >
              Publicar residencia
            </Button>
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
                  <button 
                    onClick={() => scrollToSection('featured-residences')}
                    className="text-left text-base font-medium hover:text-primary transition-colors py-2"
                  >
                    Buscar
                  </button>
                  <button 
                    onClick={() => scrollToSection('profile-selector')}
                    className="text-left text-base font-medium hover:text-primary transition-colors py-2"
                  >
                    ¿Quién sos?
                  </button>
                  <a 
                    href="/estudiantes" 
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Para Estudiantes
                  </a>
                  <a 
                    href="/padres" 
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Para Padres
                  </a>
                  <a 
                    href="/residencias-pms" 
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Para Residencias
                  </a>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => scrollToSection('cta-section')}
                  >
                    Publicar residencia
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => setLoginOpen(true)}
            >
              <UserCircle className="h-4 w-4" />
              <span className="hidden md:inline">Ingresar</span>
            </Button>
          </div>
        </div>
      </header>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      <ResidenceContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Hero image as background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Residencia estudiantil moderna"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Tu hogar universitario<br />empieza con confianza
            </h2>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-8 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Viví, estudiá y crecé en una comunidad segura, conectada y transparente
            </p>
          </div>
          
          <div className="mb-12">
            <TrustBadges />
          </div>

          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Profile Selector */}
      <div id="profile-selector" className="scroll-mt-16">
        <ProfileSelector />
      </div>

      {/* Featured Residences */}
      <section id="featured-residences" className="py-16 md:py-24 bg-background scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Residencias destacadas</h2>
              <p className="text-muted-foreground">Las mejores opciones verificadas para vos</p>
            </div>
            <Button variant="link" className="hidden md:flex">
              Ver todas →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResidences.map((residence, index) => (
              <ResidenceCard key={index} {...residence} residenceId={`residence-${index + 1}`} />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 md:hidden">
            <Button variant="outline">Ver todas las residencias</Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* CTA Section */}
      <section id="cta-section" className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Tenés una residencia estudiantil?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Sumá tu residencia a nuestra plataforma y conectá con miles de estudiantes que buscan un hogar confiable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background text-primary hover:bg-background/90 border-0"
              onClick={() => setContactFormOpen(true)}
            >
              Registrar mi residencia
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              onClick={() => window.location.href = '/residencias-pms'}
            >
              Conocer más
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
