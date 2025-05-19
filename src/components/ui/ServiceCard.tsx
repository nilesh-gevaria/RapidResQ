
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  delay = 0,
}) => {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className={cn(
        "group h-full p-6 bg-white rounded-2xl border border-border transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        className
      )}>
        <div className="mb-5 rounded-xl inline-flex items-center justify-center p-2 bg-gold/10 text-gold">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </FadeIn>
  );
};

export default ServiceCard;
