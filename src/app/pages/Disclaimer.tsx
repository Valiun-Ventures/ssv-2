import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";

export default function Disclaimer() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[300px] flex items-center bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl mb-4">Disclaimer</h1>
            <p className="text-xl text-teal-50">
              Important information about using our website and services
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-8">
              <p className="text-gray-600">Effective Date: February 22, 2026</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl mb-4 text-gray-900">General Disclaimer</h2>
                <p className="text-gray-600">
                  The information provided on the Premium Estates website is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Project Information Disclaimer</h2>
                <p className="text-gray-600 mb-4">
                  All project-related information, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Project specifications and features</li>
                  <li>Plot sizes and dimensions</li>
                  <li>Amenities and facilities</li>
                  <li>Construction timelines</li>
                  <li>Project status and completion dates</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  The above information is indicative and subject to change. Final specifications will be as per the approved building plans and sale agreement. Buyers are advised to verify all details independently before making any purchase decision.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Visuals & Layout Disclaimer</h2>
                <p className="text-gray-600">
                  All images, photographs, architectural renderings, floor plans, and site layouts shown on this website are for representational purposes only. They are artistic impressions and may not represent the actual property, amenities, or surroundings. Actual construction may vary from these images. Furniture, fixtures, and decorative items shown in images are not included in the sale unless specifically mentioned.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Pricing Disclaimer</h2>
                <p className="text-gray-600">
                  All prices mentioned on the website are indicative and subject to change without prior notice. The final price will be determined based on various factors including plot location, size, facing, and market conditions at the time of booking. Prices do not include applicable taxes, registration charges, stamp duty, and other statutory charges unless explicitly stated. Prospective buyers should confirm current prices and payment terms with our sales team before making any commitment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Legal & Regulatory Disclaimer</h2>
                <p className="text-gray-600 mb-4">
                  While all our projects are RERA registered and comply with applicable regulations, buyers should:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Independently verify RERA registration details</li>
                  <li>Review all legal documents and approvals</li>
                  <li>Consult with legal and financial advisors before purchase</li>
                  <li>Verify title clearance and encumbrance certificate</li>
                  <li>Check local development plans and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">External Links Disclaimer</h2>
                <p className="text-gray-600">
                  Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. We are not responsible for the content, privacy policies, or practices of any third-party sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">No Professional Advice Clause</h2>
                <p className="text-gray-600">
                  The information provided on this website does not constitute professional advice. You should not rely solely on the information provided here for making any financial, legal, or business decisions. We strongly recommend consulting with qualified professionals including real estate advisors, lawyers, chartered accountants, and financial planners before making any property purchase decision.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Limitation of Liability</h2>
                <p className="text-gray-600">
                  Under no circumstance shall Premium Estates be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of information on this website or any errors or omissions in the content. Users access and use this website at their own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4 text-gray-900">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Disclaimer, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Premium Estates<br />
                    123 Real Estate Plaza, Indore, MP 452001<br />
                    Email: info@realestate.com<br />
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
