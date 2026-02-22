import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import Facilities from "../components/Facilities";
import GettingStarted from "../components/GettingStarted";
import {
  Building2,
  Shield,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  Home as HomeIcon,
  MapPin,
  Trees,
  Dumbbell,
  Play,
  Star,
  ArrowRight,
  Clock
} from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* New Modern Hero Section */}
      <section className="relative min-h-[85vh] flex items-center py-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#ECF1F8] rounded-bl-[200px] z-0"></div>
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-teal-100 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-teal-100 text-teal-700 text-sm font-semibold mb-8 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
                SSV Homes: Redefining Luxury Living
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1E3240] leading-[1.1] mb-8">
                Find Your <span className="text-teal-600">Perfect Home</span> With SSV Homes
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                Discover a curated selection of premium properties designed for modern families. Excellence, transparency, and trust for over 15 years.
              </p>

              <div className="flex flex-wrap gap-5 mb-12">
                <Link to="/projects">
                  <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 h-14 rounded-xl text-lg font-bold shadow-lg shadow-teal-600/20 transition-all border-none">
                    View Projects
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-[#1E3240] text-[#1E3240] px-8 h-14 rounded-xl text-lg font-bold hover:bg-white/50 border-2">
                    Contact Agent
                  </Button>
                </Link>
              </div>

              {/* Trust Stats */}
              <div className="flex flex-wrap gap-8 items-center border-t border-gray-100 pt-10">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#1E3240]">750+</span>
                  <span className="text-gray-500 text-sm">Projects Delivered</span>
                </div>
                <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-[#1E3240]">5000+</span>
                  <span className="text-gray-500 text-sm">Happy Families</span>
                </div>
                <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <div className="flex gap-0.5 mb-1">
                      {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <span className="text-sm font-bold text-[#1E3240]">4.9/5 Rating</span>
                  </div>
                </div>
              </div >
            </div >

            {/* Right Side Visuals */}
            < div className="relative" >
              <div className="relative z-10 rounded-[60px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(30,50,64,0.3)]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1400"
                  alt="Modern Luxury Home"
                  className="w-full h-[600px] object-cover"
                />
              </div>

              {/* Floating Highlight Cards */}
              <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-2xl max-w-[280px] hidden md:block border border-teal-50">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-teal-50 p-3 rounded-2xl">
                    <HomeIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Latest Property</div>
                    <div className="text-sm font-bold text-[#1E3240]">The Grand Maratha</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-teal-600 font-bold">₹25 Lac+</span>
                  <Button size="sm" variant="ghost" className="text-xs p-0 h-auto hover:bg-transparent text-gray-400">View Details <ArrowRight className="w-3 h-3 ml-1" /></Button>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-10 -right-10 z-20 bg-[#1E3240] text-white p-8 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-2xl hidden md:flex">
                <span className="text-3xl font-bold">15+</span>
                <span className="text-xs text-center opacity-80 uppercase tracking-widest leading-tight">Years of<br />Excellence</span>
              </div>

              {/* Decorative Blur Backgrounds */}
              <div className="absolute -z-10 -right-20 -bottom-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
            </div >
          </div >
        </div >
      </section >

      {/* Trust / Credibility Strip */}
      < section className="bg-gradient-to-r from-teal-600 to-blue-600 py-12" >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="flex justify-center mb-3">
                <Building2 className="w-10 h-10" />
              </div>
              <div className="text-3xl md:text-4xl mb-2">750+</div>
              <div className="text-sm md:text-base text-teal-50">Projects Delivered</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Users className="w-10 h-10" />
              </div>
              <div className="text-3xl md:text-4xl mb-2">5000+</div>
              <div className="text-sm md:text-base text-teal-50">Happy Families</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Award className="w-10 h-10" />
              </div>
              <div className="text-3xl md:text-4xl mb-2">15+</div>
              <div className="text-sm md:text-base text-teal-50">Years Experience</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Shield className="w-10 h-10" />
              </div>
              <div className="text-3xl md:text-4xl mb-2">100%</div>
              <div className="text-sm md:text-base text-teal-50">RERA Approved</div>
            </div>
          </div>
        </div>
      </section >

      {/* About Snapshot */}
      < section className="py-20 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1656646425073-a1ec4a84e0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzE3NTEzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About Us"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Building Dreams Since 2010</h2>
              <p className="text-gray-600 mb-6 max-w-2xl">
                With over 15 years of excellence in real estate development, we have established ourselves as a trusted name in creating quality residential spaces. Our commitment to transparency, timely delivery, and customer satisfaction sets us apart.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">RERA registered and government-approved projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Prime locations with excellent connectivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">World-class amenities and infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Transparent pricing and flexible payment plans</span>
                </li>
              </ul>
              <Link to="/about">
                <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section >

      {/* Facilities Section */}
      < Facilities />

      {/* Projects Showcase */}
      < section className="py-20 bg-white" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our premium residential developments offering modern living spaces with world-class amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "The Grand Maratha",
                location: "Indore",
                status: "Ongoing",
                price: "₹25 Lac onwards",
                link: "/projects/the-grand-maratha",
                image: "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwbW9kZXJufGVufDF8fHx8MTc3MTc1MTMxNXww&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                name: "British Grand",
                location: "Indore",
                status: "Ongoing",
                price: "₹30 Lac onwards",
                link: "/projects/british-grand",
                image: "/projects/british_grand_1.jpeg"
              },
              {
                name: "Singapore One Street",
                location: "Indore",
                status: "Ongoing",
                price: "₹15 Lac onwards",
                link: "/projects/singapore-one-street",
                image: "/projects/singapore_one_street_1.jpeg"
              },
              {
                name: "Singapore Radhakunj",
                location: "Indore",
                status: "Ongoing",
                price: "₹28 Lac onwards",
                link: "/projects/singapore-radhakunj",
                image: "https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHBsb3QlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzcxNzUxMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${project.status === "Ongoing"
                      ? "bg-green-500 text-white"
                      : "bg-blue-500 text-white"
                      }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="text-teal-600 mb-4">{project.price}</div>
                  <Link to={project.link}>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* Why Choose Us */}
      < section className="py-20 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">Why Choose SSV Homes?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring together expertise, quality, and trust to deliver exceptional real estate experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "RERA Certified",
                description: "Fully compliant projects"
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "Never delayed"
              },
              {
                icon: CheckCircle2,
                title: "Legal Clarity",
                description: "100% transparent"
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "Best materials"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-teal-600">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-xl mb-3 text-gray-900 font-bold">{feature.title}</h3>
                <p className="text-gray-600 font-medium">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section >

      {/* Lifestyle / Amenities Highlight */}
      < section className="py-20 bg-white" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">World-Class Amenities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience modern living with premium amenities designed for your comfort and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trees, title: "Landscaped Gardens", description: "Beautiful green spaces" },
              { icon: Dumbbell, title: "Modern Clubhouse", description: "Fitness & recreation" },
              { icon: Shield, title: "24/7 Security", description: "CCTV & trained guards" },
              { icon: HomeIcon, title: "Children's Play Area", description: "Safe & fun environment" }
            ].map((amenity, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center">
                    <amenity.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-lg mb-2 text-gray-900">{amenity.title}</h3>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Video Preview */}
      < section className="py-20 bg-gray-900 text-white" >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-4">Watch Our Story</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Take a virtual tour of our projects and see how we're building communities, not just homes
            </p>
            <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <video
                src="https://ik.imagekit.io/q0gorn2pwv/SSV%20Homes/1113(3).mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              ></video>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section >

      {/* Getting Started Section */}
      < GettingStarted />

      {/* Testimonials Preview */}
      < section className="py-20 bg-white" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from families who've found their dream homes with us
            </p>
          </div>

          <div className="overflow-hidden relative pb-10">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...Array(2)].map((_, listIndex) => (
                <div key={listIndex} className="flex gap-8 shrink-0">
                  {[
                    {
                      name: "Rajesh Kumar",
                      location: "The Grand Maratha",
                      text: "Excellent experience! The team was professional, transparent, and delivered exactly what they promised. Our family is extremely happy with our new home.",
                      rating: 5
                    },
                    {
                      name: "Priya Sharma",
                      location: "British Grand",
                      text: "The best decision we made was investing in SSV Homes. The location, amenities, and construction quality exceeded our expectations.",
                      rating: 5
                    },
                    {
                      name: "Amit Patel",
                      location: "Shyam Vihar",
                      text: "From site visit to possession, everything was smooth. The team kept us updated at every step. Highly recommend SSV Homes!",
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <Card key={`${listIndex}-${index}`} className="p-8 w-[400px] shrink-0 hover:shadow-xl transition-shadow border-t-4 border-t-teal-600">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-8 italic text-lg">"{testimonial.text}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center border border-teal-100">
                          <span className="text-teal-600 font-bold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-gray-900 font-bold">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.location}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" size="lg">
                Read More Reviews
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* Blog Preview */}
      < section className="py-20 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Latest Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and news from the real estate world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 3,
                title: "Top 10 Things to Consider When Buying a Plot",
                date: "February 15, 2026",
                category: "Buying Guide",
                image: "/blog_buying.png"
              },
              {
                id: 1,
                title: "Investment Opportunities in Indore Real Estate 2026",
                date: "February 22, 2026",
                category: "Investment",
                image: "/blog_investment.png"
              },
              {
                id: 2,
                title: "Understanding RERA: A Complete Guide for Homebuyers",
                date: "February 18, 2026",
                category: "Legal",
                image: "/blog_legal.png"
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md group">
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-md uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#1E3240] line-clamp-2 leading-snug group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="link" className="p-0 h-auto text-teal-600 font-bold hover:text-blue-700 decoration-2 underline-offset-4">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Preview */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
