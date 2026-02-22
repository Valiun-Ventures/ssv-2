import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import CTASection from "../../components/CTASection";
import FAQSection from "../../components/FAQSection";
import { MapPin, ShoppingBag, Ruler, BarChart, Shield, Star, Users, Building2 } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export default function SingaporeOneStreet() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center">
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="/projects/singapore_one_street_1.jpeg"
                        alt="Singapore One Street"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl text-white">
                        <span className="inline-block px-4 py-1 bg-blue-500 rounded-full text-sm mb-4">Commercial Landmark</span>
                        <h1 className="text-4xl md:text-5xl mb-4">Singapore One Street</h1>
                        <p className="text-xl text-gray-200 mb-6">
                            Indore's Premier High-Street Retail & Commercial Destination
                        </p>
                        <div className="flex items-center gap-2 text-lg mb-8">
                            <MapPin className="w-5 h-5" />
                            <span>Singapore Business Park Corridor, Indore</span>
                        </div>
                        <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
                            Download Layout Plan
                        </Button>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <Card className="p-6 text-center">
                            <ShoppingBag className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">Retail</div>
                            <div className="text-gray-600">Shops & Showrooms</div>
                        </Card>
                        <Card className="p-6 text-center">
                            <Ruler className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">Flexible</div>
                            <div className="text-gray-600">Floor Plans</div>
                        </Card>
                        <Card className="p-6 text-center">
                            <Users className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">High</div>
                            <div className="text-gray-600">Footfall Area</div>
                        </Card>
                        <Card className="p-6 text-center">
                            <BarChart className="w-10 h-10 text-teal-600 mx-auto mb-3" />
                            <div className="text-2xl text-gray-900 mb-1">Top</div>
                            <div className="text-gray-600">ROI Potential</div>
                        </Card>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl mb-6 text-gray-900"> Indores Next Business Hub</h2>
                        <p className="text-gray-600 mb-4">
                            Singapore One Street is a meticulously planned commercial development designed to cater to the modern needs of retail brands and service providers. Located in the booming Singapore Business Park vicinity, it offers unparalleled visibility and accessibility.
                        </p>
                        <p className="text-gray-600">
                            With wide frontages, ample parking, and sophisticated common areas, One Street is set to become the preferred destination for shoppers and businesses alike. Whether you are looking for a flagship showroom or a boutique retail space, our diverse floor plans offer the flexibility your business needs to grow.
                        </p>
                    </div>
                </div>
            </section>

            {/* Business Features */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl mb-12 text-gray-900 text-center">Why Choose One Street?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Building2,
                                title: "Modern Architecture",
                                description: "Contemporary design with double-height ceiling options and premium glass facades for maximum brand impact."
                            },
                            {
                                icon: Shield,
                                title: "Planned Security",
                                description: "24/7 CCTV surveillance, professional security personnel, and advanced fire-fighting systems."
                            },
                            {
                                icon: MapPin,
                                title: "Strategic Location",
                                description: "Surrounded by a dense residential catchment area of over 5000+ families ensuring steady footfall."
                            }
                        ].map((feature, index) => (
                            <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="flex justify-center mb-6">
                                    <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center">
                                        <feature.icon className="w-7 h-7 text-teal-600" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl mb-12 text-gray-900 text-center">Project Gallery</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={num} className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-md group">
                                <ImageWithFallback
                                    src={`/projects/singapore_one_street_${num}.jpeg`}
                                    alt={`Singapore One Street View ${num}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Connectivity & Area */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <h2 className="text-3xl font-bold mb-8 text-gray-900">Unmatched Connectivity</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Prime Location</h4>
                                        <p className="text-gray-600">Situated on the main feeder road connecting Singapore Business Park to primary IT hubs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Building2 className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Catchment Area</h4>
                                        <p className="text-gray-600">Immediate access to residents of Singapore Township, British Grand, and upcoming projects.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <ul className="space-y-3">
                                    <li className="flex justify-between border-b pb-2 border-gray-200">
                                        <span className="text-gray-600">BRTS Corridor</span>
                                        <span className="text-teal-600 font-bold">2 mins</span>
                                    </li>
                                    <li className="flex justify-between border-b pb-2 border-gray-200">
                                        <span className="text-gray-600">Major IT Park</span>
                                        <span className="text-teal-600 font-bold">5 mins</span>
                                    </li>
                                    <li className="flex justify-between border-b pb-2 border-gray-200">
                                        <span className="text-gray-600">Super Corridor</span>
                                        <span className="text-teal-600 font-bold">10 mins</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-gray-600">Indore Railway Station</span>
                                        <span className="text-teal-600 font-bold">20 mins</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection />

            {/* CTA */}
            <CTASection
                title="Scale Your Business at One Street"
                description="Book your commercial space today at Indore's most promising business address."
            />
        </div>
    );
}
