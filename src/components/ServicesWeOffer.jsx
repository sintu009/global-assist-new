import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import adminImage from "../assets/contact-image.png";

const titles = [
  {
    big: "ADMINISTRATIVE",
    sub: "Administrative & Executive Assistant",
    desc: "In the fast-paced world of business, having a reliable Administrative & Executive Assistant is like having a trusted ally by your side.",
    path: "/administrative-executive",
  },
  {
    big: "MEDICAL VIRTUAL ASSISTANCE",
    sub: "Medical Virtual Assistance",
    desc: "Let us handle the paperwork while you focus on providing exceptional patient care. Welcome to a new era of efficiency with Global Assist.",
    path: "/medical-virtual-assistance",
  },
  {
    big: "VIDEO EDITING",
    sub: "Video Editing",
    desc: "Dont let mediocre editing hold you back. Join the ranks of satisfied clients who have experienced the transformative power of Global Assist.",
    path: "/video-editing",
  },
  {
    big: "ACCOUNTING & BOOKKEEPING",
    sub: "Accounting & Bookkeeping",
    desc: "Achieve Financial Mastery: Optimize Your Business with Professional Accounting and Bookkeeping Services. Contact Us for Expert Guidance",
    path: "/accounting-bookkeeping",
  },
  {
    big: "SOCIAL MEDIA MANAGEMENT",
    sub: "Social Media Management",
    desc: "Maximize Your Digital Presence with Tailored Marketing Solutions.",
    path: "/social-media-management",
  },
  {
    big: "LEADS GENERATION",
    sub: "Leads Generation",
    desc: "Don't let a lack of leads hold your business back. Partner with us to take your lead generation efforts to the next level and fuel your growth.",
    path: "/leads-generation",
  },
  {
    big: "DIGITAL MARKETING",
    sub: "Digital Marketing",
    desc: "Increase visibility and conversions with results-driven marketing strategies.",
    path: "/digital-marketing",
  },
  {
    big: "WEBSITE & APP DEVELOPMENT",
    sub: "Website & App Development",
    desc: "Get scalable, responsive, and user-friendly digital solutions built to grow.",
    path: "/website-app-development",
  },
  {
    big: "CUSTOMIZED CRM SOFTWARE",
    sub: "Customized CRM Software",
    desc: "Optimize your customer relationships with tailored CRM platforms.",
    path: "/customized-crm-software",
  },
  {
    big: "BUSINESS DEVELOPMENT",
    sub: "Business Development",
    desc: "Strategize and scale your business with targeted growth plans and execution.",
    path: "/business-development",
  },
  {
    big: "CALL CENTER SUPPORT",
    sub: "Call Center Support",
    desc: "Deliver exceptional customer service with our expert virtual call support.",
    path: "/call-center-support",
  },
];

const ServicesWeOffer = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? titles.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#0f0e1b] text-white pt-8 pb-56 px-6 overflow-hidden min-h-[90vh] font-['Roboto']">
      <button onClick={prevSlide} className="absolute left-4 top-1/2 z-30 transform -translate-y-1/2 bg-[#2a2a3c] text-white p-3 rounded-full hover:bg-[#3a3a50]">←</button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 z-30 transform -translate-y-1/2 bg-[#2a2a3c] text-white p-3 rounded-full hover:bg-[#3a3a50]">→</button>

      <div className="absolute w-full left-0 text-center z-0" style={{ top: "4rem" }}>
        <p className="text-xl md:text-3xl text-gray-300 font-normal">The service we offer</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          {/* Mobile title text */}
          <div className="absolute block text-center md:hidden" style={{ top: "8rem", left: 0, width: "100%", zIndex: 0 }}>
            <h1 className="text-[12vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A0A3DC] via-[#42376D] to-[#A0A3DC]">
              {titles[index].big}
            </h1>
          </div>

          {/* Image - Hidden on mobile */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[220px] md:w-[800px] pointer-events-none hidden md:block">
            <img
              src={adminImage}
              alt={titles[index].big}
              className="w-full object-contain"
              style={{ height: "auto", maxHeight: "700px" }}
            />
          </div>

          {/* Content Block */}
          <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-16 h-[700px] mt-[-12rem]">
            <div className="md:w-1/3 text-left space-y-6 pb-12 mt-0 -mb-6">
              <p className="text-2xl md:text-4xl font-semibold text-white whitespace-nowrap">Unlocking Efficiency</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">{titles[index].sub}</h3>
            </div>

            <div className="w-[600px] md:w-[800px] h-full" />

            <div className="md:w-1/3 self-end -mb-32 space-y-6 text-gray-300 text-lg md:text-2xl pb-12">
              <p className="text-center md:text-left">{titles[index].desc}</p>
              <div className="flex justify-center md:justify-start">
                <NavLink
                  to={titles[index].path}
                  className="bg-[#2a2a3c] text-white text-lg px-10 py-5 rounded hover:bg-[#3a3a50] transition inline-block"
                >
                  Explore More →
                </NavLink>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ServicesWeOffer;
