import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/FAQSection";
import { MapPin, Home, Ruler, Trees, Shield, Star, Droplets, Layout } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function BritishGrand() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/projects/british_grand_2.jpeg"
            alt="British Grand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <span className="inline-block px-4 py-1 bg-green-500 rounded-full text-sm mb-4">Ongoing Project</span>
            <h1 className="text-4xl md:text-5xl mb-4">British Grand</h1>
            <p className="text-xl text-gray-200 mb-6">
              Ultra Luxury 1 BHK Independent Houses in Sarthak Singapore Township
            </p>
            <div className="flex items-center gap-2 text-lg mb-8">
              <MapPin className="w-5 h-5" />
              <span>Dewas Naka, near DB Pride, Indore, Madhya Pradesh</span>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Home className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl text-gray-900 mb-1">1 BHK</div>
              <div className="text-gray-600">Luxury House</div>
            </Card>
            <Card className="p-6 text-center">
              <Ruler className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl text-gray-900 mb-1">540</div>
              <div className="text-gray-600">Sq.ft (15x36)</div>
            </Card>
            <Card className="p-6 text-center">
              <Layout className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl text-gray-900 mb-1">East</div>
              <div className="text-gray-600">Facing</div>
            </Card>
            <Card className="p-6 text-center">
              <Droplets className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl text-gray-900 mb-1">7000L</div>
              <div className="text-gray-600">Water Storage</div>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">About British Grand</h2>
            <p className="text-gray-600 mb-4">
              British Grand offers a unique opportunity to own an ultra-luxury 1 BHK independent house within the prestigious Sarthak Singapore Township. Designed for those who appreciate fine living, these houses combine modern aesthetics with functional design.
            </p>
            <p className="text-gray-600">
              Each unit features premium finishes including false ceilings, designer wallpapers, and dedicated planting spaces. With both-side gardens and a prime location near DB Pride, British Grand is the perfect choice for a compact yet luxurious lifestyle in Indore's growing Dewas Naka region.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900 text-center">Premium Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Living Spaces", items: ["Spacious Hall", "Kitchen with Wash Area", "Master Bedroom", "Modern Bathroom"] },
              { title: "Interior Design", items: ["Premium False Ceiling", "Designer Wallpapers", "Excellent Cross Ventilation", "Modern Fixtures"] },
              { title: "Outdoor & Utilities", items: ["Both Side Gardens", "Dedicated Parking Space", "Individual Boring", "7000L Water Storage"] }
            ].map((section, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-4 text-teal-700">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Shield className="w-4 h-4 text-teal-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900 text-center">Interior & Exterior Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="/projects/british_grand_1.jpeg"
                alt="British Grand Exterior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="/projects/british_grand_2.jpeg"
                alt="British Grand Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-900 text-center">Connectivity</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                { label: "Dewas Naka", distance: "0.5 km" },
                { label: "DB Pride", distance: "1 km" },
                { label: "Vijay Nagar", distance: "4 km" },
                { label: "Indore Railway Station", distance: "9 km" },
                { label: "Indore Airport", distance: "18 km" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700 font-medium">{item.label}</span>
                  <span className="text-teal-600 font-bold">{item.distance}</span>
                </div>
              ))}
            </div>
            <div className="bg-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Strategic Address</h3>
              <p className="mb-6 opacity-90">
                Located in the rapidly developing corridor of Dewas Naka, British Grand offers the perfect balance of peaceful residential life and proximity to core city commercial hubs.
              </p>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <span>Sarthak Singapore Township, Indore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* CTA */}
      <CTASection
        title="Experience British Grand Today"
        description="Book a private tour of our ultra-luxury 1 BHK independent houses."
      />
    </div>
  );
}
