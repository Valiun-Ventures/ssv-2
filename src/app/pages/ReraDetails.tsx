import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import { Card } from "../components/ui/card";
import { Shield, CheckCircle2, FileText, Calendar, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";

export default function ReraDetails() {
  const projects = [
    {
      name: "The Grand Maratha",
      reraNumber: "MP-RERA-2024-001234",
      status: "Active",
      validUntil: "December 31, 2026",
      location: "AB Road, Indore"
    },
    {
      name: "British Grand",
      reraNumber: "MP-RERA-2024-005678",
      status: "Active",
      validUntil: "June 30, 2027",
      location: "Ring Road, Indore"
    },
    {
      name: "Shyam Vihar",
      reraNumber: "MP-RERA-2022-009012",
      status: "Completed",
      validUntil: "March 31, 2025",
      location: "MR 10, Indore"
    },
    {
      name: "Singapore Radhakunj",
      reraNumber: "MP-RERA-2023-003456",
      status: "Active",
      validUntil: "September 30, 2026",
      location: "Bypass Road, Indore"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[300px] flex items-center bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl mb-4">RERA Details</h1>
            <p className="text-xl text-teal-50">
              Complete RERA registration information for all our projects
            </p>
          </div>
        </div>
      </section>

      {/* Developer RERA Registration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl mb-4 text-gray-900">Developer RERA Registration</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Developer Name:</span>
                      <span className="text-gray-900">Premium Estates Private Limited</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">RERA Registration Number:</span>
                      <span className="text-gray-900">MP-RERA-DEV-2020-0001</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">Registration Date:</span>
                      <span className="text-gray-900">January 15, 2020</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-gray-600">Status:</span>
                      <span className="inline-flex items-center gap-2 text-green-600">
                        <CheckCircle2 className="w-5 h-5" />
                        Active & Compliant
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Project-wise RERA Details</h2>
              <p className="text-gray-600">
                All our projects are registered with RERA Madhya Pradesh for complete transparency
              </p>
            </div>

            {/* Project-wise RERA Details */}
            <div className="space-y-6">
              {projects.map((project, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl mb-2 text-gray-900">{project.name}</h3>
                      <p className="text-gray-600">{project.location}</p>
                    </div>
                    <span className={`px-4 py-1 rounded-full text-sm ${
                      project.status === "Active" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-sm text-gray-600">RERA Number</div>
                          <div className="text-gray-900">{project.reraNumber}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-sm text-gray-600">Registration Status</div>
                          <div className="text-gray-900">{project.status}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-sm text-gray-600">Valid Until</div>
                          <div className="text-gray-900">{project.validUntil}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ExternalLink className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <Button 
                            variant="link" 
                            className="p-0 h-auto text-teal-600"
                          >
                            View RERA Certificate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authority Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-gray-900 text-center">RERA Authority Information</h2>
            
            <Card className="p-8">
              <h3 className="text-2xl mb-6 text-gray-900">Madhya Pradesh RERA</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Official Website</div>
                  <a 
                    href="https://rera.mp.gov.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 flex items-center gap-2"
                  >
                    https://rera.mp.gov.in
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Contact Number</div>
                  <div className="text-gray-900">0755-2578901, 0755-2578902</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <div className="text-gray-900">rera.mp@gov.in</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Address</div>
                  <div className="text-gray-900">
                    Real Estate Regulatory Authority<br />
                    Satpura Bhawan, Bhopal<br />
                    Madhya Pradesh - 462004
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-teal-50 border-teal-200">
              <h3 className="text-2xl mb-4 text-gray-900">Compliance Statement</h3>
              <p className="text-gray-600 mb-4">
                Premium Estates is committed to complete transparency and compliance with the Real Estate (Regulation and Development) Act, 2016. All our projects are duly registered with RERA Madhya Pradesh, and we maintain the highest standards of legal and regulatory compliance.
              </p>
              <p className="text-gray-600">
                We encourage all prospective buyers to verify the RERA details of our projects independently on the official RERA website. For any queries or concerns related to RERA compliance, please contact our customer support team.
              </p>
            </Card>
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
