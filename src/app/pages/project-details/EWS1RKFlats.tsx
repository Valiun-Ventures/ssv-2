import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/FAQSection";
import { MapPin, Home, Ruler, Plus, Shield, Star, Wallet, Building } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function EWS1RKFlats() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center">
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="/projects/ews_flats_1.jpeg"
                        alt="EWS 1RK Flats"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl text-white">
                        <span className="inline-block px-4 py-1 bg-teal-500 rounded-full text-sm mb-4">Affordable Housing</span>
                        <h1 className="text-4xl md:text-5xl mb-4">EWS 1RK Flats - Singapore NX</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            Quality G+2 Residential Building near Police Chowki, Indore
                        </p>
                        <div className="flex items-center gap-2 text-lg mb-8">
                            <MapPin className="w-5 h-5" />
                            <span>Singapore NX, Near Police Chowki, Indore, Madhya Pradesh</span>
                        </div>
                        <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
                            Enquire About Availability
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
                            <div className="text-2xl text-gray-900 mb-1">1 RK</div>
                            <div className="text-gray-600">Studio Flats</div>
                        </Card>
                        <Card className="p-6 text-center">
                            <Building className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">G+2</div>
                            <div className="text-gray-600">Floors</div>
                        </Card>
                        <Card className="p-6 text-center">
                            <Plus className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">Prime</div>
                            <div className="text-gray-600">Location</div>
                        </Card>
                        <Card className="p-6 text-center">
                            <Wallet className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">₹8.5 Lac</div>
                            <div className="text-gray-600">Starting Price</div>
                        </Card>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">About EWS 1RK Flats</h2>
                        <p className="text-gray-600 mb-4">
                            Our EWS (Economically Weaker Section) 1RK flats in Singapore NX are designed to provide high-quality, affordable housing options for families and individuals. Located strategically near the local Police Chowki, this G+2 building ensures a safe and accessible environment.
                        </p>
                        <p className="text-gray-600">
                            Each unit is optimized for space efficiency, offering a comfortable living area, a functional kitchen nook, and a private bathroom. It's an ideal choice for first-time home buyers or those looking for a high-yield rental investment in Indore's growing residential outskirts.
                        </p>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl mb-12 text-gray-900 text-center">Project Highlights</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Safe Environment",
                                description: "Located right next to the Police Chowki, ensuring 24/7 security and peace of mind for residents."
                            },
                            {
                                title: "Modern G+2 Design",
                                description: "Low-rise construction offering better community living and easier maintenance."
                            },
                            {
                                title: "Compact Efficiency",
                                description: "1RK layouts designed to maximize every square inch for functional daily living."
                            },
                            {
                                title: "Essential Utilities",
                                description: "Dedicated water supply and electrical connections ready for every unit."
                            },
                            {
                                title: "Investment Value",
                                description: "High appreciation potential due to the rapid development of the Singapore NX area."
                            },
                            {
                                title: "Ready Possession",
                                description: "Constructed with quality materials and ready for immediate fit-outs and occupancy."
                            }
                        ].map((highlight, index) => (
                            <Card key={index} className="p-6 border-l-4 border-l-teal-600">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{highlight.title}</h3>
                                <p className="text-gray-600">{highlight.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">Project View</h2>
                    <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                        <ImageWithFallback
                            src="/projects/ews_flats_1.jpeg"
                            alt="EWS 1RK Flats Exterior"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection />

            {/* CTA Section */}
            <CTASection
                title="Your Dream Home is Within Reach"
                description="Book your budget-friendly 1RK flat today at Singapore NX."
            />
        </div>
    );
}
