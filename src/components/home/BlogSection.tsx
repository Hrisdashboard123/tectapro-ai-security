import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    category: "AI Security",
    title: "How AI is Revolutionizing Application Security Testing",
    excerpt: "Discover how machine learning algorithms are transforming the way we detect and prevent security vulnerabilities.",
    date: "Jan 10, 2026",
    readTime: "5 min read",
    slug: "/blog/ai-security-testing",
  },
  {
    category: "DevSecOps",
    title: "Building a Security-First DevOps Pipeline",
    excerpt: "Learn best practices for integrating security into every stage of your CI/CD pipeline.",
    date: "Jan 8, 2026",
    readTime: "7 min read",
    slug: "/blog/devsecops-pipeline",
  },
  {
    category: "Infrastructure",
    title: "Cloud Infrastructure Compliance: A Complete Guide",
    excerpt: "Navigate the complex landscape of cloud compliance with our comprehensive guide.",
    date: "Jan 5, 2026",
    readTime: "10 min read",
    slug: "/blog/cloud-compliance",
  },
];

const BlogSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-block px-4 py-1 text-sm text-primary border border-primary/30 rounded-full mb-4">
              Insights & Resources
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Latest from Our <span className="text-highlight">Blog</span>
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="glass-card-hover overflow-hidden group"
            >
              {/* Category bar */}
              <div className="h-1 bg-primary" />
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  <Link to={post.slug}>{post.title}</Link>
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <Link
                    to={post.slug}
                    className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
