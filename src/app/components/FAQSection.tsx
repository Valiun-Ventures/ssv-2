import { Link } from "react-router";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    question: "How do I list my property on SSV Homes?",
    answer: "Simply create an account, add your property details, and submit for verification. Our team will review your submission within 24-48 hours."
  },
  {
    question: "Are the properties verified?",
    answer: "Yes, all our properties undergo a rigorous verification process to ensure legal compliance and quality standards."
  },
  {
    question: "Can I schedule virtual tours?",
    answer: "Absolutely! We offer virtual tours for most of our premium listings to help you explore properties from the comfort of your home."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept various payment methods including bank transfers, credit/debit cards, and financing through our partner banks."
  },
  {
    question: "Can I work with a specific agent?",
    answer: "Yes, you can choose to work with any of our expert agents. View our 'Meet the Team' page to find an agent specialized in your preferred area."
  },
  {
    question: "How often are the listings updated?",
    answer: "Our listings are updated in real-time. As soon as a property status changes or a new one is added, it reflects on the website immediately."
  }
];

export default function FAQSection({
  title = "Frequently Asked Questions",
  faqs = defaultFAQs
}: FAQSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left Column: Side Info */}
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-base mb-24">
              Answers to your real estate questions and concern
            </p>

            <div className="mt-auto">
              <h4 className="text-xl font-medium text-gray-900 mb-2">Still have a Questions?</h4>
              <p className="text-gray-600 mb-6">
                We're here to help! Don't hesitate—ask away and get the answers you need.
              </p>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 h-12 rounded-lg font-medium border-none">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-100 last:border-0"
                >
                  <AccordionTrigger className="text-[18px] font-medium text-[#212121] py-6 hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#676767] text-[16px] pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
