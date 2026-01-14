import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Rocket, Award, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import teamCeo from "@/assets/team-ceo.jpg";
import teamCto from "@/assets/team-cto.jpg";
import teamAdvisor from "@/assets/team-advisor.jpg";

const timeline = [
  {
    year: "2019",
    title: "The Idea",
    description: "Our founders recognized the gap between security needs and available solutions in the enterprise space.",
  },
  {
    year: "2020",
    title: "Platform Launch",
    description: "TectaPro's AI-powered security platform launched with initial code scanning capabilities.",
  },
  {
    year: "2022",
    title: "Enterprise Adoption",
    description: "Reached 100+ enterprise clients and expanded to full infrastructure monitoring.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded operations globally with 500+ enterprise clients across 40 countries.",
  },
  {
    year: "2026",
    title: "Industry Leader",
    description: "Recognized as the leading AI-first security platform for enterprise organizations.",
  },
];

const teamMembers = [
  {
    name: "Marcus Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Security at a Fortune 500 company with 20+ years in cybersecurity.",
    image: teamCeo,
  },
  {
    name: "Dr. Sarah Park",
    role: "CTO & Co-Founder",
    bio: "PhD in Machine Learning from Stanford, previously led AI research at leading tech companies.",
    image: teamCto,
  },
  {
    name: "James Morrison",
    role: "Chief Security Advisor",
    bio: "Former NSA analyst with extensive experience in threat intelligence and national security.",
    image: teamAdvisor,
  },
];

const values = [
  {
    icon: Target,
    title: "Security First",
    description: "Every decision we make prioritizes the security of our clients' systems and data.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously push the boundaries of what's possible with AI-driven security.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Our clients' success is our success. We're partners in their security journey.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 text-sm text-primary border border-primary/30 rounded-full mb-4">
              About TectaPro
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Future of <span className="text-highlight">AI Security</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to make enterprise-grade security accessible, 
              intelligent, and automated for organizations of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card-hover p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower developers and enterprises with AI-first security solutions 
                that automatically detect, prevent, and remediate vulnerabilities across 
                their entire technology stack. We believe security should be intelligent, 
                automated, and accessible to all organizations.
              </p>
            </div>
            
            <div className="glass-card-hover p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the global standard for AI-driven code and infrastructure 
                protection. We envision a world where every organization, regardless 
                of size or resources, has access to world-class security powered by 
                artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm text-primary mb-4">
              <Rocket className="w-4 h-4" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why We <span className="text-highlight">Started</span> TectaPro
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              TectaPro was born from a simple observation: traditional security 
              tools weren't keeping pace with the speed of modern software 
              development. As former security professionals at Fortune 500 
              companies, our founders experienced firsthand the challenges of 
              securing complex, rapidly-evolving technology stacks.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We built TectaPro to solve this problem—combining cutting-edge 
              AI technology with deep security expertise to create a platform 
              that's as fast and intelligent as the threats it protects against.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-highlight">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              From idea to industry leader—key milestones in TectaPro's evolution.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="glass-card-hover p-6">
                      <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-highlight">Leadership</span>
            </h2>
            <p className="text-muted-foreground">
              Led by industry veterans with decades of combined experience 
              in cybersecurity, AI, and enterprise software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card-hover overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-highlight">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at TectaPro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card-hover p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
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
                Join the Future of <span className="text-highlight">AI Security</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Be part of the movement to make enterprise security intelligent, 
                automated, and accessible. Join 500+ organizations already protected by TectaPro.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started Today
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

export default About;
