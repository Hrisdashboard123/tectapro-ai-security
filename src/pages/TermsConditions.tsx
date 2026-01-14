import Layout from "@/components/layout/Layout";

const TermsConditions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms & <span className="text-highlight">Conditions</span>
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
            
            {/* Acceptance */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using TectaPro's AI-powered security platform ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you may not access or use our Service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms apply to all users, including visitors, registered users, and enterprise clients. We reserve the right to update these Terms at any time, and your continued use of the Service constitutes acceptance of any modifications.
              </p>
            </div>

            {/* Service Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                TectaPro provides an AI-powered security platform that offers:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Automated code vulnerability detection and analysis</li>
                <li>Infrastructure security monitoring and optimization</li>
                <li>Threat intelligence and real-time alerts</li>
                <li>Compliance reporting and risk assessment</li>
                <li>AI-driven remediation recommendations</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                While we strive for accuracy, our AI-powered analysis is provided as a supplementary tool and should not replace comprehensive security audits by qualified professionals.
              </p>
            </div>

            {/* Account Registration */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                To access certain features, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in suspicious activity.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Acceptable Use Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree NOT to use TectaPro to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Scan code or infrastructure you do not own or have authorization to test</li>
                <li>Attempt to circumvent security measures or access restrictions</li>
                <li>Reverse engineer, decompile, or disassemble our platform</li>
                <li>Use the Service for any illegal or malicious purposes</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Resell or redistribute our Service without authorization</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6">5.1 Our Property</h3>
              <p className="text-muted-foreground leading-relaxed">
                TectaPro, including its AI models, algorithms, software, trademarks, and content, is owned by us and protected by intellectual property laws. Nothing in these Terms grants you any right to use our branding without express written permission.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6">5.2 Your Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                You retain ownership of any code or data you submit to our platform. By using our Service, you grant us a limited license to process your content solely for the purpose of providing security analysis services. We do not claim ownership of your intellectual property.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Paid subscriptions are billed in advance on a monthly or annual basis. By subscribing, you agree that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Subscription fees are non-refundable unless otherwise stated</li>
                <li>We may change pricing with 30 days' notice</li>
                <li>Failure to pay may result in service suspension</li>
                <li>Enterprise agreements may have custom payment terms</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Free trials are subject to usage limits and may be converted to paid subscriptions at the end of the trial period.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Accuracy, reliability, or completeness of analysis results</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Detection of all security vulnerabilities</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our AI-powered analysis is intended to assist, not replace, professional security practices. You remain responsible for your own security decisions and implementations.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, TECTAPRO SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Security breaches or data loss resulting from undetected vulnerabilities</li>
                <li>Damages exceeding the fees paid in the preceding 12 months</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless TectaPro and its affiliates, officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Content you submit to our platform</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate this agreement at any time. We may suspend or terminate your access immediately if you violate these Terms. Upon termination:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Your right to access the Service ends immediately</li>
                <li>You may export your data within 30 days (paid plans)</li>
                <li>Provisions regarding IP, liability, and disputes survive termination</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any disputes shall be resolved in the state or federal courts located in San Francisco County, California.
              </p>
            </div>

            {/* Modifications */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">12. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Material changes will be communicated via email or prominent notice on our platform. Your continued use after changes take effect constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, please contact us at:
              </p>
              <div className="text-muted-foreground space-y-1 mt-4">
                <p><strong className="text-foreground">Email:</strong> legal@tectapro.com</p>
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

export default TermsConditions;
