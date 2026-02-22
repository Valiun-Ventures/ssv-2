import {
    CheckCircle2,
    Search,
    Headset,
    Sparkles,
    Image,
    CircleDollarSign,
    CreditCard,
    Users
} from "lucide-react";
import { Card } from "./ui/card";

const facilities = [
    {
        icon: CheckCircle2,
        title: "Verified Property Listings",
        description: "100% trusted properties for peace of mind."
    },
    {
        icon: Image,
        title: "Virtual Tours",
        description: "Explore properties from the comfort of your home."
    },
    {
        icon: Search,
        title: "Advanced Search Filters",
        description: "Find properties tailored to your preferences."
    },
    {
        icon: CircleDollarSign,
        title: "Affordable Pricing",
        description: "Competitive rates for every budget."
    },
    {
        icon: Headset,
        title: "Expert Support",
        description: "Agents and consultants at your service."
    },
    {
        icon: CreditCard,
        title: "Flexible Payment Options",
        description: "Tailored payment plans for ease."
    },
    {
        icon: Sparkles,
        title: "User-Friendly Platform",
        description: "Simple navigation for seamless browsing."
    },
    {
        icon: Users,
        title: "Community Insights",
        description: "Discover neighborhoods that fit your lifestyle."
    }
];

export default function Facilities() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                        Discover The Facilities We Offer At SSV Homes
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        With innovative solutions, market expertise, and a customer-first approach, we simplify the process to ensure a smooth experience.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {facilities.map((fac, index) => (
                        <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-teal-600">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center">
                                    <fac.icon className="w-8 h-8 text-teal-600" />
                                </div>
                            </div>
                            <h3 className="text-xl mb-3 text-gray-900 font-bold leading-tight">{fac.title}</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                {fac.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
