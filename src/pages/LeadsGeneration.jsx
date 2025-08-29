import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import lgHero from "../assets/lghero.jpg";
import lg1 from "../assets/lg1.jpg";
import lg2 from "../assets/lg2.jpg";
import lg3 from "../assets/lg3.jpg";
import lg4 from "../assets/lg4.png";
import GetInTouch from '../components/GetInTouch';
import lgproject1 from "../assets/lgproject1.png";
import lgproject2 from "../assets/lgproject2.png"; 
import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};

   const services = [
      {
        img: email,
        title: "Email Management",
        desc: "We declutter, organize, and manage your inbox.",
      },
      {
        img: calendar,
        title: "Calendar Management",
        desc: "Never miss a meeting or deadline.",
      },
      {
        img: work,
        title: "Data Entry Management",
        desc: "Keep your information accurate and accessible.",
      },
      {
        img: files,
        title: "Filing & Documentation",
        desc: "We create, organize, and store your essential files.",
      },
      {
        img: travel,
        title: "Travel Arrangements",
        desc: "Plan and book stress-free business travel.",
      },
      {
        img: meet,
        title: "Project Management",
        desc: "Keep projects on track and under control.",
      },
      // repeat if you want 12 blocks total
    ];  


const LeadGeneration = () => {
  return (
    <>
      <Helmet>
        <title>Virtual Assistant for Lead Generation | B2B Sales Support Services</title>
        <meta name="description" content="Boost your sales with expert B2B lead generation virtual assistants. Global Assist Inc provides targeted prospecting and sales support to help businesses grow." />
      </Helmet>
      <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="h-[90vh] bg-cover bg-center flex items-center relative text-white font-roboto"
        style={{ backgroundImage: `url(${lgHero})` }}
        initial="hidden"
        animate="visible"
  variants={fadeUp}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          className="relative z-10 max-w-6xl px-6 sm:px-10 md:px-24 lg:px-52 ml-auto"
          variants={fadeUp}
        >
          <span className="text-2xs font-semibold bg-[#FFFFFF29] text-white px-3 py-1 rounded-full mb-4 inline-block">
            LEAD GENERATION
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lead generation <br /> Service
          </h1>
          <p className="text-sm md:text-base max-w-md">
            Are you struggling to attract quality leads? Our lead generation services are here to help.
          </p>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-8 md:py-22 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* Left Text */}
        <motion.div className="mt-8 md:mt-20" variants={fadeUp}>
          <h2 className="text-3xl font-semibold mb-5 text-[#061C3A]">Targeted Approach</h2>
          <p className="text-sm text-[#333] mb-8">
            Employing advanced techniques to reach your ideal audience, ensuring every lead is a potential customer.
          </p>
          <h2 className="text-3xl font-semibold mb-5 text-[#061C3A]">Multi-Channel Strategy</h2>
          <p className="text-sm text-[#333]">
            Utilizing social media, email, content marketing, and more to maximize reach and engagement.
          </p>
        </motion.div>

        {/* Right Image Collage */}
        <motion.div className="flex flex-col md:flex-row gap-6 w-full" variants={fadeUp}>
          <div className="relative h-[300px] md:h-[300px] w-full md:w-1/2 rounded-xl overflow-hidden md:translate-y-14">
            <img src={lg1} alt="Main" className="w-full h-full object-cover" />
           <div className="relative h-[300px] md:h-[300px] w-full md:w-1/2 rounded-xl overflow-hidden md:translate-y-14">
  <img src={lg1} alt="Main" className="w-full h-full object-cover" />
</div>

          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="h-[240px] rounded-xl overflow-hidden">
              <img src={lg2} alt="Side 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-[180px] rounded-xl overflow-hidden">
              <img src={lg3} alt="Side 2" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Quality & Optimization */}
      <motion.section
        className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <motion.div variants={fadeUp}>
          <img src={lg4} alt="Lead Quality" className="rounded-xl w-full h-auto object-cover" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-semibold mb-5 text-[#061C3A]">Quality Over Quantity</h2>
          <p className="text-sm text-[#333] mb-8">
            Prioritizing quality leads, focusing on delivering prospects genuinely interested in your offer.
          </p>
          <h2 className="text-3xl font-semibold mb-5 text-[#061C3A]">Continuous Optimization</h2>
          <p className="text-sm text-[#333]">
            Constantly monitoring and optimizing strategies to ensure optimal performance, keeping your pipeline filled with high-quality leads.
          </p>
        </motion.div>
      </motion.section>

  <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let Us Organize Your Day
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
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
            <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
 
      <div className="mt-24" />
      <GetInTouch />
    </div>
    </>
  );
};

export default LeadGeneration;
