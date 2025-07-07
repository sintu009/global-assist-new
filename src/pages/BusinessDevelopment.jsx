import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import smm2 from '../assets/smm2.png';
import smm3 from '../assets/smm3.png';
import smm4 from '../assets/smm4.png';
import smm5 from '../assets/smm5.png';
import bdHero from "../assets/bd-hero.png";
import bd2 from "../assets/bd2.png";
import GetInTouch from '../components/GetInTouch';
import bdproject1 from "../assets/bdproject1.png";
import bdproject2 from "../assets/bdproject2.png"; // Assuming you have a second project image

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
  return (
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
      We understand that navigating the complex landscape of business development can be daunting. 
      That’s why we’re here to offer you more than just services – we offer partnership...
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

{/* Projects Section */}
<section className="px-4 max-w-7xl mx-auto py-1">
  {/* Label */}
  <span className="text-xs font-semibold text-[#7A4DD7] bg-[#F1EBFF] px-4 py-1 rounded-full inline-block mb-4">
    Our Projects
  </span>

  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold font-roboto text-[#0A0D17] mb-4">
    Project We Have Done
  </h2>

  {/* Subtext */}
  <p className="text-gray-600 max-w-3xl mb-10 text-sm md:text-base text-left">
    
  </p>

  {/* Image Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <img
      src={bdproject1}
      alt="Project 1"
      className="rounded-2xl object-cover w-full h-[250px] md:h-[320px]"
    />
    <img
      src={bdproject2}
      alt="Project 2"
      className="rounded-2xl object-cover w-full h-[250px] md:h-[320px]"
    />
  </div>
</section>


      <div className="mt-24" />
      <GetInTouch />
    </div>
  );
}
