import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import vmabg from "../assets/vmabg.png"; // <-- use this image for hero section
import mva2 from "../assets/mva2.png";
import mva3 from "../assets/mva3.png";
import mva4 from "../assets/mva4.png";
import mva5 from "../assets/mva5.png";
import mva6 from "../assets/mva6.png";
import GetInTouch from "../components/GetInTouch";
import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";
import HelloSection from "../components/HelloSection";
import medical1 from "../assets/medical1.png";
import medical2 from "../assets/medical2.png";
import medical3 from "../assets/medical3.png";
import medical4 from "../assets/medical4.png";
import medical5 from "../assets/medical5.png";
import medical6 from "../assets/medical6.png";

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

const services = [
  {
    img: medical1,
    title: "Administrative & Scheduling Support",
    desc: (
      <div className="text-left">
        Appointment scheduling & rescheduling <br />
        - Calendar management for doctors and staff <br />
        - Patient reminder calls, texts, or emails
      </div>
    ),
  },
  {
    img: medical2,
    title: "Patient Communication & Front Desk Support",
    desc: (
      <div className="text-left">
        Answering patient calls and emails <br />
        - Managing live chat or portal inquiries <br />
        - Patient intake & onboarding
      </div>
    ),
  },
  {
    img: medical3,
    title: "Medical Documentation",
    desc: (
      <div className="text-left">
        Medical transcription (doctor’s dictations, notes, reports) <br />
        - Updating Electronic Health Records (EHR/EMR) <br />
        - Preparing discharge summaries & referral letters
      </div>
    ),
  },
  {
    img: medical4,
    title: "Billing & Insurance Support",
    desc: (
      <div className="text-left">
        Medical billing & coding support (CPT/ICD codes) <br />
        - Claims submission & follow-ups with insurance companies <br />
        - Verifying insurance eligibility
      </div>
    ),
  },
  {
    img: medical5,
    title: "Back-Office & Data Management",
    desc: (
      <div className="text-left">
        Data entry for patient records & medical forms <br />
        - Managing lab reports and test results <br />
        - Organizing medical documentation & compliance records
      </div>
    ),
  },
  {
    img: medical6,
    title: "Telehealth Assistance",
    desc: (
      <div className="text-left">
        Setting up telemedicine appointments <br />
        - Assisting patients with video consultations <br />
        - Troubleshooting patient login/tech issues
      </div>
    ),
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



function MedicalVirtualAssistance() {
  return (
    <>
      <Helmet>
        <title>Medical Virtual Assistant Services for Healthcare Professionals</title>
        <meta name="description" content="Enhance efficiency with remote medical office assistants. Global Assist Inc offers reliable virtual assistant services for healthcare professionals and medical practices." />
      </Helmet>
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
<section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Your Virtual Partner in Patient-Centered Care
          </span>
        </h2>
      </div>

      {/* Intro text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-52 mb-12">
        <p className="text-lg font-semibold text-gray-800 leading-relaxed">
          From managing schedules to automating follow-ups, we handle the
          following tasks so you can focus on the big picture.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our Admin Support team takes care of time-consuming tasks so you can
          focus on growth. From calendar and email management to travel planning
          and CRM updates, we ensure your operations run like clockwork.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-78 object-cover rounded-xl shadow-md"
            />
            <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
            <p className="text-black text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
        <HelloSection/>
      </motion.div>
    </div>
    </> 
  );
}

export default MedicalVirtualAssistance;
