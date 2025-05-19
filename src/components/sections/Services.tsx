
import React from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import { Globe, LayoutDashboard, FileText, PenTool, Smartphone } from "lucide-react";
import FadeIn from "../ui/FadeIn";

const Services: React.FC = () => {
  const services = [
    {
      title: "Web App & Website Development",
      description: "We specialize in custom web application development, responsive website design, and the creation of user-friendly interfaces.",
      icon: Globe,
      delay: 0,
    },
    {
      title: "ERP Solutions",
      description: "Optimize your business operations with our ERP solutions. We offer custom system development and seamless integrations.",
      icon: LayoutDashboard,
      delay: 100,
    },
    {
      title: "Content Management",
      description: "Manage your content efficiently with our CMS integration and custom content management solutions for your business needs.",
      icon: FileText,
      delay: 200,
    },
    {
      title: "Mobile App Development",
      description: "Create powerful, intuitive mobile experiences with our custom app development services for iOS and Android platforms.",
      icon: Smartphone,
      delay: 300,
    },
    {
      title: "UI/UX Design",
      description: "Enhance your product experience with user-centric design solutions, from user research to wireframing and usability testing.",
      icon: PenTool,
      delay: 400,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
        <FadeIn>
          {/* <SectionHeading
            title="Our Services"
            subtitle="Comprehensive digital solutions tailored to your business needs"
            chip="Services"
          /> */}
          <div className="containerCustom headingCustom">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-left headingCustomtitle">
              <span className="headingNumber">3</span> Our Services
            </div>
          </div>
        </FadeIn>


      <div className="containerCustom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={500}>
            <div className="mt-12 text-center">
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3",
                  "bg-gold text-white rounded-lg transition-colors",
                  "hover:bg-gold/90"
                )}
              >
                Request Custom Solution
              </a>
            </div>
          </FadeIn>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
