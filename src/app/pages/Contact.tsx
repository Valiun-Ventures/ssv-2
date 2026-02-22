import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import FAQSection from "../components/FAQSection";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[300px] flex items-center bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="text-xl text-teal-50">
              Get in touch with us. We're here to help you find your dream home.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-8 text-gray-900">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <a
                  href="https://www.google.com/maps/dir//Singapore+Business+Park,+AB+Rd,+LIG+Square,+Anoop+Nagar,+Indore,+Madhya+Pradesh+452011/@22.684975,75.8185309,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962fdd44bff8a4b:0xa28fcbb8ffeef7b6!2m2!1d75.8904738!2d22.7336929?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-[1.02]"
                >
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg mb-2 text-gray-900">Office Address</h3>
                        <p className="text-gray-600">
                          307, Singapore Business Park<br />
                          LIG Square, Indore<br />
                          Madhya Pradesh 452011
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2 text-gray-900">Phone Numbers</h3>
                      <p className="text-gray-600">
                        +91 80851 26788<br />
                        +91 88238 72527
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2 text-gray-900">Email Address</h3>
                      <p className="text-gray-600">
                        shreesiddhivinayakhomes271@gmail.com
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2 text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 11:00 AM - 7:30 PM<br />
                        Sunday: Closed (By Appointment)
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-3xl mb-6 text-gray-900">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Interested In</Label>
                    <select
                      id="interest"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option>Select a project</option>
                      <option>The Grand Maratha</option>
                      <option>British Grand</option>
                      <option>Shyam Vihar</option>
                      <option>Singapore Radhakunj</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-900 text-center">Visit Our Office</h2>
          <div className="h-[450px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8533133826186!2d75.8904738!3d22.733692899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd44bff8a4b%3A0xa28fcbb8ffeef7b6!2sSingapore%20Business%20Park!5e0!3m2!1sen!2sin!4v1771800845592!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SSV Homes Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-900 text-center">Quick Contact</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Button
              size="lg"
              className="h-auto py-6 flex flex-col items-center gap-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white"
            >
              <Phone className="w-6 h-6" />
              <span>Call Now</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-2"
            >
              <Mail className="w-6 h-6" />
              <span>Email Us</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-2"
            >
              <Send className="w-6 h-6" />
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />
    </div>
  );
}
