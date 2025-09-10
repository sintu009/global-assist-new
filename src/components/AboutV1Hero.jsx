import React from "react";
import { motion } from "framer-motion";
import aboutBg from "../assets/about-bg.png"; 
import spin1 from "../assets/spin1.webp"; 
import spin2 from "../assets/spin2.webp";
import spin3 from "../assets/spin3.jpg";
import spin4 from "../assets/spin4.jpg";
import spin5 from "../assets/spin5.webp";
import spin6 from "../assets/spin6.jpg";

// Framer Motion variants for the parent container's continuous rotation
const rotatingContainerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const AboutV1Hero = () => {
  const numCards = 6;
  const cardDistance = "440px"; // Adjusted for a smaller circle radius
  const spinImages = [spin1, spin2, spin3, spin4, spin5, spin6];

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center px-4 md:px-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBg}
          alt="Abstract background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Small Rotating Images Container */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center"
        variants={rotatingContainerVariants}
        animate="animate"
      >
        <div className="relative w-[400px] h-[400px]">
          {Array.from({ length: numCards }).map((_, index) => {
            const angle = (360 / numCards) * index;
            return (
              <motion.img
                key={index}
                src={spinImages[index]}
                alt={`Team Solutions Card ${index + 1}`}
                className="absolute w-[150px] h-[175px]" // Adjusted image size
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${cardDistance}) rotate(-${angle}deg)`,
                  left: "50%",
                  top: "50%",
                }}
              />
            );
          })}
        </div>
      </motion.div>
      
      {/* Text Content Overlay */}
      <div className="relative z-20 max-w-2xl px-4 text-center">
        <h3 className="text-xl md:text-xl font-bold tracking-widest text-white mb-2">
          <span className="gradient-shine">WHY CHOOSE US</span>
        </h3>
        <h1 className="text-3xl md:text-5xl  text-black mb-6">
          We are 360 degree total virtual <span className="text-purple-800">team solutions</span>
        </h1>
        <p className="text-black text-sm md:text-base font-bold leading-relaxed max-w-4xl mx-auto">
          Global Assist Inc. is a leading 360-degree Business solution firm with offices in the USA, Canada, India, and the Philippines and branches spread globally. We identify with the importance of your work and make sure that your requirements are looked after in the best way possible.
        </p>
      </div>
    </section>
  );
};

export default AboutV1Hero;