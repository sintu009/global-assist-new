import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import smm1 from '../assets/smm1.png';4
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

import GetInTouch from '../components/GetInTouch';

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

const SocialMediaManagement = () => {
  const navigate = useNavigate();
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
    <a href="https://drive.google.com/drive/folders/1q_JkJ3V1nK6gGMzfABsN5NZQMC2JCpGx" target="_blank" rel="noopener noreferrer">
      <img
        src={smmproject1}
        alt="Project 1"
        className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] cursor-pointer hover:opacity-80 transition"
      />
    </a>
    <a href="https://drive.google.com/drive/folders/1q_JkJ3V1nK6gGMzfABsN5NZQMC2JCpGx" target="_blank" rel="noopener noreferrer">
      <img
        src={smmproject2}
        alt="Project 2"
        className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] cursor-pointer hover:opacity-80 transition"
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

export default SocialMediaManagement;
