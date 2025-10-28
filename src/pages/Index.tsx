import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { ResidenceCard } from "@/components/ResidenceCard";
import { TrustBadges } from "@/components/TrustBadges";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { Menu, UserCircle } from "lucide-react";
import heroImage from "@/assets/hero-residence.jpg";

const Index = () => {
  // Sample data for featured residences
  const featuredResidences = [
    {
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=450&fit=crop",
      title: "Residencia Universitaria Central",
      location: "A 5 min de la UBA, Buenos Aires",
      price: 45000,
      rating: 4.9,
      reviews: 127,
      capacity: "1-2 personas",
      verified: true,
    },
    {
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=450&fit=crop",
      title: "Departamentos Estudiantiles Norte",
      location: "Campus UTN, Córdoba",
      price: 38000,
      rating: 4.7,
      reviews: 84,
      capacity: "2-4 personas",
      verified: true,
    },
    {
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=450&fit=crop",
      title: "Casa de Estudiantes La Plata",
      location: "Zona UNLP, La Plata",
      price: 42000,
      rating: 4.8,
      reviews: 156,
      capacity: "1 persona",
      verified: true,
    },
    {
      image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&h=450&fit=crop",
      title: "Residencia Premium Palermo",
      location: "Palermo, Buenos Aires",
      price: 52000,
      rating: 5.0,
      reviews: 93,
      capacity: "1-2 personas",
      verified: true,
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
              <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Residencias
              </a>
              <a href="/estudiantes" className="text-sm font-medium hover:text-primary transition-colors">
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
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Publicar residencia
            </Button>
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
              Tu hogar universitario<br />empieza con confianza
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Viví, estudiá y crecé en una comunidad segura, conectada y transparente
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <SearchBar />
          </div>
          
          <div className="mb-16">
            <TrustBadges />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <img
              src={heroImage}
              alt="Residencia estudiantil moderna"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Residences */}
      <section className="py-16 md:py-24 bg-muted/30">
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
              <ResidenceCard key={index} {...residence} />
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Tenés una residencia estudiantil?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Sumá tu residencia a nuestra plataforma y conectá con miles de estudiantes que buscan un hogar confiable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-background text-primary hover:bg-background/90 border-0">
              Registrar mi residencia
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
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
