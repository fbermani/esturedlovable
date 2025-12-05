import { Search, UserCheck, Home, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      titleKey: "howItWorks.step1.title",
      descriptionKey: "howItWorks.step1.description",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: UserCheck,
      titleKey: "howItWorks.step2.title",
      descriptionKey: "howItWorks.step2.description",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Home,
      titleKey: "howItWorks.step3.title",
      descriptionKey: "howItWorks.step3.description",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Award,
      titleKey: "howItWorks.step4.title",
      descriptionKey: "howItWorks.step4.description",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("howItWorks.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`h-20 w-20 rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="h-10 w-10" />
                  </div>
                  
                  <div className="absolute -top-2 -left-2 h-8 w-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-xl mb-2">{t(step.titleKey)}</h3>
                    <p className="text-muted-foreground">{t(step.descriptionKey)}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
