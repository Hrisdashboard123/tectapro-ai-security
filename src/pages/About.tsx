import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Target, Eye, Rocket, Award, Lightbulb, Users, ChevronLeft, ChevronRight, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import teamCeo from "@/assets/team-ceo.jpg";
import teamCto from "@/assets/team-cto.jpg";
import teamAdvisor from "@/assets/team-advisor.jpg";
import teamWorking from "@/assets/team-working.jpg";
import securityShield from "@/assets/security-shield.png";

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
    bio: "Former VP of Security at a Fortune 500 company with 20+ years in cybersecurity. Marcus leads TectaPro's strategic vision and global expansion efforts.",
    image: teamCeo,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Sarah Park",
    role: "CTO & Co-Founder",
    bio: "PhD in Machine Learning from Stanford, previously led AI research at leading tech companies. Sarah drives the AI innovation behind TectaPro's security engine.",
    image: teamCto,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Morrison",
    role: "Chief Security Advisor",
    bio: "Former NSA analyst with extensive experience in threat intelligence and national security. James ensures TectaPro stays ahead of emerging threats.",
    image: teamAdvisor,
    linkedin: "#",
    twitter: "#",
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
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const nextTeamMember = () => {
    setActiveTeamIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeamMember = () => {
    setActiveTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const activeMember = teamMembers[activeTeamIndex];

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

      {/* Mission Section - Split Left */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm text-primary mb-4">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empowering Organizations with <span className="text-highlight">AI-First</span> Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To empower developers and enterprises with AI-first security solutions 
                that automatically detect, prevent, and remediate vulnerabilities across 
                their entire technology stack.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe security should be intelligent, automated, and accessible to 
                all organizations. Every line of code, every infrastructure component, 
                protected by the power of artificial intelligence.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-2xl" />
                <img
                  src={securityShield}
                  alt="AI Security Shield"
                  className="relative w-full max-w-md mx-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Split Right */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-l from-primary/20 to-primary/5 rounded-2xl blur-2xl" />
                <img
                  src={teamWorking}
                  alt="TectaPro Team"
                  className="relative w-full rounded-2xl"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm text-primary mb-4">
                <Eye className="w-4 h-4" />
                Our Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Global Standard for <span className="text-highlight">Intelligent</span> Protection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To become the global standard for AI-driven code and infrastructure 
                protection. We envision a world where every organization, regardless 
                of size or resources, has access to world-class security.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From startups to Fortune 500 enterprises, our AI-powered platform 
                levels the playing field, giving everyone the tools they need to 
                protect their digital assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story - Split Left */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm text-primary mb-4">
                <Rocket className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why We <span className="text-highlight">Started</span> TectaPro
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TectaPro was born from a simple observation: traditional security 
                tools weren't keeping pace with the speed of modern software 
                development. As former security professionals at Fortune 500 
                companies, our founders experienced firsthand the challenges of 
                securing complex, rapidly-evolving technology stacks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We built TectaPro to solve this problem—combining cutting-edge 
                AI technology with deep security expertise to create a platform 
                that's as fast and intelligent as the threats it protects against.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    500+
                  </div>
                  <div>
                    <div className="font-semibold">Enterprise Clients</div>
                    <div className="text-sm text-muted-foreground">Trusted globally</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    40+
                  </div>
                  <div>
                    <div className="font-semibold">Countries</div>
                    <div className="text-sm text-muted-foreground">Worldwide presence</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    10M+
                  </div>
                  <div>
                    <div className="font-semibold">Vulnerabilities Detected</div>
                    <div className="text-sm text-muted-foreground">And remediated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Centered */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-highlight">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              From idea to industry leader—key milestones in TectaPro's evolution.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line - centered */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block" />
            {/* Mobile timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 md:hidden" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start md:items-center"
                >
                  {/* Year indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  </div>
                  
                  {/* Content - alternating sides on desktop */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 
                      ? "md:pr-16 md:text-right" 
                      : "md:pl-16 md:ml-auto"
                  }`}>
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

      {/* Team Carousel Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-highlight">Leadership</span>
            </h2>
            <p className="text-muted-foreground">
              Led by industry veterans with decades of combined experience 
              in cybersecurity, AI, and enterprise software.
            </p>
          </div>

          {/* Featured Carousel */}
          <div className="max-w-5xl mx-auto">
            <div className="glass-card overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={activeMember.image}
                    alt={activeMember.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/80" />
                </div>
                
                {/* Info Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center relative">
                  <div className="text-primary text-sm font-medium mb-2">
                    {String(activeTeamIndex + 1).padStart(2, '0')} / {String(teamMembers.length).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{activeMember.name}</h3>
                  <div className="text-primary font-medium mb-6">{activeMember.role}</div>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {activeMember.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-4 mb-8">
                    <a 
                      href={activeMember.linkedin} 
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a 
                      href={activeMember.twitter} 
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex gap-4">
                    <button
                      onClick={prevTeamMember}
                      className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextTeamMember}
                      className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              {teamMembers.map((member, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTeamIndex(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === activeTeamIndex 
                      ? "border-primary scale-110" 
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values - Split Right */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="glass-card-hover p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm text-primary mb-4">
                <Award className="w-4 h-4" />
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Principles That <span className="text-highlight">Guide</span> Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At TectaPro, our values aren't just words on a page—they're the 
                foundation of every decision we make and every product we build.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From how we treat our customers to how we approach innovation, 
                these core principles ensure we stay true to our mission of 
                making the digital world safer for everyone.
              </p>
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
