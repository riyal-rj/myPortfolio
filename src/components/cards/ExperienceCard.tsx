import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  logo: string;
  title: string;
  company: string;
  location: string;
  workingMode: string;
  period: string;
  description: string;
}

const ExperienceCard = ({ 
  logo, 
  title, 
  company, 
  location, 
  workingMode, 
  period, 
  description 
}: ExperienceCardProps) => {
  return (
    <Card className="group border-l-4 border-l-accent-blue hover:border-l-primary transition-smooth card-hover overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-16 h-16 shrink-0 mx-auto sm:mx-0">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-md ring-2 ring-accent/20 group-hover:ring-primary/40 transition-smooth">
              <img 
                src={logo} 
                alt={company} 
                className="w-full h-full object-contain bg-white p-2"
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-3 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {title}
              </h4>
              <Badge variant="outline" className="bg-accent-blue/20 text-accent-blue border-accent-blue/30 w-fit mx-auto sm:mx-0">
                <Calendar className="w-3 h-3 mr-1" />
                {period}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Building2 className="w-4 h-4 text-accent-blue" />
                <p className="font-semibold text-accent-blue">{company}</p>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{location} · {workingMode}</span>
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                {description}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;