import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Image imports
import adminadmin from "../assets/adminadmin.png";
import adminbuss from "../assets/adminbuss.png";
import adminwebdev from "../assets/adminwebdev.png";
import adminsocial from "../assets/adminsocial.png";
import adminacc from "../assets/adminacc.png";
import admincall from "../assets/admincall.png";
import admincrm from "../assets/admincrm.png";
import adminmedical from "../assets/adminmedical.png";
import admindigital from "../assets/admindigital.png";
import adminlead from "../assets/adminlead.png";
import adminvideo from "../assets/adminvideo.png";

const services = [
  { title: "ADMINISTRATIVE", sub: "Delegate Smart. Work Less. Achieve More.", desc: "Reliable Virtual Assistants for daily admin, scheduling, email handling, and more.", path: "/administrative-executive", buttonText: "Explore More", image: adminadmin },
  { title: "MEDICAL VIRTUAL ASSISTANCE", sub: "Virtual Medical Assistants You Can Rely On", desc: "HIPAA-compliant support for appointment scheduling, patient communication, billing, and admin tasks.", path: "/medical-virtual-assistance", buttonText: "Talk to Our Team", image: adminmedical },
  { title: "VIDEO EDITING", sub: "Professional Video Editing for Your Brand", desc: "From YouTube content to corporate reels — edited for quality, speed, and impact.", path: "/video-editing", buttonText: "Get Your Video Edited", image: adminvideo },
  { title: "ACCOUNTING & BOOKKEEPING", sub: "Accurate Accounting Support for Stress-Free Finances", desc: "Virtual bookkeeping, invoicing, and monthly reports — all handled by experts.", path: "/accounting-bookkeeping", buttonText: "Explore More", image: adminacc },
  { title: "SOCIAL MEDIA MANAGEMENT", sub: "Engage and Grow Your Audience on Every Platform", desc: "Content creation, ad campaigns, and performance tracking across Instagram, Facebook, and LinkedIn.", path: "/social-media-management", buttonText: "Explore More", image: adminsocial },
  { title: "LEADS GENERATION", sub: "Targeted Leads That Fuel Your Sales Pipeline", desc: "B2B & B2C lead generation using email outreach, data scraping, and CRM integration.", path: "/leads-generation", buttonText: "Book a Free Strategy Call", image: adminlead },
  { title: "DIGITAL MARKETING", sub: "Digital Marketing that Delivers Real Results", desc: "SEO, content, PPC, and more — data-driven strategies tailored to your business.", path: "/digital-marketing", buttonText: "Explore More", image: admindigital },
  { title: "WEBSITE & APP DEVELOPMENT", sub: "Professional Websites that Convert Visitors into Clients", desc: "Modern, responsive, and fast-loading websites built for your business goals.", path: "/website-app-development", buttonText: "Explore More", image: adminwebdev },
  { title: "CUSTOMIZED CRM SOFTWARE", sub: "CRM Solutions Customized for Your Business Workflow", desc: "Manage leads, sales, and customer interactions with a CRM tailored to your exact needs.", path: "/customized-crm-software", buttonText: "Build My CRM", image: admincrm },
  { title: "BUSINESS DEVELOPMENT", sub: "Smart Business Development Support That Drives Growth", desc: "We research markets, build strategies, and help you connect with key decision-makers.", path: "/business-development", buttonText: "Grow My Business", image: adminbuss },
  { title: "CALL CENTER SUPPORT", sub: "24/7 Call Center Support That Builds Customer Trust", desc: "Inbound and outbound support services for customer care, lead follow-ups, and technical help.", path: "/call-center-support", buttonText: "Outsource Your Calls", image: admincall },
];

const Card = ({ service, index, scrollProgress }) => {
  const total = services.length;
  const segment = 1 / total;
  const start = index * segment;
  const scaleEnd = start + segment * 0.9;
  const end = (index + 1) * segment;

  const scale = useTransform(scrollProgress, [start, scaleEnd, end], [1, 1, 0.85]);
  const imageScale = useTransform(scrollProgress, [start, scaleEnd, end], [1.2, 1, 0.9]);

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center px-4">
      <motion.div
        style={{ scale }}
        className="relative flex flex-col md:flex-row md:items-start justify-between w-full max-w-5xl h-[85%] rounded-3xl p-6 md:p-12 bg-[#1a1929] border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Left Content */}
        <div className="md:w-1/2 z-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-3">
            {service.title}
          </h2>
          <p className="text-md md:text-xl font-semibold text-gray-200 mb-4">{service.sub}</p>
          <p className="text-sm md:text-lg text-gray-400">{service.desc}</p>
          <div className="mt-6">
            <NavLink
              to={service.path}
              className="bg-[#2a2a3c] text-white text-sm md:text-md px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-[#3a3a50] transition inline-block"
            >
              {service.buttonText} →
            </NavLink>
          </div>
        </div>

        {/* Image */}
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0 z-0 flex items-center justify-center opacity-20"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const ServicesWeOffer = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-[#0f0e1b] text-white font-['Roboto']">
      {/* Section Title with Entry Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center pt-24 pb-12 px-4"
      >
        <p className="text-xl md:text-3xl text-gray-300 font-normal">
          The services we offer
        </p>
      </motion.div>

      {/* Scrollable Cards */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${services.length * 100}vh` }}
      >
        {services.map((service, i) => (
          <Card key={i} index={i} service={service} scrollProgress={smoothProgress} />
        ))}
      </div>
    </div>
  );
};

export default ServicesWeOffer;