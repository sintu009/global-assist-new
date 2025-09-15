import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import lgHero from "../assets/lghero.jpg";
import lg1 from "../assets/lg1.jpg";
import lg2 from "../assets/lg2.jpg";
import lg3 from "../assets/lg3.jpg";
import lg4 from "../assets/lg4.png";
import HelloSection from "../components/HelloSection";

// Imports for the new section's images
import media1 from '../assets/media1.png';
import media2 from '../assets/media2.png';
import media3 from '../assets/media3.png';
import media4 from '../assets/media4.png';
import media5 from '../assets/media5.png';
import media6 from '../assets/media6.png';
import media7 from '../assets/media7.png';
import media8 from '../assets/media8.png';
import media9 from '../assets/media9.png';

import lg01 from "../assets/lg01.jpg";
import lg02 from "../assets/lg02.jpg";
import lg03 from "../assets/lg03.jpg";
import lg04 from "../assets/lg04.jpg";
import lg05 from "../assets/lg05.jpg";
import lg06 from "../assets/lg06.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};

// Service data for the new section
const services = [
  {
    img: lg01,
    title: "Strategy & Planning",
    desc: (
      <div className="text-left">
        –Target Audience Research. <br />
        –Market & Competitor Analysis. <br />
        –Lead Generation Funnel Design. 
      </div>
    ),
  },
  {
    img: lg02,
    title: "Data & Prospecting",
    desc: (
      <div className="text-left">
        –Database Building / List Creation  <br />
        –CRM Setup & Management <br />
        –Lead Scoring – Rank leads based on engagement, fit, and intent.
      </div>
    ),
  },
  {
    img: lg03,
    title: "Outreach Campaigns",
    desc: (
      <div className="text-left">
        –Email Outreach Campaigns – Cold email, nurture sequences, drip campaigns. <br />
        –LinkedIn Outreach – Connect, message, and nurture leads on LinkedIn. <br />
        –Telemarketing / Cold Calling – Pre-qualify leads via phone.
      </div>
    ),
  },
  {
    img: lg04,
    title: "Digital Marketing for Lead Generation",
    desc: (
      <div className="text-left">
        –SEO (Search Engine Optimization) <br />
        –Paid Ads (PPC) – Google Ads, Meta Ads, LinkedIn Ads, etc. <br />
        –Landing Page Creation – High-converting pages with forms and calls-to-action.
      </div>
    ),
  },
  {
    img: lg05,
    title: "Lead Capture & Conversion Tools",
    desc: (
      <div className="text-left">
        –Lead Forms / Popups / Chatbots  <br />
        –Lead Magnet Development <br />
        –Appointment Setting 
      </div>
    ),
  },
  {
    img: lg06,
    title: "Nurturing & Analytics",
    desc: (
      <div className="text-left">
        –Email Drip Sequences  <br />
        –Retargeting Ads  <br />
        –A/B Testing – Test subject lines, CTAs, landing pages to improve conversion rates.
      </div>
    ),
  },
];


const LeadGeneration = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

  return (
    <>
      <Helmet>
        <title>Virtual Assistant for Lead Generation | B2B Sales Support Services</title>
        <meta name="description" content="Boost your sales with expert B2B lead generation virtual assistants. Global Assist Inc provides targeted prospecting and sales support to help businesses grow." />
      </Helmet>
      <div className="overflow-x-hidden overflow-y-auto scrollbar-hide">
        {/* Hero Section */}
        <motion.section
          className="h-[90vh] bg-cover bg-center flex items-center relative text-white font-roboto"
          style={{ backgroundImage: `url(${lgHero})` }}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <motion.div
            className="relative z-10 max-w-6xl px-6 sm:px-10 md:px-24 lg:px-52 ml-auto"
            variants={fadeUp}
          >
            <span className="text-2xs font-semibold bg-[#FFFFFF29] text-white px-3 py-1 rounded-full mb-4 inline-block">
              LEAD GENERATION
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Lead generation <br /> Service
            </h1>
            <p className="text-sm md:text-base max-w-md">
              Are you struggling to attract quality leads? Our lead generation services are here to help.
            </p>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="py-8 md:py-22 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          {/* Left Text */}
          <motion.div className="mt-8 md:mt-20" variants={fadeUp}>
            <h2 className="text-3xl font-semibold mb-5 text-[#061C3A]">Targeted Approach</h2>
            <p className="text-sm text-[#333] mb-8">
              Employing advanced techniques to reach your ideal audience, ensuring every lead is a potential customer.
            </p>
            <h2 className="text-3xl font-semibold mb-5 text-[#061C3A]">Multi-Channel Strategy</h2>
            <p className="text-sm text-[#333]">
              Utilizing social media, email, content marketing, and more to maximize reach and engagement.
            </p>
          </motion.div>

          {/* Right Image Collage */}
          <motion.div className="flex flex-col md:flex-row gap-6 w-full" variants={fadeUp}>
            {/* --- FIX START: Corrected the structure here --- */}
            <div className="relative h-[300px] md:h-[420px] w-full md:w-1/2 rounded-xl overflow-hidden md:translate-y-14">
              <img src={lg1} alt="Main" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="h-[240px] rounded-xl overflow-hidden">
                <img src={lg2} alt="Side 1" className="w-full h-full object-cover" />
              </div>
              <div className="h-[180px] rounded-xl overflow-hidden">
                <img src={lg3} alt="Side 2" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* --- FIX END --- */}
          </motion.div>
        </motion.section>

        {/* Quality & Optimization */}
        <motion.section
          className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <motion.div variants={fadeUp}>
            <img src={lg4} alt="Lead Quality" className="rounded-xl w-full h-auto object-cover" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-semibold mb-5 text-[#061C3A]">Quality Over Quantity</h2>
            <p className="text-sm text-[#333] mb-8">
              Prioritizing quality leads, focusing on delivering prospects genuinely interested in your offer.
            </p>
            <h2 className="text-3xl font-semibold mb-5 text-[#061C3A]">Continuous Optimization</h2>
            <p className="text-sm text-[#333]">
              Constantly monitoring and optimizing strategies to ensure optimal performance, keeping your pipeline filled with high-quality leads.
            </p>
          </motion.div>
        </motion.section>

        {/* Added Services Section */}
        <motion.section
          className="px-6 md:px-12 lg:px-20 py-16 bg-white"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Creative that connects, converts, and captivates.
              </span>
            </h2>
          </div>

          {/* Intro text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-52 mb-12">
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              Our Creative Services bring your brand to life through powerful visuals, compelling words, and meaningful storytelling.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you need a logo, a campaign, or an animated video—we craft standout content that inspires action and leaves a lasting impression.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center"
                variants={fadeUp}
              >
                <div
                  className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
                  onClick={() => toggleService(idx)}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-108 h-78 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-black/70 flex flex-col items-start justify-center text-white p-4 transition-all duration-500 md:opacity-0 md:transform md:-translate-x-full md:group-hover:opacity-100 md:group-hover:translate-x-0 ${
                      activeService === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                    }`}
                  >
                    <p className="text-base text-left">
                      {service.desc}
                    </p>
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="mt-24" />
        <HelloSection />
      </div>
    </>
  );
};

export default LeadGeneration;