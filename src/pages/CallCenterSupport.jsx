import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import heroImage from "../assets/callHero.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import HelloSection from "../components/HelloSection";
import GetInTouch from '../components/GetInTouch';
import ccs1 from "../assets/ccs1.png";
import ccs2 from "../assets/ccs2.png";
import ccs3 from "../assets/ccs3.png";
import ccs4 from "../assets/ccs4.png";
import ccs5 from "../assets/ccs5.png";
import ccs6 from "../assets/ccs6.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

export default function CallCenterSupport() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

const services = [
  {
    img: ccs1,
    title: "Answer & Route Calls",
    desc: (
      <div className="text-left">
        We manage your call flow with professionalism. <br />
        - Make customer follow-ups <br />
        - Track call performance <br />
        - Inbound & Outbound Call Support
      </div>
    ),
  },
  {
    img: ccs2,
    title: "Real-time Chat Handling",
    desc: (
      <div className="text-left">
        Instant answers, better conversions. <br />
        - Respond to customer queries <br />
        - Offer 24/7 assistance <br />
        - Live Chat Support
      </div>
    ),
  },
  {
    img: ccs3,
    title: "Answering Phone Calls",
    desc: (
      <div className="text-left">
        Greet customers warmly. <br />
        - Resolve basic inquiries <br />
        - Forward important calls <br />
        - Friendly, fast, and brand-aligned service
      </div>
    ),
  },
  {
    img: ccs4,
    title: "Appointment Setting",
    desc: (
      <div className="text-left">
        Let us handle your bookings and scheduling. <br />
        - Confirm appointments <br />
        - Send reminders & follow-ups <br />
        - Manage calendar slots
      </div>
    ),
  },
  {
    img: ccs5,
    title: "Database Maintenance",
    desc: (
      <div className="text-left">
        Keep customer data accurate and clean. <br />
        - Update contact records <br />
        - Remove duplicates <br />
        - Organize segmented lists
      </div>
    ),
  },
  {
    img: ccs6,
    title: "Lead Nurturing",
    desc: (
      <div className="text-left">
        Turn prospects into loyal customers. <br />
        - Follow-up via email/call <br />
        - Share helpful content <br />
        - Build trust over time
      </div>
    ),
  },
];


  return (
    <>
      <Helmet>
        <title>Virtual Call Center Support Services | Remote Customer Service Assistants</title>
        <meta name="description" content="Enhance customer service with professional virtual call center support. Global Assist Inc provides remote assistants for call handling and customer engagement." />
      </Helmet>
      <div className="text-[#222]">

      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="flex-1">
          <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
            CALL CENTER SUPPORT
          </span>
          <h1 className="text-3xl md:text-6xl font-bold text-[#2F327D] mb-4 leading-snug">
            Customer Experience, <br />
            with Our Call Centre <br />
            Support
          </h1>
          <p className="text-xm text-[#4A4A4A] mb-6 max-w-md">
            In today's competitive business landscape, providing exceptional customer service is paramount. That's where our Call Centre Support comes in. With a team of skilled professionals, we ensure seamless communication and resolution of queries, enhancing overall customer satisfaction.
          </p>
         
        </div>
        <div className="flex-1">
          <img src={heroImage} alt="Call Centre Illustration" className="w-full max-w-xl mx-auto" />
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-center -mx-0 md:gap-[-16px]">

          {/* Left column */}
          <div className="flex flex-col gap-10 w-full md:w-1/2 items-center md:mt-32">
            {[icon1, icon3].map((icon, index) => (
              <motion.div
                key={index}
                className="bg-white w-[70%] p-8 rounded-2xl shadow-md border-4 border-[#f0ebff] text-center font-['Work_Sans']"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
              >
                <img src={icon} alt={`Feature ${index + 1}`} className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-base font-semibold mb-2">
                  {index === 0 ? "24/7 Availability" : "Data-Driven Insights"}
                </h3>
                <p className="text-sm text-gray-700">
                  {index === 0
                    ? "Our call centre operates non-stop, ensuring prompt assistance anytime. Day or night, weekends, or holidays, we're here for your customers."
                    : "Beyond immediate resolutions, we offer valuable insights from customer interactions. Through detailed analytics, we identify trends, pain points, and ways to enhance satisfaction."}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-10 w-full md:w-1/2 items-center">
            {[icon2, icon4].map((icon, index) => (
              <motion.div
                key={index}
                className="bg-white w-[70%] p-8 rounded-2xl shadow-md border-4 border-[#f0ebff] text-center font-['Work_Sans']"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
              >
                <img src={icon} alt={`Feature ${index + 2}`} className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-base font-semibold mb-2">
                  {index === 0 ? "Multichannel Communication" : "Tailored Solutions"}
                </h3>
                <p className="text-sm text-gray-700">
                  {index === 0
                    ? "Customers expect support across various channels. We handle calls, emails, chats, and social media inquiries efficiently, ensuring a seamless experience."
                    : "Every business is unique, so are its service needs. Our Call Centre Support is customizable to your requirements, from basic queries to technical support."}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

       <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Talk to Our Expert
          </span>
        </h2>
      </div>

      {/* Intro text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-52 mb-12">
        <p className="text-lg font-semibold text-gray-800 leading-relaxed">
          From live chat to helpdesk management, we handle every query with professionalism and empathy.

        </p>
        <p className="text-gray-600 leading-relaxed">
          We represent your brand with care, speed, and precision. Customer service isn’t a department—it’s your brand promise. We help you<br/>keep it.

        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => toggleService(idx)}>
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover/Tap Overlay */}
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
          </div>
        ))}
      </div>
    </section>

      <div className="mt-24" />
      <HelloSection />
    </div>
    </>
  );
}