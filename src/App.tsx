import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Consultation from "./pages/Consultation";
import ProviderMatching from "./pages/ProviderMatching";
import CareCoordination from "./pages/CareCoordination";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/provider-matching" element={<ProviderMatching />} />
        <Route path="/care-coordination" element={<CareCoordination />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}
