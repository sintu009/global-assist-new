import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import heroImage from "../assets/callHero.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";
import GetInTouch from '../components/GetInTouch';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png"; 

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

export default function CallCenterSupport() {

  const services = [
        {
          img: email,
          title: "Email Management",
          desc: "We declutter, organize, and manage your inbox.",
        },
        {
          img: calendar,
          title: "Calendar Management",
          desc: "Never miss a meeting or deadline.",
        },
        {
          img: work,
          title: "Data Entry Management",
          desc: "Keep your information accurate and accessible.",
        },
        {
          img: files,
          title: "Filing & Documentation",
          desc: "We create, organize, and store your essential files.",
        },
        {
          img: travel,
          title: "Travel Arrangements",
          desc: "Plan and book stress-free business travel.",
        },
        {
          img: meet,
          title: "Project Management",
          desc: "Keep projects on track and under control.",
        },
        // repeat if you want 12 blocks total
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
            Let Us Organize Your Day
          </span>
        </h2>
      </div>

      {/* Intro text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-52 mb-12">
        <p className="text-lg font-semibold text-gray-800 leading-relaxed">
          From managing schedules to automating follow-ups, we handle the
          following tasks so you can focus on the big picture.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our Admin Support team takes care of time-consuming tasks so you can
          focus on growth. From calendar and email management to travel planning
          and CRM updates, we ensure your operations run like clockwork.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
            <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

      <div className="mt-24" />
      <GetInTouch />
    </div>
    </>
  );
}
