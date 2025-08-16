import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  icon?: string;
  children: ReactNode;
  className?: string;
  month?: string;
  year?: number
}

const SectionCard = ({ title, icon, children, month="June",year=2025, className = "" }: SectionCardProps) => {
  return (
     <div className="border-b border-border p-6 hover:bg-accent/50 transition-colors">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
            <img src="/profilePic.jpeg" alt="Ritankar Jana" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="font-semibold">Ritankar Jana</span>
              <span className="text-muted-foreground text-sm">@jana_ritankar</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">{month} , {year}</span>
            </div>
      <div className="space-y-6">
        <h3 className="font-bold text-xl md:text-2xl flex items-center gap-2 text-gradient-primary">
          {title}
          {icon && <span className="text-2xl">{icon}</span>}
        </h3>
        {children}
      </div>
    </div>
  </div>
</div>
  );
};

export default SectionCard;