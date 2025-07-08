import React from "react";
import { motion } from "framer-motion";
import mva1 from "../assets/mva1.png";
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
      {/* Hero Section with Overlay Text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden"
      >
        <img
          src={mva1}
          alt="Medical Virtual Assistance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-black text-center leading-snug">
            MEDICAL VIRTUAL <br /> ASSISTANCE
          </h1>
        </div>
      </motion.div>

      {/* Intro Text */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-4xl font-inter mx-auto text-center px-4 mt-12 mb-10 text-sm text-[#797979]"
      >
        <p>
          At Global Assist, we’re dedicated to simplifying your medical practice’s administrative tasks,
          so you can focus on what truly matters: your patients. Our specialized Virtual Assistant (VA)
          services are designed to streamline your operations and boost efficiency. Here’s why you should
          choose us:
        </p>
      </motion.div>

      {/* Feature Cards */}
{/* Feature Cards */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-30 mb-24"
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
      <h3 className="text-lg font-semibold font-[roboto,sans-serif] mb-2 text-center text-[#2F327D]">
        {feature.title}
      </h3>
      <p className="text-sm text-gray-600 font-[roboto,sans-serif] text-center">
        {feature.desc}
      </p>
    </motion.div>
  ))}
</motion.div>



      {/* Get In Touch */}
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
