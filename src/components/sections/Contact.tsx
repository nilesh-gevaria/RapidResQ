
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
                  <span className="headingNumber">5</span> Contact Us
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
