import { Link } from "react-router-dom";
import { ArrowRight, Code2, Server, AlertTriangle, BarChart3, Users, Bell, Wrench, Plug, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import securityShield from "@/assets/security-shield.png";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const mainFeatures = [
  {
    icon: Code2,
    title: "AI-Powered Code Analysis",
    description: "Our advanced machine learning models scan your entire codebase in real-time, identifying security vulnerabilities, logic flaws, and potential exploits with unprecedented accuracy.",
    highlights: [
      "Static and dynamic code analysis",
      "Support for 50+ programming languages",
      "Integration with popular IDEs and CI/CD pipelines",
      "Real-time vulnerability alerts",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure Monitoring",
    description: "Comprehensive monitoring for both cloud and on-premise infrastructure. Detect misconfigurations, security gaps, and performance issues before they become critical.",
    highlights: [
      "Cloud-native AWS, Azure, GCP support",
      "Container and Kubernetes security",
      "Network traffic analysis",
      "Infrastructure-as-Code scanning",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection & Alerts",
    description: "Real-time threat intelligence feeds combined with AI-powered anomaly detection to identify and respond to security threats as they emerge.",
    highlights: [
      "Zero-day vulnerability detection",
      "Behavioral threat analysis",
      "Automated incident response",
      "Threat intelligence integration",
    ],
  },
  {
    icon: BarChart3,
    title: "Compliance Reports & Risk Scores",
    description: "Automated compliance assessments and risk scoring to help you maintain regulatory compliance and understand your security posture at a glance.",
    highlights: [
      "SOC2, HIPAA, GDPR, PCI-DSS ready",
      "Customizable compliance frameworks",
      "Executive-level reporting",
      "Risk trend analysis",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Users,
    title: "Role-Based Dashboards",
    description: "Customized views for developers, security teams, and executives with relevant metrics and actionable insights.",
  },
  {
    icon: Bell,
    title: "Weekly AI Security Insights",
    description: "Automated weekly reports with AI-generated security recommendations and trend analysis for your organization.",
  },
  {
    icon: Wrench,
    title: "Automated Remediation",
    description: "One-click fixes for common vulnerabilities and automated patch recommendations with detailed implementation guides.",
  },
  {
    icon: Plug,
    title: "API-Ready Architecture",
    description: "RESTful APIs for seamless integration with your existing security tools, SIEM systems, and DevOps workflows.",
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 text-sm text-primary border border-primary/30 rounded-full mb-4">
              Platform Features
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade <span className="text-highlight">Security</span> Features
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover how TectaPro's comprehensive feature set protects your 
              organization at every layer of your technology stack.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">{feature.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="glass-card p-4 rounded-2xl">
                    <img
                      src={index % 2 === 0 ? heroDashboard : securityShield}
                      alt={feature.title}
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional <span className="text-highlight">Capabilities</span>
            </h2>
            <p className="text-muted-foreground">
              Beyond core security features, TectaPro offers a comprehensive 
              suite of tools to enhance your security operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="glass-card-hover p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
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
                See TectaPro <span className="text-highlight">in Action</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the power of AI-driven security. Start your free 
                security audit and see how TectaPro can protect your organization.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Free AI Scan
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

export default Features;
