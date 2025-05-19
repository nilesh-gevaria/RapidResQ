
import React from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import { Goal, Lightbulb, Target } from "lucide-react";

const MissionCard: React.FC<{
  title: string;
  content: string;
  icon: React.ReactNode;
  delay?: number;
}> = ({ title, content, icon, delay = 0 }) => (
  <FadeIn delay={delay} className="h-full">
    <div className="bg-gold rounded-2xl p-6 h-full hover:shadow-md transition-shadow duration-300 mt-10">
      <div className="mb-4 text-center flex justify-center">
        <div className="bg-white w-[100px] h-[100px] rounded-full text-gold flex justify-center items-center">{icon}</div>
      </div>
      <h3 className="text-3xl font-bold mb-3 text-white text-center">{title}</h3>
      <p className="text-white text-center text-xl">{content}</p>
    </div>
  </FadeIn>
);

const Mission: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      
        <FadeIn>
          {/* <SectionHeading 
            title="Our Mission & Vision" 
            subtitle="We are committed to delivering customized, scalable, and user-centric digital solutions."
            chip="Purpose"
          /> */}
          <div className="containerCustom headingCustom">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-left headingCustomtitle">
              <span className="headingNumber">2</span> Our Mission & Vision
            </div>
          </div>
        </FadeIn>


        <div className="containerCustom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MissionCard
              title="Mission"
              content="Our mission is to deliver customized, scalable, and user-centric digital solutions that elevate businesses in the online marketplace. We are committed to achieving measurable results for every client."
              icon={<Target className="w-12 h-12" />}
            />
            
            <MissionCard
              title="Vision"
              content="We envision becoming a leading partner in transforming businesses globally through cutting-edge technology and innovative digital solutions, helping our clients stay ahead in the ever-evolving digital landscape."
              icon={<Lightbulb className="w-12 h-12" />}
              delay={100}
            />
            
            <MissionCard
              title="Goals"
              content="Our goal is to provide businesses with tailored one-stop digital solutions, helping them achieve sustainable growth and success through strategic partnerships and continuous innovation."
              icon={<Goal className="w-12 h-12" />}
              delay={200}
            />
          </div>
        </div>
      
    </section>
  );
};

export default Mission;
