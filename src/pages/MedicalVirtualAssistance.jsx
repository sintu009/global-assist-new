import React from "react";
import { motion } from "framer-motion";
import vmabg from "../assets/vmabg.png"; // <-- use this image for hero section
import mva2 from "../assets/mva2.png";
import mva3 from "../assets/mva3.png";
import mva4 from "../assets/mva4.png";
import mva5 from "../assets/mva5.png";
import mva6 from "../assets/mva6.png";
import GetInTouch from "../components/GetInTouch";

const features = [
  {
    title: "Specialized in Healthcare",
    desc: "We’re not your average virtual assistant service. Our team specializes in serving the medical industry, ensuring that your sensitive data and operations are in expert hands.",
  },
  {
    title: "Efficient Operations",
    desc: "Time is precious in healthcare. Our VAs optimize your workflows, from managing appointments to processing insurance claims so that you can work more efficiently.",
  },
  {
    title: "Personalized Support",
    desc: "We understand that every medical practice is unique. That’s why we offer tailored solutions to fit your specific needs, whether you’re a solo practitioner or a large clinic.",
  },
  {
    title: "Cost-Effective Solutions",
    desc: "Say goodbye to the expenses of hiring full-time administrative staff. Our flexible pricing plans allow you to save money while receiving top-notch support.",
  },
  {
    title: "Reliable Partnership",
    desc: "With Global Assist, you can trust that you’re partnering with a team committed to your success. Our VAs undergo rigorous training and quality control measures to ensure consistent, reliable service.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function MedicalVirtualAssistant() {
  return (
    <div className="font-sans text-[#222]">
      {/* HERO SECTION - Heading Left, Image Right */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full bg-[#F9F9FB] py-12 md:py-20 px-4 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
      >
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F327D] leading-snug mb-4">
            MEDICAL VIRTUAL <br /> ASSISTANCE
          </h1>
          <p className="text-[#555] text-sm md:text-base leading-relaxed">
            At Global Assist, we're dedicated to simplifying your medical
            practice's administrative tasks, so you can focus on what truly
            matters: your patients. Our specialized Virtual Assistant (VA)
            services are designed to streamline your operations and boost
            efficiency. Here's why you should choose us:
          </p>
        </div>

        {/* Image on Right */}
        <div className="w-full md:w-[50%] max-w-3xl">
          <img
            src={vmabg}
            alt="Medical Virtual Assistance"
            className="w-full h-auto object-contain transform translate-x-4 -translate-y-12 md:translate-x-20 md:-translate-y-20"
          />
        </div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-30 mb-24 mt-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center"
          >
            <img
              src={
                index === 0
                  ? mva6
                  : index === 1
                  ? mva5
                  : index === 2
                  ? mva4
                  : index === 3
                  ? mva3
                  : mva2
              }
              alt={feature.title}
              className="w-full h-[260px] object-cover rounded-2xl mb-4"
            />
            <h3 className="text-lg font-semibold text-[#2F327D] mb-2 text-center font-['Roboto']">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 text-center font-['Roboto']">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="mt-24"
      >
        <GetInTouch />
      </motion.div>
    </div>
  );
}
