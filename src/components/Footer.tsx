import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sin Fronteras</h3>
            <p className="text-sm text-muted-foreground">
              Tu hogar universitario empieza con confianza. Viví, aprendé y crecé en una comunidad segura y conectada.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Para Estudiantes</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Buscar residencias</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Crear perfil</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Beneficios Premium</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Recursos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Para Residencias</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Registrar residencia</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Panel de gestión</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Precios</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Soporte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
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
          <p>© 2025 Sin Fronteras. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
