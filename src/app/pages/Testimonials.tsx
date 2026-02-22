import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import { Star, Play } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      project: "The Grand Maratha",
      text: "Excellent experience! The team was professional, transparent, and delivered exactly what they promised. Our family is extremely happy with our new home. The location is perfect and all amenities are as advertised.",
      rating: 5,
      type: "text"
    },
    {
      name: "Priya Sharma",
      project: "British Grand",
      text: "The best decision we made was investing in Premium Estates. The location, amenities, and construction quality exceeded our expectations. The customer service team was always available to answer our questions.",
      rating: 5,
      type: "text"
    },
    {
      name: "Amit Patel",
      project: "Shyam Vihar",
      text: "From site visit to possession, everything was smooth. The team kept us updated at every step. Highly recommend Premium Estates! The transparency in pricing was refreshing.",
      rating: 5,
      type: "text"
    },
    {
      name: "Neha Gupta",
      project: "Singapore Radhakunj",
      text: "We're thrilled with our plot purchase. The project is exactly as described, and the quality of work is exceptional. Looking forward to building our dream home here!",
      rating: 5,
      type: "text"
    },
    {
      name: "Vikram Singh",
      project: "The Grand Maratha",
      text: "Outstanding project! The amenities, location, and overall planning are top-notch. The Premium Estates team made the entire buying process hassle-free.",
      rating: 5,
      type: "text"
    },
    {
      name: "Sunita Reddy",
      project: "British Grand",
      text: "A wonderful investment opportunity. The property has great appreciation potential, and the current infrastructure is already impressive. Very satisfied with our decision.",
      rating: 5,
      type: "text"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[300px] flex items-center bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl mb-4">Client Testimonials</h1>
            <p className="text-xl text-teal-50">
              Hear what our happy clients have to say about their experience with Premium Estates
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Filters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">All Reviews</TabsTrigger>
              <TabsTrigger value="text">Text Reviews</TabsTrigger>
              <TabsTrigger value="video">Video Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <span className="text-teal-600 font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.project}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="text">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.filter(t => t.type === "text").map((testimonial, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <span className="text-teal-600 font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.project}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="video">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer group">
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust & Credibility Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Trusted by Thousands</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join 5000+ happy families who have found their dream homes with us
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Happy Families" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "750+", label: "Projects Delivered" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* CTA */}
      <CTASection
        title="Ready to Join Our Happy Family?"
        description="Experience the Premium Estates difference. Let us help you find your perfect home."
      />
    </div>
  );
}
