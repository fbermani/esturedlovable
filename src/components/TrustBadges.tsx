import { Shield, Calendar, Gift } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Residencias y Perfiles Verificados",
      description: "Validamos todas las residencias y usuarios",
    },
    {
      icon: Calendar,
      title: "Disponibilidad Real",
      description: "Información actualizada en tiempo real",
    },
    {
      icon: Gift,
      title: "Beneficios Exclusivos",
      description: "Descuentos y premios por puntos",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
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