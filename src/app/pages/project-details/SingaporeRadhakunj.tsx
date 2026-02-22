import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/FAQSection";
import { MapPin, Home, Ruler, Shield, Trees, Star, Lightbulb, Droplet, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function SingaporeRadhakunj() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHBsb3QlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcxNzUxMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Singapore Radhakunj"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <span className="inline-block px-4 py-1 bg-green-500 rounded-full text-sm mb-4">Ongoing Project</span>
            <h1 className="text-4xl md:text-5xl mb-4">Singapore Radhakunj</h1>
            <p className="text-xl text-gray-200 mb-6">
              Prime Residential Plots Offering Modern Living & High Appreciation
            </p>
            <div className="flex items-center gap-2 text-lg mb-8">
              <MapPin className="w-5 h-5" />
              <span>Indore, Madhya Pradesh</span>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
              Plan Site Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center shadow-sm">
              <Home className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-xl text-gray-900 mb-1 font-bold">Residential</div>
              <div className="text-gray-600">Premium Plots</div>
            </Card>
            <Card className="p-6 text-center shadow-sm">
              <Ruler className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-xl text-gray-900 mb-1 font-bold">1200-2500</div>
              <div className="text-gray-600">Sq.ft Sizes</div>
            </Card>
            <Card className="p-6 text-center shadow-sm">
              <Shield className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-xl text-gray-900 mb-1 font-bold">Gated</div>
              <div className="text-gray-600">Development</div>
            </Card>
            <Card className="p-6 text-center shadow-sm">
              <Trees className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              <div className="text-xl text-gray-900 mb-1 font-bold">Eco-Friendly</div>
              <div className="text-gray-600">Infrastructure</div>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900 font-bold text-center">About Singapore Radhakunj</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed text-center">
              Singapore Radhakunj is a landmark residential plotted development that sets a new standard for luxury and comfort. Aimed at providing a high-quality lifestyle, this project offers diverse plot sizes, allowing you to build the home you've always envisioned.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Infrastructure Highlights</h3>
                <ul className="space-y-3">
                  {[
                    "80ft and 40ft wide internal roads",
                    "Underground electrical and water lines",
                    "Dedicated storm water drainage system",
                    "Designer entrance gate and boundary wall",
                    "24/7 solar street lighting"
                  ].map((note, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                        <Star className="w-3 h-3 text-teal-600" />
                      </div>
                      <span className="text-gray-700">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-teal-50 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Peak</h3>
                <p className="text-gray-700 mb-4">
                  Strategically located in one of Indore's fastest-growing residential belts, Singapore Radhakunj has seen consistent value appreciation over the past 24 months.
                </p>
                <div className="flex items-center gap-2 text-teal-700 font-bold">
                  <TrendingUp className="w-5 h-5" />
                  <span>High Growth Potential Destination</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Amenities Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">World Class Amenities</h2>
            <p className="text-gray-400">Everything you need for a comfortable and contemporary lifestyle.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Shield, title: "Secured Entrance" },
              { icon: Trees, title: "Garden & Parks" },
              { icon: Lightbulb, title: "Solar Lighting" },
              { icon: Droplet, title: "Water Supply" },
              { icon: Home, title: "Club House" },
              { icon: Ruler, title: "Wide Roads" },
              { icon: Star, title: "Premium Living" },
              { icon: MapPin, title: "Prime Spot" }
            ].map((amenity, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors duration-300">
                  <amenity.icon className="w-8 h-8 text-teal-400 group-hover:text-white" />
                </div>
                <div className="font-bold">{amenity.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Strategic Location Indore</h2>
          <div className="h-[450px] bg-gray-100 rounded-[2.5rem] flex items-center justify-center border-2 border-dashed border-gray-200">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <p className="text-gray-600">Detailed location map and connectivity highlights coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* CTA */}
      <CTASection
        title="Start Your Journey at Singapore Radhakunj"
        description="Limited residential plots available. Call our experts to know more about the latest pricing and site visit schedule."
      />
    </div>
  );
}
