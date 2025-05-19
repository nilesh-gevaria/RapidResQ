
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centered?: boolean;
  chip?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  centered = true,
  chip,
}) => {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      {chip && (
        <div className="mb-3 inline-block">
          <span className="bg-gold/10 text-gold rounded-full px-3 py-1 text-sm font-medium">
            {chip}
          </span>
        </div>
      )}
      <div className={cn(
        "",
        titleClassName
      )}>
        <div className="containerCustom headingCustom">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white rounded-r-full p-4 text-left bg-gold ">{title}</div>
        </div>
      </div>
      {subtitle && (
        <p className={cn(
          "text-muted-foreground max-w-2xl text-lg",
          centered && "mx-auto",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
