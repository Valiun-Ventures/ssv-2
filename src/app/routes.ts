import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ResidentialPlots from "./pages/ResidentialPlots";
import OngoingProjects from "./pages/OngoingProjects";
import CompletedProjects from "./pages/CompletedProjects";
import TheGrandMaratha from "./pages/project-details/TheGrandMaratha";
import BritishGrand from "./pages/project-details/BritishGrand";
import ShyamVihar from "./pages/project-details/ShyamVihar";
import SingaporeRadhakunj from "./pages/project-details/SingaporeRadhakunj";
import SingaporeOneStreet from "./pages/project-details/SingaporeOneStreet";
import EWS1RKFlats from "./pages/project-details/EWS1RKFlats";
import IRISMaaSarjuVihar from "./pages/project-details/IRISMaaSarjuVihar";
import Testimonials from "./pages/Testimonials";
import Media from "./pages/Media";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import ReraDetails from "./pages/ReraDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: ProjectsPage },
      { path: "projects/residential-plots", Component: ResidentialPlots },
      { path: "projects/ongoing", Component: OngoingProjects },
      { path: "projects/completed", Component: CompletedProjects },
      { path: "projects/the-grand-maratha", Component: TheGrandMaratha },
      { path: "projects/british-grand", Component: BritishGrand },
      { path: "projects/shyam-vihar", Component: ShyamVihar },
      { path: "projects/singapore-radhakunj", Component: SingaporeRadhakunj },
      { path: "projects/singapore-one-street", Component: SingaporeOneStreet },
      { path: "projects/ews-1rk-flats", Component: EWS1RKFlats },
      { path: "projects/iris-maa-sarju-vihar", Component: IRISMaaSarjuVihar },
      { path: "testimonials", Component: Testimonials },
      { path: "media", Component: Media },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogDetail },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-conditions", Component: TermsConditions },
      { path: "disclaimer", Component: Disclaimer },
      { path: "rera-details", Component: ReraDetails },
    ],
  },
]);
