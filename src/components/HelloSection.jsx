import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import helloPeople from "../assets/hello-people.png";

// Animation variant for the fade-in effect
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: "easeOut" } 
  },
};

const HelloSection = () => {
  const navigate = useNavigate();
  return (
    // Converted section to a motion component and added animation props
    <motion.section 
      className="bg-white py-16 px-4 sm:px-6"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-2xl font-medium text-gray-800">
          Ready to evaluate your productivity?
        </p>
        <div className="mt-8 flex flex-col items-center md:grid md:grid-cols-1 md:place-items-center">
          <h1 className="order-1 text-8xl md:text-[180px] lg:text-[280px] font-extrabold md:col-start-1 md:row-start-1 z-0 md:-translate-y-45">
            <span className="gradient-shine">HELLO!</span>
          </h1>
          <div className="order-2 -mt-12 sm:-mt-16 md:mt-0 md:col-start-1 md:row-start-1 md:self-end z-10 md:-translate-x-[200px] md:translate-y-[64px]">
            <img
              src={helloPeople}
              alt="Two smiling people with phones"
              className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl h-auto"
            />
          </div>
          <div className="order-3 mt-6 text-center md:text-left md:col-start-1 md:row-start-1 md:self-end md:justify-self-end md:p-8 z-10 md:translate-y-[45px]">
            <h2 className="text-2xl font-semibold mb-2">
              It all starts with a conversation.
            </h2>
            <p className="text-gray-700 mb-6 max-w-xs mx-auto md:mx-0">
              Getting started with Global Assist is simple. We start with a
              consultation, craft tailored solutions, onboard your dedicated VA,
              and set up tools for smooth collaboration.
            </p>
            <div className="relative inline-block group">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <button
                className="relative px-6 py-3 border border-black rounded-full font-medium text-gray-800 transition-all duration-300 group-hover:border-transparent"
                onClick={() => navigate("/contact")}
              >
                BOOK A CALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HelloSection;