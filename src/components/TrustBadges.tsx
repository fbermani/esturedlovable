import { Shield, Calendar, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const TrustBadges = () => {
  const { t } = useLanguage();

  const badges = [
    {
      icon: Shield,
      titleKey: "trust.verified.title",
      descriptionKey: "trust.verified.description",
    },
    {
      icon: Calendar,
      titleKey: "trust.availability.title",
      descriptionKey: "trust.availability.description",
    },
    {
      icon: Gift,
      titleKey: "trust.benefits.title",
      descriptionKey: "trust.benefits.description",
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
              <p className="font-semibold text-sm md:text-base text-white drop-shadow-lg">{t(badge.titleKey)}</p>
              <p className="text-xs md:text-sm text-white/80 drop-shadow-md">{t(badge.descriptionKey)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
