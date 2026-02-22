import { Search, Headset, Calendar, CheckCircle2 } from 'lucide-react';
import { Card } from "./ui/card";

const steps = [
    {
        icon: Search,
        title: "Browse Listings",
        description: "Find diverse properties in SSV Homes",
    },
    {
        icon: Headset,
        title: "Contact Agent",
        description: "Ask, schedule, and get tailored deals",
    },
    {
        icon: Calendar,
        title: "Schedule Visits",
        description: "Pick a time, and our agents ensure a hassle-free viewing",
    },
    {
        icon: CheckCircle2,
        title: "Close the Deal",
        description: "Close your deal confidently with expert guidance",
    }
];

const GettingStarted = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                    Getting Started With SSV Homes
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                    Follow these simple steps to find and secure your perfect property with ease.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 border-t-4 border-t-teal-600 flex flex-col h-full">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center">
                                    <step.icon className="w-8 h-8 text-teal-600" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed flex-grow">
                                {step.description}
                            </p>
                            <div className="mt-6 text-teal-600 font-bold text-sm uppercase tracking-wider">
                                Step 0{index + 1}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GettingStarted;

