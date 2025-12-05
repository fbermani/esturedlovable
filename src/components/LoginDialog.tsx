import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GraduationCap, Users, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const profiles = [
    {
      icon: GraduationCap,
      titleKey: "profile.student",
      descriptionKey: "login.student.description",
      route: "/estudiantes",
    },
    {
      icon: Users,
      titleKey: "profile.parent",
      descriptionKey: "login.parent.description",
      route: "/padres",
    },
    {
      icon: Building,
      titleKey: "profile.residence",
      descriptionKey: "login.residence.description",
      route: "/residencias-pms",
    },
  ];

  const handleProfileSelect = (route: string) => {
    onOpenChange(false);
    navigate(route);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">{t("login.title")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-center text-muted-foreground mb-6">
            {t("login.selectProfile")}
          </p>
          <div className="space-y-3">
            {profiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleProfileSelect(profile.route)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-muted/50 transition-all"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{t(profile.titleKey)}</p>
                    <p className="text-sm text-muted-foreground">{t(profile.descriptionKey)}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
