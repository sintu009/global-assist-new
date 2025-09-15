import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import crmbg1 from "../assets/crmbg1.png";
import crmbg2 from "../assets/crmbg2.png";
import crmhero from "../assets/crmhero.png";
import crm1 from "../assets/crm1.png";
import crm2 from "../assets/crm2.png";
import crm3 from "../assets/crm3.png";
import crm4 from "../assets/crm4.png";
import GetInTouch from "../components/GetInTouch";
import project1 from "../assets/CRMproject1.png";
import project2 from "../assets/CRMproject2.png";
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

import rum1 from '../assets/rum1.jpg';
import rum2 from '../assets/rum2.jpg';
import rum3 from '../assets/rum3.jpg';
import rum4 from '../assets/rum4.jpg';
import rum5 from '../assets/rum5.jpg';
import rum6 from '../assets/rum6.jpg';

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function CustomizedCRMSoftware() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

  const services = [
  {
    img: rum1,
    title: "CRM Setup & Implementation",
    desc: (
      <div className="text-left">
        –Requirement Analysis  <br />
        –CRM Selection Consulting – Help choose the right CRM  <br />
        –Custom Implementation
      </div>
    ),
  },
  {
    img: rum2,
    title: "Customization & Integration",
    desc: (
      <div className="text-left">
        –Custom Fields & Pipelines <br />
        –Third-Party Integrations  <br />
        –API Development
      </div>
    ),
  },
  {
    img: rum3,
    title: "Sales & Marketing Alignment",
    desc: (
      <div className="text-left">
        –Lead Capture Forms & Landing Pages  <br />
        –Email Campaign Management  <br />
        –Lead Scoring & Prioritization 
      </div>
    ),
  },
  {
    img: rum4,
    title: "Data & Analytics",
    desc: (
      <div className="text-left">
        –Dashboard Creation <br />
        –Reporting & Forecasting  <br />
        –Data Hygiene Services 
      </div>
    ),
  },
  {
    img: rum5,
    title: "Customer Support & Service Management",
    desc: (
      <div className="text-left">
        –Ticketing System Setup  <br />
        –Knowledge Base & Self-Service Portal – Integrated support for customers. <br />
        –Customer Feedback Collection – Automated surveys or NPS within CRM.
      </div>
    ),
  },
  {
    img: rum6,
    title: "Training & Adoption",
    desc: (
      <div className="text-left">
        –Team Training – Hands-on sessions  <br />
        –User Documentation  <br />
        –Best Practices Workshops 
      </div>
    ),
  },
];


  return (
    <>
      <Helmet>
        <title>Virtual Assistant CRM Management Services | Custom CRM Support</title>
        <meta name="description" content="Optimize your workflow with CRM automation virtual assistants. Global Assist Inc offers expert support for custom CRM software management and data organization." />
      </Helmet>
      <div className="font-['Roboto']">
        {/* HERO SECTION */}
        <motion.section
          className="relative overflow-hidden bg-white py-24"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <img
            src={crmbg1}
            alt="Background Left"
            className="hidden md:block absolute left-0 top-32 w-[400px] z-0"
          />
          <img
            src={crmbg2}
            alt="Background Right"
            className="hidden md:block absolute right-75 top-80 w-[500px] z-0"
          />

          <motion.div
            className="relative z-10 max-w-6xl mx-auto px-6 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-2 rounded-full inline-block mb-6">
              CUSTOMIZED CRM SOFTWARE
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Maximize Business Potential with <br /> Custom CRM
            </h1>
            <p className="text-base sm:text-lg text-gray-600 font-bold max-w-2xl mx-auto mb-12">
              Experience the power of tailored CRM solutions, designed to propel your
              business forward. Seamlessly integrate our CRM software into your
              existing systems, tailored to your unique processes.
            </p>
            <div className="flex justify-center">
              <motion.img
                src={crmhero}
                alt="Custom CRM UI"
                className="rounded-[20px] border border-gray-200 shadow-xl max-w-3xl w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, delay: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.section>

        {/* FEATURES SECTION */}
        <section className="py-24 px-4 max-w-7xl mx-auto space-y-24">
          {[
            {
              image: crm1,
              title: "Boosted Productivity",
              text:
                "Empower your team with intuitive tools and automated workflows, maximizing productivity and minimizing manual tasks.",
              reverse: true,
            },
            {
              image: crm2,
              title: "Seamless Integration",
              text:
                "Worried about compatibility with your existing systems? Our CRM software seamlessly integrates with platforms like Salesforce, Microsoft Dynamics, and QuickBooks.",
              reverse: false,
            },
            {
              image: crm3,
              title: "Customer Satisfaction",
              text:
                "Delight your customers with personalized interactions and data-driven insights, fostering long-term loyalty.",
              reverse: true,
            },
            {
              image: crm4,
              title: "Future-Ready Solutions",
              text:
                "Scale your operations confidently with our flexible CRM platform, ready to adapt to your evolving needs.",
              reverse: false,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="grid md:grid-cols-2 items-center gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
            >
              {/* Text */}
              <div className={`${item.reverse ? "md:order-2" : "md:order-1"}`}>
                <h3 className="text-5xl font-semibold text-[#0A0D14] mb-10">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A4A4A]">{item.text}</p>
              </div>

              {/* Image */}
              <div className={`${item.reverse ? "md:order-1" : "md:order-2"}`}>
                <img src={item.image} alt={item.title} className="rounded-xl w-full" />
              </div>
            </motion.div>
          ))}
        </section>

        {/* --- ADDED SECTION START --- */}
        <motion.section
          className="px-6 md:px-12 lg:px-20 py-16 bg-white overflow-hidden"
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
                    className="w-full h-78 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
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
        {/* --- ADDED SECTION END --- */}

        <div className="mt-24" />
        <HelloSection />
      </div>
    </>
  );
} 