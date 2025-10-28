import { Award, TrendingUp, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PointsSystemProps {
  userType: "student" | "parent" | "residence";
}

export const PointsSystem = ({ userType }: PointsSystemProps) => {
  const getPointsInfo = () => {
    switch (userType) {
      case "student":
        return {
          title: "Sistema de Puntos para Estudiantes",
          earnPoints: [
            "Refiriendo estudiantes que consigan alojamiento",
            "Recibiendo comentarios positivos de compañeros",
            "Recibiendo buenas evaluaciones de residencias",
            "Ofreciendo tutorías o ayuda a otros estudiantes",
            "Participando en la comunidad",
          ],
          rewards: [
            "Descuentos en tu próxima cuota",
            "Reducción en matrícula",
            "Acceso a recursos premium",
            "Prioridad en reservas",
          ],
          badges: [
            { name: "Residente Ejemplar", color: "bg-primary" },
            { name: "Tutor Solidario", color: "bg-secondary" },
            { name: "Referidor Destacado", color: "bg-accent" },
          ],
        };
      case "parent":
        return {
          title: "Sistema de Puntos para Padres",
          earnPoints: [
            "Ayudando a otros padres en la comunidad",
            "Refiriendo familias a la plataforma",
            "Recibiendo buenos comentarios de otros padres",
            "Colaborando con residencias",
            "Compartiendo experiencias útiles",
          ],
          rewards: [
            "Descuentos en la cuota de tu hijo/a",
            "Descuentos en hoteles para visitas",
            "Beneficios en transporte",
            "Acceso a eventos exclusivos",
          ],
          badges: [
            { name: "Padre Colaborador", color: "bg-primary" },
            { name: "Mentor Familiar", color: "bg-secondary" },
            { name: "Comunidad Activa", color: "bg-accent" },
          ],
        };
      case "residence":
        return {
          title: "Sistema de Puntos para Residencias",
          earnPoints: [
            "Recibiendo excelentes calificaciones",
            "Mejorando continuamente los servicios",
            "Incorporando recursos al portal",
            "Manteniendo disponibilidad actualizada",
            "Resolviendo incidencias rápidamente",
          ],
          rewards: [
            "Descuentos en tu plan mensual del PMS",
            "Mejor posicionamiento en búsquedas",
            "Acceso a proveedores con descuento",
            "Recursos de gestión premium",
          ],
          badges: [
            { name: "Residencia Premium", color: "bg-primary" },
            { name: "Excelencia Verificada", color: "bg-secondary" },
            { name: "Favorita del Mes", color: "bg-accent" },
          ],
        };
    }
  };

  const info = getPointsInfo();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Cómo Ganar Puntos</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {info.earnPoints.map((point, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-secondary" />
            <CardTitle className="text-lg">Recompensas</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {info.rewards.map((reward, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>{reward}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            <CardTitle className="text-lg">Badges Disponibles</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {info.badges.map((badge, index) => (
              <Badge key={index} className={`${badge.color} text-white`}>
                {badge.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};