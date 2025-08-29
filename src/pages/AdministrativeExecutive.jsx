import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import adminHero from "../assets/adminHero.png";
import leftDeco from "../assets/leftDeco.png";
import rightDeco from "../assets/rightDeco.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import project1 from "../assets/project1.png";
import project2 from "../assets/adminproject.png";
import GetInTouch from '../components/GetInTouch';
import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";

const featureCards = [
  {
    title: "Streamlined Operations",
    description:
      "Admin assistants ensure smooth operations. They manage, schedules and coordinate meetings, allowing executives to focus on priorities.",
  },
  {
    title: "Effective Communication",
    description:
      "Executive assistants excel in communication, acting as liaisons. They ensure accurate, prompt message conveyance.",
  },
  {
    title: "Problem Solvers Extraordinaire",
    description:
      "Admins thrive in dynamic environments, adept at troubleshooting various issues.",
  },
  {
    title: "Confidentiality and Trust",
    description:
      "Trustworthiness is paramount for admins, handling sensitive information with discretion, earning respect.",
  },

];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

export default function AdministrativeExecutive() {

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featureCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featureCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Helmet>
        <title>Best Virtual Assistant Services for Administrative & Executive Support</title>
        <meta name="description" content="Get professional admin support with top executive virtual assistant services. Global Assist Inc helps businesses manage tasks efficiently and stay organized." />
      </Helmet>
      <div className="font-sans text-[#222]">
      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-14"
      >
        <motion.div className="flex-1" variants={fadeUp}>
          <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
            ADMINISTRATIVE EXECUTIVE
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2F327D] mb-6 leading-snug font-[Nunito_Sans,sans-serif]">
            Unlocking Efficiency : <br />
            Administrative & <br />
            Executive Assistant
          </h1>
          <p className="text-sm text-[#797979] font-inter mb-6 max-w-md">
            In the fast-paced world of business, having a reliable Administrative or Executive Assistant is like having a trusted ally by your side. Here’s why:
          </p>
        </motion.div>
        <motion.div className="flex-1" variants={fadeUp}>
          <img src={adminHero} alt="Admin Assistant Illustration" className="w-full max-w-xl mx-auto" />
        </motion.div>
      </motion.section>

      {/* Feature Cards */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[#EFEBFBCC] py-28 px-4 relative overflow-hidden"
      >
        <img src={leftDeco} alt="left decoration" className="absolute bottom-0 left-0 w-32 md:w-40 pointer-events-none" />
        <img src={rightDeco} alt="right decoration" className="absolute top-0 right-0 w-32 md:w-40 pointer-events-none" />
        <motion.div
          variants={fadeUp}
          // --- MODIFICATION START ---
          // Added 'h-[250px]' for fixed height and 'flex flex-col justify-between' for content distribution
          className="max-w-xl mx-auto bg-white rounded-xl shadow-md px-6 md:px-14 py-16 relative text-center z-10 h-[250px] flex flex-col justify-between"
        >
          <h3 className="text-2xl font-roboto font-semibold text-[#0A0D14] mb-4">
            {featureCards[currentIndex].title}
          </h3>
          {/* Added 'flex-grow overflow-hidden' to the paragraph for consistent height and potential truncation */}
          <p className="text-sm md:text-base font-roboto text-[#0F172A] flex-grow overflow-hidden">
            {featureCards[currentIndex].description}
          </p>
          {/* --- MODIFICATION END --- */}
          <button onClick={handlePrev} className="absolute left-4 top-full mt-4 w-9 h-9 bg-white shadow rounded-full flex items-center justify-center text-gray-500 hover:text-[#7A4DD7] md:left-[-45px] md:top-1/2 md:mt-0 md:transform md:-translate-y-1/2">
            <FiChevronLeft size={20} />
          </button>
          <button onClick={handleNext} className="absolute right-4 top-full mt-4 w-9 h-9 bg-white shadow rounded-full flex items-center justify-center text-gray-500 hover:text-[#7A4DD7] md:right-[-45px] md:top-1/2 md:mt-0 md:transform md:-translate-y-1/2">
            <FiChevronRight size={20} />
          </button>
        </motion.div>
      </motion.section>


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

      {/* Get in Touch Section */}
      <GetInTouch />
    </div>
    </>
  );
}