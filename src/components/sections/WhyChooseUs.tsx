
import React from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import { Users, Award, Lightbulb, MessageSquare } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="flex gap-4">
      <div className="flex-shrink-0 text-white flex items-center justify-center hexagon">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-2 text-gold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </FadeIn>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      
          <div>
            <FadeIn>
              {/* <SectionHeading
                title="Why Choose Us"
                subtitle="Here's what sets us apart from the competition"
                chip="Our Advantages"
                centered={false}
              /> */}
              <div className="containerCustom headingCustom">
                <div className="text-xl md:text-4xl lg:text-5xl font-bold text-white text-left headingCustomtitle">
                  <span className="headingNumber">4</span> Why Choose Us
                </div>
              </div>
            </FadeIn>

            <div className="containerCustom">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 pt-10">
                <Feature
                  title="Expert Team"
                  description="Our team of web development, mobile app development, and design professionals brings years of experience to deliver solutions that work for your business."
                  icon={<Users className="w-10 h-10" />}
                  delay={100}
                />
                
                <Feature
                  title="Tailored Solutions"
                  description="Every business is unique, and we create customized strategies that address your specific needs, ensuring measurable results."
                  icon={<Award className="w-10 h-10" />}
                  delay={200}
                />
                
                <Feature
                  title="Innovative Technology"
                  description="We stay ahead of the curve, leveraging the latest technologies and tools to provide cutting-edge solutions that are both creative and functional."
                  icon={<Lightbulb className="w-10 h-10" />}
                  delay={300}
                />
                
                <Feature
                  title="Client-Centric Approach"
                  description="Transparency, collaboration, and communication are key to our process. We work closely with you to understand your vision and achieve your business goals effectively."
                  icon={<MessageSquare className="w-10 h-10" />}
                  delay={400}
                />
              </div>
            </div>
          </div>
        
    </section>
  );
};

export default WhyChooseUs;
