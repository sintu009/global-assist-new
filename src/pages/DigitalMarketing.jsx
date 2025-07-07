import React from "react";
import { motion } from "framer-motion";
import dm1 from "../assets/dm1.png";
import dm2 from "../assets/dm2.png";
import dm3 from "../assets/dm3.png";
import dm4 from "../assets/dm4.png";
import dm5 from "../assets/dm5.png";
import smm2 from "../assets/smm2.png";
import smm3 from "../assets/smm3.png";
import smm4 from "../assets/smm4.png";
import smm5 from "../assets/smm5.png";
import GetInTouch from "../components/GetInTouch";
import { CalendarDays, Mail } from "lucide-react";
import dmBg from "../assets/dm-bg.png";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const DigitalMarketing = () => {
  return (
    <section className="font-['Roboto'] text-[#0A0D17] overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="mt-0 md:-mt-14 pb-2 px-6 md:px-12 bg-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${dmBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
              animate="visible" 
          >
            <span className="mt-6 text-xs font-semibold text-[#7A4DD7] bg-purple-200 px-4 py-2 rounded-full inline-block mb-6 z-20 relative">
              DIGITAL MARKETING
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B0752] leading-tight mb-6">
              Grow your company <br />
              and <span className="whitespace-nowrap">improve your digital</span> <br />
              marketing
            </h1>
            <p className="text-[#555] text-base md:text-lg leading-relaxed">
              Global Assist Inc. is a leading 360-degree Business solution firm with offices in the USA, Canada,
              India, and the Philippines and branches spread globally.
            </p>
          </motion.div>

          <motion.div
            className="relative flex justify-center min-h-[420px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
<motion.div
  className="absolute top-40 left-[10%] w-12 h-12 bg-[#3FC9F4] rounded-xl flex items-center justify-center shadow-lg z-20"
  animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
>
  <CalendarDays className="w-6 h-6 text-white" />
</motion.div>

<motion.div
  className="absolute bottom-8 right-[15%] w-12 h-12 bg-[#FFA756] rounded-xl flex items-center justify-center shadow-lg z-20"
  animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
>
  <Mail className="w-6 h-6 text-white" />
</motion.div>

            <img src={dm1} alt="Hero" className="w-full max-w-lg relative z-10 translate-y-10" />
          </motion.div>
        </div>
      </div>

      {/* Section Template */}
{[
  {
    image: dm2,
    title: "STRATEGIC\nINSIGHTS",
    text:
      "Gain valuable insights into your target audience and market trends with our data-driven approach.",
    reverse: false,
  },
  {
    image: dm3,
    title: "SEAMLESS\nINTEGRATION",
    text:
      "Our solutions integrate with platforms like Google Analytics, HubSpot, and Adobe Marketing Cloud.",
    reverse: true,
  },
  {
    image: dm4,
    title: "ENGAGING\nCONTENT",
    text:
      "From social posts to video campaigns, we craft content that resonates with your audience.",
    reverse: false,
  },
  {
    image: dm5,
    title: "CUSTOMER-CENTRIC\nAPPROACH",
    text:
      "Delight your audience with hyper-targeted content and data-driven insights.",
    reverse: true,
  },
].map(({ image, title, text, reverse }, idx) => (
  <div
    key={idx}
    className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid md:grid-cols-2 gap-16 items-center"
  >
    {/* Text Section */}
    <motion.div
      className={reverse ? "md:order-2" : "md:order-1"}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4 whitespace-pre-line">
        {title}
      </h2>
      <p className="text-[#555] font-inter">{text}</p>
    </motion.div>

    {/* Image Section */}
    <motion.div
      className={reverse ? "md:order-1" : "md:order-2"}
      variants={reverse ? slideInRight : slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <img src={image} alt={title} className="w-full rounded-xl" />
    </motion.div>
  </div>
))}


      {/* Our Projects */}
      <section className="px-4 max-w-7xl mx-auto py-1">
        <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
          Our Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#0A0D17] mb-4">Project We Have Done</h2>
        <p className="text-gray-600 max-w-3xl mb-10 text-sm md:text-base text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img src={smm2} alt="Project 1" className="rounded-2xl object-cover w-full h-full" />
          <img src={smm3} alt="Project 2" className="rounded-2xl object-cover w-full h-full" />
          <img src={smm4} alt="Project 3" className="rounded-2xl object-cover w-full h-full" />
          <img src={smm5} alt="Project 4" className="rounded-2xl object-cover w-full h-full" />
        </div>
      </section>

      {/* Contact Form */}
      <div className="mt-24" />
      <GetInTouch />
    </section>
  );
};

export default DigitalMarketing;
