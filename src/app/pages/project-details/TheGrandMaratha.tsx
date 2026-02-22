import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/FAQSection";
import { MapPin, Home, Ruler, Trees, Shield, Play, Star } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function TheGrandMaratha() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758448756880-01dbaf85597d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwbW9kZXJufGVufDF8fHx8MTc3MTc1MTMxNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="The Grand Maratha"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <span className="inline-block px-4 py-1 bg-green-500 rounded-full text-sm mb-4">Ongoing Project</span>
            <h1 className="text-4xl md:text-5xl mb-4">The Grand Maratha</h1>
            <p className="text-xl text-gray-200 mb-6">
              Premium Residential Plots in Prime Location, Indore
            </p>
            <div className="flex items-center gap-2 text-lg mb-8">
              <MapPin className="w-5 h-5" />
              <span>AB Road, Indore, Madhya Pradesh</span>
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
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Home className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl text-gray-900 mb-1">150+</div>
              <div className="text-gray-600">Residential Plots</div>
            </Card>
            <Card className="p-6 text-center">
              <Ruler className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl text-gray-900 mb-1">1200-2400</div>
              <div className="text-gray-600">Sq.ft Plot Sizes</div>
            </Card>
            <Card className="p-6 text-center">
              <Trees className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-2xl text-gray-900 mb-1">₹25 Lac</div>
              <div className="text-gray-600">Starting Price</div>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">About The Grand Maratha</h2>
            <p className="text-gray-600 mb-4">
              The Grand Maratha is a premium residential plotted development located in the heart of Indore. Spread across 20 acres of beautifully landscaped land, this project offers residents a perfect blend of modern amenities and natural beauty.
            </p>
            <p className="text-gray-600">
              With excellent connectivity to major commercial hubs, educational institutions, and healthcare facilities, The Grand Maratha is designed for families who value quality living and long-term investment potential. The project is RERA registered and offers transparent pricing with flexible payment plans.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Connectivity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-900 text-center">Location & Connectivity</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4">
                {[
                  { label: "Airport", distance: "15 km" },
                  { label: "Railway Station", distance: "8 km" },
                  { label: "Bus Stand", distance: "5 km" },
                  { label: "Major Hospital", distance: "3 km" },
                  { label: "Shopping Mall", distance: "2 km" },
                  { label: "School & Colleges", distance: "1 km" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="text-teal-600">{item.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Map View</span>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-8 text-gray-900 text-center">Plot Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { size: "1200 sq.ft", price: "₹25 Lac", facing: "East/West" },
              { size: "1800 sq.ft", price: "₹35 Lac", facing: "North/South" },
              { size: "2400 sq.ft", price: "₹45 Lac", facing: "Corner Plot" }
            ].map((plot, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl mb-4 text-gray-900">{plot.size}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starting Price:</span>
                    <span className="text-teal-600">{plot.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Facing:</span>
                    <span className="text-gray-900">{plot.facing}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
                  Enquire Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900 text-center">World-Class Amenities</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "24/7 Security with CCTV",
              "Landscaped Gardens",
              "Children's Play Area",
              "Jogging Track",
              "Community Hall",
              "Wide Internal Roads",
              "Underground Drainage",
              "Street Lighting",
              "Water Supply 24/7",
              "Power Backup",
              "Entrance Gate",
              "Boundary Wall"
            ].map((amenity, index) => (
              <div key={index} className="bg-white p-4 rounded-lg flex items-center gap-3">
                <Shield className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900 text-center">Project Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1667058303412-000e127f10c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGdhcmRlbiUyMGFtZW5pdGllc3xlbnwxfHx8fDE3NzE3NTEzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={`Gallery Image ${item}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-gray-900 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Suresh Verma",
                text: "Excellent project with all modern amenities. The location is perfect and the team is very professional.",
                rating: 5
              },
              {
                name: "Anjali Gupta",
                text: "We're very happy with our plot purchase. The construction quality and amenities are top-notch.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-gray-900">{testimonial.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* CTA */}
      <CTASection 
        title="Ready to Book Your Plot?"
        description="Contact us today to schedule a site visit and explore The Grand Maratha"
      />
    </div>
  );
}
