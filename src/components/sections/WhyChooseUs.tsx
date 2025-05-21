
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
                  <span className="headingNumber">
                   <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.9922 19.6227C22.1016 21.8568 21.0665 27.6475 18.7752 30H6.66459C4.24857 27.8777 1.4693 25.4369 0.147372 23.1985C-0.104296 23.2175 0.0510796 15.1019 0.01388 14.7768C-0.0167581 12.4962 3.51753 12.3781 3.61384 14.6164V20.2449C3.61603 20.8757 4.60736 20.8672 4.60954 20.2449V19.9496V1.73332C4.62486 -0.568255 8.16132 -0.578786 8.2095 1.70801C8.22263 1.7502 8.1898 13.1697 8.2095 13.2178V13.5131C8.21388 14.1397 9.20084 14.1397 9.20521 13.5131C9.20302 13.4984 9.20958 10.5428 9.20521 10.4162C9.15268 8.90993 11.2273 8.09983 12.2756 9.19054C12.6016 9.50487 12.8052 9.93944 12.8052 10.4162V13.5131C12.8117 14.1397 13.7943 14.1418 13.8009 13.5131C13.8031 13.3085 13.7987 12.4794 13.8009 12.2579C13.7462 10.7516 15.8252 9.94155 16.8712 11.0323C17.1973 11.3466 17.4008 11.7812 17.4008 12.2579V14.1988C17.4052 14.8254 18.3922 14.8254 18.3965 14.1988C18.6329 13.0849 20.6594 12.6271 21.4669 13.5533C21.793 13.8676 21.9965 14.3022 21.9965 14.7789C21.9921 14.7768 21.9922 19.6227 21.9922 19.6227Z" fill="#C09336"/>
</svg>


                  </span> Why Choose Us
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
