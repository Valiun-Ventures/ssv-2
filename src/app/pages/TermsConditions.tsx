import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";

export default function TermsConditions() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[300px] flex items-center bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl mb-4">Terms & Conditions</h1>
            <p className="text-xl text-teal-50">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                  These Terms and Conditions govern your use of the Premium Estates website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Website Usage Terms</h2>
                <p className="text-gray-600 mb-4">
                  By using this website, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Use the website only for lawful purposes</li>
                  <li>Not engage in any conduct that restricts or inhibits anyone's use of the website</li>
                  <li>Not reproduce, duplicate, copy, or resell any part of our website without permission</li>
                  <li>Not use our website in any way that causes damage to the website or impairs its availability</li>
                  <li>Provide accurate and complete information when making inquiries or bookings</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">User Responsibilities</h2>
                <p className="text-gray-600 mb-4">
                  As a user of our services, you are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Maintaining the confidentiality of your account information</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring that all information provided is accurate and up-to-date</li>
                  <li>Complying with all applicable local, state, and national laws</li>
                  <li>Conducting proper due diligence before any property transaction</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Intellectual Property</h2>
                <p className="text-gray-600">
                  The content, organization, graphics, design, and other matters related to the Premium Estates website are protected under applicable copyrights and other proprietary laws. Copying, redistribution, use, or publication of any such matters or any part of the website is prohibited without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Pricing & Availability Disclaimer</h2>
                <p className="text-gray-600">
                  All prices, specifications, and availability of properties mentioned on this website are subject to change without notice. While we strive to provide accurate information, we do not guarantee the accuracy, completeness, or timeliness of the information provided. Final prices and terms will be confirmed in the official sale agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Limitation of Liability</h2>
                <p className="text-gray-600">
                  Premium Estates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services. Our total liability shall not exceed the amount paid by you for the specific service in question.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Governing Law & Jurisdiction</h2>
                <p className="text-gray-600">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Contact Information</h2>
                <p className="text-gray-600">
                  For any questions regarding these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Premium Estates<br />
                    123 Real Estate Plaza, Indore, MP 452001<br />
                    Email: legal@realestate.com<br />
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
