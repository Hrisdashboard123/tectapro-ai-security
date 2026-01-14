import { Brain, Activity, Building2, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Driven Security Engine",
    description: "Advanced machine learning algorithms analyze your codebase in real-time, detecting vulnerabilities before they become threats.",
  },
  {
    icon: Activity,
    title: "Real-Time Infrastructure Monitoring",
    description: "24/7 monitoring of your cloud and on-premise infrastructure with instant alerts and automated threat response.",
  },
  {
    icon: Building2,
    title: "Enterprise-Grade Compliance",
    description: "Stay compliant with SOC2, HIPAA, GDPR, and other regulatory frameworks with automated compliance reporting.",
  },
  {
    icon: Lightbulb,
    title: "Actionable AI Recommendations",
    description: "Get intelligent, prioritized recommendations for security improvements with step-by-step remediation guides.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 text-sm text-primary border border-primary/30 rounded-full mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Enterprises <span className="text-highlight">Trust</span> TectaPro
          </h2>
          <p className="text-muted-foreground">
            Our AI-powered platform delivers comprehensive security coverage 
            with the intelligence and automation modern enterprises demand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
