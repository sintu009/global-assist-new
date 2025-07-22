import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import adminImage from "../assets/contact-image.png";
import adminvideo from "../assets/adminvideo.png";
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

const titles = [
  {
    big: "ADMINISTRATIVE",
    sub: "Delegate Smart. Work Less. Achieve More.",
    desc: "Reliable Virtual Assistants for daily admin, scheduling, email handling, and more.",
    path: "/administrative-executive",
    buttonText: "Explore More",
    image: adminadmin,
    style: { height: "auto", maxHeight: "700px" },
  },
  {
    big: "MEDICAL VIRTUAL ASSISTANCE",
    sub: "Virtual Medical Assistants You Can Rely On",
    desc: "HIPAA-compliant support for appointment scheduling, patient communication, billing, and admin tasks.",
    path: "/medical-virtual-assistance",
    buttonText: "Talk to Our Team",
    image: adminmedical,
    style: { height: "auto", maxHeight: "700px" },
  },
  {
    big: "VIDEO EDITING",
    sub: "Professional Video Editing for Your Brand and Business",
    desc: "From YouTube content to corporate reels — edited for quality, speed, and impact.",
    path: "/video-editing",
    buttonText: "Get Your Video Edited",
    image: adminvideo,
    style: { height: "400px", maxHeight: "800px" },
  },
  {
    big: "ACCOUNTING & BOOKKEEPING",
    sub: "Accurate Accounting Support for Stress-Free Finances",
    desc: "Virtual bookkeeping, invoicing, and monthly reports — all handled by experts.",
    path: "/accounting-bookkeeping",
    buttonText: "Explore More",
    image: adminacc,
    style: { height: "auto", maxHeight: "700px" },
  },
  {
    big: "SOCIAL MEDIA MANAGEMENT",
    sub: "Engage and Grow Your Audience on Every Platform",
    desc: "Content creation, ad campaigns, and performance tracking across Instagram, Facebook, and LinkedIn.",
    path: "/social-media-management",
    buttonText: "Explore More",
    image: adminsocial,
    style: { height: "auto", maxHeight: "700px" },
  },
  {
    big: "LEADS GENERATION",
    sub: "Targeted Leads That Fuel Your Sales Pipeline",
    desc: "B2B & B2C lead generation using email outreach, data scraping, and CRM integration.",
    path: "/leads-generation",
    buttonText: "Book a Free Strategy Call",
    image: adminlead,
    style: { height: "auto", maxHeight: "700px" },
  },
  {
    big: "DIGITAL MARKETING",
    sub: "Digital Marketing that Delivers Real Results",
    desc: "SEO, content, PPC, and more — data-driven strategies tailored to your business.",
    path: "/digital-marketing",
    buttonText: "Explore More",
    image: admindigital,
    style: { height: "auto", maxHeight: "700px" },
  },
  {
    big: "WEBSITE & APP DEVELOPMENT",
    sub: "Professional Websites that Convert Visitors into Clients",
    desc: "Modern, responsive, and fast-loading websites built for your business goals.",
    path: "/website-app-development",
    buttonText: "Explore More",
    image: adminwebdev,
    style: { height: "auto", maxHeight: "700px" },
  },
  {
    big: "CUSTOMIZED CRM SOFTWARE",
    sub: "CRM Solutions Customized for Your Business Workflow",
    desc: "Manage leads, sales, and customer interactions with a CRM tailored to your exact needs.",
    path: "/customized-crm-software",
    buttonText: "Build My CRM",
    image: admincrm,
    style: { height: "auto", maxHeight: "700px" },
  },
  {
    big: "BUSINESS DEVELOPMENT",
    sub: "Smart Business Development Support That Drives Growth",
    desc: "We research markets, build strategies, and help you connect with key decision-makers.",
    path: "/business-development",
    buttonText: "Grow My Business",
    image: adminbuss,
    style: { height: "auto", maxHeight: "700px" },
  },
  {
    big: "CALL CENTER SUPPORT",
    sub: "24/7 Call Center Support That Builds Customer Trust",
    desc: "Inbound and outbound support services for customer care, lead follow-ups, and technical help.",
    path: "/call-center-support",
    buttonText: "Outsource Your Calls",
    image: admincall,
    style: { height: "auto", maxHeight: "700px" },
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
      <button
  onClick={prevSlide}
  className="absolute left-4 top-[75%] md:top-1/2 z-30 transform -translate-y-1/2 bg-[#2a2a3c] text-white p-3 rounded-full hover:bg-[#3a3a50]"
>
  ←
</button>
<button
  onClick={nextSlide}
  className="absolute right-4 top-[75%] md:top-1/2 z-30 transform -translate-y-1/2 bg-[#2a2a3c] text-white p-3 rounded-full hover:bg-[#3a3a50]"
>
  →
</button>


      <div className="absolute w-full left-0 text-center z-0" style={{ top: "4rem" }}>
        <p className="text-xl md:text-3xl text-gray-300 font-normal">The service we offer</p>
      </div>

<AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ x: "100%", opacity: 0 }}
    animate={{ x: "0%", opacity: 1 }}
    exit={{ x: "-100%", opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="absolute inset-0"
  >


          <div
            className="absolute"
            style={{ top: "8rem", left: 0, width: "100%", textAlign: "center", zIndex: 0 }}
          >
            <h1
  className={`
    text-[10vw] md:text-[6vw] font-extrabold break-words leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#A0A3DC] via-[#42376D] to-[#A0A3DC]
  `}
>
  {titles[index].big}
</h1>

          </div>

         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[190px] md:w-[450px] pointer-events-none  md:block">
   <img
  src={titles[index].image}
  alt={titles[index].big}
  className="hidden md:block w-full object-contain"
  style={titles[index].style}
/>
</div>


          <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row  justify-between gap-16 h-[700px] mt-[-12rem]">
            <div className="md:w-1/3 text-left space-y-6 mt-60 md:mt-115">
              <p className="text-2xl md:text-4xl font-semibold text-white whitespace-nowrap"></p>
              <h3 className="hidden md:block text-2xl md:text-3xl font-bold text-white leading-snug">
                {titles[index].sub}
              </h3>
              {/* ✅ Show description on desktop */}
              <p className="hidden md:block text-xl text-gray-300">{titles[index].desc}</p>
            </div>

            <div className="w-[600px] md:w-[800px] h-full" />

            <div className="md:w-1/3 self-end md:-mb-32 -mb-4 space-y-12 text-left text-gray-300 text-lg md:text-2xl pb-12 mt-20 md:mt-0">
              {/* ✅ Show description on mobile */}
              {/* ✅ Subheading on mobile */}
<h3 className="block md:hidden text-xl font-bold text-white text-center px-4">
  {titles[index].sub}
</h3>

{/* ✅ Description on mobile */}
<p className="block md:hidden text-center px-4 text-base">{titles[index].desc}</p>

              <div className="flex md:block justify-center md:justify-start mt-4 md:-mt-40">
                <NavLink
                  to={titles[index].path}
                  className="bg-[#2a2a3c] text-white text-lg px-6 py-4 sm:py-4 rounded hover:bg-[#3a3a50] transition inline-block mx-auto md:mx-0"
                >
                  {titles[index].buttonText}→
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
