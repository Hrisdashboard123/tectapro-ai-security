import { Shield, Cpu, Eye, Lock } from "lucide-react";
import teamWorking from "@/assets/team-working.jpg";

const AboutSection = () => {
  const highlights = [
    { icon: Shield, text: "AI-First Security" },
    { icon: Cpu, text: "Automated Analysis" },
    { icon: Eye, text: "Real-time Detection" },
    { icon: Lock, text: "Enterprise Ready" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={teamWorking}
                alt="TectaPro Security Team"
                className="w-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 text-center">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block px-4 py-1 text-sm text-primary border border-primary/30 rounded-full">
              About TectaPro
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              The <span className="text-highlight">AI-First</span> Security Platform 
              for Modern Enterprises
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              TectaPro is an enterprise-grade security platform powered by advanced 
              artificial intelligence. We automate vulnerability detection, optimize 
              infrastructure security, and ensure compliance across your entire tech stack.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Our platform combines cutting-edge machine learning with deep security 
              expertise to deliver actionable insights that protect your code, 
              infrastructure, and data from emerging threats.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
