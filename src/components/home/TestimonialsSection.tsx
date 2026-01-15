import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const testimonials = [
  {
    quote: "TectaPro transformed our security posture. The AI-driven insights helped us identify and fix vulnerabilities we didn't know existed. Within the first month, we detected over 200 critical issues that our previous tools had missed.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechVenture Inc.",
    industry: "Technology",
    rating: 5,
    metrics: { vulnerabilities: "2,500+", timeSaved: "40hrs/week", compliance: "100%" },
  },
  {
    quote: "The automated compliance reporting alone saves us hundreds of hours each quarter. It's an essential tool for any enterprise serious about security and regulatory adherence.",
    author: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "FinSecure Corp",
    industry: "Financial Services",
    rating: 5,
    metrics: { vulnerabilities: "5,000+", timeSaved: "60hrs/week", compliance: "100%" },
  },
  {
    quote: "Real-time threat detection with actionable recommendations. TectaPro is like having a 24/7 security team powered by AI. The ROI was evident within the first quarter.",
    author: "Emily Watson",
    role: "Security Director",
    company: "CloudScale Systems",
    industry: "Cloud Infrastructure",
    rating: 5,
    metrics: { vulnerabilities: "3,200+", timeSaved: "35hrs/week", compliance: "100%" },
  },
  {
    quote: "We've reduced our mean time to remediation by 80% since implementing TectaPro. The AI recommendations are precise and actionable, making our security team incredibly efficient.",
    author: "David Park",
    role: "CISO",
    company: "HealthTech Solutions",
    industry: "Healthcare",
    rating: 5,
    metrics: { vulnerabilities: "1,800+", timeSaved: "50hrs/week", compliance: "100%" },
  },
];

const companyLogos = [
  "TechVenture", "FinSecure", "CloudScale", "HealthTech", "DataFlow", "SecureNet"
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 text-sm text-primary border border-primary/30 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-highlight">Enterprise</span> Leaders
          </h2>
          <p className="text-muted-foreground">
            See what security professionals say about TectaPro's AI-powered platform.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="glass-card overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Main Quote - 3 columns */}
              <div className="lg:col-span-3 p-8 lg:p-12 relative">
                <Quote className="absolute top-8 left-8 w-16 h-16 text-primary/10" />
                
                <div className="relative">
                  {/* Industry Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 text-xs text-primary bg-primary/10 rounded-full mb-6">
                    <Building2 className="w-3 h-3" />
                    {activeTestimonial.industry}
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                    "{activeTestimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center ring-2 ring-primary/20">
                      <span className="text-xl font-bold text-primary">
                        {activeTestimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{activeTestimonial.author}</div>
                      <div className="text-muted-foreground">
                        {activeTestimonial.role}, {activeTestimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Metrics Side - 2 columns */}
              <div className="lg:col-span-2 bg-primary/5 p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-primary/10">
                <div className="text-sm text-primary font-medium mb-6">Impact Metrics</div>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {activeTestimonial.metrics.vulnerabilities}
                    </div>
                    <div className="text-sm text-muted-foreground">Vulnerabilities Detected</div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {activeTestimonial.metrics.timeSaved}
                    </div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {activeTestimonial.metrics.compliance}
                    </div>
                    <div className="text-sm text-muted-foreground">Compliance Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex 
                      ? "w-8 bg-primary" 
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`glass-card p-6 cursor-pointer transition-all ${
                index === activeIndex 
                  ? "ring-2 ring-primary bg-primary/5" 
                  : "hover:bg-primary/5"
              }`}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Logos */}
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-6">Trusted by leading enterprises worldwide</div>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {companyLogos.map((logo, index) => (
              <div 
                key={index}
                className="text-lg font-semibold text-muted-foreground/50 hover:text-primary transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
