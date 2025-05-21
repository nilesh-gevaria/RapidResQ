
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
            <div className="text-xl md:text-4xl lg:text-5xl font-bold text-white text-left headingCustomtitle">
              <span className="headingNumber">
                <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.90429 20.4104C3.33805 19.6456 2.38831 18.2916 1.57523 16.7571C0.704497 15.1183 0 13.2759 0 11.7134C0 5.23947 4.9381 0 11 0C17.0619 0 22 5.23905 22 11.7134C22 13.276 21.2955 15.1184 20.4248 16.7571C19.6116 18.2916 18.6619 19.6473 18.0957 20.4104H3.90429ZM13.0233 4.18814C12.9739 3.9266 12.7714 3.72132 12.5114 3.66835C11.5156 3.46308 10.4852 3.46308 9.48933 3.66835C9.22926 3.72132 9.02678 3.92659 8.97744 4.18814L8.75029 5.32206C8.46554 5.43463 8.18738 5.56871 7.92069 5.72431L6.89688 5.19295C6.66314 5.07046 6.37509 5.10025 6.17262 5.27075C5.39075 5.92793 4.75047 6.73241 4.28793 7.64288C4.16613 7.88125 4.20234 8.16928 4.37353 8.3729L5.11586 9.25684C5.02369 9.55149 4.9562 9.85274 4.91011 10.1573L3.85832 10.6291C3.61636 10.7367 3.46328 10.9817 3.46986 11.2482C3.49126 12.2696 3.7217 13.276 4.14145 14.208C4.25173 14.4497 4.49369 14.602 4.76036 14.5953L5.91257 14.5622C6.08705 14.8171 6.27963 15.0588 6.48868 15.2856C6.48538 15.2856 6.19733 16.4046 6.19733 16.4046C6.13314 16.6628 6.22532 16.936 6.4393 17.0965C7.24585 17.7173 8.17418 18.1642 9.15847 18.4142C9.41854 18.4788 9.68848 18.3827 9.84485 18.1692L10.5378 17.2455C10.8473 17.2687 11.1534 17.2687 11.4628 17.2455L12.1558 18.1692C12.3122 18.3827 12.5821 18.4788 12.8422 18.4142C13.8265 18.1642 14.7548 17.7173 15.5614 17.0965C15.7753 16.936 15.8675 16.6628 15.8033 16.4046L15.5153 15.2856C15.721 15.0588 15.9136 14.8171 16.0881 14.5606C16.0881 14.5622 17.2403 14.5953 17.2403 14.5953C17.5069 14.602 17.7489 14.4497 17.8592 14.208C18.2789 13.276 18.5094 12.2696 18.5308 11.2482C18.5374 10.9817 18.3843 10.7367 18.1423 10.6291L17.0905 10.1574C17.0445 9.85277 16.977 9.55149 16.8848 9.25519C16.8848 9.25685 17.6271 8.37291 17.6271 8.37291C17.7983 8.1693 17.8345 7.88125 17.7127 7.64288C17.2502 6.73246 16.6099 5.92793 15.828 5.27075C15.6256 5.10025 15.3375 5.07045 15.1038 5.19295L14.08 5.72432C13.8133 5.56871 13.5351 5.43463 13.2471 5.32207C13.2504 5.32207 13.0233 4.18814 13.0233 4.18814ZM11.8217 4.89334L12.0307 5.9478C12.0768 6.18617 12.248 6.37653 12.4751 6.45103C12.9064 6.58842 13.3113 6.7854 13.685 7.03536C13.8841 7.16779 14.1392 7.18269 14.3532 7.07178L15.3062 6.57847C15.7013 6.96085 16.0453 7.39291 16.3301 7.86634L15.6371 8.68739C15.484 8.87113 15.4412 9.12608 15.5268 9.35118C15.6865 9.77329 15.7852 10.2153 15.8247 10.6655C15.8429 10.9039 15.9926 11.1141 16.2132 11.2118L17.1909 11.6522C17.1399 12.2001 17.0164 12.7414 16.8239 13.2579L15.754 13.2281C15.512 13.2214 15.2881 13.3456 15.168 13.5525C14.9392 13.9415 14.6594 14.2958 14.3318 14.6053C14.1573 14.7709 14.0866 15.0192 14.1475 15.2525L14.4141 16.2937C13.9549 16.5983 13.4578 16.8367 12.9344 17.0089L12.2875 16.1481C12.1459 15.9577 11.9105 15.8568 11.6719 15.8915C11.2275 15.9544 10.7732 15.9544 10.3287 15.8915C10.0901 15.8568 9.8547 15.9577 9.71316 16.1481L9.06627 17.0089C8.54284 16.8367 8.04574 16.5983 7.58652 16.2937L7.85317 15.2525C7.91408 15.0191 7.8433 14.7708 7.66882 14.6053C7.34127 14.2958 7.06145 13.9415 6.83264 13.5525C6.71249 13.3456 6.48863 13.2214 6.24668 13.2281L5.17677 13.2579C4.98419 12.7414 4.86074 12.2017 4.80971 11.6538C4.80971 11.6522 5.78743 11.2118 5.78743 11.2118C6.00799 11.1142 6.15778 10.9039 6.17589 10.6655C6.21539 10.2153 6.31415 9.7733 6.47381 9.35118C6.55941 9.12606 6.51661 8.87114 6.36353 8.68739L5.67058 7.86634C5.95533 7.39291 6.29935 6.96088 6.69439 6.57847L7.64742 7.07178C7.8614 7.18269 8.11653 7.16779 8.31568 7.03536C8.68932 6.7854 9.09425 6.58841 9.52549 6.45103C9.75263 6.37654 9.92382 6.18617 9.96991 5.9478L10.179 4.89499C10.7238 4.8205 11.2769 4.8205 11.8217 4.89334ZM11.0283 7.54189C9.06631 7.54189 7.47296 9.14259 7.47296 11.1158C7.47296 13.089 9.06627 14.6897 11.0283 14.6897C12.987 14.6897 14.5804 13.089 14.5804 11.1158C14.5804 9.14259 12.9871 7.54189 11.0283 7.54189ZM11.0283 8.86617C12.2628 8.86617 13.2652 9.87427 13.2652 11.1158C13.2652 12.3573 12.2628 13.3654 11.0283 13.3654C9.79546 13.3654 8.79305 12.3573 8.79305 11.1158C8.79305 9.87427 9.79546 8.86617 11.0283 8.86617ZM17.7408 21.7364V24.6929C17.7408 25.7887 16.8602 26.6793 15.7689 26.6793H6.23193C5.14065 26.6793 4.26002 25.7887 4.26002 24.6929V21.7364H17.7408ZM16.0418 27.3266V28.0136C16.0418 28.54 15.8311 29.0465 15.4624 29.4173C15.0921 29.7914 14.5917 30 14.065 30H7.89265C7.36593 30 6.86555 29.7914 6.4952 29.4173C6.1265 29.0465 5.91581 28.54 5.91581 28.0136V27.3217C6.01951 27.3349 6.1265 27.3399 6.23184 27.3399H15.7688C15.861 27.3399 15.9496 27.3365 16.0418 27.3266Z" fill="#C09336"/>
                </svg>
              </span> Our Mission & Vision
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
