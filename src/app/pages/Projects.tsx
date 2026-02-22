import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import { MapPin, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ProjectProps {
  filterStatus?: "Ongoing" | "Completed";
  filterCategory?: "residential" | "commercial";
  title?: string;
}

export default function Projects({ filterStatus, filterCategory, title: customTitle }: ProjectProps) {
  const projects = [
    {
      name: "The Grand Maratha",
      location: "Indore",
      status: "Ongoing",
      price: "₹25 Lac onwards",
      plotSize: "1200-2400 sq.ft",
      link: "/projects/the-grand-maratha",
      category: "residential",
      image: "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwbW9kZXJufGVufDF8fHx8MTc3MTc1MTMxNXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "British Grand",
      location: "Dewas Naka, Indore",
      status: "Ongoing",
      price: "₹30 Lac onwards",
      plotSize: "1500-3000 sq.ft",
      link: "/projects/british-grand",
      category: "residential",
      image: "/projects/british_grand_1.jpeg"
    },
    {
      name: "Singapore One Street",
      location: "Indore",
      status: "Ongoing",
      price: "₹15 Lac onwards",
      plotSize: "Commercial Shops",
      link: "/projects/singapore-one-street",
      category: "commercial",
      image: "/projects/singapore_one_street_1.jpeg"
    },
    {
      name: "EWS 1RK Flats",
      location: "Singapore NX, Indore",
      status: "Ongoing",
      price: "₹8.5 Lac onwards",
      plotSize: "1 RK Studio Flats",
      link: "/projects/ews-1rk-flats",
      category: "residential",
      image: "/projects/ews_flats_1.jpeg"
    },
    {
      name: "IRIS-Maa Sarju Vihar",
      location: "Indore",
      status: "Ongoing",
      price: "₹20 Lac onwards",
      plotSize: "Residential Plots",
      link: "/projects/iris-maa-sarju-vihar",
      category: "residential",
      image: "/projects/maa_sarju_vihar_1.jpeg"
    },
    {
      name: "Singapore Radhakunj",
      location: "Indore",
      status: "Ongoing",
      price: "₹28 Lac onwards",
      plotSize: "1200-2500 sq.ft",
      link: "/projects/singapore-radhakunj",
      category: "residential",
      image: "https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHBsb3QlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcxNzUxMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Shyam Vihar",
      location: "Indore",
      status: "Completed",
      price: "₹22 Lac onwards",
      plotSize: "1000-2000 sq.ft",
      link: "/projects/shyam-vihar",
      category: "residential",
      image: "https://images.unsplash.com/photo-1667058303412-000e127f10c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGdhcmRlbiUyMGFtZW5pdGllc3xlbnwxfHx8fDE3NzE3NTEzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filterStatus && project.status !== filterStatus) return false;
    if (filterCategory && project.category !== filterCategory) return false;
    return true;
  });

  const pageTitle = customTitle || (filterStatus ? `${filterStatus} Projects` : filterCategory ? `${filterCategory === 'residential' ? 'Residential Plots' : 'Commercial Shops'}` : "Our Projects");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHBsb3QlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcxNzUxMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl mb-4">{pageTitle}</h1>
            <p className="text-xl text-gray-200">
              {filterStatus
                ? `Explore our portfolio of ${filterStatus.toLowerCase()} developments`
                : filterCategory
                  ? `Discover premium ${filterCategory} opportunities`
                  : "Explore our portfolio of premium residential developments"}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-900">Building Communities, Creating Homes</h2>
            <p className="text-gray-600 mb-8">
              With over 15 years of experience, we have delivered 750+ successful projects across Madhya Pradesh. Each project is thoughtfully planned with modern amenities, prime locations, and quality construction that stands the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Total Projects", value: "760+" },
              { label: "Ongoing Projects", value: "6" },
              { label: "Completed Projects", value: "750+" },
              { label: "Happy Families", value: "5000+" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl text-teal-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Project Portfolio</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Each of our projects is a testament to quality, architectural excellence, and customer-centric design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-none bg-gray-50/50">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-5 left-5 flex gap-2">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg ${project.status === "Ongoing"
                      ? "bg-green-600 text-white"
                      : "bg-blue-600 text-white"
                      }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-teal-600 transition-colors uppercase tracking-tight">{project.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-6 border-b border-gray-100 pb-4">
                    <MapPin className="w-5 h-5 text-teal-600" />
                    <span className="text-sm font-medium">{project.location}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <span className="block text-[10px] text-gray-400 uppercase font-black mb-1">Price</span>
                      <span className="text-teal-600 font-bold text-sm tracking-tight">{project.price}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <span className="block text-[10px] text-gray-400 uppercase font-black mb-1">Plot Size</span>
                      <span className="text-gray-900 font-bold text-sm tracking-tight">{project.plotSize}</span>
                    </div>
                  </div>
                  <Link to={project.link}>
                    <Button className="w-full h-14 bg-gray-900 hover:bg-teal-600 text-white rounded-xl transition-all font-bold text-base shadow-lg hover:shadow-teal-200">
                      Explore Details
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Premium Amenities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every project features world-class amenities for modern living
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "24/7 Security",
              "Landscaped Gardens",
              "Children's Play Area",
              "Modern Clubhouse",
              "Wide Roads",
              "Underground Drainage"
            ].map((amenity, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center">
                <CheckCircle2 className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <div className="text-sm text-gray-700">{amenity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Why Invest with Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "High Appreciation",
                description: "Properties in prime locations with excellent growth potential"
              },
              {
                icon: CheckCircle2,
                title: "RERA Approved",
                description: "All projects are RERA registered for your peace of mind"
              },
              {
                icon: MapPin,
                title: "Prime Locations",
                description: "Strategic locations with excellent connectivity and infrastructure"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
