import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sin Fronteras</h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer.forStudents")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.searchResidences")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.createProfile")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.premiumBenefits")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.resources")}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer.forResidences")}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.registerResidence")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.managementPanel")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.pricing")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">{t("footer.support")}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer.followUs")}</h4>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};
