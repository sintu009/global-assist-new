import React, { useState } from "react";
import { motion } from "framer-motion";
import adminHero from "../assets/adminHero.png";
import leftDeco from "../assets/leftDeco.png";
import rightDeco from "../assets/rightDeco.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import project1 from "../assets/project1.png";
import project2 from "../assets/adminproject.png";
import GetInTouch from '../components/GetInTouch';

const featureCards = [
  {
    title: "Streamlined Operations",
    description:
      "Admin assistants ensure smooth operations. They manage schedules, coordinate meetings, allowing executives to focus on priorities.",
  },
  {
    title: "Effective Communication",
    description:
      "Admin assistants serve as communication hubs, ensuring messages are conveyed clearly between teams, clients, and executives, leading to increased efficiency and fewer misunderstandings.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

export default function AdministrativeExecutive() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featureCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featureCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="font-sans text-[#222]">
      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Text */}
        <div className="flex-1">
          <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
            ADMINISTRATIVE EXECUTIVE
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F327D] mb-4 leading-snug font-[Nunito_Sans,sans-serif]">
            Unlocking Efficiency - <br />
            Administrative & <br />
            Executive Assistant
          </h1>
          <p className="text-sm text-[#797979] font-inter mb-6 max-w-md">
            In the fast-paced world of business, having a reliable Administrative &amp;
            Executive Assistant is like having a trusted ally by your side. Here’s why:
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img src={adminHero} alt="Admin Assistant Illustration" className="w-full max-w-xl mx-auto" />
        </div>
      </motion.section>

      {/* Feature Card Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[#EFEBFBCC] py-20 px-4 relative overflow-hidden"
      >
        {/* Decorations */}
        <img
          src={leftDeco}
          alt="left decoration"
          className="absolute bottom-0 left-0 w-32 md:w-40 pointer-events-none"
        />
        <img
          src={rightDeco}
          alt="right decoration"
          className="absolute top-0 right-0 w-32 md:w-40 pointer-events-none"
        />

        {/* Card */}
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md px-6 md:px-14 py-14 relative text-center z-10">
          <h3 className="text-2xl md:text-2xl font-roboto font-semibold text-[#0A0D14] mb-4">
            {featureCards[currentIndex].title}
          </h3>
          <p className="text-sm md:text-base font-roboto text-[#0F172A]">
            {featureCards[currentIndex].description}
          </p>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-full mt-4 w-9 h-9 bg-white shadow rounded-full flex items-center justify-center text-gray-500 hover:text-[#7A4DD7] md:left-[-45px] md:top-1/2 md:mt-0 md:transform md:-translate-y-1/2"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-full mt-4 w-9 h-9 bg-white shadow rounded-full flex items-center justify-center text-gray-500 hover:text-[#7A4DD7] md:right-[-45px] md:top-1/2 md:mt-0 md:transform md:-translate-y-1/2"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="px-4 max-w-7xl mx-auto py-5">
        <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
          Our Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#0A0D17] mb-4">
          Project We Have Done
        </h2>
        <p className="text-gray-600 max-w-3xl mb-10 text-sm md:text-base text-left"></p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://monday.com/?cq_src=google_ads&cq_cmp=18570564138&cq_term=monday.com&cq_plac=&cq_net=g&cq_plt=gp&utm_medium=cpc&utm_source=adwordsbrand&utm_campaign=ww2-en-prm-workos-work_mgmt-brand-e-search-desktop-core-aw&utm_keyword=monday.com&utm_match_type=e&cluster=&subcluster=&ati=&utm_adgroup=monday.com&utm_banner=642359455819&gad_source=1&gad_campaignid=18570564138&gbraid=0AAAAADeiQJv3Mlb0MkGP8LyEvi4IVdjKf&gclid=Cj0KCQjw953DBhCyARIsANhIZoZTzjy1lximGION_XbHmvtX9xQOVY15OSOIcbvKyJWJ_yoiv3a-deAaAv-FEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project1}
              alt="Project 1"
              className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] transition hover:scale-105"
            />
          </a>
          <a
            href="https://slack.com/intl/en-in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project2}
              alt="Project 2"
              className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] transition hover:scale-105"
            />
          </a>
        </div>
      </section>

      {/* Get in Touch Section */}
      
        <GetInTouch />

    </div>
  );
}
