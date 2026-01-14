import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                AI-Powered Security Platform
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Secure Your Code & Infrastructure with{" "}
                <span className="text-highlight">AI Precision</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Automate vulnerability detection, optimize infrastructure, 
                and stay compliant with AI-driven insights that protect your 
                enterprise at every layer.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start My Security Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/how-it-works">
                  <Play className="w-5 h-5" />
                  Explore How It Works
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/30">
              <div>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Real-time Monitoring</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2">
              <img
                src={heroDashboard}
                alt="TectaPro AI Security Dashboard"
                className="rounded-xl w-full"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 animate-float">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium">Threats Blocked: 2,847</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 animate-float delay-300">
                <div className="text-sm font-medium text-primary">AI Scan Complete ✓</div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
