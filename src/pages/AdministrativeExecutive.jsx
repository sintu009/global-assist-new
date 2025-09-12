import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import adminHero from "../assets/adminHero.png";
import leftDeco from "../assets/leftDeco.png";
import rightDeco from "../assets/rightDeco.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GetInTouch from '../components/GetInTouch';
import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";
import HelloSection from "../components/HelloSection";
import as7 from "../assets/as7.png";
import as8 from "../assets/as8.png";
import as9 from "../assets/as9.png";
import as10 from "../assets/as10.png";
import as11 from "../assets/as11.png";
import as12 from "../assets/as12.png";


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
      desc: (
        <div className="text-left">
          We declutter, organize, and manage your inbox.<br />
          - Sort & prioritize emails <br />
          - Flag important conversations <br />
          - Automate responses <br />
        </div>
      ),
    },
    {
      img: calendar,
      title: "Calendar Management",
      desc: (
        <div className="text-left">
          Never miss a meeting or deadline. <br />
          - Schedule & reschedule events <br />
          - Set reminders & alerts <br />
          - Coordinate across time zones
        </div>
      ),
    },
    {
      img: work,
      title: "Data Entry Management",
      desc: (
        <div className="text-left">
          Keep your information accurate and accessible. <br />
          - Clean & update records <br />
          - Manage spreadsheets & CRMs <br />
          - Ensure data accuracy
        </div>
      ),
    },
    {
      img: files,
      title: "Filing & Documentation",
      desc: (
        <div className="text-left">
          We create, organize, and store your essential files. <br />
          - Draft formal documents <br />
          - Format & proofread content <br />
          - Maintain secure archives
        </div>
      ),
    },
    {
      img: travel,
      title: "Travel Arrangements",
      desc: (
        <div className="text-left">
          Plan and book stress-free business travel. <br />
          - Book flights & hotels <br />
          - Create travel itineraries <br />
          - Manage last-minute changes
        </div>
      ),
    },
    {
      img: meet,
      title: "Project Management",
      desc: (
        <div className="text-left">
          Keep projects on track and under control. <br />
          - Track progress & deadlines <br />
          - Assign and manage tasks <br />
          - Coordinate team efforts
        </div>
      ),
    },
    {
      img: as7,
      title: "Research & Reports",
      desc: (
        <div className="text-left">
          Get detailed, data-backed insights quickly. <br />
          - Market and competitor research <br />
          - Custom report generation <br />
          - Summarize complex data
        </div>
      ),
    },
    {
      img: as8,
      title: "CRM Management",
      desc: (
        <div className="text-left">
          Keep your client relationships organized and updated. <br />
          - Manage contacts & leads <br />
          - Monitor engagement history <br />
          - Clean & update records
        </div>
      ),
    },
    {
      img: as9,
      title: "Lead Generation",
      desc: (
        <div className="text-left">
          Identify and deliver quality leads. <br />
          - Research prospects <br />
          - Build lead lists <br />
          - Qualify potential customers
        </div>
      ),
    },
    {
      img: as10,
      title: "Transaction Coordination",
      desc: (
        <div className="text-left">
          Streamline deals and documentation from start to close. <br />
          - Track paperwork & deadlines <br />
          - Liaise with all stakeholders <br />
          - Manage contract logistics
        </div>
      ),
    },
    {
      img: as11,
      title: "Proposal Drafting",
      desc: (
        <div className="text-left">
          Craft compelling proposals that win business. <br />
          - Write & format proposals <br />
          - Tailor content to client <br />
          - Ensure timely delivery
        </div>
      ),
    },
    {
      img: as12,
      title: "Minutes of the Meeting",
      desc: (
        <div className="text-left">
          Accurate meeting summaries for clear communication. <br />
          - Record key discussion points <br />
          - Highlight action items <br />
          - Distribute final minutes
        </div>
      ),
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeService, setActiveService] = useState(null);

  // --- Animation setup for Services Section ---
  const servicesControls = useAnimation();
  const [servicesRef, servicesInView] = useInView({ threshold: 0.05, triggerOnce: false });

  useEffect(() => {
    if (servicesInView) {
      servicesControls.start("visible");
    } else {
      servicesControls.start("hidden");
    }
  }, [servicesControls, servicesInView]);

  // --- Animation setup for HelloSection ---
  const helloControls = useAnimation();
  const [helloRef, helloInView] = useInView({ threshold: 0.05, triggerOnce: false });

  useEffect(() => {
    if (helloInView) {
      helloControls.start("visible");
    } else {
      helloControls.start("hidden");
    }
  }, [helloControls, helloInView]);


  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featureCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featureCards.length - 1 ? 0 : prev + 1));
  };

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

  return (
    <>
      <Helmet>
        <title>Best Virtual Assistant Services for Administrative & Executive Support</title>
        <meta name="description" content="Get professional admin support with top executive virtual assistant services. Global Assist Inc helps businesses manage tasks efficiently and stay organized." />
      </Helmet>
      <div className="font-sans text-[#222] relative">
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
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#EFEBFBCC] py-28 px-4 relative overflow-hidden"
        >
          <img src={leftDeco} alt="left decoration" className="absolute bottom-0 left-0 w-32 md:w-40 pointer-events-none" />
          <img src={rightDeco} alt="right decoration" className="absolute top-0 right-0 w-32 md:w-40 pointer-events-none" />
          <motion.div
            variants={fadeUp}
            className="max-w-xl mx-auto bg-white rounded-xl shadow-md px-6 md:px-14 py-16 relative text-center z-10 h-[250px] flex flex-col justify-between"
          >
            <h3 className="text-2xl font-roboto font-semibold text-[#0A0D14] mb-4">
              {featureCards[currentIndex].title}
            </h3>
            <p className="text-sm md:text-base font-roboto text-[#0F172A] flex-grow overflow-hidden">
              {featureCards[currentIndex].description}
            </p>
            <button onClick={handlePrev} className="absolute left-4 top-full mt-4 w-9 h-9 bg-white shadow rounded-full flex items-center justify-center text-gray-500 hover:text-[#7A4DD7] md:left-[-45px] md:top-1/2 md:mt-0 md:transform md:-translate-y-1/2">
              <FiChevronLeft size={20} />
            </button>
            <button onClick={handleNext} className="absolute right-4 top-full mt-4 w-9 h-9 bg-white shadow rounded-full flex items-center justify-center text-gray-500 hover:text-[#7A4DD7] md:right-[-45px] md:top-1/2 md:mt-0 md:transform md:-translate-y-1/2">
              <FiChevronRight size={20} />
            </button>
          </motion.div>
        </motion.section>


        <motion.section
          ref={servicesRef}
          animate={servicesControls}
          initial="hidden"
          variants={fadeUp}
          className="px-6 md:px-12 lg:px-20 py-16 bg-white"
        >
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
              focus on growth.<br />From calendar and email management to travel planning
              and CRM updates, we ensure your operations run like clockwork.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <div className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
                  onClick={() => toggleService(idx)}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-black/70 flex flex-col items-start justify-center text-white p-4 transition-all duration-500 md:opacity-0 md:transform md:-translate-x-full md:group-hover:opacity-100 md:group-hover:translate-x-0 ${
                      activeService === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                      }`}
                  >
                    <div className="text-base text-left">
                      {service.desc}
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div
          ref={helloRef}
          animate={helloControls}
          initial="hidden"
          variants={fadeUp}
        >
          <HelloSection />
        </motion.div>
      </div>
    </>
  );
}