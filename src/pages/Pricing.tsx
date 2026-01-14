import { Link } from "react-router-dom";
import { ArrowRight, Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter Security",
    description: "Perfect for small teams getting started with security",
    price: "$299",
    period: "/month",
    features: [
      "Up to 5 repositories",
      "Basic code vulnerability scanning",
      "Weekly security reports",
      "Email support",
      "Community access",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Pro Audit",
    description: "Comprehensive security for growing organizations",
    price: "$799",
    period: "/month",
    features: [
      "Up to 25 repositories",
      "Advanced AI code analysis",
      "Real-time threat detection",
      "Infrastructure monitoring",
      "Daily security reports",
      "Priority email & chat support",
      "API access",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise Compliance",
    description: "Full-scale security for enterprise organizations",
    price: "Custom",
    period: "",
    features: [
      "Unlimited repositories",
      "Full AI security suite",
      "24/7 real-time monitoring",
      "Custom compliance frameworks",
      "Dedicated account manager",
      "Phone & priority support",
      "Custom integrations",
      "On-premise deployment option",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

const comparisonFeatures = [
  { feature: "Repositories", starter: "5", pro: "25", enterprise: "Unlimited" },
  { feature: "Code Scanning", starter: "Basic", pro: "Advanced AI", enterprise: "Full Suite" },
  { feature: "Infrastructure Monitoring", starter: "—", pro: "✓", enterprise: "✓" },
  { feature: "Threat Detection", starter: "—", pro: "Real-time", enterprise: "24/7 + Response" },
  { feature: "Compliance Reports", starter: "Basic", pro: "Standard", enterprise: "Custom" },
  { feature: "API Access", starter: "—", pro: "✓", enterprise: "Custom" },
  { feature: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated" },
  { feature: "SLA", starter: "—", pro: "99.9%", enterprise: "99.99%" },
];

const faqs = [
  {
    question: "How accurate is TectaPro's AI security scanning?",
    answer: "Our AI security engine achieves 99.9% accuracy in detecting known vulnerabilities and has an industry-leading low false positive rate. We continuously train our models on the latest threat intelligence data.",
  },
  {
    question: "What compliance frameworks does TectaPro support?",
    answer: "TectaPro supports major compliance frameworks including SOC 2, HIPAA, GDPR, PCI-DSS, ISO 27001, and more. Enterprise customers can also create custom compliance frameworks.",
  },
  {
    question: "Is my code secure with TectaPro?",
    answer: "Absolutely. We use end-to-end encryption for all data in transit and at rest. Your code is scanned in isolated containers and never stored permanently. We're SOC 2 Type II certified.",
  },
  {
    question: "Can I try TectaPro before committing to a plan?",
    answer: "Yes! We offer a 14-day free trial on all plans. No credit card required. You'll get full access to all features included in your selected plan.",
  },
  {
    question: "How do I upgrade or downgrade my plan?",
    answer: "You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and billing is prorated.",
  },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 text-sm text-primary border border-primary/30 rounded-full mb-4">
              Pricing Plans
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-highlight">Security</span> Plan
            </h1>
            <p className="text-lg text-muted-foreground">
              Flexible pricing for teams of all sizes. All plans include 
              a 14-day free trial with no credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  "relative rounded-2xl p-8 transition-all duration-300",
                  plan.highlighted
                    ? "glass-card border-primary/50 scale-105"
                    : "glass-card-hover"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare <span className="text-highlight">Plans</span>
            </h2>
            <p className="text-muted-foreground">
              See how our plans compare feature by feature.
            </p>
          </div>

          <div className="glass-card overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Starter</th>
                    <th className="text-center p-4 font-semibold bg-primary/10">Pro</th>
                    <th className="text-center p-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-b border-border/30">
                      <td className="p-4 text-sm">{row.feature}</td>
                      <td className="text-center p-4 text-sm text-muted-foreground">{row.starter}</td>
                      <td className="text-center p-4 text-sm bg-primary/5">{row.pro}</td>
                      <td className="text-center p-4 text-sm text-muted-foreground">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-highlight">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about TectaPro.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <HelpCircle className={cn(
                    "w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300",
                    openFaq === index && "rotate-180"
                  )} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openFaq === index ? "max-h-40 pb-6" : "max-h-0"
                )}>
                  <p className="px-6 text-muted-foreground text-sm">{faq.answer}</p>
                </div>
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
                Start Your <span className="text-highlight">AI Security</span> Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of enterprises protecting their code and infrastructure 
                with TectaPro. Start your free trial today.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Free Trial
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

export default Pricing;
