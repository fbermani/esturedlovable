import { Button } from "@/components/ui/button";
import { PointsSystem } from "@/components/PointsSystem";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, UserCircle, MessageCircle, Shield, FileText, Gift, Users, BookOpen, CheckCircle2, Trophy, Star, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const ParentProfile = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [evaluationOpen, setEvaluationOpen] = useState(false);
  const { t } = useLanguage();

  const badges = [
    {
      level: t("parent.badge.newMember"),
      icon: Users,
      color: "bg-gray-500",
      requirements: t("parent.badge.newMember.req"),
      description: t("parent.badge.newMember.desc"),
      benefits: [t("parent.badge.newMember.benefit1"), t("parent.badge.newMember.benefit2")]
    },
    {
      level: t("parent.badge.collaborator"),
      icon: MessageCircle,
      color: "bg-blue-500",
      requirements: t("parent.badge.collaborator.req"),
      description: t("parent.badge.collaborator.desc"),
      benefits: [t("parent.badge.collaborator.benefit1"), t("parent.badge.collaborator.benefit2"), t("parent.badge.collaborator.benefit3")]
    },
    {
      level: t("parent.badge.active"),
      icon: Star,
      color: "bg-indigo-500",
      requirements: t("parent.badge.active.req"),
      description: t("parent.badge.active.desc"),
      benefits: [t("parent.badge.active.benefit1"), t("parent.badge.active.benefit2"), t("parent.badge.active.benefit3")]
    },
    {
      level: t("parent.badge.expert"),
      icon: Trophy,
      color: "bg-yellow-500",
      requirements: t("parent.badge.expert.req"),
      description: t("parent.badge.expert.desc"),
      benefits: [t("parent.badge.expert.benefit1"), t("parent.badge.expert.benefit2"), t("parent.badge.expert.benefit3")]
    },
    {
      level: t("parent.badge.ambassador"),
      icon: Award,
      color: "bg-purple-600",
      requirements: t("parent.badge.ambassador.req"),
      description: t("parent.badge.ambassador.desc"),
      benefits: [t("parent.badge.ambassador.benefit1"), t("parent.badge.ambassador.benefit2"), t("parent.badge.ambassador.benefit3")]
    }
  ];

  const resources = [
    { icon: MessageCircle, title: t("parent.resource.community.title"), description: t("parent.resource.community.desc"), featured: true },
    { icon: Shield, title: t("parent.resource.security.title"), description: t("parent.resource.security.desc") },
    { icon: FileText, title: t("parent.resource.behavior.title"), description: t("parent.resource.behavior.desc") },
    { icon: Gift, title: t("parent.resource.discounts.title"), description: t("parent.resource.discounts.desc") },
    { icon: Users, title: t("parent.resource.communication.title"), description: t("parent.resource.communication.desc") },
    { icon: BookOpen, title: t("parent.resource.support.title"), description: t("parent.resource.support.desc") },
  ];

  const concepts = [
    t("student.behavior.order"), t("student.behavior.cleanliness"), t("student.behavior.interactions"),
    t("student.behavior.empathy"), t("student.behavior.tolerance"), t("student.behavior.personality")
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/"><h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sin Fronteras</h1></a>
            <nav className="hidden md:flex gap-6">
              <a href="/#featured-residences" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.search")}</a>
              <a href="/estudiantes" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.forStudents")}</a>
              <a href="/padres" className="text-sm font-medium text-primary">{t("nav.forParents")}</a>
              <a href="/residencias-pms" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.forResidences")}</a>
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
                  <a href="/padres" className="text-base font-medium text-primary py-2">{t("nav.forParents")}</a>
                  <a href="/residencias-pms" className="text-base font-medium hover:text-primary transition-colors py-2">{t("nav.forResidences")}</a>
                </nav>
              </SheetContent>
            </Sheet>
            <Button variant="outline" size="sm" className="gap-2"><UserCircle className="h-4 w-4" /><span className="hidden md:inline">{t("nav.login")}</span></Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-background to-primary/10">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("parent.hero.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("parent.hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="hero">{t("parent.hero.joinCommunity")}</Button>
            <Button size="lg" variant="outline">{t("parent.hero.viewResidences")}</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("parent.privacy.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("parent.privacy.desc")}</p>
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded text-left">
              <p className="font-semibold mb-3">{t("parent.privacy.access")}</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span>{t("parent.privacy.access1")}</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span>{t("parent.privacy.access2")}</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span>{t("parent.privacy.access3")}</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span>{t("parent.privacy.access4")}</span></li>
              </ul>
            </div>
            <Button size="lg" variant="outline" className="mt-6">{t("parent.privacy.policy")}</Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("parent.verification.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("parent.verification.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card><CardHeader><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3"><Shield className="h-6 w-6 text-primary" /></div><CardTitle>{t("parent.verification.visits.title")}</CardTitle></CardHeader><CardContent className="text-muted-foreground">{t("parent.verification.visits.desc")}</CardContent></Card>
            <Card><CardHeader><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3"><Users className="h-6 w-6 text-primary" /></div><CardTitle>{t("parent.verification.responsible.title")}</CardTitle></CardHeader><CardContent className="text-muted-foreground">{t("parent.verification.responsible.desc")}</CardContent></Card>
            <Card><CardHeader><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3"><MessageCircle className="h-6 w-6 text-primary" /></div><CardTitle>{t("parent.verification.feedback.title")}</CardTitle></CardHeader><CardContent className="text-muted-foreground">{t("parent.verification.feedback.desc")}</CardContent></Card>
            <Card><CardHeader><div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3"><CheckCircle2 className="h-6 w-6 text-primary" /></div><CardTitle>{t("parent.verification.improvements.title")}</CardTitle></CardHeader><CardContent className="text-muted-foreground">{t("parent.verification.improvements.desc")}</CardContent></Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">{t("parent.community.badge")}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("parent.community.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("parent.community.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card><CardHeader><CardTitle className="text-lg">{t("parent.community.forum.title")}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">{t("parent.community.forum.desc")}</CardContent></Card>
            <Card><CardHeader><CardTitle className="text-lg">{t("parent.community.events.title")}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">{t("parent.community.events.desc")}</CardContent></Card>
            <Card><CardHeader><CardTitle className="text-lg">{t("parent.community.discounts.title")}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">{t("parent.community.discounts.desc")}</CardContent></Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("parent.points.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("parent.points.subtitle")}</p>
          </div>
          <PointsSystem userType="parent" />
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">{t("parent.badges.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`h-12 w-12 rounded-xl ${badge.color} flex items-center justify-center`}><Icon className="h-6 w-6 text-white" /></div>
                        <div><CardTitle className="text-lg">{badge.level}</CardTitle><Badge variant="secondary" className="text-xs">{badge.requirements}</Badge></div>
                      </div>
                      <CardDescription className="text-sm">{badge.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-2">{t("student.badges.benefits")}</p>
                      <ul className="space-y-1">{badge.benefits.map((benefit, idx) => (<li key={idx} className="text-xs text-muted-foreground flex items-start gap-2"><span className="text-primary">✓</span><span>{benefit}</span></li>))}</ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("parent.evaluation.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("parent.evaluation.subtitle")}</p>
          </div>
          <Collapsible open={evaluationOpen} onOpenChange={setEvaluationOpen}>
            <Card>
              <CardHeader>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                    <CardTitle className="text-2xl text-left">{t("parent.evaluation.rankings.title")}</CardTitle>
                    <MessageCircle className={`h-5 w-5 transition-transform ${evaluationOpen ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CardDescription className="text-base mt-2">{t("parent.evaluation.rankings.desc")}</CardDescription>
              </CardHeader>
              <CollapsibleContent>
                <CardContent className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-bold text-lg mb-3">{t("student.behavior.concepts")}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {concepts.map((concept) => (<div key={concept} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30"><Shield className="h-5 w-5 text-primary" /><span className="font-medium text-sm">{concept}</span></div>))}
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("parent.resources.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("parent.resources.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${resource.featured ? 'border-primary border-2' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center"><Icon className="h-6 w-6 text-secondary" /></div>
                      <div><CardTitle className="text-lg">{resource.title}</CardTitle>{resource.featured && (<span className="text-xs text-primary font-semibold">Premium</span>)}</div>
                    </div>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent><Button variant="outline" className="w-full">{t("student.resources.explore")}</Button></CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-2 border-muted">
            <CardHeader><CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5" />{t("parent.disclaimer.title")}</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground"><p>{t("parent.disclaimer.text")}</p></CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParentProfile;