import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ve1 from '../assets/ve1.png';
import ve2 from '../assets/ve2.png';
import ve3 from '../assets/ve3.png';
import veBg from '../assets/ve.bg.png';
import veproject1 from '../assets/veproject1.png';
import veproject2 from '../assets/veproject2.png';
import GetInTouch from '../components/GetInTouch';
import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";
import HelloSection from '../components/HelloSection';
import video1 from '../assets/video1.png';
import video2 from '../assets/video2.png';
import video3 from '../assets/video3.png';
import video4 from '../assets/video4.png';
import video5 from '../assets/video5.png';
import video6 from '../assets/video6.png';

const services = [
  {
    img: video1,
    title: "Basic Video Editing",
    desc: (
      <div className="text-left">
        - Cutting, trimming & merging clips <br />
        - Adding transitions & smooth flow <br />
        - Color correction & color grading
      </div>
    ),
  },
  {
    img: video2,
    title: "Creative Enhancements",
    desc: (
      <div className="text-left">
        - Adding titles, subtitles, & captions <br />
        - Custom intros & outros <br />
        - Motion graphics & lower thirds
      </div>
    ),
  },
  {
    img: video3,
    title: "Social Media Video Editing",
    desc: (
      <div className="text-left">
        - Reels & TikTok edits (vertical format, trending cuts, music sync) <br />
        - YouTube shorts & long-form content optimization <br />
        - Social media ad editing (Facebook, Instagram, LinkedIn, etc.)
      </div>
    ),
  },
  {
    img: video4,
    title: "Branding & Design",
    desc: (
      <div className="text-left">
        - Adding logos, watermarks & brand elements <br />
        - Branded templates for consistency <br />
        - Thumbnail creation for YouTube & social media
      </div>
    ),
  },
  {
    img: video5,
    title: "Content-Specific Editing",
    desc: (
      <div className="text-left">
        - Corporate & training videos <br />
        - Real estate walk-through videos <br />
        - Event highlights (weddings, parties, conferences) <br />
        - Podcasts (audio + video edits)
      </div>
    ),
  },
  {
    img: video6,
    title: "Advanced Editing & Production",
    desc: (
      <div className="text-left">
        - Multi-camera editing <br />
        - Green screen keying <br />
        - Adding stock footage & music
      </div>
    ),
  },
];



const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.3 } },
};

const AnimatedSection = ({ children, className }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const VideoEditing = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

  return (
    <>
      <Helmet>
        <title>Virtual Assistant Video Editing Services | Professional Video Editors</title>
        <meta name="description" content="Get high-quality video editing with expert virtual assistants. Global Assist Inc provides professional video editing services to enhance your content efficiently." />
      </Helmet>
      <section className="font-['Roboto'] text-[#0A0D17]">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={heroVisible ? { opacity: 1, y: 0, transition: { duration: 1.3 } } : {}}
      >
        <div
          className="bg-cover bg-center bg-no-repeat py-20 px-6 text-center"
          style={{ backgroundImage: `url(${veBg})` }}
        >
          <span className="text-xs font-semibold text-[#7A4DD7] uppercase tracking-wide mb-4 inline-block bg-purple-200 px-3 py-2 rounded-full">
            Video Editing
          </span>
          <h1 className="text-3xl md:text-5xl font-inter font-bold mb-10">
            Engage Viewers: Your Premier <br /> Video Editing Solution
          </h1>
          <div className="max-w-4xl mx-auto rounded-xl shadow-xl overflow-hidden">
            <img src={ve1} alt="Video Editing Preview" className="w-full" />
          </div>
        </div>
      </motion.div>

      {/* Info Section */}
      <AnimatedSection className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center text-base md:text-lg text-[#555] mb-20">
          <p>
            Are you tired of spending countless hours trying to perfect your videos? Do you wish there was a way to elevate your content without the hassle? Look no further — Global Assist is here to revolutionize your video editing experience.
            <br /><br />
            At Global Assist, we understand the challenges content creators face. Whether you're a YouTuber, filmmaker, or business owner, creating visually stunning videos can be a time-consuming and daunting task. That’s where we come in. Our team of skilled professionals is dedicated to providing you with top-notch video editing services that will take your content to the next level.
          </p>
        </div>
      </AnimatedSection>

      {/* Top Feature Row */}
      <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center mb-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-inter font-bold mb-5">PROFESSIONALISM</h3>
            <p className="text-[#555]">
              When you work with Global Assist, you're partnering with a team of experienced professionals who are passionate about video editing. We take the time to understand your vision and deliver results that exceed your expectations.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-inter font-bold mb-5">CUSTOMIZATION</h3>
            <p className="text-[#555]">
              We understand that every project is unique, which is why we offer customizable editing solutions tailored to your specific needs. Whether you need basic cuts and color correction or complex visual effects and animation, we’ve got you covered.
            </p>
          </div>
        </div>
        <div>
          <img src={ve2} alt="Video Editing" className="rounded-xl w-3/4 mx-auto" />
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid md:grid-cols-2 gap-12 items-center px-6 max-w-7xl mx-auto">
  {/* Desktop Image */}
  <div className="hidden md:block">
    <img src={ve3} alt="Video Editing 2" className="rounded-xl w-3/4 mx-auto" />
  </div>

  {/* Text Content */}
  <div className="space-y-12">
    <div>
      <h3 className="text-2xl md:text-3xl font-inter font-bold mb-5">FAST TURNAROUND</h3>
      <p className="text-[#555]">
        Time is of the essence, especially in the world of content creation. With our efficient workflow and quick turnaround times, you can rest assured that your videos will be delivered on schedule without sacrificing quality.
      </p>
    </div>
    <div>
      <h3 className="text-2xl md:text-3xl font-inter font-bold mb-5">AFFORDABILITY</h3>
      <p className="text-[#555]">
        Quality video editing shouldn’t break the bank. At Global Assist, we offer competitive pricing options to suit any budget. Whether you're a seasoned professional or just starting out, our services are accessible to all.
      </p>
    </div>
  </div>
</AnimatedSection>

{/* Mobile Image Below Text */}
<div className="block md:hidden px-6 max-w-7xl mx-auto mt-12">
  <img src={ve3} alt="Video Editing 2" className="rounded-xl w-3/4 mx-auto mb-12" />
</div>

<div className='mt-24'/>


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
            <div className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => toggleService(idx)}>
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-78 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
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
          </div>
        ))}
      </div>
    </section>

      <div className="mt-24" />
      <HelloSection/>
    </section>
    </>
  );
}
export default VideoEditing;