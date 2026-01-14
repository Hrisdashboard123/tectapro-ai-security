import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-highlight">Privacy</span> Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 14, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 space-y-10">
            
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                TectaPro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered security platform and services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using TectaPro, you agree to this Privacy Policy. If you do not agree with the terms of this policy, please do not access or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">2.1 Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may collect personal information that you voluntarily provide, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and job title</li>
                <li>Account credentials</li>
                <li>Billing and payment information</li>
                <li>Communications you send to us</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">2.2 Technical Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you use our platform, we automatically collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Usage patterns and feature interactions</li>
                <li>Log data and analytics</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6">2.3 Code and Infrastructure Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide our security scanning services, we may process:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Source code submitted for analysis</li>
                <li>Infrastructure configurations and metadata</li>
                <li>Security scan results and vulnerability reports</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, operate, and maintain our security platform</li>
                <li>Perform AI-powered code and infrastructure security analysis</li>
                <li>Generate vulnerability reports and compliance assessments</li>
                <li>Process transactions and manage your account</li>
                <li>Send administrative communications and updates</li>
                <li>Improve and personalize our services</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement enterprise-grade security measures to protect your data, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>SOC 2 Type II compliant infrastructure</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure code handling with automatic deletion after analysis</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Source code submitted for analysis is processed in memory and not permanently stored unless you explicitly opt-in to historical tracking features.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share information with trusted third-party service providers who assist us in operating our platform, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Cloud infrastructure providers</li>
                <li>Payment processors</li>
                <li>Analytics services</li>
                <li>Customer support tools</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These providers are contractually obligated to protect your data and use it only for the purposes we specify.
              </p>
            </div>

            {/* Your Rights */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@tectapro.com.
              </p>
            </div>

            {/* Cookies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience. You can manage cookie preferences through your browser settings. Essential cookies required for platform functionality cannot be disabled.
              </p>
            </div>

            {/* Updates */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of TectaPro after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="text-muted-foreground space-y-1 mt-4">
                <p><strong className="text-foreground">Email:</strong> privacy@tectapro.com</p>
                <p><strong className="text-foreground">Address:</strong> 123 Security Tower, Tech District, San Francisco, CA 94105</p>
                <p><strong className="text-foreground">Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
