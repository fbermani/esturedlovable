import { GraduationCap, Users, Building, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProfileOption {
  icon: typeof GraduationCap;
  title: string;
  subtitle: string;
  benefits: string[];
  route: string;
}

export const ProfileSelector = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const profiles: ProfileOption[] = [
    {
      icon: GraduationCap,
      title: "Estudiante",
      subtitle: "Encontrá tu hogar ideal",
      benefits: [
        "Buscá residencias verificadas",
        "Conocé a tus futuros compañeros",
        "Sistema de puntos y descuentos",
        "Acceso a recursos exclusivos",
      ],
      route: "/estudiantes",
    },
    {
      icon: Users,
      title: "Padre/Madre",
      subtitle: "Seguridad para tu hijo/a",
      benefits: [
        "Residencias verificadas y seguras",
        "Comunidad de padres",
        "Comunicación directa con residencias",
        "Beneficios en hoteles y transporte",
      ],
      route: "/padres",
    },
    {
      icon: Building,
      title: "Residencia",
      subtitle: "Gestioná tu propiedad",
      benefits: [
        "PMS integrado y gratuito",
        "Disponibilidad en tiempo real",
        "Acceso a miles de estudiantes",
        "Descuentos en servicios",
      ],
      route: "/residencias-pms",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quién sos?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seleccioná tu perfil para acceder a beneficios exclusivos y una experiencia personalizada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            const isHovered = hoveredIndex === index;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="bg-card rounded-2xl border-2 border-border p-8 transition-all duration-300 hover:border-primary hover:shadow-lg h-full flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{profile.title}</h3>
                  <p className="text-muted-foreground mb-4">{profile.subtitle}</p>

                  {/* Benefits overlay - desktop hover, mobile expand */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isHovered || isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-sm mb-3 text-primary">Ventajas principales:</p>
                      <ul className="space-y-2 text-sm text-left">
                        {profile.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mobile: Toggle details button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="md:hidden mt-4 gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(isExpanded ? null : index);
                    }}
                  >
                    {isExpanded ? "Ocultar" : "Ver detalles"}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </Button>

                  {/* Ver más button - navigates to profile page */}
                  <Button
                    variant="default"
                    size="sm"
                    className="mt-4 w-full"
                    onClick={() => {
                      navigate(profile.route);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Ver más
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
