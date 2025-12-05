import { Button } from "@/components/ui/button";
import { PointsSystem } from "@/components/PointsSystem";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, UserCircle, LayoutDashboard, Users, CreditCard, Wrench, FileText, TrendingUp, Package, Building2, AlertTriangle, Trophy, Star, Award, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const ResidencePMS = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const badges = [
    { level: t("pms.badge.initial"), icon: Building2, color: "bg-gray-500", requirements: t("pms.badge.initial.req"), description: t("pms.badge.initial.desc"), benefits: [t("pms.badge.initial.benefit1"), t("pms.badge.initial.benefit2")] },
    { level: t("pms.badge.bronze"), icon: Shield, color: "bg-amber-700", requirements: t("pms.badge.bronze.req"), description: t("pms.badge.bronze.desc"), benefits: [t("pms.badge.bronze.benefit1"), t("pms.badge.bronze.benefit2"), t("pms.badge.bronze.benefit3")] },
    { level: t("pms.badge.silver"), icon: Star, color: "bg-gray-400", requirements: t("pms.badge.silver.req"), description: t("pms.badge.silver.desc"), benefits: [t("pms.badge.silver.benefit1"), t("pms.badge.silver.benefit2"), t("pms.badge.silver.benefit3")] },
    { level: t("pms.badge.gold"), icon: Trophy, color: "bg-yellow-500", requirements: t("pms.badge.gold.req"), description: t("pms.badge.gold.desc"), benefits: [t("pms.badge.gold.benefit1"), t("pms.badge.gold.benefit2"), t("pms.badge.gold.benefit3")] },
    { level: t("pms.badge.platinum"), icon: Award, color: "bg-purple-600", requirements: t("pms.badge.platinum.req"), description: t("pms.badge.platinum.desc"), benefits: [t("pms.badge.platinum.benefit1"), t("pms.badge.platinum.benefit2"), t("pms.badge.platinum.benefit3")] }
  ];

  const pmsFeatures = [
    { icon: Users, title: t("pms.features.students.title"), description: t("pms.features.students.desc") },
    { icon: CreditCard, title: t("pms.features.payments.title"), description: t("pms.features.payments.desc") },
    { icon: Wrench, title: t("pms.features.maintenance.title"), description: t("pms.features.maintenance.desc") },
    { icon: FileText, title: t("pms.features.docs.title"), description: t("pms.features.docs.desc") },
    { icon: TrendingUp, title: t("pms.features.reports.title"), description: t("pms.features.reports.desc") },
    { icon: LayoutDashboard, title: t("pms.features.panel.title"), description: t("pms.features.panel.desc") },
  ];

  const resources = [
    { icon: Package, title: t("pms.resources.providers.title"), description: t("pms.resources.providers.desc") },
    { icon: FileText, title: t("pms.resources.accounting.title"), description: t("pms.resources.accounting.desc") },
    { icon: Users, title: t("pms.resources.hr.title"), description: t("pms.resources.hr.desc") },
    { icon: Building2, title: t("pms.resources.practices.title"), description: t("pms.resources.practices.desc") },
  ];

  const concepts = [t("student.behavior.order"), t("student.behavior.cleanliness"), t("student.behavior.interactions"), t("student.behavior.empathy"), t("student.behavior.tolerance"), t("student.behavior.personality")];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/"><h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sin Fronteras</h1></a>
            <nav className="hidden md:flex gap-6">
              <a href="/#featured-residences" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.search")}</a>
              <a href="/estudiantes" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.forStudents")}</a>
              <a href="/padres" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.forParents")}</a>
              <a href="/residencias-pms" className="text-sm font-medium text-primary">{t("nav.forResidences")}</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild><Button variant="ghost" size="icon" className="md:hidden"><Menu className="h-5 w-5" /></Button></SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader><SheetTitle>{t("nav.menu")}</SheetTitle></SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="/#featured-residences" className="text-base font-medium hover:text-primary transition-colors py-2">{t("nav.search")}</a>
                  <a href="/estudiantes" className="text-base font-medium hover:text-primary transition-colors py-2">{t("nav.forStudents")}</a>
                  <a href="/padres" className="text-base font-medium hover:text-primary transition-colors py-2">{t("nav.forParents")}</a>
                  <a href="/residencias-pms" className="text-base font-medium text-primary py-2">{t("nav.forResidences")}</a>
                </nav>
              </SheetContent>
            </Sheet>
            <Button variant="outline" size="sm" className="gap-2"><UserCircle className="h-4 w-4" /><span className="hidden md:inline">{t("nav.login")}</span></Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground">{t("pms.badge")}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("pms.hero.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("pms.hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero">{t("pms.hero.demo")}</Button>
            <Button size="lg" variant="outline">{t("pms.hero.pricing")}</Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pms.features.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("pms.features.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pmsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (<Card key={index} className="hover:shadow-lg transition-shadow"><CardHeader><div className="flex items-center gap-3 mb-2"><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center"><Icon className="h-6 w-6 text-primary" /></div><CardTitle className="text-lg">{feature.title}</CardTitle></div><CardDescription>{feature.description}</CardDescription></CardHeader></Card>);
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pms.benefits.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("pms.benefits.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20"><CardHeader><div className="flex items-center gap-3 mb-2"><div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center"><span className="text-2xl font-bold text-primary">1</span></div><CardTitle className="text-xl">{t("pms.benefits.sync.title")}</CardTitle></div></CardHeader><CardContent className="text-muted-foreground">{t("pms.benefits.sync.desc")}</CardContent></Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20"><CardHeader><div className="flex items-center gap-3 mb-2"><div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center"><span className="text-2xl font-bold text-secondary">2</span></div><CardTitle className="text-xl">{t("pms.benefits.visibility.title")}</CardTitle></div></CardHeader><CardContent className="text-muted-foreground">{t("pms.benefits.visibility.desc")}</CardContent></Card>
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20"><CardHeader><div className="flex items-center gap-3 mb-2"><div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center"><span className="text-2xl font-bold text-accent">3</span></div><CardTitle className="text-xl">{t("pms.benefits.reputation.title")}</CardTitle></div></CardHeader><CardContent className="text-muted-foreground">{t("pms.benefits.reputation.desc")}</CardContent></Card>
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20"><CardHeader><div className="flex items-center gap-3 mb-2"><div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center"><span className="text-2xl font-bold text-primary">4</span></div><CardTitle className="text-xl">{t("pms.benefits.support.title")}</CardTitle></div></CardHeader><CardContent className="text-muted-foreground">{t("pms.benefits.support.desc")}</CardContent></Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pms.points.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("pms.points.subtitle")}</p>
          </div>
          <PointsSystem userType="residence" />
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">{t("pms.badges.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (<Card key={index} className="hover:shadow-lg transition-shadow"><CardHeader><div className="flex items-center gap-3 mb-2"><div className={`h-12 w-12 rounded-xl ${badge.color} flex items-center justify-center`}><Icon className="h-6 w-6 text-white" /></div><div><CardTitle className="text-lg">{badge.level}</CardTitle><Badge variant="secondary" className="text-xs mt-1">{badge.requirements}</Badge></div></div><CardDescription className="text-sm">{badge.description}</CardDescription></CardHeader><CardContent><p className="text-sm font-semibold mb-2">{t("student.badges.benefits")}</p><ul className="space-y-1">{badge.benefits.map((benefit, idx) => (<li key={idx} className="text-xs text-muted-foreground flex items-start gap-2"><span className="text-primary">✓</span><span>{benefit}</span></li>))}</ul></CardContent></Card>);
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pms.evaluation.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("pms.evaluation.subtitle")}</p>
          </div>
          <Card className="mb-8">
            <CardHeader><CardTitle className="text-2xl">{t("pms.evaluation.improve.title")}</CardTitle><CardDescription className="text-base">{t("pms.evaluation.improve.desc")}</CardDescription></CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-3">{t("pms.evaluation.howTo.title")}</h3>
                <p className="text-muted-foreground mb-4">{t("pms.evaluation.howTo.desc")}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {concepts.map((concept) => (<div key={concept} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30"><TrendingUp className="h-5 w-5 text-primary" /><span className="font-medium">{concept}</span></div>))}
                </div>
              </div>
              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">{t("pms.evaluation.benefits.title")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                    <p className="font-semibold text-accent-foreground mb-2">{t("pms.evaluation.forResidence")}</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>✓ {t("pms.evaluation.forResidence1")}</li>
                      <li>✓ {t("pms.evaluation.forResidence2")}</li>
                      <li>✓ {t("pms.evaluation.forResidence3")}</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
                    <p className="font-semibold mb-2">{t("pms.evaluation.forStudents")}</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>✓ {t("pms.evaluation.forStudents1")}</li>
                      <li>✓ {t("pms.evaluation.forStudents2")}</li>
                      <li>✓ {t("pms.evaluation.forStudents3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pms.resources.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("pms.resources.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (<Card key={index} className="hover:shadow-lg transition-shadow"><CardHeader><div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3"><Icon className="h-6 w-6 text-secondary" /></div><CardTitle className="text-lg">{resource.title}</CardTitle><CardDescription>{resource.description}</CardDescription></CardHeader><CardContent><Button variant="outline" className="w-full" size="sm">{t("profile.seeMore")}</Button></CardContent></Card>);
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("pms.cta.title")}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">{t("pms.cta.subtitle")}</p>
          <Button size="lg" variant="outline" className="bg-background text-primary hover:bg-background/90 border-0">{t("pms.cta.demo")}</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResidencePMS;