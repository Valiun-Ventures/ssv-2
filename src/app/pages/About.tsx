import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import CTASection from "../components/CTASection";
import { Shield, Target, Eye, Award, Users, TrendingUp, CheckCircle2, History, Briefcase, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const stats = [
  { icon: History, number: "2010", label: "Founded" },
  { icon: Award, number: "750+", label: "Success Projects" },
  { icon: Users, number: "5000+", label: "Happy Families" },
  { icon: TrendingUp, number: "100%", label: "Legally Compliant" }
];

const values = [
  {
    title: "Integrated Expertise",
    description: "Builder, developer, coloniser, investor, and marketing partner all in one."
  },
  {
    title: "Quality focus",
    description: "Strong focus on quality construction and legally compliant developments."
  },
  {
    title: "Transparent Ethics",
    description: "Transparent communication and ethical business practices in every deal."
  },
  {
    title: "Strategic Location",
    description: "Strategic locations with high growth and appreciation potential."
  },
  {
    title: "Professional execution",
    description: "Professional marketing and sales execution by experts."
  },
  {
    title: "Trust-Based relations",
    description: "Long-term customer relationships built on unwavering trust."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Page Header */}
      <section className="relative h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&q=80&w=2000"
            alt="Real Estate Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1E3240]/80 backdrop-blur-[2px]"></div>
          {/* Abstract Patterns */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-300 text-sm font-semibold mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-teal-400"></span>
              Founded in 2010
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About <span className="text-teal-400">SSV Homes</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Forward-thinking real estate built on trust, quality, and long-term value creation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3240] mb-8">Building Modern Lifestyles</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              SSV Homes has established itself as a professionally driven organization with a strong presence across residential development, colonisation, investment, and real estate marketing. With a refined approach to planning and execution, we focus on delivering developments that meet modern lifestyle expectations while ensuring sustainable growth for our clients and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform shadow-teal-100">
                  <stat.icon className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-4xl font-bold text-[#1E3240] mb-2">{stat.number}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="py-24 bg-[#1E3240] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-600/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl border-4 border-white/10">
                <ImageWithFallback
                  src="https://ik.imagekit.io/q0gorn2pwv/WhatsApp%20Image%202026-02-10%20at%205.19.13%20PM.jpeg?updatedAt=1771434055060"
                  alt="Mr. Piyush Sharma - Founder of SSV Homes"
                  className="w-full h-full object-cover min-h-[500px]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500 rounded-full blur-[80px] opacity-20"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
            </div>
            <div className="text-white">
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-sm font-bold uppercase tracking-wider mb-6">
                Founder's Story
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">A Visionary Legacy</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  SSV Homes was founded by <span className="text-white font-bold">Mr. Piyush Sharma</span>, a visionary entrepreneur with deep insight into the real estate ecosystem. Driven by a desire to raise industry standards, he established SSV Homes to deliver developments that balance design, functionality, and investment value.
                </p>
                <p>
                  His hands-on leadership and customer-centric philosophy have played a key role in shaping the company’s steady growth and strong market reputation. Under his guidance, we continue to bridge the gap between aspirational living and practical investment.
                </p>
              </div>
              <div className="mt-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-teal-400 mb-2">Piyush Sharma</h3>
                <p className="text-gray-400">Founder & Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Impact */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1E3240] mb-8">Our Experience & Impact</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                With over 15 years of excellence and 750+ successfully delivered projects, SSV Homes has consistently demonstrated its ability to execute with precision and reliability.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-teal-600" />
                  </div>
                  <p className="text-gray-700">Thoughtful location selection and strong infrastructure focus.</p>
                </div>
                <div className="flex gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700">Positively impacted 5000+ happy families through secure homes.</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-t-4 border-t-teal-600">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E3240] mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To create premium living spaces and high-potential developments that stand the test of time, committed to superior construction and transparent processes.
                  </p>
                </div>
              </Card>
              <Card className="p-8 border-t-4 border-t-blue-600">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E3240] mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To be the most trusted real estate brand recognized for setting benchmarks in design, execution, and customer connectivity.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 pb-0">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider mb-6">
            Meet Our Experts
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3240] mb-8">The Team Behind SSV Homes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16Leading-relaxed">
            Our success is powered by a dedicated team of planners, engineers, marketing professionals, and sales experts who share a commitment to excellence and integrity.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {['Planners', 'Engineers', 'Marketing & Sales'].map((role, i) => (
              <div key={i} className="group">
                <div className="relative aspect-square rounded-[40px] overflow-hidden bg-gray-100 mb-6 transition-all duration-500 group-hover:shadow-2xl grayscale group-hover:grayscale-0">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${[
                      '1507003211169-0a1dd7228f2d',
                      '1500648767791-00dcc994a43e',
                      '1438761681033-6461ffad8d80'
                    ][i]}?auto=format&fit=crop&q=80&w=400`}
                    alt={role}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white font-bold text-lg">{role} Experts</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-[50px] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-[60px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-[60px]"></div>

            <div className="text-center mb-20 relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Why Choose SSV Homes</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Discover the pillars that make us the preferred partner for 5000+ happy families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {values.map((value, index) => (
                <div key={index} className="flex gap-5 p-4 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-teal-400 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Start Your Journey With Us"
        description="Experience the SSV Homes difference. Let our experts guide you to your perfect investment or dream home."
      />
    </div>
  );
}
