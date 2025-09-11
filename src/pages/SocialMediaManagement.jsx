import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import smm1 from '../assets/smm1.png';
import smm6 from '../assets/smm1.2.png';
import smm2 from '../assets/smm6.jpg';
import smm3 from '../assets/smm7.jpg';
import smm4 from '../assets/smm8.jpg';
import smm5 from '../assets/smm9.jpg';
import smm7 from '../assets/smm7.png';
import smm8 from '../assets/smm8.png';
import smm9 from '../assets/smm9.png';
import smmproject1 from '../assets/smmproject1.png';
import smmproject2 from '../assets/smmproject2.png';
import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";
import HelloSection from '../components/HelloSection';
import media1 from '../assets/media1.png';
import media2 from '../assets/media2.png';
import media3 from '../assets/media3.png';
import media4 from '../assets/media4.png';
import media5 from '../assets/media5.png';
import media6 from '../assets/media6.png';
import media7 from '../assets/media7.png';
import media8 from '../assets/media8.png';
import media9 from '../assets/media9.png';
// import GetInTouch from '../components/GetInTouch';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};

const bubbleFloat = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const services = [
  {
    img: media1,
    title: "Graphic Designing",
    desc: (
      <div className="text-left">
        Visuals that make your brand unforgettable. <br />
        - Design stunning assets <br />
        - Align with brand style <br />
        - Optimize for all platforms
      </div>
    ),
  },
  {
    img: media2,
    title: "Copywriting",
    desc: (
      <div className="text-left">
        Words that sell, engage, and resonate. <br />
        - Write clear, persuasive copy <br />
        - Match your brand voice <br />
        - Craft CTAs that convert
      </div>
    ),
  },
  {
    img: media3,
    title: "Logo Design",
    desc: (
      <div className="text-left">
        Your brand’s identity, brilliantly captured. <br />
        - Concept to final design <br />
        - Reflect brand personality <br />
        - Deliver all formats
      </div>
    ),
  },
  {
    img: media4,
    title: "Infographics Creation",
    desc: (
      <div className="text-left">
        Simplify complex info with great design. <br />
        - Visual data storytelling <br />
        - Branded infographic layouts <br />
        - Designed for easy sharing
      </div>
    ),
  },
  {
    img: media5,
    title: "Brochures, Flyers & Posters",
    desc: (
      <div className="text-left">
        Printed pieces that demand attention. <br />
        - Design print-ready layouts <br />
        - Highlight key messages <br />
        - Customize for any format
      </div>
    ),
  },
  {
    img: media6,
    title: "Developing Marketing Material",
    desc: (
      <div className="text-left">
        Tools that support your sales goals. <br />
        - Design branded assets <br />
        - Create consistent themes <br />
        - Adapt for print/digital
      </div>
    ),
  },
  {
    img: media7,
    title: "Animation & Motion Graphics",
    desc: (
      <div className="text-left">
        Bring your message to life with motion. <br />
        - Animate text & visuals <br />
        - Add branding & sound <br />
        - Create explainer videos
      </div>
    ),
  },
  {
    img: media8,
    title: "Voiceover Services",
    desc: (
      <div className="text-left">
        Professional voices to match your brand tone. <br />
        - Provide male/female voices <br />
        - Record in studio quality <br />
        - Sync with video/audio
      </div>
    ),
  },
  {
    img: media9,
    title: "Web Animation Design",
    desc: (
      <div className="text-left">
        Make your website interactive and alive. <br />
        - Animate buttons & banners <br />
        - Add visual effects <br />
        - Enhance user engagement
      </div>
    ),
  },
];


const SocialMediaManagement = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(null);

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

  return (
    <>
      <Helmet>
        <title>Virtual Assistant Social Media Management Services | Remote Marketing Support</title>
        <meta name="description" content="Grow your online presence with expert social media virtual assistants. Global Assist Inc offers remote social media management to help businesses engage and expand their audience." />
      </Helmet>
      <div className="font-roboto">
      {/* Hero Section */}
<motion.section
  className="pt-20 pb-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12"
  initial="hidden"
  animate="visible"
  viewport={{ once: false, amount: 0.3 }}
  variants={fadeUp}
>

        <motion.div variants={fadeUp}>
          <span className="text-xs font-semibold text-[#7A4DD7] uppercase tracking-wide bg-purple-100 px-3 py-1 rounded-full mb-4 inline-block">
            Welcome To The Global Assist
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A0D17] mb-4">
            SOCIAL MEDIA MANAGEMENT
          </h1>
          <p className="text-gray-600 mb-6 max-w-xl">
            Unlocking the Potential: Harnessing Social Media Marketing for Business Growth.
            Dive into the world of Social Media Marketing and unleash its full potential today.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#0A0D17] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition inline-block"
          >
            Get Started
          </button>
        </motion.div>
        <motion.div className="relative w-full" variants={fadeUp}>
          <img src={smm1} alt="Social Media Management" className="w-full max-w-md mx-auto" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold text-[#7A4DD7]">
            85% Sales Growth
          </div>
        </motion.div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <motion.div className="relative w-full" variants={fadeUp}>
          <img src={smm6} alt="Brand Storytelling" className="w-full max-w-md mx-auto" />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold text-[#7A4DD7]">
            85% Brands Joined
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <span className="text-xs font-semibold text-[#7A4DD7] uppercase tracking-wide mb-4 inline-block bg-[#EDE9FE] px-3 py-1 rounded-full">
            Story
          </span>
          <h2 className="text-4xl font-inter font-bold text-[#0A0D17] mb-4">
            Brand Storytelling
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-md">
            
          </p>
          <div className="flex items-start gap-3 mb-6 max-w-lg">
            <div className="w-6 h-6 flex-shrink-0 bg-[#EDE9FE] text-[#7A4DD7] rounded-full flex items-center justify-center">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.4-1.4z" />
              </svg>
            </div>
            <p className="text-gray-600 text-sm">
              Social media provides a platform for businesses to tell their brand story and connect with their audience on a deeper level.
            </p>
          </div>
          <div className="flex items-start gap-3 max-w-lg">
            <div className="w-6 h-6 flex-shrink-0 bg-[#EDE9FE] text-[#7A4DD7] rounded-full flex items-center justify-center">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.4-1.4z" />
              </svg>
            </div>
            <p className="text-gray-600 text-sm">
              By sharing behind-the-scenes content, company milestones, and employee stories, businesses can humanize their brand and foster stronger relationships with their followers.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Feedback Section with animated bubbles */}
      <motion.section
        className="relative bg-[#53389E] text-white py-20 px-6 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-sm font-semibold bg-[#6B46C1] bg-opacity-40 text-white px-4 py-1 rounded-full mb-4 inline-block">
            Feedback
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Feedback and Iteration</h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto mb-10">
            Social media allows businesses to receive instant feedback on their content through likes, comments, and shares. This feedback loop enables businesses to iterate and refine their content strategy based on what resonates most with their audience.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
  <img src={smm7} alt="Feedback Visual 1" className="w-30 h-30 object-cover rounded-md bg-white" />
  <img src={smm8} alt="Feedback Visual 2" className="w-30 h-30 object-cover rounded-md bg-white" />
  <img src={smm9} alt="Feedback Visual 3" className="w-30 h-30 object-cover rounded-md bg-white" />
</div>
        </div>

        {/* Animated Bubbles */}
        <motion.div className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full" variants={bubbleFloat} animate="animate" />
        <motion.div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full" variants={bubbleFloat} animate="animate" />
        <motion.div className="absolute bottom-6 left-10 w-8 h-8 bg-white rounded-full" variants={bubbleFloat} animate="animate" />
        <motion.div className="absolute bottom-6 right-10 w-8 h-8 bg-white rounded-full" variants={bubbleFloat} animate="animate" />
      </motion.section>

      {/* Analytics Section */}
      <motion.section
        className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <motion.div className="p-6 text-center rounded-2xl border border-[#E5DFFB] shadow-lg shadow-[#E5DFFB]/70 transition duration-300 hover:shadow-xl hover:shadow-[#CDBCF9]/60" variants={fadeUp}>
          <span className="text-xs font-semibold text-[#7A4DD7] uppercase tracking-wide mb-3 inline-block bg-[#EDE9FE] px-3 py-1 rounded-full">
            Analytics
          </span>
          <h3 className="text-2xl font-bold text-[#0A0D17] mb-3">
            Analytics and Optimization
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Social media analytics tools provide valuable data on content performance, including reach, engagement, and conversion metrics. By analyzing these metrics, businesses can optimize their content strategy to improve results over time.
          </p>
        </motion.div>
        <motion.div className="p-6 text-center rounded-2xl border border-[#E5DFFB] shadow-lg shadow-[#E5DFFB]/70 transition duration-300 hover:shadow-xl hover:shadow-[#CDBCF9]/60" variants={fadeUp}>
          <span className="text-xs font-semibold text-[#7A4DD7] uppercase tracking-wide mb-3 inline-block bg-[#EDE9FE] px-3 py-1 rounded-full">
            Visual
          </span>
          <h3 className="text-2xl font-bold text-[#0A0D17] mb-3">
            Visual Content
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Visual content performs exceptionally well on social media. Businesses can leverage platforms like Instagram, Pinterest, and TikTok to create and share visually appealing content, such as images, infographics, and videos, to engage their audience effectively.
          </p>
        </motion.div>
      </motion.section>
      
   <motion.section 
    className="px-6 md:px-12 lg:px-20 py-16 bg-white"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
    >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Creative that connects, converts, and captivates.
            </span>
          </h2>
        </div>

        {/* Intro text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-52 mb-12">
          <p className="text-lg font-semibold text-gray-800 leading-relaxed">
            Our Creative Services bring your brand to life through powerful visuals, compelling words, and meaningful storytelling.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you need a logo, a campaign, or an animated video—we craft standout content that inspires action and leaves a lasting impression.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
                key={idx} 
                className="flex flex-col items-center text-center"
                variants={fadeUp}
            >
              <div 
                className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => toggleService(idx)}
              >
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover/Tap Overlay */}
                <div
                  className={`absolute inset-0 bg-black/70 flex flex-col items-start justify-center text-white p-4 transition-all duration-500 md:opacity-0 md:transform md:-translate-x-full md:group-hover:opacity-100 md:group-hover:translate-x-0 ${
                    activeService === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                  }`}
                >
                  <p className="text-base text-left">
                    {service.desc}
                  </p>
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

        <div className="mt-24" />
        <HelloSection />
      </div>
    </>
  );
}

export default SocialMediaManagement;