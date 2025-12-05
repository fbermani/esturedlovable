import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  es: {
    // Header
    "nav.search": "Buscar",
    "nav.whoAreYou": "¿Quién sos?",
    "nav.forStudents": "Para Estudiantes",
    "nav.forParents": "Para Padres",
    "nav.forResidences": "Para Residencias",
    "nav.publishResidence": "Publicar residencia",
    "nav.menu": "Menú",
    "nav.login": "Ingresar",
    
    // Hero
    "hero.title": "Tu hogar universitario\nempieza con confianza",
    "hero.subtitle": "Viví, estudiá y crecé en una comunidad segura, conectada y transparente",
    
    // Trust Badges
    "trust.verified.title": "Residencias y Perfiles Verificados",
    "trust.verified.description": "Validamos todas las residencias y usuarios",
    "trust.availability.title": "Disponibilidad Real",
    "trust.availability.description": "Información actualizada en tiempo real",
    "trust.benefits.title": "Beneficios Exclusivos",
    "trust.benefits.description": "Descuentos y premios por puntos",
    
    // Search Bar
    "search.location": "Ubicación",
    "search.roomType": "Tipo de habitación",
    "search.roomType.individual": "Habitación individual",
    "search.roomType.shared": "Habitación compartida",
    "search.roomType.apartment": "Apartamento Compartido",
    "search.capacity": "Capacidad",
    "search.capacity.double": "Doble",
    "search.capacity.triple": "Triple",
    "search.capacity.quadruple": "Cuádruple",
    "search.capacity.quintuple": "Quintuple",
    "search.filters": "Filtros",
    "search.advancedFilters": "Filtros avanzados",
    "search.refineSearch": "Refiná tu búsqueda con características específicas",
    "search.button": "Buscar",
    "search.applyFilters": "Aplicar filtros",
    "search.roommateRating": "Calificación mínima de compañeros",
    "search.residenceRating": "Calificación mínima de residencia",
    
    // Filters
    "filter.coordinator": "Coordinador Presencial",
    "filter.kitchen": "Cocina Equipada",
    "filter.laundry": "Lavandería",
    "filter.livingRoom": "Sala de Estar",
    "filter.cameras": "Cámaras de Seguridad",
    "filter.studyRoom": "Sala de Estudio",
    "filter.desk": "Escritorio Personal en Hab.",
    "filter.locker": "Locker de guardado",
    "filter.cleaning": "Limpieza en Habitaciones",
    "filter.ownerManaged": "Atendida por dueños",
    "filter.privateBathroom": "Baño Privado x Hab",
    "filter.balcony": "Balcón",
    "filter.pets": "Acepta Mascotas",
    "filter.ac": "Aire Acondicionado",
    
    // Profile Selector
    "profile.title": "¿Quién sos?",
    "profile.subtitle": "Seleccioná tu perfil para acceder a beneficios exclusivos y una experiencia personalizada",
    "profile.student": "Estudiante",
    "profile.student.subtitle": "Encontrá tu hogar ideal",
    "profile.student.benefit1": "Buscá residencias verificadas",
    "profile.student.benefit2": "Conocé a tus futuros compañeros",
    "profile.student.benefit3": "Sistema de puntos y descuentos",
    "profile.student.benefit4": "Acceso a recursos exclusivos",
    "profile.parent": "Padre/Madre",
    "profile.parent.subtitle": "Seguridad para tu hijo/a",
    "profile.parent.benefit1": "Residencias verificadas y seguras",
    "profile.parent.benefit2": "Comunidad de padres",
    "profile.parent.benefit3": "Comunicación directa con residencias",
    "profile.parent.benefit4": "Beneficios en hoteles y transporte",
    "profile.residence": "Residencia",
    "profile.residence.subtitle": "Gestioná tu propiedad",
    "profile.residence.benefit1": "PMS integrado y gratuito",
    "profile.residence.benefit2": "Disponibilidad en tiempo real",
    "profile.residence.benefit3": "Acceso a miles de estudiantes",
    "profile.residence.benefit4": "Descuentos en servicios",
    "profile.mainBenefits": "Ventajas principales:",
    "profile.hide": "Ocultar",
    "profile.showDetails": "Ver detalles",
    "profile.seeMore": "Ver más",
    
    // Featured Residences
    "residences.title": "Residencias destacadas",
    "residences.subtitle": "Las mejores opciones verificadas para vos",
    "residences.viewAll": "Ver todas →",
    "residences.viewAllMobile": "Ver todas las residencias",
    "residences.verified": "Verificada",
    "residences.residents": "residentes",
    "residences.meetRoommates": "Conocé a tus compañeros",
    "residences.viewRoom": "Ver habitación",
    "residences.viewDetails": "Ver detalles",
    "residences.perMonth": "/mes",
    "residences.pts": "pts",
    
    // How it works
    "howItWorks.title": "¿Cómo funciona?",
    "howItWorks.subtitle": "Encontrá tu hogar universitario en 4 simples pasos",
    "howItWorks.step1.title": "Explorá",
    "howItWorks.step1.description": "Buscá residencias verificadas en tu ciudad universitaria",
    "howItWorks.step2.title": "Conectá",
    "howItWorks.step2.description": "Conocé a tus futuros compañeros antes de reservar",
    "howItWorks.step3.title": "Reservá",
    "howItWorks.step3.description": "Confirmá tu lugar de forma segura y transparente",
    "howItWorks.step4.title": "Sumá puntos",
    "howItWorks.step4.description": "Ganá beneficios por buena convivencia y referencias",
    
    // CTA Section
    "cta.title": "¿Tenés una residencia estudiantil?",
    "cta.subtitle": "Sumá tu residencia a nuestra plataforma y conectá con miles de estudiantes que buscan un hogar confiable",
    "cta.contact": "Contactanos",
    "cta.learnMore": "Conocé más",
    
    // Footer
    "footer.tagline": "Tu hogar universitario empieza con confianza. Viví, aprendé y crecé en una comunidad segura y conectada.",
    "footer.forStudents": "Para Estudiantes",
    "footer.searchResidences": "Buscar residencias",
    "footer.createProfile": "Crear perfil",
    "footer.premiumBenefits": "Beneficios Premium",
    "footer.resources": "Recursos",
    "footer.forResidences": "Para Residencias",
    "footer.registerResidence": "Registrar residencia",
    "footer.managementPanel": "Panel de gestión",
    "footer.pricing": "Precios",
    "footer.support": "Soporte",
    "footer.followUs": "Síguenos",
    "footer.rights": "© 2025 Sin Fronteras. Todos los derechos reservados.",
    
    // Login Dialog
    "login.title": "Ingresar",
    "login.selectProfile": "Seleccioná tu tipo de perfil para continuar",
    "login.student.description": "Accedé a tu perfil de estudiante",
    "login.parent.description": "Accedé a tu perfil de padre",
    "login.residence.description": "Accedé al panel de gestión",
    
    // 404 Page
    "notFound.title": "404",
    "notFound.message": "¡Ups! Página no encontrada",
    "notFound.returnHome": "Volver al inicio",
    
    // AI Assistant
    "assistant.title": "Asistente de Búsqueda",
    "assistant.placeholder": "¿Qué tipo de residencia buscas?",
    "assistant.send": "Enviar",
    "assistant.welcome": "¡Hola! Soy tu asistente para encontrar la residencia perfecta.",
    "assistant.welcomeHint": "Pregúntame sobre ubicaciones, tipos de habitación o amenidades.",
  },
  en: {
    // Header
    "nav.search": "Search",
    "nav.whoAreYou": "Who are you?",
    "nav.forStudents": "For Students",
    "nav.forParents": "For Parents",
    "nav.forResidences": "For Residences",
    "nav.publishResidence": "Publish residence",
    "nav.menu": "Menu",
    "nav.login": "Login",
    
    // Hero
    "hero.title": "Your university home\nstarts with trust",
    "hero.subtitle": "Live, study and grow in a safe, connected and transparent community",
    
    // Trust Badges
    "trust.verified.title": "Verified Residences and Profiles",
    "trust.verified.description": "We validate all residences and users",
    "trust.availability.title": "Real Availability",
    "trust.availability.description": "Real-time updated information",
    "trust.benefits.title": "Exclusive Benefits",
    "trust.benefits.description": "Discounts and rewards by points",
    
    // Search Bar
    "search.location": "Location",
    "search.roomType": "Room type",
    "search.roomType.individual": "Single room",
    "search.roomType.shared": "Shared room",
    "search.roomType.apartment": "Shared Apartment",
    "search.capacity": "Capacity",
    "search.capacity.double": "Double",
    "search.capacity.triple": "Triple",
    "search.capacity.quadruple": "Quadruple",
    "search.capacity.quintuple": "Quintuple",
    "search.filters": "Filters",
    "search.advancedFilters": "Advanced filters",
    "search.refineSearch": "Refine your search with specific features",
    "search.button": "Search",
    "search.applyFilters": "Apply filters",
    "search.roommateRating": "Minimum roommate rating",
    "search.residenceRating": "Minimum residence rating",
    
    // Filters
    "filter.coordinator": "On-site Coordinator",
    "filter.kitchen": "Equipped Kitchen",
    "filter.laundry": "Laundry",
    "filter.livingRoom": "Living Room",
    "filter.cameras": "Security Cameras",
    "filter.studyRoom": "Study Room",
    "filter.desk": "Personal Desk in Room",
    "filter.locker": "Storage Locker",
    "filter.cleaning": "Room Cleaning",
    "filter.ownerManaged": "Owner Managed",
    "filter.privateBathroom": "Private Bathroom",
    "filter.balcony": "Balcony",
    "filter.pets": "Pets Allowed",
    "filter.ac": "Air Conditioning",
    
    // Profile Selector
    "profile.title": "Who are you?",
    "profile.subtitle": "Select your profile to access exclusive benefits and a personalized experience",
    "profile.student": "Student",
    "profile.student.subtitle": "Find your ideal home",
    "profile.student.benefit1": "Search verified residences",
    "profile.student.benefit2": "Meet your future roommates",
    "profile.student.benefit3": "Points and discounts system",
    "profile.student.benefit4": "Access to exclusive resources",
    "profile.parent": "Parent",
    "profile.parent.subtitle": "Safety for your child",
    "profile.parent.benefit1": "Verified and safe residences",
    "profile.parent.benefit2": "Parent community",
    "profile.parent.benefit3": "Direct communication with residences",
    "profile.parent.benefit4": "Hotel and transport benefits",
    "profile.residence": "Residence",
    "profile.residence.subtitle": "Manage your property",
    "profile.residence.benefit1": "Free integrated PMS",
    "profile.residence.benefit2": "Real-time availability",
    "profile.residence.benefit3": "Access to thousands of students",
    "profile.residence.benefit4": "Service discounts",
    "profile.mainBenefits": "Main benefits:",
    "profile.hide": "Hide",
    "profile.showDetails": "Show details",
    "profile.seeMore": "See more",
    
    // Featured Residences
    "residences.title": "Featured Residences",
    "residences.subtitle": "The best verified options for you",
    "residences.viewAll": "View all →",
    "residences.viewAllMobile": "View all residences",
    "residences.verified": "Verified",
    "residences.residents": "residents",
    "residences.meetRoommates": "Meet your roommates",
    "residences.viewRoom": "View room",
    "residences.viewDetails": "View details",
    "residences.perMonth": "/month",
    "residences.pts": "pts",
    
    // How it works
    "howItWorks.title": "How does it work?",
    "howItWorks.subtitle": "Find your university home in 4 simple steps",
    "howItWorks.step1.title": "Explore",
    "howItWorks.step1.description": "Search verified residences in your university city",
    "howItWorks.step2.title": "Connect",
    "howItWorks.step2.description": "Meet your future roommates before booking",
    "howItWorks.step3.title": "Book",
    "howItWorks.step3.description": "Confirm your place safely and transparently",
    "howItWorks.step4.title": "Earn points",
    "howItWorks.step4.description": "Get benefits for good coexistence and referrals",
    
    // CTA Section
    "cta.title": "Do you have a student residence?",
    "cta.subtitle": "Add your residence to our platform and connect with thousands of students looking for a reliable home",
    "cta.contact": "Contact us",
    "cta.learnMore": "Learn more",
    
    // Footer
    "footer.tagline": "Your university home starts with trust. Live, learn and grow in a safe and connected community.",
    "footer.forStudents": "For Students",
    "footer.searchResidences": "Search residences",
    "footer.createProfile": "Create profile",
    "footer.premiumBenefits": "Premium Benefits",
    "footer.resources": "Resources",
    "footer.forResidences": "For Residences",
    "footer.registerResidence": "Register residence",
    "footer.managementPanel": "Management panel",
    "footer.pricing": "Pricing",
    "footer.support": "Support",
    "footer.followUs": "Follow us",
    "footer.rights": "© 2025 Sin Fronteras. All rights reserved.",
    
    // Login Dialog
    "login.title": "Login",
    "login.selectProfile": "Select your profile type to continue",
    "login.student.description": "Access your student profile",
    "login.parent.description": "Access your parent profile",
    "login.residence.description": "Access the management panel",
    
    // 404 Page
    "notFound.title": "404",
    "notFound.message": "Oops! Page not found",
    "notFound.returnHome": "Return to Home",
    
    // AI Assistant
    "assistant.title": "Search Assistant",
    "assistant.placeholder": "What type of residence are you looking for?",
    "assistant.send": "Send",
    "assistant.welcome": "Hi! I'm your assistant to find the perfect residence.",
    "assistant.welcomeHint": "Ask me about locations, room types, or amenities.",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "es";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
