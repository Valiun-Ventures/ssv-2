import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="SSV Homes Logo"
                className="w-10 h-10 object-contain rounded"
              />
              <span className="text-xl font-bold text-white">SSV Homes</span>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner in finding the perfect property. We deliver excellence in real estate with integrity and innovation.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1CW4g5ky3f/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://whatsapp.com/channel/0029VbCjAUUCRs1l1eZBMa0T" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/shreesiddhivinayakhomes?igsh=MXNqOG8xemJhY3RoNA==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.google.com/maps/dir//Singapore+Business+Park,+AB+Rd,+LIG+Square,+Anoop+Nagar,+Indore,+Madhya+Pradesh+452011/@22.684975,75.8185309,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962fdd44bff8a4b:0xa28fcbb8ffeef7b6!2m2!1d75.8904738!2d22.7336929?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-teal-400 transition-colors">Projects</Link></li>
              <li><Link to="/media" className="hover:text-teal-400 transition-colors">Media</Link></li>
              <li><Link to="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-white mb-4">Our Projects</h3>
            <ul className="space-y-2">
              <li><Link to="/projects/the-grand-maratha" className="hover:text-teal-400 transition-colors">The Grand Maratha</Link></li>
              <li><Link to="/projects/british-grand" className="hover:text-teal-400 transition-colors">British Grand</Link></li>
              <li><Link to="/projects/iris-maa-sarju-vihar" className="hover:text-teal-400 transition-colors">IRIS-Maa Sarju Vihar</Link></li>
              <li><Link to="/projects/ews-1rk-flats" className="hover:text-teal-400 transition-colors">EWS 1RK Flats</Link></li>
              <li><Link to="/projects/singapore-one-street" className="hover:text-teal-400 transition-colors">Singapore One Street</Link></li>
              <li><Link to="/projects/shyam-vihar" className="hover:text-teal-400 transition-colors">Shyam Vihar</Link></li>
              <li><Link to="/projects/singapore-radhakunj" className="hover:text-teal-400 transition-colors">Singapore Radhakunj</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-sm">307, Singapore Business Park, LIG Square, Indore, Madhya Pradesh, 452011</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+918085126788" className="text-sm hover:text-teal-400">+91 80851 26788, 88238 72527</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:shreesiddhivinayakhomes271@gmail.com" className="text-sm hover:text-teal-400">shreesiddhivinayakhomes271@gmail.com</a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-white text-sm mb-2">Office Hours</h4>
              <p className="text-sm">Monday - Saturday: 11:00 AM - 7:30 PM</p>
              <p className="text-sm">Sunday: Closed (By Appointment)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © 2026 SSV Homes. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link>
              <Link to="/disclaimer" className="hover:text-teal-400 transition-colors">Disclaimer</Link>
              <Link to="/rera-details" className="hover:text-teal-400 transition-colors">RERA Details</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
