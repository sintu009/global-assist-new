import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";
import bdHero from "../assets/bd-hero.png";
import bd2 from "../assets/bd2.png";
import GetInTouch from '../components/GetInTouch';
import bdproject1 from "../assets/bdproject1.png";
import bdproject2 from "../assets/bdproject2.png"; // Assuming you have a second project image
import HelloSection from '../components/HelloSection';

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default function BusinessDevelopment () {

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
        <title>Virtual Assistant Business Development Services | Growth Support</title>
        <meta name="description" content="Drive business growth with expert virtual assistants. Global Assist Inc provides strategic support to help businesses expand and achieve their goals." />
      </Helmet>
      <div className="font-['Roboto'] text-[#0f0e1b] bg-white font-roboto">
      
      {/* HERO SECTION */}
      <motion.section
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  className="px-6 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
>
  <div className="flex-1">
    <span className="inline-block px-4 py-1 mb-4 text-xs bg-[#eae6ff] text-[#6941C6] rounded-full font-medium">
      Business Development
    </span>
    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#2F327D]">
      Global Assist: Your Partner in Business Development
    </h1>
    <p className="text-[#797979]">
      We understand that navigating the complex landscape of business development can be daunting. That's why we're here to offer you more than just services – we offer partnership. With a deep understanding of various industries and a commitment to your success, we stand ready to assist you in achieving your business goals.
    </p>
  </div>
  <div className="flex-1">
    <img src={bdHero} alt="Hero" className="w-full max-w-md mx-auto" />
  </div>
</motion.section>


      {/* EXPERIENCE & SOLUTIONS */}
      <AnimatedSection>
        <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img src={bd2} alt="Experience" className="w-full max-w-md mx-auto" />
          </div>
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-3 text-[#061C3A]">Experience</h2>
              <p className="text-[#4D4D4D]">
                With years of experience in business development, we have a proven track record of delivering 
                results for our clients. We’ve helped businesses across industries achieve their goals.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-3 text-[#061C3A]">Tailored Solutions</h2>
              <p className="text-[#4D4D4D]">
                We understand that every business is unique, which is why we take a customized approach to each client. 
                Our solutions are tailored to your specific needs, ensuring maximum effectiveness and ROI.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SUPPORT & RESULTS */}
      <AnimatedSection>
        <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-3 text-[#061C3A]">Dedicated Support</h2>
              <p className="text-[#4D4D4D]">
                When you partner with Global Assist, you’re not just another client – you’re part of our family. 
                Our dedicated team will be by your side every step of the way, offering guidance, support, and 
                expertise whenever you need it.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-3 text-[#061C3A]">Proven Results</h2>
              <p className="text-[#4D4D4D]">
                Don’t just take our word for it – our results speak for themselves. We’ve helped countless businesses 
                increase their revenue, expand their market reach, and achieve sustainable growth.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img src={bd2} alt="Support" className="w-full max-w-md mx-auto" />
          </div>
        </section>
      </AnimatedSection>


      <div className="mt-24" />
      <HelloSection />
    </div>
    </>
  );
}
