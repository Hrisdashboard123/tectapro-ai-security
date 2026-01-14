import { Code2, Server, AlertTriangle, BarChart3 } from "lucide-react";
import securityShield from "@/assets/security-shield.png";

const features = [
  {
    icon: Code2,
    title: "AI Code Vulnerability Detection",
    description: "Scan your entire codebase for security vulnerabilities, logic flaws, and potential exploits using advanced AI analysis.",
  },
  {
    icon: Server,
    title: "Infrastructure Optimization",
    description: "Continuously monitor and optimize your cloud and on-premise infrastructure for security and performance.",
  },
  {
    icon: AlertTriangle,
    title: "Threat Intelligence",
    description: "Real-time threat detection and intelligence feeds to keep you ahead of emerging security threats.",
  },
  {
    icon: BarChart3,
    title: "Compliance & Risk Dashboards",
    description: "Comprehensive dashboards showing your security posture, compliance status, and risk assessments.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 text-sm text-primary border border-primary/30 rounded-full">
              Core Features
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Comprehensive <span className="text-highlight">Security</span> Features
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <img
                src={securityShield}
                alt="AI Security Shield"
                className="w-full max-w-md mx-auto animate-float"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
