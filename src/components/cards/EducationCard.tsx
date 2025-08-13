import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Trophy, Star } from "lucide-react";

interface EducationCardProps {
  logo: string;
  degree: string;
  institution: string;
  period: string;
  score?: string;
  scoreType?: string;
  description: string;
}

const EducationCard = ({ logo, degree, institution, period, score, scoreType, description }: EducationCardProps) => {
  const getScoreIcon = () => {
    return scoreType === 'cgpa' ? Trophy : Star;
  };

  const ScoreIcon = getScoreIcon();

  return (
    <Card className="group border-l-4 border-l-accent-purple hover:border-l-primary transition-smooth card-hover overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-16 h-16 shrink-0 mx-auto sm:mx-0">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-md ring-2 ring-accent/20 group-hover:ring-primary/40 transition-smooth">
              <img 
                src={logo} 
                alt={institution} 
                className="w-full h-full object-contain bg-white p-2"
              />
            </div>
          </div>
          
          <div className="flex-1 space-y-3 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="space-y-1">
                <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {degree}
                </h4>
                {score && (
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <ScoreIcon className="w-4 h-4 text-accent-orange" />
                    <span className="text-lg font-bold text-accent-orange bg-accent-orange/10 px-3 py-1 rounded-full">
                      {score}
                    </span>
                  </div>
                )}
              </div>
              <Badge variant="outline" className="bg-accent-purple/20 text-accent-purple border-accent-purple/30 w-fit mx-auto sm:mx-0">
                <Calendar className="w-3 h-3 mr-1" />
                {period}
              </Badge>
            </div>
            
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <GraduationCap className="w-4 h-4 text-accent-purple" />
              <p className="font-semibold text-accent-purple">{institution}</p>
            </div>
            
            <p className="text-sm leading-relaxed text-muted-foreground pt-2">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;