import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import crmbg1 from "../assets/crmbg1.png";
import crmbg2 from "../assets/crmbg2.png";
import crmhero from "../assets/crmhero.png";
import crm1 from "../assets/crm1.png";
import crm2 from "../assets/crm2.png";
import crm3 from "../assets/crm3.png";
import crm4 from "../assets/crm4.png";
import smm2 from "../assets/smm2.png";
import smm3 from "../assets/smm3.png";
import smm4 from "../assets/smm4.png";
import smm5 from "../assets/smm5.png";
import GetInTouch from "../components/GetInTouch";
import project1 from "../assets/CRMproject1.png";
import project2 from "../assets/CRMproject2.png";

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function CustomizedCRMSoftware() {
  return (
    <>
      <Helmet>
        <title>Virtual Assistant CRM Management Services | Custom CRM Support</title>
        <meta name="description" content="Optimize your workflow with CRM automation virtual assistants. Global Assist Inc offers expert support for custom CRM software management and data organization." />
      </Helmet>
      <div className="font-['Roboto']">
      {/* HERO SECTION */}
      <motion.section
        className="relative overflow-hidden bg-white py-24"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <img
  src={crmbg1}
  alt="Background Left"
  className="hidden md:block absolute left-0 top-32 w-[400px] z-0"
/>
<img
  src={crmbg2}
  alt="Background Right"
  className="hidden md:block absolute right-75 top-80 w-[500px] z-0"
/>


        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-2 rounded-full inline-block mb-6">
            CUSTOMIZED CRM SOFTWARE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Maximize Business Potential with <br /> Custom CRM
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-bold max-w-2xl mx-auto mb-12">
            Experience the power of tailored CRM solutions, designed to propel your
            business forward. Seamlessly integrate our CRM software into your
            existing systems, tailored to your unique processes.
          </p>
          <div className="flex justify-center">
            <motion.img
              src={crmhero}
              alt="Custom CRM UI"
              className="rounded-[20px] border border-gray-200 shadow-xl max-w-3xl w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, delay: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* FEATURES SECTION */}
<section className="py-24 px-4 max-w-7xl mx-auto space-y-24">
  {[
    {
      image: crm1,
      title: "Boosted Productivity",
      text:
        "Empower your team with intuitive tools and automated workflows, maximizing productivity and minimizing manual tasks.",
      reverse: true,
    },
    {
      image: crm2,
      title: "Seamless Integration",
      text:
        "Worried about compatibility with your existing systems? Our CRM software seamlessly integrates with platforms like Salesforce, Microsoft Dynamics, and QuickBooks.",
      reverse: false,
    },
    {
      image: crm3,
      title: "Customer Satisfaction",
      text:
        "Delight your customers with personalized interactions and data-driven insights, fostering long-term loyalty.",
      reverse: true,
    },
    {
      image: crm4,
      title: "Future-Ready Solutions",
      text:
        "Scale your operations confidently with our flexible CRM platform, ready to adapt to your evolving needs.",
      reverse: false,
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      className="grid md:grid-cols-2 items-center gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeUp}
    >
      {/* Text */}
      <div className={`${item.reverse ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-5xl font-semibold text-[#0A0D14] mb-10">
          {item.title}
        </h3>
        <p className="text-sm text-[#4A4A4A]">{item.text}</p>
      </div>

      {/* Image */}
      <div className={`${item.reverse ? "md:order-1" : "md:order-2"}`}>
        <img src={item.image} alt={item.title} className="rounded-xl w-full" />
      </div>
    </motion.div>
  ))}
</section>



      {/* Projects Section */}
      <section className="px-4 max-w-7xl mx-auto py-1">
        {/* Label */}
        <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
          Our Projects
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#0A0D17] mb-4">
          Projects We Have Completed
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-3xl mb-10 text-sm md:text-base text-left">
        </p>

        {/* Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://www.youtube.com/watch?v=mYnMaO6BPFE"
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
            href="https://www.youtube.com/watch?v=bFTIQDCvIrc"
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

      <div className="mt-24" />
      <GetInTouch />
    </div>
    </>
  );
}
