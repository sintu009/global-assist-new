import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/callHero.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import smm2 from '../assets/smm2.png';
import smm3 from '../assets/smm3.png';
import smm4 from '../assets/smm4.png';
import smm5 from '../assets/smm5.png';
import GetInTouch from '../components/GetInTouch';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png"; // Assuming you have a second project image

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

export default function CallCenterSupport() {
  return (
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
            In today’s competitive business landscape, providing exceptional customer
            service is paramount. That’s where our Call Centre Support comes in.
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
                    ? "Our call centre operates non-stop, ensuring prompt assistance anytime."
                    : "We offer valuable insights from customer interactions with detailed analytics."}
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
                    ? "We handle calls, emails, chats, and social media inquiries efficiently."
                    : "Our Call Centre Support is customizable to your requirements."}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

{/* Projects Section */}
<section className="px-4 max-w-7xl mx-auto py-1">
  {/* Label */}
  <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
    Our Projects
  </span>

  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#0A0D17] mb-4">
    Project We Have Done
  </h2>

  {/* Subtext */}
  <p className="text-gray-600 max-w-3xl mb-10 text-sm md:text-base text-left">
    
  </p>

  {/* Image Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <a
      href="https://www.youtube.com/watch?v=a0u6YPDFOnU"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={project2}
        alt="Project 1"
        className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] transition hover:scale-105"
      />
    </a>
    <a
      href="https://www.youtube.com/watch?v=YggaoyFhNbw"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={project1}
        alt="Project 2"
        className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] transition hover:scale-105"
      />
    </a>
  </div>
</section>

      <div className="mt-24" />
      <GetInTouch />
    </div>
  );
}
