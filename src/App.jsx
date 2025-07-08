import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Added scroll restoration

import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import AboutPage from "./pages/AboutPage";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import SpectraPlanners from "./components/SpectraPlanners";

import AdministrativeExecutive from "./pages/AdministrativeExecutive";
import MedicalVirtualAssistance from "./pages/MedicalVirtualAssistance";
import VideoEditing from "./pages/VideoEditing";
import AccountingBookkeeping from "./pages/AccountingBookkeeping";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import LeadsGeneration from "./pages/LeadsGeneration";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebsiteAppDevelopment from "./pages/WebsiteAppDevelopment";
import CustomizedCRMSoftware from "./pages/CustomizedCRMSoftware";
import BusinessDevelopment from "./pages/BusinessDevelopment";
import CallCenterSupport from "./pages/CallCenterSupport";

import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";

import CaseStudies from "./components/CaseStudies";
import CaseStudy1 from "./components/CaseStudy1";
import CaseStudy2 from "./components/CaseStudy2";
import CaseStudy3 from "./components/CaseStudy3";
import CaseStudy4 from "./components/CaseStudy4";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Ensures scroll to top on every route change */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/spectra-planners" element={<SpectraPlanners />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/FAQ" element={<FAQ />} />

        <Route path="/administrative-executive" element={<AdministrativeExecutive />} />
        <Route path="/medical-virtual-assistance" element={<MedicalVirtualAssistance />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/accounting-bookkeeping" element={<AccountingBookkeeping />} />
        <Route path="/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/leads-generation" element={<LeadsGeneration />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/website-app-development" element={<WebsiteAppDevelopment />} />
        <Route path="/customized-crm-software" element={<CustomizedCRMSoftware />} />
        <Route path="/business-development" element={<BusinessDevelopment />} />
        <Route path="/call-center-support" element={<CallCenterSupport />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />

        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-study-1" element={<CaseStudy1 />} />
        <Route path="/case-study-2" element={<CaseStudy2 />} />
        <Route path="/case-study-3" element={<CaseStudy3 />} />
        <Route path="/case-study-4" element={<CaseStudy4 />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
