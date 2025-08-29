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

  useEffect(() => {
    setHeroVisible(true);
  }, []);

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
        src={veproject2}
        alt="Project 1"
        className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] transition hover:scale-105"
      />
    </a>
    <a href="https://drive.google.com/drive/folders/1q_JkJ3V1nK6gGMzfABsN5NZQMC2JCpGx" target="_blank" rel="noopener noreferrer">
      <img
        src={veproject1}
        alt="Project 2"
        className="rounded-2xl object-cover w-full h-[250px] md:h-[320px] transition hover:scale-105"
      />
    </a>
  </div>
</section>

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
    </section>
    </>
  );
}
export default VideoEditing;
