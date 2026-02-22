import { Button } from "./ui/button";
import { Phone, MessageSquare } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showPhoneButton?: boolean;
}

export default function CTASection({
  title = "Ready to Find Your Dream Property?",
  description = "Contact us today and let our experts help you find the perfect home or investment opportunity.",
  primaryButtonText = "Get in Touch",
  secondaryButtonText = "Call Now",
  showPhoneButton = true
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-blue-600 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{title}</h2>
          <p className="text-lg mb-8 text-teal-50">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {primaryButtonText}
            </Button>
            {showPhoneButton && (
              <a href="tel:+918085126788">
                <Button
                  size="lg"
                  className="bg-white text-teal-700 hover:bg-teal-50 w-full sm:w-auto font-bold border-2 border-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {secondaryButtonText}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
