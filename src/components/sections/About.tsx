
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
            <div className="text-xl md:text-4xl lg:text-5xl font-bold text-white text-left headingCustomtitle">
              <span className="headingNumber">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.2157 10.6906C25.2157 16.2073 20.6832 20.6932 15.1132 20.6932C9.54322 20.6932 5.01076 16.2043 5.01076 10.6906C5.01076 5.17693 9.54322 0.687988 15.1132 0.687988C20.6832 0.687988 25.2157 5.17693 25.2157 10.6906ZM29.9781 29.0297C28.6851 25.2296 26.015 22.1935 22.6242 20.3683C20.5403 21.9572 17.9403 22.9155 15.1131 22.9155C12.2858 22.9155 9.68309 21.9599 7.59906 20.3683C4.14922 22.2266 1.44547 25.3406 0.177671 29.2352C0.0682889 29.5741 0.127186 29.9436 0.340344 30.2296C0.550701 30.5185 0.887269 30.688 1.24626 30.688H28.9795H29.002C29.6218 30.688 30.1239 30.1908 30.1239 29.5769C30.1239 29.3769 30.0706 29.1908 29.9781 29.0297Z" fill="#C09336"/>
                </svg>
              </span> Who We Are
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
