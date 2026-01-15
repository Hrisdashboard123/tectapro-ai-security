import { useState } from "react";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import teamCeo from "@/assets/team-ceo.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@tectapro.com",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "123 Security Lane, SF",
    },
  ];

  return (
    <Layout>
      {/* Split Section Contact */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Lime Accent with Form */}
        <div className="w-full lg:w-1/2 bg-lime relative overflow-hidden">
          {/* Diagonal pattern overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(0,0,0,0.05) 10px,
                rgba(0,0,0,0.05) 20px
              )`
            }}
          />
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 xl:p-20">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lime-foreground mb-4">
                LET'S WORK
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lime-foreground">
                TOGETHER
              </h2>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-lime-foreground/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-lime-foreground" />
                  </div>
                  <div>
                    <span className="text-lime-foreground/60 text-sm">{info.label}</span>
                    <p className="text-lime-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-0 text-lime-foreground placeholder:text-lime-foreground/50 h-12 rounded-lg shadow-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-0 text-lime-foreground placeholder:text-lime-foreground/50 h-12 rounded-lg shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone number (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/90 border-0 text-lime-foreground placeholder:text-lime-foreground/50 h-12 rounded-lg shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-white/90 border-0 text-lime-foreground placeholder:text-lime-foreground/50 rounded-lg shadow-sm resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-lime-foreground text-lime hover:bg-lime-foreground/90 h-12 px-8 rounded-lg font-semibold group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-screen">
          <img 
            src={teamCeo}
            alt="Professional team member"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden" />
          
          {/* Stats overlay on image */}
          <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12">
            <div className="glass-card p-6 backdrop-blur-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Clients Protected</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
