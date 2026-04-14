import { Routes, Route } from "react-router-dom";
import DocumentMeta from "./components/DocumentMeta";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Consultation from "./pages/Consultation";
import ProviderMatching from "./pages/ProviderMatching";
import CareCoordination from "./pages/CareCoordination";
import PrpOvarianRejuvenation from "./pages/PrpOvarianRejuvenation";
import Privacy from "./pages/Privacy";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <DocumentMeta />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/provider-matching" element={<ProviderMatching />} />
          <Route path="/care-coordination" element={<CareCoordination />} />
          <Route path="/prp-ovarian-rejuvenation" element={<PrpOvarianRejuvenation />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
