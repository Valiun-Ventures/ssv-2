import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar - Only on Home Page */}
      {isHomePage && (
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-6">
                <a href="tel:+918085126788" className="flex items-center gap-2 hover:text-teal-100">
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">+91 80851 26788, 88238 72527</span>
                </a>
                <a href="mailto:shreesiddhivinayakhomes271@gmail.com" className="flex items-center gap-2 hover:text-teal-100">
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">shreesiddhivinayakhomes271@gmail.com</span>
                </a>
              </div>
              <div className="text-xs sm:text-sm">
                Your Trusted Real Estate Partner
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Premium Estates Logo"
              className="w-12 h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 text-[#212121]">
            <Link to="/" className="hover:text-[#1E3240] transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#1E3240] transition-colors">
              About Us
            </Link>

            {/* Projects Dropdown */}
            <div className="relative group">
              <button className="hover:text-[#1E3240] transition-colors flex items-center gap-1">
                Projects
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/projects" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 font-bold border-b border-gray-100">
                  All Projects
                </Link>
                <Link to="/projects/the-grand-maratha" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  The Grand Maratha
                </Link>
                <Link to="/projects/british-grand" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  British Grand
                </Link>
                <Link to="/projects/iris-maa-sarju-vihar" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  IRIS-Maa Sarju Vihar
                </Link>
                <Link to="/projects/ews-1rk-flats" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  EWS 1RK Flats
                </Link>
                <Link to="/projects/singapore-one-street" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Singapore One Street
                </Link>
                <Link to="/projects/shyam-vihar" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Shyam Vihar
                </Link>
                <Link to="/projects/singapore-radhakunj" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Singapore Radhakunj
                </Link>
              </div>
            </div>


            {/* Media Dropdown */}
            <div className="relative group">
              <button className="hover:text-[#1E3240] transition-colors flex items-center gap-1">
                Media
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/media#videos" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Videos
                </Link>
                <Link to="/media#brochures" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Brochures
                </Link>
                <Link to="/media#gallery" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">
                  Gallery
                </Link>
              </div>
            </div>

            <Link to="/blog" className="hover:text-[#1E3240] transition-colors">
              Blog
            </Link>
          </nav>

          {/* Contact Us Button - Right */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-gray-700 hover:text-teal-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-teal-600">About Us</Link>

              <div>
                <button
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600"
                >
                  Projects
                  <ChevronDown className={`w-4 h-4 transition-transform ${projectsOpen ? 'rotate-180' : ''}`} />
                </button>
                {projectsOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    <Link to="/projects" className="text-gray-600 hover:text-teal-600 font-bold border-b border-gray-100 pb-1">All Projects</Link>
                    <Link to="/projects/the-grand-maratha" className="text-gray-600 hover:text-teal-600">The Grand Maratha</Link>
                    <Link to="/projects/british-grand" className="text-gray-600 hover:text-teal-600">British Grand</Link>
                    <Link to="/projects/iris-maa-sarju-vihar" className="text-gray-600 hover:text-teal-600">IRIS-Maa Sarju Vihar</Link>
                    <Link to="/projects/ews-1rk-flats" className="text-gray-600 hover:text-teal-600">EWS 1RK Flats</Link>
                    <Link to="/projects/singapore-one-street" className="text-gray-600 hover:text-teal-600">Singapore One Street</Link>
                    <Link to="/projects/shyam-vihar" className="text-gray-600 hover:text-teal-600">Shyam Vihar</Link>
                    <Link to="/projects/singapore-radhakunj" className="text-gray-600 hover:text-teal-600">Singapore Radhakunj</Link>
                  </div>
                )}
              </div>


              <div>
                <button
                  onClick={() => setMediaOpen(!mediaOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-teal-600"
                >
                  Media
                  <ChevronDown className={`w-4 h-4 transition-transform ${mediaOpen ? 'rotate-180' : ''}`} />
                </button>
                {mediaOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    <Link to="/media#videos" className="text-gray-600 hover:text-teal-600">Videos</Link>
                    <Link to="/media#brochures" className="text-gray-600 hover:text-teal-600">Brochures</Link>
                    <Link to="/media#gallery" className="text-gray-600 hover:text-teal-600">Gallery</Link>
                  </div>
                )}
              </div>

              <Link to="/blog" className="text-gray-700 hover:text-teal-600">Blog</Link>

              <Link to="/contact">
                <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
