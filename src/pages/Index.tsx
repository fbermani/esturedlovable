import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { ResidenceCard } from "@/components/ResidenceCard";
import { TrustBadges } from "@/components/TrustBadges";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { ProfileSelector } from "@/components/ProfileSelector";
import { LoginDialog } from "@/components/LoginDialog";
import { ResidenceContactForm } from "@/components/ResidenceContactForm";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ResidenceAssistant } from "@/components/ResidenceAssistant";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, UserCircle, X } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-shared-room.jpg";
import hostelRoom1 from "@/assets/hostel-room-1.jpg";
import hostelRoom3 from "@/assets/hostel-room-3.jpg";
import hostelCommon from "@/assets/hostel-common-2.jpg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const { t } = useLanguage();
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
      residenceId: "residence-1",
      images: [
        new URL("@/assets/hostel-room-1.jpg", import.meta.url).href,
        new URL("@/assets/hostel-room-3.jpg", import.meta.url).href,
        new URL("@/assets/hostel-common-2.jpg", import.meta.url).href,
      ],
      title: "Residencia ***",
      location: "Centro - Av. Corrientes y San Martín",
      rating: 4.8,
      reviews: 127,
      verified: true,
      currentResidents: 24,
      residentsRating: 4.6,
      services: [
        { name: "WiFi Alta Velocidad", icon: "Wifi" },
        { name: "Zona de Estudio 24hs", icon: "BookOpen" },
        { name: "Cocina Equipada", icon: "Utensils" },
        { name: "Lavandería", icon: "Shirt" },
        { name: "Aire Acondicionado", icon: "Wind" },
      ],
      availableRooms: [
        {
          type: "Hab. Doble",
          price: 38000,
          occupants: [
            {
              name: "María G.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
              rating: 4.9,
              description: "Estudiante de medicina, organizada y tranquila.",
              badges: ["⭐", "🤝"],
              score: 850
            }
          ]
        },
        {
          type: "Hab. Triple",
          price: 45000,
          occupants: [
            {
              name: "Lucas R.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
              rating: 4.7,
              description: "Ingeniería, fan del deporte y música.",
              badges: ["🤝", "💰"],
              score: 780
            },
            {
              name: "Ana P.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
              rating: 4.8,
              description: "Estudiante de diseño, creativa y sociable.",
              badges: ["⭐"],
              score: 820
            }
          ]
        }
      ]
    },
    {
      residenceId: "residence-2",
      images: [
        new URL("@/assets/hostel-common-2.jpg", import.meta.url).href,
        new URL("@/assets/hostel-room-1.jpg", import.meta.url).href,
        new URL("@/assets/hostel-room-3.jpg", import.meta.url).href,
      ],
      title: "Casa Universitaria ***",
      location: "Recoleta - Av. Santa Fe y Callao",
      rating: 4.9,
      reviews: 95,
      verified: true,
      currentResidents: 18,
      residentsRating: 4.8,
      services: [
        { name: "WiFi Alta Velocidad", icon: "Wifi" },
        { name: "Gym Incluido", icon: "Flame" },
        { name: "Cocina Equipada", icon: "Utensils" },
        { name: "Seguridad 24hs", icon: "Shield" },
        { name: "Limpieza", icon: "Sparkles" },
      ],
      availableRooms: [
        {
          type: "Hab. Doble",
          price: 45000,
          occupants: [
            {
              name: "Sofia M.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
              rating: 5.0,
              description: "Derecho, disciplinada y amigable.",
              badges: ["⭐", "💰", "🤝"],
              score: 920
            }
          ]
        }
      ]
    },
    {
      residenceId: "residence-3",
      images: [
        new URL("@/assets/hostel-room-3.jpg", import.meta.url).href,
        new URL("@/assets/hostel-common-2.jpg", import.meta.url).href,
        new URL("@/assets/hostel-room-1.jpg", import.meta.url).href,
      ],
      title: "Residencia del ***",
      location: "Palermo - Av. Santa Fe y Scalabrini Ortiz",
      rating: 4.7,
      reviews: 143,
      verified: true,
      currentResidents: 32,
      residentsRating: 4.5,
      services: [
        { name: "WiFi Alta Velocidad", icon: "Wifi" },
        { name: "Zona de Estudio 24hs", icon: "BookOpen" },
        { name: "Cocina Equipada", icon: "Utensils" },
        { name: "Lavandería", icon: "Shirt" },
        { name: "Calefacción", icon: "Flame" },
      ],
      availableRooms: [
        {
          type: "Hab. Triple",
          price: 40000,
          occupants: [
            {
              name: "Martín L.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Martin",
              rating: 4.8,
              description: "Economía, responsable y tranquilo.",
              badges: ["💰", "🤝"],
              score: 810
            },
            {
              name: "Camila T.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Camila",
              rating: 4.4,
              description: "Comunicación social, sociable y respetuosa.",
              badges: ["🤝"],
              score: 680
            }
          ]
        }
      ]
    },
    {
      residenceId: "residence-4",
      images: [
        new URL("@/assets/hostel-room-1.jpg", import.meta.url).href,
        new URL("@/assets/hostel-room-3.jpg", import.meta.url).href,
        new URL("@/assets/hostel-common-2.jpg", import.meta.url).href,
      ],
      title: "Residencia Premium ***",
      location: "Palermo - Av. Córdoba y Juan B. Justo",
      rating: 5.0,
      reviews: 93,
      verified: true,
      currentResidents: 15,
      residentsRating: 4.9,
      services: [
        { name: "WiFi Alta Velocidad", icon: "Wifi" },
        { name: "Servicio de Limpieza", icon: "Sparkles" },
        { name: "Cocina Equipada", icon: "Utensils" },
        { name: "Aire Acondicionado", icon: "Wind" },
        { name: "Seguridad 24hs", icon: "Shield" },
      ],
      availableRooms: [
        {
          type: "Hab. Doble",
          price: 55000,
          occupants: [
            {
              name: "Valentina R.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Valentina",
              rating: 5.0,
              description: "Medicina veterinaria, súper organizada y respetuosa.",
              badges: ["⭐", "💰", "🤝"],
              score: 950
            }
          ]
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
                {t("nav.search")}
              </button>
              <button 
                onClick={() => scrollToSection('profile-selector')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t("nav.whoAreYou")}
              </button>
              <a 
                href="/estudiantes" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {t("nav.forStudents")}
              </a>
              <a 
                href="/padres" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {t("nav.forParents")}
              </a>
              <a 
                href="/residencias-pms" 
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {t("nav.forResidences")}
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex"
              onClick={() => scrollToSection('cta-section')}
            >
              {t("nav.publishResidence")}
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>{t("nav.menu")}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <button 
                    onClick={() => scrollToSection('featured-residences')}
                    className="text-left text-base font-medium hover:text-primary transition-colors py-2"
                  >
                    {t("nav.search")}
                  </button>
                  <button 
                    onClick={() => scrollToSection('profile-selector')}
                    className="text-left text-base font-medium hover:text-primary transition-colors py-2"
                  >
                    {t("nav.whoAreYou")}
                  </button>
                  <a 
                    href="/estudiantes" 
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    {t("nav.forStudents")}
                  </a>
                  <a 
                    href="/padres" 
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    {t("nav.forParents")}
                  </a>
                  <a 
                    href="/residencias-pms" 
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    {t("nav.forResidences")}
                  </a>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => scrollToSection('cta-section')}
                  >
                    {t("nav.publishResidence")}
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
              <span className="hidden md:inline">{t("nav.login")}</span>
            </Button>
          </div>
        </div>
      </header>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
      <ResidenceContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />

      {/* Hero Section with Carousel */}
      <section className="relative overflow-hidden">
        {/* Hero carousel as background */}
        <div className="absolute inset-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="h-full">
              <CarouselItem className="h-full">
                <img
                  src={heroImage}
                  alt="Habitación compartida en residencia estudiantil"
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
              <CarouselItem className="h-full">
                <img
                  src={hostelRoom1}
                  alt="Habitación doble moderna"
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
              <CarouselItem className="h-full">
                <img
                  src={hostelRoom3}
                  alt="Habitación compartida con escritorio"
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
              <CarouselItem className="h-full">
                <img
                  src={hostelCommon}
                  alt="Áreas comunes de residencia estudiantil"
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] whitespace-pre-line">
              {t("hero.title")}
            </h2>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-8 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {t("hero.subtitle")}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{t("residences.title")}</h2>
              <p className="text-muted-foreground">{t("residences.subtitle")}</p>
            </div>
            <Button 
              variant="link" 
              className="hidden md:flex"
              onClick={() => window.location.href = '/residencias'}
            >
              {t("residences.viewAll")}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResidences.map((residence, index) => (
              <ResidenceCard key={index} {...residence} residenceId={`residence-${index + 1}`} />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 md:hidden">
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/residencias'}
            >
              {t("residences.viewAllMobile")}
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* CTA Section */}
      <section id="cta-section" className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background text-primary hover:bg-background/90 border-0"
              onClick={() => setContactFormOpen(true)}
            >
              {t("cta.contact")}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              onClick={() => window.location.href = '/residencias-pms'}
            >
              {t("cta.learnMore")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ResidenceAssistant />
    </div>
  );
};

export default Index;
