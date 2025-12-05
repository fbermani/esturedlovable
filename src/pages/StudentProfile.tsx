import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { PointsSystem } from "@/components/PointsSystem";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, UserCircle, BookOpen, Users, Award, GraduationCap, Trophy, Star, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const StudentProfile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const badges = [
    {
      level: t("student.badge.novice"),
      icon: Target,
      color: "bg-gray-500",
      requirements: t("student.badge.novice.req"),
      description: t("student.badge.novice.desc"),
      benefits: [t("student.badge.novice.benefit1"), t("student.badge.novice.benefit2")]
    },
    {
      level: t("student.badge.bronze"),
      icon: Award,
      color: "bg-amber-700",
      requirements: t("student.badge.bronze.req"),
      description: t("student.badge.bronze.desc"),
      benefits: [t("student.badge.bronze.benefit1"), t("student.badge.bronze.benefit2")]
    },
    {
      level: t("student.badge.silver"),
      icon: Star,
      color: "bg-gray-400",
      requirements: t("student.badge.silver.req"),
      description: t("student.badge.silver.desc"),
      benefits: [t("student.badge.silver.benefit1"), t("student.badge.silver.benefit2"), t("student.badge.silver.benefit3")]
    },
    {
      level: t("student.badge.gold"),
      icon: Trophy,
      color: "bg-yellow-500",
      requirements: t("student.badge.gold.req"),
      description: t("student.badge.gold.desc"),
      benefits: [t("student.badge.gold.benefit1"), t("student.badge.gold.benefit2"), t("student.badge.gold.benefit3")]
    },
    {
      level: t("student.badge.platinum"),
      icon: GraduationCap,
      color: "bg-purple-500",
      requirements: t("student.badge.platinum.req"),
      description: t("student.badge.platinum.desc"),
      benefits: [t("student.badge.platinum.benefit1"), t("student.badge.platinum.benefit2"), t("student.badge.platinum.benefit3")]
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: t("student.resource.tutoring.title"),
      description: t("student.resource.tutoring.desc"),
    },
    {
      icon: Users,
      title: t("student.resource.coexistence.title"),
      description: t("student.resource.coexistence.desc"),
    },
    {
      icon: Award,
      title: t("student.resource.ratings.title"),
      description: t("student.resource.ratings.desc"),
    },
    {
      icon: GraduationCap,
      title: t("student.resource.studentResources.title"),
      description: t("student.resource.studentResources.desc"),
    },
  ];

  const concepts = [
    t("student.behavior.order"),
    t("student.behavior.cleanliness"),
    t("student.behavior.interactions"),
    t("student.behavior.empathy"),
    t("student.behavior.tolerance"),
    t("student.behavior.personality")
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sin Fronteras
              </h1>
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="/#featured-residences" className="text-sm font-medium hover:text-primary transition-colors">
                {t("nav.search")}
              </a>
              <a href="/estudiantes" className="text-sm font-medium text-primary">
                {t("nav.forStudents")}
              </a>
              <a href="/padres" className="text-sm font-medium hover:text-primary transition-colors">
                {t("nav.forParents")}
              </a>
              <a href="/residencias-pms" className="text-sm font-medium hover:text-primary transition-colors">
                {t("nav.forResidences")}
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>{t("nav.menu")}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="/#featured-residences" className="text-base font-medium hover:text-primary transition-colors py-2">
                    {t("nav.search")}
                  </a>
                  <a href="/estudiantes" className="text-base font-medium text-primary py-2">
                    {t("nav.forStudents")}
                  </a>
                  <a href="/padres" className="text-base font-medium hover:text-primary transition-colors py-2">
                    {t("nav.forParents")}
                  </a>
                  <a href="/residencias-pms" className="text-base font-medium hover:text-primary transition-colors py-2">
                    {t("nav.forResidences")}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
            <Button variant="outline" size="sm" className="gap-2">
              <UserCircle className="h-4 w-4" />
              <span className="hidden md:inline">{t("nav.login")}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("student.hero.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("student.hero.subtitle")}
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Behavior Counts Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("student.behavior.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("student.behavior.subtitle")}
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">{t("student.behavior.howItWorks")}</CardTitle>
              <CardDescription className="text-base">
                {t("student.behavior.howItWorksDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">{t("student.behavior.concepts")}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {concepts.map((concept) => (
                    <div key={concept} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="font-medium">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">{t("student.behavior.profileDecision")}</h3>
                <p className="text-muted-foreground mb-4">
                  {t("student.behavior.profileDecisionDesc")}
                </p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                  <p className="font-semibold text-accent-foreground mb-2">
                    {t("student.behavior.profileTip")}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ {t("student.behavior.profileBenefit1")}</li>
                    <li>✓ {t("student.behavior.profileBenefit2")}</li>
                    <li>✓ {t("student.behavior.profileBenefit3")}</li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">{t("student.behavior.residenceEval")}</h3>
                <p className="text-muted-foreground">
                  {t("student.behavior.residenceEvalDesc")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Points System and Badges */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("student.points.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("student.points.subtitle")}
            </p>
          </div>
          <PointsSystem userType="student" />

          {/* Badges Detail */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">{t("student.badges.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`h-12 w-12 rounded-xl ${badge.color} flex items-center justify-center`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{badge.level}</CardTitle>
                          <Badge variant="secondary" className="text-xs">{badge.requirements}</Badge>
                        </div>
                      </div>
                      <CardDescription className="text-sm">{badge.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-2">{t("student.badges.benefits")}</p>
                      <ul className="space-y-1">
                        {badge.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("student.resources.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("student.resources.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{resource.title}</CardTitle>
                    </div>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">{t("student.resources.explore")}</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Basic Coexistence Rules */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("student.coexistence.title")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("student.coexistence.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("student.coexistence.respect.title")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("student.coexistence.respect.desc")}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("student.coexistence.communication.title")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("student.coexistence.communication.desc")}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("student.coexistence.responsibility.title")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {t("student.coexistence.responsibility.desc")}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentProfile;