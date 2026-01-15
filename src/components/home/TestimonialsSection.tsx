import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TectaPro transformed our security posture. The AI-driven insights helped us identify and fix vulnerabilities we didn't know existed.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechVenture Inc.",
    rating: 5,
  },
  {
    quote: "The automated compliance reporting alone saves us hundreds of hours each quarter. It's an essential tool for any enterprise.",
    author: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "FinSecure Corp",
    rating: 5,
  },
  {
    quote: "Real-time threat detection with actionable recommendations. TectaPro is like having a 24/7 security team powered by AI.",
    author: "Emily Watson",
    role: "Security Director",
    company: "CloudScale Systems",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
