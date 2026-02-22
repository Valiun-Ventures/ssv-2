import { Link } from "react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const posts = [
  {
    id: 1,
    title: "Investment Opportunities in Indore Real Estate 2026",
    excerpt: "Indore's real estate market continues to show strong growth potential. Discover why investors are flocking to central India's cleanest city.",
    date: "February 22, 2026",
    author: "SSV Editor",
    category: "Investment",
    image: "/blog_investment.png",
    featured: true
  },
  {
    id: 2,
    title: "Understanding RERA: A Complete Guide for Homebuyers",
    excerpt: "RERA has transformed the real estate sector. Learn everything you need to know about compliance, safety, and your rights as a buyer.",
    date: "February 18, 2026",
    author: "Legal Team",
    category: "Legal",
    image: "/blog_legal.png",
    featured: true
  },
  {
    id: 3,
    title: "Top 10 Things to Consider When Buying a Plot",
    excerpt: "Buying a plot is different from buying an apartment. From soil quality to legal titles, here is your ultimate checklist.",
    date: "February 15, 2026",
    author: "Piyush Sharma",
    category: "Buying Guide",
    image: "/blog_buying.png",
    featured: false
  },
  {
    id: 4,
    title: "The Future of Smart Homes in Modern India",
    excerpt: "Automation is no longer a luxury. Explore how smart technologies are enhancing security and comfort in SSV Homes developments.",
    date: "February 10, 2026",
    author: "Tech Dept",
    category: "Technology",
    image: "/blog_smart.png",
    featured: false
  },
  {
    id: 5,
    title: "Choosing the Right Plot Size for Your Dream Home",
    excerpt: "Architecture starts with the soil. Learn how to calculate the perfect area for your family's long-term needs and layout planning.",
    date: "February 05, 2026",
    author: "Design Lead",
    category: "Planning",
    image: "/blog_planning.png",
    featured: false
  },
  {
    id: 6,
    title: "How Amenities Can Boost Your Property Value",
    excerpt: "A clubhouse or a simple jogging track? Discover which amenities offer the highest ROI for investors and homeowners alike.",
    date: "February 01, 2026",
    author: "SSV Analyst",
    category: "Investment",
    image: "/blog_amenities.png",
    featured: false
  }
];

const categories = ["All", "Investment", "Legal", "Buying Guide", "Technology", "Planning"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const recentPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Header */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Blog Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1E3240]/85 backdrop-blur-[2px]"></div>
          {/* Abstract Patterns */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real Estate <span className="text-teal-400">Insights</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
              Stay ahead with the latest market trends, investment guides, and expert advice from the team at SSV Homes.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-400 mr-4 hidden md:inline-flex items-center gap-2">
              <Tag className="w-4 h-4" /> Filter by:
            </span>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "secondary"}
                className={`rounded-full px-6 transition-all duration-300 ${activeCategory === category
                  ? "bg-gradient-to-r from-teal-600 to-blue-600 border-none shadow-lg shadow-teal-600/20"
                  : "bg-gray-50 hover:bg-teal-50 text-gray-600 border-none"
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3240]">Featured Stories</h2>
              <div className="w-20 h-1 bg-teal-500 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden border-none shadow-xl rounded-[40px] bg-white hover:-translate-y-2 transition-all duration-500">
                  <div className="h-72 overflow-hidden relative">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-teal-500/90 text-white backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6 mb-4 text-xs font-medium text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-teal-600" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-teal-600" />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#1E3240] group-hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all">
                        Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Stories Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3240]">Latest Updates</h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden border-none shadow-md rounded-[32px] bg-white border border-gray-50 hover:shadow-2xl transition-all duration-500">
                  <div className="h-56 overflow-hidden relative">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-teal-600 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-teal-600" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3 text-teal-600" />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-[#1E3240] group-hover:text-teal-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" className="p-0 h-auto text-teal-600 hover:text-teal-700 hover:bg-transparent text-sm font-bold group/btn">
                        Read Insights <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:ml-3 transition-all" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200">
              <p className="text-gray-400 italic">No articles found in this category yet. Check back soon!</p>
            </div>
          )}

          <div className="text-center mt-20">
            <Button size="lg" variant="outline" className="rounded-full px-10 border-gray-200 text-gray-600 hover:border-teal-600 hover:text-teal-600 transition-all">
              Load More Insights
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* CTA */}
      <CTASection
        title="Get Exclusive Real Estate Insights"
        description="Join 5,000+ investors and homeowners. Get the latest market updates delivered to your inbox."
      />
    </div>
  );
}
