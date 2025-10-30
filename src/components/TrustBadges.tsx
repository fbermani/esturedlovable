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
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl mx-auto justify-center">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center gap-2 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm md:text-base text-white drop-shadow-lg">{badge.title}</p>
              <p className="text-xs md:text-sm text-white/80 drop-shadow-md">{badge.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};