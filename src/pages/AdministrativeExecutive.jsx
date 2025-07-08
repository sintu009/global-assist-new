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
  {
    title: "Time Management Support",
    description:
      "Administrative assistants help executives prioritize tasks and meet deadlines by handling calendar management, reminders, and scheduling — ultimately maximizing productivity.",
  },
  {
    title: "Document & Data Organization",
    description:
      "They maintain well-organized records, files, and databases, making it easy to retrieve important information quickly and ensuring operational compliance and accuracy.",
  },
  {
    title: "Professional Representation",
    description:
      "Admin assistants often act as the first point of contact, representing the company professionally in emails, calls, and meetings — reinforcing brand image and trust.",
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
        className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-14"
      >
        <motion.div className="flex-1" variants={fadeUp}>
          <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
            ADMINISTRATIVE EXECUTIVE
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2F327D] mb-6 leading-snug font-[Nunito_Sans,sans-serif]">
            Unlocking Efficiency - <br />
            Administrative & <br />
            Executive Assistant
          </h1>
          <p className="text-sm text-[#797979] font-inter mb-6 max-w-md">
            In the fast-paced world of business, having a reliable Administrative &amp;
            Executive Assistant is like having a trusted ally by your side. Here’s why:
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
          className="max-w-xl mx-auto bg-white rounded-xl shadow-md px-6 md:px-14 py-16 relative text-center z-10"
        >
          <h3 className="text-2xl font-roboto font-semibold text-[#0A0D14] mb-4">
            {featureCards[currentIndex].title}
          </h3>
          <p className="text-sm md:text-base font-roboto text-[#0F172A]">
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

      {/* Additional Benefits Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-white py-24 px-4 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#2F327D] mb-6">Why Choose Our Admin Assistants?</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10 text-sm md:text-base">
          At Global Assist, our virtual administrative assistants are handpicked for their expertise, professionalism, and adaptability. Here’s what sets them apart:
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <motion.div variants={fadeUp}>
            <h4 className="font-semibold text-lg text-[#2F327D] mb-2">Highly Trained</h4>
            <p className="text-sm text-gray-700">All our VAs undergo rigorous onboarding and regular skill enhancement workshops.</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h4 className="font-semibold text-lg text-[#2F327D] mb-2">Tech-Savvy</h4>
            <p className="text-sm text-gray-700">Proficient in the latest productivity tools like Google Workspace, Notion, Slack, and more.</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h4 className="font-semibold text-lg text-[#2F327D] mb-2">Confidential & Reliable</h4>
            <p className="text-sm text-gray-700">Your data is safe with us. Our team operates with integrity and strict confidentiality.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[#F9F5FF] py-24 px-4 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2F327D] mb-4">Client Success Story</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6 italic">
            "Hiring a virtual administrative assistant through Global Assist was a game changer. It freed up 10+ hours a week for me to focus on scaling my business."
          </p>
          <p className="font-semibold text-[#2F327D]">— Victoria Segovia, Communications Manager, USA</p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="px-4 max-w-7xl mx-auto py-16">
        <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
          Our Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#0A0D17] mb-6">Project We Have Done</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://www.youtube.com/watch?v=T3qH-uY3t-Y" target="_blank" rel="noopener noreferrer">
            <img src={project1} alt="Project 1" className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] transition hover:scale-105" />
          </a>
          <a href="https://www.youtube.com/watch?v=FTuOS8E1LZk" target="_blank" rel="noopener noreferrer">
            <img src={project2} alt="Project 2" className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] transition hover:scale-105" />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[#7A4DD7] text-white py-24 text-center px-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Delegate Like a Pro?</h2>
        <p className="max-w-xl mx-auto text-sm md:text-base mb-6">
          Let our skilled virtual administrative assistants handle your routine tasks, so you can lead with focus and clarity.
        </p>
      </motion.section>

      {/* Get in Touch Section */}
      <GetInTouch />
    </div>
  );
}
