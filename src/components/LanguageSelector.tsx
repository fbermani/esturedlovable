import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 px-2">
          <span className="text-lg">{language === "es" ? "🇪🇸" : "🇺🇸"}</span>
          <span className="hidden sm:inline text-sm font-medium">
            {language === "es" ? "ES" : "EN"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={`gap-2 cursor-pointer ${language === "es" ? "bg-muted" : ""}`}
        >
          <span className="text-lg">🇪🇸</span>
          <span>Español</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`gap-2 cursor-pointer ${language === "en" ? "bg-muted" : ""}`}
        >
          <span className="text-lg">🇺🇸</span>
          <span>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
