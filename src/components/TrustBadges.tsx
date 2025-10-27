import { Shield, Star, Users, CheckCircle } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Verificadas",
      description: "Todas las residencias validadas",
    },
    {
      icon: Star,
      title: "Reseñas Reales",
      description: "Solo de estudiantes verificados",
    },
    {
      icon: Users,
      title: "Comunidad Segura",
      description: "Más de 10,000 estudiantes",
    },
    {
      icon: CheckCircle,
      title: "Pago Protegido",
      description: "Transacciones 100% seguras",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center gap-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm md:text-base">{badge.title}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{badge.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
