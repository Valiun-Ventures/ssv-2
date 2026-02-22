import { useParams, Link } from "react-router";
import { Button } from "../components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import CTASection from "../components/CTASection";
import { Card } from "../components/ui/card";
import ScrollToTop from "../components/ScrollToTop";

const posts = [
    {
        id: 1,
        title: "Investment Opportunities in Indore Real Estate 2026",
        content: `
      <p>Indore's real estate market has emerged as one of the most promising investment destinations in Central India. In 2026, the city is not just a commercial hub but a blueprint for urban development, driven by the historic feat of being the "Cleanest City in India" for consecutive years.</p>
      
      <h3>The Super Corridor Effect</h3>
      <p>The Super Corridor continues to be the primary engine of growth. With major IT giants and corporate offices establishing their presence, the demand for high-end residential projects in this vicinity has seen a 25% year-on-year increase. Investors are moving away from traditional saturated markets to Indore's burgeoning outskirts where infrastructure is state-of-the-art.</p>
      
      <h3>Metro Rail Connectivity: A Game Changer</h3>
      <p>The successful integration of the Metro Rail project has fundamentally changed property valuations. Areas within a 2-kilometer radius of metro stations are commanding premium prices, making them a "Gold Mine" for early-stage investors. We expect these areas to see another 40% appreciation in the next 24 months as the full line becomes operational.</p>
      
      <blockquote>"Indore represents the perfect synergy of traditional business ethics and modern infrastructure, making it a safe haven for real estate capital." — SSV Investment Desk</blockquote>
      
      <h3>Why Gated Communities are the Future?</h3>
      <p>For investors, residential plots in gated communities remain the most liquid asset. They offer the flexibility of individual ownership with the security and amenities of a township. At SSV Homes, our strategic plot selections on the Indore Bypass and near the Airport road are tailored for those seeking both lifestyle and high ROI. The safety of a walled perimeter and 24/7 surveillance adds a "trust premium" to the land value.</p>
      
      <h3>Future Outlook: 2026 and Beyond</h3>
      <p>As Indore transforms into a major logistics and educational hub (IIT and IIM presence), the real estate sector is poised for a decade of sustained growth. New industrial zones being developed around the city are creating a massive influx of professional workforce, further driving the rental and purchase market.</p>
      
      <p>For a calculated investor, the window to enter at these valuations is closing fast. Now is the time to secure your stake in Central India's economic engine. At SSV Homes, we provide the localized expertise you need to make an informed decision.</p>
    `,
        date: "February 22, 2026",
        author: "SSV Editor",
        category: "Investment",
        image: "/blog_investment.png"
    },
    {
        id: 2,
        title: "Understanding RERA: A Complete Guide for Homebuyers",
        content: `
      <p>The Real Estate Regulatory Authority (RERA) was established to bring transparency, accountability, and efficiency to the Indian real estate sector. For a homebuyer, understanding RERA is as critical as verifying the foundation of the house itself. In 2026, RERA compliance has become the single most important trust factor in the market.</p>
      
      <h3>The 'Carpet Area' Logic: Pay for What You Use</h3>
      <p>Before RERA, developers often used ambiguous terms like 'super built-up area,' which included common spaces like lobbies and stairs. RERA mandates that every project must be sold based on 'carpet area' — the actual usable area inside the walls. This has eliminated hidden costs and ensured that buyers pay exactly for what they get, protecting them from 'area inflation.'</p>
      
      <h3>Escrow Accounts: Ensuring Your Money Builds Your Home</h3>
      <p>RERA requires developers to deposit 70% of the funds collected from buyers into a separate escrow account. This money can only be used for the construction and land cost of that specific project. This has virtually ended the practice of 'fund diversion' where developers used to buy more land using collections from existing projects, leading to massive delays.</p>
      
      <h3>Key Rights Every Buyer Should Know:</h3>
      <ul>
        <li><strong>Structural Defects:</strong> Developers are now legally responsible for structural flaws or defects in workmanship for a period of five years.</li>
        <li><strong>Standardized Sales Agreements:</strong> The agreement for sale is now standardized by a government template, preventing one-sided unfair clauses.</li>
        <li><strong>Redressal:</strong> Fast-track RERA tribunals ensure disputes are settled in months, not decades.</li>
        <li><strong>Project Transparency:</strong> Every detail, from the sanctioned plan to the delivery date, must be uploaded on the RERA portal for public viewing.</li>
      </ul>
      
      <h3>Checking the RERA Website: Pro Tip</h3>
      <p>Every professional developer like SSV Homes must register their project and provide quarterly updates on construction progress. We encourage all our clients to visit the MP RERA website to verify our approvals, layout plans, and delivery timelines. Transparency isn't just a requirement for us; it's our philosophy.</p>
      
      <blockquote>"Legal transparency is the bridge between a financial transaction and a home-buying celebration. RERA has turned that bridge into a solid foundation." — SSV Legal Team</blockquote>
      
      <p>Investing in a RERA-registered project means your investment is safe, your timeline is protected, and your future home is legally sound. Never settle for anything less than a certified RERA project.</p>
    `,
        date: "February 18, 2026",
        author: "Legal Team",
        category: "Legal",
        image: "/blog_legal.png"
    },
    {
        id: 3,
        title: "Top 10 Things to Consider When Buying a Plot",
        content: `
      <p>Buying a plot is often the most significant financial decision of a lifetime. Unlike buying a pre-built apartment, a plot is a blank canvas that requires deep due diligence. Whether you're building a home or investing for the future, here is our comprehensive 10-point checklist for 2026.</p>
      
      <h3>1. Verification of the Land Title (The 'Clearance' Check)</h3>
      <p>Ensure the seller actually owns the land and has the right to sell it. Check the 'Rin Pustika' and 'Khasra' records at the local registrar's office. A clean title ensures you can apply for a home loan effortlessly and resell the property without legal complications later.</p>
      
      <h3>2. TNCP and Diverted Land Status</h3>
      <p>In Madhya Pradesh, ensure the land has Town & Country Planning (TNCP) approval and has been legally 'diverted' for residential use. Building on agricultural land without diversion can lead to heavy penalties and even demolition. Always ask for the 'Diversion Certificate.'</p>
      
      <h3>3. RERA Approval: The Non-Negotiable</h3>
      <p>Always check the project's RERA registration number. It is your shield against fraud, delays, and poor development quality. A RERA-approved colony is a well-planned colony.</p>
      
      <h3>4. Connectivity: The '15-Minute' Rule</h3>
      <p>Look for projects within 15-20 minutes of major hubs like Vijay Nagar, Bhanwarkuan, or the Super Corridor. Accessibility determines both your quality of daily life and the velocity of future resale value. If it's too far from the main city pulse, it better be in a growth corridor.</p>
      
      <h3>5. Infrastructure Ready? Look Beyond the Map</h3>
      <p>Don't buy based on 'proposed' plans. Check for physical infrastructure on-site: are the internal roads paved? Is there a functional drainage system? Is electricity and water supply connection ready at the plot boundary? A good developer finishes infrastructure *before* the plots are fully sold.</p>
      
      <h3>Additional Master Tips:</h3>
      <ul>
        <li><strong>Soil Quality:</strong> Check if the soil is suitable for construction without expensive piling. Black cotton soil might need deeper foundations.</li>
        <li><strong>Security Amenities:</strong> Look for gated community features—CCTV, boundary walls, and 24/7 security staff.</li>
        <li><strong>Surrounding Master Plan:</strong> Research the city's 5-year master plan for the surrounding area. A new highway or hospital nearby can double your value.</li>
        <li><strong>Payment Milestones:</strong> Ensure your payments are linked to actual development progress on-site.</li>
      </ul>
      
      <p>At SSV Homes, we don't just sell plots; we build foundations. Our team assists you with every point on this checklist, ensuring a stress-free transition from buyer to landowner.</p>
    `,
        date: "February 15, 2026",
        author: "Piyush Sharma",
        category: "Buying Guide",
        image: "/blog_buying.png"
    },
    {
        id: 4,
        title: "The Future of Smart Homes in Modern India",
        content: `
      <p>The concept of a "Smart Home" has evolved from a luxury novelty to a standard of modern living in India's leading cities. In 2026, technological integration is at the heart of the "New Indian Lifestyle," and SSV Homes is at the forefront of this digital transformation.</p>
      
      <h3>Security: AI is the New Gatekeeper</h3>
      <p>Traditional physical security is no longer the benchmark. Modern smart homes feature biometric access control, AI-powered surveillance that distinguishes between a stray animal and a visitor, and motion-activated perimeter alerts that are accessible directly from your smartphone. Peace of mind is the greatest luxury technology provides.</p>
      
      <h3>Energy Efficiency: Intelligence Meets Conservation</h3>
      <p>Smart lighting and climate control systems are not just about convenience; they are about sustainability. Motion sensors ensure that power is only consumed when needed, and smart thermostats learn your patterns to optimize cooling, significantly reducing the carbon footprint of your home.</p>
      
      <blockquote>"Technology should be invisible until it's indispensable. A true smart home simplifies your life without adding technical complexity. It should feel like magic, not a manual."</blockquote>
      
      <h3>Voice Control and Automated Lifestyle</h3>
      <p>Imagine your home anticipating your needs. From pre-cooling your living room before you arrive from a long day to automated irrigation for your garden that checks the weather forecast first, smart technology creates an ecosystem of effortless comfort.</p>
      
      <h3>The ROI of Technology</h3>
      <p>At SSV Homes, we provide the underlying fiber-optic infrastructure in every project to ensure your home is ready for the innovations of today and tomorrow. A tech-enabled home commands 15-20% higher market valuation because it offers a lifestyle that 'passive' builds simply cannot match. Investing in technology is future-proofing your family's asset.</p>
    `,
        date: "February 10, 2026",
        author: "Tech Dept",
        category: "Technology",
        image: "/blog_smart.png"
    },
    {
        id: 5,
        title: "Choosing the Right Plot Size for Your Dream Home",
        content: `
      <p>Size matters, but geometry matters more. When selecting a plot, many buyers make the mistake of only looking at the total square footage. In 2026, architectural efficiency and layout orientation are how we define the potential of a plot.</p>
      
      <h3>The Golden Ratio: Frontage is Everything</h3>
      <p>A plot with a wide frontage offers more architectural possibilities, better natural light (ventilation), and a more imposing 'curb appeal' elevation. A 1000 sq.ft. plot with a 25ft frontage is significantly more valuable than one with a 20ft frontage, as it allows for a better 3BHK layout with more windows and less 'dead space.'</p>
      
      <h3>Navigating Bylaws and Mandatory Setbacks</h3>
      <p>Before you commit, understand the local building bylaws. Every municipality requires open spaces at the front, back, and sides (setbacks). A plot that looks large can feel small once you account for these mandatory rules. At SSV Homes, we provide pre-calculated 'usable construction area' estimates for every plot dimension we offer.</p>
      
      <h3>Which Size Category Suits Your Family?</h3>
      <ul>
        <li><strong>Standard (800-1100 sq.ft.):</strong> Perfect for modern, efficient 2BHK or 3BHK row houses. Great for young families.</li>
        <li><strong>Premium (1500-2400 sq.ft.):</strong> Ideal for spacious individual bungalows with private porch, small gardens and 2nd car parking.</li>
        <li><strong>Estate (3000+ sq.ft.):</strong> For those seeking a legacy home—private pools, expansive lawns, and multi-generational suites.</li>
      </ul>
      
      <h3>Long-Term Orientation: Vastu and Sun Path</h3>
      <p>The direction of your plot affects your home's temperature and energy bills. East or North-facing plots are often preferred in Central India to maximize morning light while avoiding the harsh afternoon heat. We help you choose a plot that aligns not just with your map, but with your well-being.</p>
      
      <p>Architecture starts with the soil. Let us help you pick the right dimensions to build the legacy you've always imagined for your family.</p>
    `,
        date: "February 05, 2026",
        author: "Design Lead",
        category: "Planning",
        image: "/blog_planning.png"
    },
    {
        id: 6,
        title: "How Amenities Can Boost Your Property Value",
        content: `
      <p>In the modern real estate landscape, you aren't just buying a piece of land; you are buying a curated lifestyle. The quality of community amenities is often the primary deciding factor in the property's appreciation over time. "In real estate, convenience is the new prestige."</p>
      
      <h3>Safety Ecosystem: The #1 Requirement</h3>
      <p>24/7 guarded security, CCVT monitoring, and controlled entry/exit points are no longer luxury 'add-ons.' A safe environment is the baseline requirement for families today. Projects that prioritize holistic security see a much faster appreciation than those in open, unprotected colonies.</p>
      
      <h3>The Wellness Quotient: Breathing Space</h3>
      <p>Landscaped gardens, reflexology tracks, and open-air gymnasiums contribute to a higher 'Happiness Index.' In the post-pandemic world, buyers prioritize physical health. A home near a well-maintained park or a jogging track commands a 'Wellness Premium' in the market.</p>
      
      <blockquote>"A project without amenities is just a group of houses. A project with amenities is a Community. People pay for houses, but they invest in Communities." — Mr. Piyush Sharma</blockquote>
      
      <h3>Social Connectivity: The Community Clubhouse</h3>
      <p>A community center serves as the heart of life. It fosters social connections—where neighbors become friends. Whether it's a birthday celebration or a casual evening gathering, a functional clubhouse significantly boosts the project's 'prestige factor' and makes it more desirable for future buyers.</p>
      
      <h3>Infrastructure Longevity: The Invisible Amenities</h3>
      <p>Underground cabling, rain-water harvesting systems, and wide internal roads with solar streetlights are the 'invisible' amenities that ensure your property value doesn't dip due to poor maintenance later. SSV Homes ensures that every infrastructure component is built using durable, 'Generation-Proof' materials.</p>
      
      <p>We build our communities for the long run, ensuring that your investment grows as the trees in our parks mature.</p>
    `,
        date: "February 01, 2026",
        author: "SSV Analyst",
        category: "Investment",
        image: "/blog_amenities.png"
    }
];

export default function BlogDetail() {
    const { id } = useParams();
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
                <div className="text-center bg-white p-12 rounded-3xl shadow-xl max-w-lg border border-teal-50">
                    <h1 className="text-4xl font-bold text-[#1E3240] mb-4">Post Not Found</h1>
                    <p className="text-gray-600 mb-8 text-lg">The blog article you are looking for might have been moved or doesn't exist.</p>
                    <Link to="/blog">
                        <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 h-12 px-8 rounded-xl border-none">
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    // Find related posts (same category or recent)
    const relatedPosts = posts.filter(p => p.id !== post.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50 pb-20 pt-10">
            <ScrollToTop />

            {/* Article Hero */}
            <div className="container mx-auto px-4 mb-12">
                <Link
                    to="/blog"
                    className="inline-flex items-center text-teal-600 font-bold mb-8 hover:text-blue-700 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Insights
                </Link>

                <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-white">
                    <div className="grid lg:grid-cols-2">
                        <div className="p-8 lg:p-16 flex flex-col justify-center">
                            <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 text-sm font-bold rounded-full mb-6">
                                {post.category}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-[#1E3240] leading-tight mb-8">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-8 py-6 border-t border-gray-100 mt-auto">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {post.author[0]}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-[#1E3240]">{post.author}</div>
                                        <div className="text-xs text-gray-500">Expert Contributor</div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Published</div>
                                    <div className="text-sm font-bold text-[#1E3240]">{post.date}</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full relative min-h-[400px]">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <Card className="p-8 md:p-12 rounded-[32px] border-none shadow-xl shadow-[#1E3240]/5 overflow-hidden relative bg-white">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 to-blue-600"></div>

                            <div
                                className="prose prose-lg max-w-none prose-headings:text-[#1E3240] prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-8 prose-li:text-gray-600 prose-blockquote:border-teal-500 prose-blockquote:bg-teal-50 prose-blockquote:py-6 prose-blockquote:px-10 prose-blockquote:rounded-r-3xl prose-blockquote:my-12 prose-blockquote:not-italic prose-strong:text-[#1E3240]"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <div className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Share:</span>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all">
                                            <Facebook className="w-4 h-4" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all">
                                            <Twitter className="w-4 h-4" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all">
                                            <Linkedin className="w-4 h-4" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all">
                                            <Share2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-full">#RealEstate</span>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-full">#Indore</span>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-full">#HomeBuying</span>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Recent Posts */}
                        <Card className="p-8 rounded-[32px] border-none shadow-xl shadow-[#1E3240]/5 bg-white">
                            <h3 className="text-xl font-bold text-[#1E3240] mb-6">Recent Insights</h3>
                            <div className="space-y-6">
                                {relatedPosts.map((related) => (
                                    <Link key={related.id} to={`/blog/${related.id}`} className="group block">
                                        <div className="flex gap-4">
                                            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-xs text-teal-600 font-bold mb-1 uppercase tracking-wider">{related.category}</div>
                                                <h4 className="text-sm font-bold text-[#1E3240] leading-snug group-hover:text-teal-600 transition-colors line-clamp-2">
                                                    {related.title}
                                                </h4>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </Card>

                        {/* Newsletter/CTA Sidebar */}
                        <div className="bg-gradient-to-br from-[#1E3240] to-[#2c4b5f] rounded-[32px] p-8 text-white relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-teal-500/20 transition-all"></div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10">Need Expert Advice?</h3>
                            <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">
                                Connect with our real estate consultants for a personalized guidance on your property journey in Indore.
                            </p>
                            <Link to="/contact">
                                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold h-12 rounded-xl border-none shadow-lg shadow-black/20 relative z-10">
                                    Contact Consultant
                                </Button>
                            </Link>
                        </div>

                        {/* Tags Box */}
                        <Card className="p-8 rounded-[32px] border-none shadow-xl shadow-[#1E3240]/5 bg-white">
                            <h3 className="text-xl font-bold text-[#1E3240] mb-6">Explore Topics</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Investment', 'Legal', 'Buying Guide', 'Technology', 'Planning', 'Market Trends', 'Indore'].map(tag => (
                                    <Link
                                        key={tag}
                                        to="/blog"
                                        className="px-4 py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-xl hover:bg-teal-50 hover:text-teal-600 transition-all border border-transparent hover:border-teal-100"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <CTASection />
            </div>
        </div>
    );
}
