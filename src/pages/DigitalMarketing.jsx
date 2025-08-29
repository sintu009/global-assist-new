import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import dm1 from "../assets/dm1.png";
import dm2 from "../assets/dm2.png";
import dm3 from "../assets/dm3.png";
import dm4 from "../assets/dm4.png";
import dm5 from "../assets/dm5.png";
import dmproject1 from "../assets/dmproject1.png";
import dmproject2 from "../assets/dmproject2.png";
import GetInTouch from "../components/GetInTouch";
import { CalendarDays, Mail } from "lucide-react";
import dmBg from "../assets/dm-bg.png";
import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";

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

  return (
    <>
      <Helmet>
        <title>Virtual Assistant Digital Marketing Services | SEO & Online Marketing Support</title>
        <meta name="description" content="Enhance your online presence with expert digital marketing virtual assistants. Global Assist Inc offers SEO, social media, and marketing support to grow your business." />
      </Helmet>
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
<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B0752] leading-snug md:leading-tight mb-6 break-words tracking-tight">
  Grow your company <br />
  and improve your digital <br />
  marketing
</h1>

            <p className="text-[#555] text-base md:text-lg leading-relaxed">
              Global Assist Inc. is a leading 360-degree Business solution firm with offices in the USA, Canada, India, and the Philippines and branches spread globally. We identify with the importance of your work and make sure that your requirements are looked after in the best way possible.
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
      "Gain valuable insights into your target audience and market trends with our data-driven approach. We leverage cutting-edge analytics tools to inform every aspect of your digital marketing strategy, ensuring maximum impact and ROI.",
    reverse: false,
  },
  {
    image: dm3,
    title: "SEAMLESS\nINTEGRATION",
    text:
      "Worried about compatibility with your existing marketing tools? Our solutions seamlessly integrate with popular platforms such as Google Analytics, HubSpot, and Adobe Marketing Cloud, ensuring smooth workflow and enhanced efficiency.",
    reverse: true,
  },
  {
    image: dm4,
    title: "ENGAGING\nCONTENT",
    text:
      "Captivate your audience with compelling content tailored to their interests and preferences. From engaging social media posts to captivating video campaigns, we craft content that resonates with your audience and drives meaningful engagement.",
    reverse: false,
  },
  {
    image: dm5,
    title: "CUSTOMER-CENTRIC\nAPPROACH",
    text:
      "Delight your audience with hyper-targeted content and data-driven insights, fostering meaningful connections and long-term loyalty.",
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

      {/* Contact Form */}
      <div className="mt-24" />
      <GetInTouch />
    </section>
    </>
  );
};

export default DigitalMarketing;
