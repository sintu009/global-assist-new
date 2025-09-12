import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Image imports
import adminadmin from "../assets/adminadmin.png";
import adminmedical from "../assets/adminmedical.png";
import adminvideo from "../assets/adminvideo.png";
import adminacc from "../assets/adminacc.png";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

const services = [
  {
    title: "STEP 1",
    sub: "Choose Your Plan",
    desc: "Pick the plan that's right for you and get started!",
    path: "/contact",
    buttonText: "Explore More",
    image: step1,
  },
  {
    title: "STEP 2",
    sub: "Meet Your Assistant",
    desc: "You Choose. We Deliver.",
    path: "/contact",
    buttonText: "Explore More",
    image: step2,
  },
  {
    title: "STEP 3",
    sub: "Schedule Meeting",
    desc: "Kickstart Collaboration with Clarity.",
    path: "/contact",
    buttonText: "Explore More",
    image: step3,
  },
  {
    title: "STEP 4",
    sub: "Breathe Easy",
    desc: "Relax—Your VA's Got This.",
    path: "/contact",
    buttonText: "Explore More",
    image: step4,
  },
  
];

const Card = ({ service, index, scrollProgress }) => {
  const start = index / services.length;
  const end = (index + 1) / services.length;

  const scale = useTransform(scrollProgress, [start, end], [1, 0.8]);

  return (
    <div className="h-screen sticky top-0 flex items-center justify-center">
      <motion.div
        style={{ scale }}
        className="relative flex flex-col justify-between w-[90%] max-w-5xl h-[85vh] rounded-3xl p-8 md:p-12 bg-gradient-to-r from-[#E90065] to-[#53389E] border border-white/10 shadow-2xl"
      >
        {/* Top section with text and button */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-3">
              {service.title}
            </h2>
            <p className="text-3xl md:text-6xl font-semibold text-gray-200 mb-4">{service.sub}</p>
            <p className="text-base md:text-xl text-white">{service.desc}</p>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0">
            <NavLink
              to={service.path}
              className="bg-[#2a2a3c] text-white text-md px-6 py-3 rounded-3xl hover:bg-[#3a3a50] transition inline-block"
            >
              {service.buttonText} →
            </NavLink>
          </div>
        </div>

        {/* Image container */}
        <div className="relative w-full h-full mt-[-100px] flex items-center justify-center overflow-hidden">
          <img
  src={service.image}
  alt={service.title}
  className="w-full md:w-[60%] h-auto object-contain"
/>

        </div>
      </motion.div>
    </div>
  );
};

const HowItWorkcards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-white text-black font-['Roboto']">
      <div className="text-center pt-24 pb-12">
        <p className="text-3xl md:text-6xl text-black font-bold">
          How It Works
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${services.length * 100}vh` }}
      >
        {services.map((service, i) => (
          <Card key={i} index={i} service={service} scrollProgress={smoothProgress} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorkcards;
