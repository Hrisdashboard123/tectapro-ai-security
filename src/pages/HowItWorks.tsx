import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, Upload, Scan, FileText, Lightbulb, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up for TectaPro in minutes. No credit card required for the free trial. Get instant access to your security dashboard.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Upload Codebase / Connect Infrastructure",
    description: "Connect your Git repositories, cloud infrastructure, or upload code directly. We support all major platforms and languages.",
  },
  {
    number: "03",
    icon: Scan,
    title: "AI Security Scan",
    description: "Our AI engine analyzes your code and infrastructure in real-time, scanning for vulnerabilities, misconfigurations, and security gaps.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Vulnerability & Risk Report",
    description: "Receive a comprehensive report detailing all discovered vulnerabilities, prioritized by severity and potential impact.",
  },
  {
    number: "05",
    icon: Lightbulb,
    title: "Optimization & Compliance Recommendations",
    description: "Get actionable AI-powered recommendations for fixing vulnerabilities and achieving compliance with industry standards.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 text-sm text-primary border border-primary/30 rounded-full mb-4">
              How It Works
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Getting Started is <span className="text-highlight">Simple</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From sign-up to your first security scan in minutes. 
              Our streamlined process makes enterprise security accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50" />
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step indicator */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary items-center justify-center z-10">
                    <span className="text-lg font-bold text-primary">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`glass-card-hover p-8 ${index % 2 === 0 ? "lg:mr-12" : "lg:ml-12 lg:order-2"}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center lg:hidden">
                        <span className="text-lg font-bold text-primary">{step.number}</span>
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className={`hidden lg:block ${index % 2 === 1 ? "lg:order-1" : ""}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See the <span className="text-highlight">Platform</span> in Action
            </h2>
            <p className="text-muted-foreground">
              Watch how TectaPro's AI security engine analyzes code 
              and detects threats in real-time.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="glass-card p-4 rounded-2xl">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img
                  src={heroDashboard}
                  alt="TectaPro Demo Dashboard"
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/50">
                  <button className="w-20 h-20 rounded-full bg-primary flex items-center justify-center animate-pulse-glow hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -left-6 glass-card px-4 py-3 animate-float hidden md:block">
              <div className="text-2xl font-bold text-primary">2.5s</div>
              <div className="text-xs text-muted-foreground">Avg. Scan Time</div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card px-4 py-3 animate-float delay-300 hidden md:block">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-xs text-muted-foreground">Detection Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience <span className="text-highlight">AI-Driven</span> Security
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to see how TectaPro can protect your organization? 
                Schedule a personalized demo with our security experts.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
