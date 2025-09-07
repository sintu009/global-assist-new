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
  {
    title: "ADMINISTRATIVE",
    sub: "Delegate Smart. Work Less. Achieve More.",
    desc: "Reliable Virtual Assistants for daily admin, scheduling, email handling, and more.",
    path: "/administrative-executive",
    buttonText: "Explore More",
    image: adminadmin,
  },
  {
    title: "MEDICAL VIRTUAL ASSISTANCE",
    sub: "Virtual Medical Assistants You Can Rely On",
    desc: "HIPAA-compliant support for appointment scheduling, patient communication, billing, and admin tasks.",
    path: "/medical-virtual-assistance",
    buttonText: "Talk to Our Team",
    image: adminmedical,
  },
  {
    title: "VIDEO EDITING",
    sub: "Professional Video Editing for Your Brand",
    desc: "From YouTube content to corporate reels — edited for quality, speed, and impact.",
    path: "/video-editing",
    buttonText: "Get Your Video Edited",
    image: adminvideo,
  },
  {
    title: "ACCOUNTING & BOOKKEEPING",
    sub: "Accurate Accounting Support for Stress-Free Finances",
    desc: "Virtual bookkeeping, invoicing, and monthly reports — all handled by experts.",
    path: "/accounting-bookkeeping",
    buttonText: "Explore More",
    image: adminacc,
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    sub: "Engage and Grow Your Audience on Every Platform",
    desc: "Content creation, ad campaigns, and performance tracking across Instagram, Facebook, and LinkedIn.",
    path: "/social-media-management",
    buttonText: "Explore More",
    image: adminsocial,
  },
  {
    title: "LEADS GENERATION",
    sub: "Targeted Leads That Fuel Your Sales Pipeline",
    desc: "B2B & B2C lead generation using email outreach, data scraping, and CRM integration.",
    path: "/leads-generation",
    buttonText: "Book a Free Strategy Call",
    image: adminlead,
  },
  {
    title: "DIGITAL MARKETING",
    sub: "Digital Marketing that Delivers Real Results",
    desc: "SEO, content, PPC, and more — data-driven strategies tailored to your business.",
    path: "/digital-marketing",
    buttonText: "Explore More",
    image: admindigital,
  },
  {
    title: "WEBSITE & APP DEVELOPMENT",
    sub: "Professional Websites that Convert Visitors into Clients",
    desc: "Modern, responsive, and fast-loading websites built for your business goals.",
    path: "/website-app-development",
    buttonText: "Explore More",
    image: adminwebdev,
  },
  {
    title: "CUSTOMIZED CRM SOFTWARE",
    sub: "CRM Solutions Customized for Your Business Workflow",
    desc: "Manage leads, sales, and customer interactions with a CRM tailored to your exact needs.",
    path: "/customized-crm-software",
    buttonText: "Build My CRM",
    image: admincrm,
  },
  {
    title: "BUSINESS DEVELOPMENT",
    sub: "Smart Business Development Support That Drives Growth",
    desc: "We research markets, build strategies, and help you connect with key decision-makers.",
    path: "/business-development",
    buttonText: "Grow My Business",
    image: adminbuss,
  },
  {
    title: "CALL CENTER SUPPORT",
    sub: "24/7 Call Center Support That Builds Customer Trust",
    desc: "Inbound and outbound support services for customer care, lead follow-ups, and technical help.",
    path: "/call-center-support",
    buttonText: "Outsource Your Calls",
    image: admincall,
  },
];

const Card = ({ service, index, scrollProgress }) => {
  const start = index / services.length;
  const end = (index + 1) / services.length;

  const scale = useTransform(scrollProgress, [start, end], [1, 0.8]);

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center">
      <motion.div
        style={{ scale }}
        className="relative flex flex-col justify-between w-[90%] max-w-5xl h-[85vh] rounded-3xl p-8 md:p-12 bg-[#0A0D17] border border-white/10 shadow-2xl"
      >
        {/* Top section with text and button */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-3">
              {service.title}
            </h2>
            <p className="text-lg md:text-xl font-semibold text-gray-200 mb-4">{service.sub}</p>
            <p className="text-base md:text-lg text-gray-400">{service.desc}</p>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0">
            <NavLink
              to={service.path}
              className="bg-[#2a2a3c] text-white text-md px-6 py-3 rounded-3xl hover:bg-[#3a3a50] transition inline-block"
            >
              {service.buttonText} →
            </NavLink>
          </div>
        </div>

        {/* Image container */}
        <div className="relative w-full h-full mt-4 flex items-center justify-center overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>
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
    <div className="bg-white text-black font-['Roboto']">
      <div className="text-center pt-24 pb-12">
        <p className="text-3xl md:text-6xl text-gray-800 font-bold">
          The services we offer
        </p>
      </div>

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