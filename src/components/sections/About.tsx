
import React from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      
        <FadeIn>
          {/* <SectionHeading
            title="Who We Are"
            subtitle="RapidResQ is a digital solutions agency dedicated to helping businesses thrive in the digital world."
            chip="About Us"
          /> */}
          <div className="containerCustom headingCustom">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-left headingCustomtitle">
              <span className="headingNumber">1</span> Who We Are
            </div>
          </div>
        </FadeIn>

        
        <div className="containerCustom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

             <FadeIn direction="left" className=" col-span-1">
              <div className="relative">
                <div className="bg-white border-[16px] overflow-hidden rounded-full border-gold">
                  <img
                    src="Overview.png"
                    alt="Team working on digital solutions"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                {/* <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-48 hidden md:block border border-gold/10">
                  <div className="text-lg font-bold text-gold">10+ Years</div>
                  <div className="text-sm text-muted-foreground">
                    Industry Experience
                  </div>
                </div> */}
              </div>
            </FadeIn>


            <FadeIn direction="right" delay={200} className=" col-span-2">
              <div className="space-y-6">
                <p className="text-lg">
                  Specializing in Web Development, Mobile App Development, and UI/UX Design, 
                  we provide scalable and user-centric solutions to enhance your online presence.
                </p>
                <p>
                  Our mission is to drive growth and success for businesses through 
                  innovative technology and tailored strategies. We understand the 
                  unique challenges that businesses face in the digital landscape, 
                  and we're here to provide effective solutions.
                </p>
                <p>
                  With a client-centric approach, we prioritize understanding your 
                  business goals and delivering solutions that align with your vision. 
                  Our team of experts is committed to excellence, ensuring that every 
                  project is completed to the highest standards.
                </p>
              </div>
            </FadeIn>

           

            
          </div>
        </div>

      
    </section>
  );
};

export default About;
