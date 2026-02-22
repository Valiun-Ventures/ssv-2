import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/FAQSection";
import { MapPin, Trees, Ruler, TrendingUp, Shield, Star, Leaf, Heart } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function IRISMaaSarjuVihar() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center">
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="/projects/maa_sarju_vihar_1.jpeg"
                        alt="IRIS-Maa Sarju Vihar"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl text-white">
                        <span className="inline-block px-4 py-1 bg-teal-500 rounded-full text-sm mb-4">Premium Plotted Development</span>
                        <h1 className="text-4xl md:text-5xl mb-4">IRIS-Maa Sarju Vihar</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            Build Your Dream Home in a Serene & Secure Gated Community
                        </p>
                        <div className="flex items-center gap-2 text-lg mb-8">
                            <MapPin className="w-5 h-5" />
                            <span>Prime Residential Corridor, Indore</span>
                        </div>
                        <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
                            Request Site Visit
                        </Button>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <Card className="p-6 text-center">
                            <Trees className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">Gated</div>
                            <div className="text-gray-600">Community</div>
                        </Card>
                        <Card className="p-6 text-center">
                            <Ruler className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">900-3000</div>
                            <div className="text-gray-600">Sq.ft Plot Sizes</div>
                        </Card>
                        <Card className="p-6 text-center">
                            <TrendingUp className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">High</div>
                            <div className="text-gray-600">Rate Appreciation</div>
                        </Card>
                        <Card className="p-6 text-center">
                            <Shield className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">RERA</div>
                            <div className="text-gray-600">Approved Project</div>
                        </Card>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">Experience Serenity</h2>
                        <p className="text-gray-600 mb-4">
                            IRIS-Maa Sarju Vihar is more than just a plotted development; it is a canvas for your future home. Nestled away from the city's hustle but within easy reach of every urban convenience, this project offers the perfect balance of peace and accessibility.
                        </p>
                        <p className="text-gray-600">
                            The project is meticulously planned with wide roads, lush green parks, and modern infrastructure. Each plot is strategically positioned to offer maximum privacy and natural lighting, ensuring that when you build your home, it is a haven of comfort.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lifestyle Features */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">A Life of Ease</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Modern amenities designed to enhance your lifestyle and provide a secure environment for your family.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "24/7 Security", desc: "Secured gated entrance with round-the-clock guards." },
                            { icon: Leaf, title: "Lush Greenery", desc: "Multiple landscaped parks and tree-lined avenues." },
                            { icon: Heart, title: "Community Space", desc: "Dedicated clubhouse and children's play area." },
                            { icon: MapPin, title: "Strategic Spot", desc: "Located near upcoming metro station and schools." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Section */}
            <section className="py-16 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl mb-12 text-gray-900">Project Snapshot</h2>
                    <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl relative group">
                        <ImageWithFallback
                            src="/projects/maa_sarju_vihar_1.jpeg"
                            alt="IRIS-Maa Sarju Vihar Development"
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection />

            {/* CTA Section */}
            <CTASection
                title="Secure Your Future Today"
                description="Limited plots available. Contact us to find the perfect plot size for your dream home at IRIS-Maa Sarju Vihar."
            />
        </div>
    );
}
