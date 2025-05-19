
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, MousePointer } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="containerCustom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Floating Badge */}
            <div className="inline-block animate-fade-in">
              <div className="bg-white border border-border rounded-full px-4 py-2 text-sm font-medium shadow-sm mb-6 inline-flex items-center">
                <span className="bg-gold text-white text-xs rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                  <MousePointer size={12} />
                </span>
                Digital Solutions for Business Growth
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in animation-delay-100">
              Unlock Your Business Potential with{" "}
              <span className="text-gradient">Digital Solutions</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in animation-delay-200 lg:max-w-xl mx-auto lg:mx-0">
              At RapidResQ, we specialize in Web App & Website Development, 
              Mobile App Development, and UI/UX Design. Let us help you establish 
              a strong online presence with customized solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 animate-fade-in animation-delay-300">
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center h-12 px-6 py-3",
                  "bg-gold text-white font-medium rounded-lg transition-all duration-300",
                  "hover:bg-gold/90 hover:shadow-lg"
                )}
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#services"
                className={cn(
                  "inline-flex items-center justify-center h-12 px-6 py-3",
                  "bg-white text-foreground font-medium rounded-lg transition-all duration-300 border border-border",
                  "hover:bg-secondary/80"
                )}
              >
                Explore Services
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <FadeIn delay={200} className="hidden lg:flex justify-end">
            <div className="relative w-[80%]">
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-gold/10 rounded-2xl blur-lg"></div> */}
              <div className="relative bg-white border-[16px] overflow-hidden rounded-full border-gold">
                <img 
                  src="hero.png" 
                  alt="Team Collaboration Meeting" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating elements over the image */}
                {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm py-2 px-3 rounded-lg border border-gold/20 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                    <span className="text-xs font-medium">Business Analysis</span>
                  </div>
                </div> */}
                
                {/* <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm py-2 px-3 rounded-lg border border-gold/20 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                    <span className="text-xs font-medium">Team Planning</span>
                  </div>
                </div> */}
                
                {/* New floating analytics element */}
                {/* <div className="absolute bottom-20 right-4 bg-white/90 backdrop-blur-sm py-2 px-3 rounded-lg border border-gold/20 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                    <span className="text-xs font-medium">Data Analytics</span>
                  </div>
                </div> */}
              </div>
              
              {/* Decorative elements */}
              {/* <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gold/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold/20 rounded-full blur-lg"></div> */}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
