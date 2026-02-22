import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const routeTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/projects": "Our Projects",
  "/projects/residential-plots": "Residential Plots",
  "/projects/ongoing": "Ongoing Projects",
  "/projects/completed": "Completed Projects",
  "/projects/the-grand-maratha": "The Grand Maratha",
  "/projects/british-grand": "British Grand",
  "/projects/shyam-vihar": "Shyam Vihar",
  "/projects/singapore-radhakunj": "Singapore Radhakunj",
  "/projects/singapore-one-street": "Singapore One Street",
  "/projects/ews-1rk-flats": "EWS 1RK Flats",
  "/projects/iris-maa-sarju-vihar": "IRIS Maa Sarju Vihar",
  "/testimonials": "Testimonials",
  "/media": "Media",
  "/blog": "Blog",
  "/contact": "Contact Us",
  "/privacy-policy": "Privacy Policy",
  "/terms-conditions": "Terms & Conditions",
  "/disclaimer": "Disclaimer",
  "/rera-details": "RERA Details",
};

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = routeTitles[path] || "SSV Homes";

    // Handle dynamic blog routes
    if (path.startsWith("/blog/")) {
      title = "Blog Detail";
    }

    document.title = `${title} | SSV Homes`;
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

