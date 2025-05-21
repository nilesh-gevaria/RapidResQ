
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import FadeIn from "../ui/FadeIn";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Message sent successfully! We'll be in touch soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      
        <FadeIn>
          {/* <SectionHeading
            title="Ready to Take Your Business to the Next Level?"
            subtitle="Get in touch with RapidResQ today and let us build a digital solution that drives growth."
            chip="Contact Us"
          /> */}
            <div className="containerCustom headingCustom">
                <div className="text-xl md:text-4xl lg:text-5xl font-bold text-white text-left headingCustomtitle">
                  <span className="headingNumber">
                    <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1535 9.2147L17.6607 15.5155C18.2343 16.004 19.0938 16.0047 19.6648 15.5189L31.0333 5.97068C30.5468 5.60434 29.9483 5.37891 29.2935 5.37891H10.3688C10.3749 5.93512 10.4098 6.48865 10.4748 7.03681C10.5641 7.81041 10.4406 8.55784 10.1541 9.21403L10.1535 9.2147Z" fill="#C09336"/>
<path d="M20.531 16.5443C20.0003 16.9958 19.334 17.2219 18.6671 17.2219C18.0002 17.2219 17.3292 16.9951 16.7958 16.5409L9.41476 10.3454C8.94309 10.8459 8.33991 11.2129 7.64816 11.3807L7.53477 11.4062C8.64653 14.7307 10.6399 17.7218 13.2821 20.0265L13.3834 19.8869C14.0423 18.9872 15.1453 18.4464 16.3765 18.4464C17.089 18.4464 17.8029 18.6342 18.4396 18.9898C19.3977 19.5279 20.4129 19.9661 21.4609 20.2928C22.8283 20.7249 23.8293 21.7494 24.2239 22.9477H29.2942C30.8991 22.9477 32.2041 21.6428 32.2041 20.0379V8.28962C32.2041 7.826 32.0846 7.39257 31.8907 7.00342L20.531 16.5443Z" fill="#C09336"/>
<path d="M21.0603 21.5743C19.9238 21.2193 18.8227 20.7443 17.7861 20.1619C16.5959 19.4977 15.154 19.7413 14.4314 20.7255C14.4287 20.7289 14.426 20.7322 14.424 20.7356L13.5518 21.9728C9.74017 19.0978 7.02955 15.0326 5.84198 10.4091L7.33215 10.077C8.52039 9.78846 9.29868 8.55057 9.14235 7.19459C9.00347 6.01775 8.98871 4.81877 9.09807 3.62919C9.22354 2.22423 8.42243 0.966877 7.22211 0.703196L4.01701 0.0624437C3.28299 -0.113344 2.5 0.0852556 1.81228 0.617315C0.732062 1.45331 0.0396464 2.99648 0.00609916 4.645C-0.230744 15.574 6.44985 25.5939 16.6288 29.5773C17.3473 29.8598 18.1001 30 18.8194 30C19.6366 30 20.4109 29.8188 21.0422 29.4592C21.7984 29.0285 22.2815 28.3817 22.3982 27.6611L23.0463 24.4191C23.261 23.2228 22.4089 22.0003 21.0617 21.5743H21.0603Z" fill="#C09336"/>
</svg>  
                  </span> Contact Us
                </div>
            </div>
        </FadeIn>

        <div className="containerCustom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 border border-gold/20">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a 
                        href="mailto:info@rapidresq.com" 
                        className="text-muted-foreground hover:text-gold transition-colors"
                      >
                        info@rapidresq.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a 
                        href="tel:+1234567890" 
                        className="text-muted-foreground hover:text-gold transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Visit Us</p>
                      <p className="text-muted-foreground">
                        123 Digital Avenue, Tech City, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 aspect-video rounded-lg overflow-hidden bg-muted">
                  {/* Placeholder for a map */}
                  <div className="w-full h-full bg-white flex items-center justify-center border border-border">
                    <span className="text-muted-foreground">Map Location</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-input bg-background",
                        "focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      )}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-input bg-background",
                        "focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      )}
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-input bg-background",
                        "focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      )}
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border border-input bg-background resize-none",
                        "focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      )}
                      placeholder="Tell us more about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className={cn(
                      "w-full px-6 py-3 bg-gold text-white rounded-lg font-medium",
                      "hover:bg-gold/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gold/50"
                    )}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>

    </section>
  );
};

export default Contact;
