
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
            <div className="text-xl md:text-4xl lg:text-5xl font-bold text-white text-left headingCustomtitle">
              <span className="headingNumber">
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1536 2.97304C21.7957 3.19158 22.409 3.44519 22.9946 3.7541C23.2749 3.89979 23.5868 3.88899 23.8382 3.70283L25.1858 2.77608C25.5187 2.54001 25.9477 2.57913 26.232 2.87051L29.2075 5.92055C29.4878 6.20788 29.5299 6.66248 29.3062 7.00378L28.3916 8.37436C28.2218 8.64281 28.1994 8.95173 28.3415 9.23905C28.6429 9.83532 28.9048 10.4747 29.1035 11.1263C29.2022 11.4352 29.4364 11.6429 29.7378 11.7036L31.3262 12.0126C31.7276 12.0854 32 12.4348 32 12.8489V17.1564C32 17.5678 31.7276 17.9199 31.3262 17.9927L29.7378 18.3016C29.4364 18.3637 29.2062 18.5701 29.1035 18.879C28.9008 19.5292 28.6429 20.166 28.3415 20.7662C28.1994 21.0536 28.2205 21.3625 28.3916 21.6309L29.3062 23.0015C29.5259 23.3428 29.4865 23.7934 29.2075 24.0847L26.232 27.1348C25.9517 27.4221 25.5187 27.4653 25.1858 27.2359L23.8382 26.2984C23.5868 26.1136 23.2749 26.1015 22.9946 26.2472C22.4129 26.5561 21.7997 26.8137 21.1536 27.0282C20.8627 27.1226 20.6495 27.3587 20.6008 27.6784L20.2889 29.3066C20.2179 29.71 19.877 29.9973 19.473 29.9973L15.275 30C14.8736 30 14.5406 29.7127 14.459 29.3093L14.1577 27.6811C14.0971 27.3614 13.8958 27.1253 13.605 27.0309C12.9628 26.8124 12.3495 26.5588 11.7533 26.2499C11.4809 26.1042 11.1717 26.115 10.9098 26.3011L9.57271 27.2386C9.23976 27.4639 8.81075 27.4235 8.51597 27.1375L5.55101 24.0874C5.34835 23.8905 5.2707 23.622 5.31018 23.3563L6.51563 22.7384C6.78804 22.5927 7.11837 22.6373 7.41973 22.6764L12.618 23.4507C15.6856 25.2759 19.5231 25.1922 22.5197 23.2146L26.6295 22.2987C28.0377 22.0302 28.5088 20.6705 27.6442 19.5252C27.2928 19.053 26.8006 18.7104 26.2466 18.5256C27.5626 15.0318 26.8388 10.9323 24.0936 8.11811C20.3837 4.31524 14.3631 4.31524 10.6427 8.11811C9.16353 9.63436 8.2805 11.5176 7.97914 13.4871L2.7495 15.6886V12.8463C2.7495 12.4349 3.02981 12.0828 3.4233 12.01L5.02224 11.701C5.3236 11.639 5.55389 11.4326 5.65655 11.1237C5.85921 10.4735 6.11715 9.83672 6.4185 9.23645C6.56063 8.94912 6.53957 8.64019 6.3685 8.37176L5.45389 7.00117C5.22359 6.65988 5.2736 6.20931 5.55259 5.91795L8.51755 2.86791C8.80838 2.58058 9.24133 2.53741 9.57429 2.77348L10.9114 3.70023C11.1732 3.88504 11.4864 3.89718 11.7549 3.75149C12.3471 3.44258 12.9604 3.18493 13.596 2.97044C13.8974 2.87601 14.1 2.63994 14.1592 2.32023L14.4606 0.692028C14.5422 0.288672 14.8725 0.00134931 15.2765 0.00134931L19.4773 0C19.8787 0 20.2221 0.287333 20.2932 0.690679L20.6051 2.31889C20.6538 2.64264 20.8631 2.87872 21.1539 2.97313L21.1536 2.97304ZM14.7643 8.12344C16.0514 6.71241 18.2108 6.6517 19.5796 7.97774C20.4337 8.79254 20.7745 9.96614 20.6047 11.0683L24.1223 14.4596C24.8842 15.2015 24.9277 16.448 24.2039 17.2399C23.4801 18.0209 22.2535 18.0654 21.4916 17.3235L17.9845 13.924C16.9212 14.1709 15.7644 13.8836 14.9103 13.0593C13.5364 11.7414 13.4654 9.52655 14.7643 8.12344ZM16.1501 9.46567L17.678 8.99352L18.8334 10.1172L18.4715 11.7131L16.9436 12.1785L15.7764 11.0656L16.1501 9.46567ZM17.1647 15.5036C18.9623 15.7828 17.3845 17.8629 16.179 17.925C14.2497 18.0194 12.9127 16.8741 10.4477 17.8926L18.037 20.4152L18.6187 20.4773L24.729 19.2807C26.6477 18.9314 28.1047 21.0614 26.449 21.3703L18.2715 23.1914C17.8701 23.2859 17.5161 23.2319 17.1161 23.1699L7.54483 21.748C7.03029 21.6752 6.56969 21.6536 6.10908 21.9045L2.89277 23.5624C2.21898 23.9118 1.41359 23.5624 1.20435 22.8313L0.0541483 19.0256C-0.0445522 18.6951 -0.00638861 18.3673 0.152849 18.0584C0.322614 17.7603 0.585828 17.6038 0.908237 17.4689L8.57936 14.2233C11.0127 13.5865 14.7815 15.0382 17.1647 15.5036Z" fill="#C09336"/>
                </svg>
              </span> Our Services
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
