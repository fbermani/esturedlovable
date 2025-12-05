import { Search, MapPin, Home, Users, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export const SearchBar = () => {
  const { t } = useLanguage();
  const [roomType, setRoomType] = useState("");
  const [roommateRating, setRoommateRating] = useState([3]);
  const [residenceRating, setResidenceRating] = useState([3]);

  const filters = [
    { key: "filter.coordinator", label: t("filter.coordinator") },
    { key: "filter.kitchen", label: t("filter.kitchen") },
    { key: "filter.laundry", label: t("filter.laundry") },
    { key: "filter.livingRoom", label: t("filter.livingRoom") },
    { key: "filter.cameras", label: t("filter.cameras") },
    { key: "filter.studyRoom", label: t("filter.studyRoom") },
    { key: "filter.desk", label: t("filter.desk") },
    { key: "filter.locker", label: t("filter.locker") },
    { key: "filter.cleaning", label: t("filter.cleaning") },
    { key: "filter.ownerManaged", label: t("filter.ownerManaged") },
    { key: "filter.privateBathroom", label: t("filter.privateBathroom") },
    { key: "filter.balcony", label: t("filter.balcony") },
    { key: "filter.pets", label: t("filter.pets") },
    { key: "filter.ac", label: t("filter.ac") },
  ];

  return (
    <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-2 max-w-5xl w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder={t("search.location")}
            className="border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
          <Home className="h-5 w-5 text-muted-foreground" />
          <select 
            className="border-0 bg-transparent p-0 w-full text-sm focus:outline-none text-foreground"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="">{t("search.roomType")}</option>
            <option value="individual">{t("search.roomType.individual")}</option>
            <option value="compartida">{t("search.roomType.shared")}</option>
            <option value="apartamento">{t("search.roomType.apartment")}</option>
          </select>
        </div>

        {(roomType === "compartida" || roomType === "apartamento") && (
          <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-xl">
            <Users className="h-5 w-5 text-muted-foreground" />
            <select className="border-0 bg-transparent p-0 w-full text-sm focus:outline-none text-foreground">
              <option value="">{t("search.capacity")}</option>
              <option value="2">{t("search.capacity.double")}</option>
              <option value="3">{t("search.capacity.triple")}</option>
              <option value="4">{t("search.capacity.quadruple")}</option>
              <option value="5">{t("search.capacity.quintuple")}</option>
            </select>
          </div>
        )}

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2 bg-background">
              <SlidersHorizontal className="h-5 w-5" />
              {t("search.filters")}
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>{t("search.advancedFilters")}</SheetTitle>
              <SheetDescription>
                {t("search.refineSearch")}
              </SheetDescription>
            </SheetHeader>
            
            <div className="mt-6 space-y-6">
              <div>
                <Label className="text-base font-semibold mb-3 block">{t("search.filters")}</Label>
                <div className="space-y-3">
                  {filters.map((filter) => (
                    <div key={filter.key} className="flex items-center space-x-2">
                      <Checkbox id={filter.key} />
                      <label htmlFor={filter.key} className="text-sm cursor-pointer">
                        {filter.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">
                  {t("search.roommateRating")}: {roommateRating[0]} ★
                </Label>
                <Slider
                  value={roommateRating}
                  onValueChange={setRoommateRating}
                  max={5}
                  min={1}
                  step={0.5}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">
                  {t("search.residenceRating")}: {residenceRating[0]} ★
                </Label>
                <Slider
                  value={residenceRating}
                  onValueChange={setResidenceRating}
                  max={5}
                  min={1}
                  step={0.5}
                  className="mt-2"
                />
              </div>

              <Button className="w-full">{t("search.applyFilters")}</Button>
            </div>
          </SheetContent>
        </Sheet>
        
        <Button variant="hero" size="lg" className="gap-2">
          <Search className="h-5 w-5" />
          {t("search.button")}
        </Button>
      </div>
    </div>
  );
};
