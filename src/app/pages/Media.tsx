import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import { Play, Download, Image as ImageIcon, FileText } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Media() {
  const videos = [
    { title: "British Grand - Project Walkthrough", src: "/media/british_grand.mp4", thumbnail: "/projects/british_grand_1.jpeg" },
    { title: "EWS 1RK Flats - Unit Overlook", src: "/media/ews_flats.mp4", thumbnail: "/projects/ews_flats_1.jpeg" },
    { title: "IRIS-Maa Sarju Vihar - Development Update", src: "/media/maa_sarju_vihar.mp4", thumbnail: "/projects/maa_sarju_vihar_1.jpeg" },
    { title: "Singapore One Street - Commercial Hub", src: "/media/singapore_one_street.mp4", thumbnail: "/projects/singapore_one_street_1.jpeg" },
  ];

  const galleryImages = [
    { src: "/projects/british_grand_1.jpeg", alt: "British Grand View 1" },
    { src: "/projects/british_grand_2.jpeg", alt: "British Grand View 2" },
    { src: "/projects/singapore_one_street_1.jpeg", alt: "Singapore One Street 1" },
    { src: "/projects/singapore_one_street_2.jpeg", alt: "Singapore One Street 2" },
    { src: "/projects/singapore_one_street_3.jpeg", alt: "Singapore One Street 3" },
    { src: "/projects/singapore_one_street_4.jpeg", alt: "Singapore One Street 4" },
    { src: "/projects/singapore_one_street_5.jpeg", alt: "Singapore One Street 5" },
    { src: "/projects/singapore_one_street_6.jpeg", alt: "Singapore One Street 6" },
    { src: "/projects/ews_flats_1.jpeg", alt: "EWS Flats" },
    { src: "/projects/maa_sarju_vihar_1.jpeg", alt: "Maa Sarju Vihar" },
  ];

  const brochures = [
    { title: "British Grand Brochure", file: "/brochures/british_grand_brochure.pdf" },
    { title: "One Street Layout Leaflet", file: "/brochures/singapore_one_street_leaflet.pdf" },
    { title: "Singapore Radhakunj Brochure", file: "/brochures/singapore_radhakunj_brochure.pdf" },
    { title: "General Product Portolio", file: "#" },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/projects/singapore_one_street_1.jpeg"
            className="w-full h-full object-cover blur-sm brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Media Gallery</h1>
            <p className="text-xl md:text-2xl text-teal-50 max-w-2xl leading-relaxed">
              Witness the evolution of our projects through high-definition videos, site photography, and detailed technical documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Virtual Site Tours</h2>
              <p className="text-gray-600 text-lg">Experience our developments from the comfort of your home with our latest project walkthroughs and updates.</p>
            </div>
            <div className="flex items-center gap-3 text-teal-600 font-bold uppercase tracking-wider text-sm">
              <Play className="w-6 h-6 fill-teal-600" />
              <span>Project Updates 2026</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {videos.map((video, index) => (
              <div key={index} className="group">
                <div className="relative aspect-video bg-gray-100 rounded-[2rem] overflow-hidden cursor-pointer shadow-xl mb-6 ring-1 ring-gray-200">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-teal-500 transition-all duration-300 transform group-hover:scale-110">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full inline-block text-white text-sm font-medium">
                      HD Walkthrough Available
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Construction Chronicles</h2>
            <p className="text-gray-600 text-lg">A visual journey through our various project sites, showcasing the quality of construction and infrastructure we deliver.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="h-72 bg-white rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl transition-all duration-300">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="px-10 rounded-full h-14 text-lg bg-gray-900 hover:bg-teal-600 text-white transition-all">
              View Entire Architecture Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Brochures / Downloads Section */}
      <section id="brochures" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-16 h-1 bg-teal-600 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Resources & Plans</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brochures.map((brochure, index) => (
              <Card key={index} className="p-8 rounded-[2rem] border-2 border-gray-100 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center justify-center w-20 h-20 bg-teal-50 rounded-2xl mb-8 group-hover:bg-teal-600 transition-colors">
                  <FileText className="w-10 h-10 text-teal-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-extrabold mb-6 text-gray-900 leading-tight">{brochure.title}</h3>
                <a href={brochure.file} download className="block w-full">
                  <Button className="w-full h-14 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all font-bold">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* CTA */}
      <CTASection
        title="Inspired by what you see?"
        description="Connect with our project experts for a personalized site visit and detailed price breakdowns."
      />
    </div>
  );
}
