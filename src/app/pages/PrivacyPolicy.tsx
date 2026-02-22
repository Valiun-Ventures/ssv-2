import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[300px] flex items-center bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl mb-4">Privacy Policy</h1>
            <p className="text-xl text-teal-50">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-8">
              <p className="text-gray-600">Last Updated: February 22, 2026</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Introduction</h2>
                <p className="text-gray-600">
                  Premium Estates ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Information We Collect</h2>
                <h3 className="text-xl mb-3 text-gray-800">Personal Information</h3>
                <p className="text-gray-600 mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Name and contact details (email address, phone number, postal address)</li>
                  <li>Demographic information</li>
                  <li>Financial information for property transactions</li>
                  <li>Property preferences and requirements</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">How We Use Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>To provide and maintain our services</li>
                  <li>To process property transactions and inquiries</li>
                  <li>To communicate with you about properties, updates, and promotions</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect against fraudulent or illegal activity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Cookies & Tracking Technologies</h2>
                <p className="text-gray-600">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Data Sharing & Disclosure</h2>
                <p className="text-gray-600 mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Service providers who assist us in operating our business</li>
                  <li>Legal and regulatory authorities when required by law</li>
                  <li>Professional advisers such as lawyers and accountants</li>
                  <li>Potential buyers or investors in case of business transfer</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Third-Party Links</h2>
                <p className="text-gray-600">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Policy Updates</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Premium Estates<br />
                    123 Real Estate Plaza, Indore, MP 452001<br />
                    Email: privacy@realestate.com<br />
                    Phone: +91 123 456 7890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
