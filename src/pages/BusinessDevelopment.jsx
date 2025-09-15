import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bdHero from "../assets/bd-hero.png";
import bd2 from "../assets/bd2.png";
import GetInTouch from '../components/GetInTouch';
import bdproject1 from "../assets/bdproject1.png";
import bdproject2 from "../assets/bdproject2.png";
import HelloSection from '../components/HelloSection';

// Imports for the new section's images
import media1 from '../assets/media1.png';
import media2 from '../assets/media2.png';
import media3 from '../assets/media3.png';
import media4 from '../assets/media4.png';
import media5 from '../assets/media5.png';
import media6 from '../assets/media6.png';
import media7 from '../assets/media7.png';
import media8 from '../assets/media8.png';
import media9 from '../assets/media9.png';

import sale1 from '../assets/sale1.jpg';
import sale2 from '../assets/sale2.jpg';
import sale3 from '../assets/sale3.jpg';
import sale4 from '../assets/sale4.jpg';
import sale5 from '../assets/sale5.jpg';
import sale6 from '../assets/sale6.jpg';

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

// Animation variant for the new section
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
};

export default function BusinessDevelopment() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

  const services = [
  {
    img: sale1,
    title: "Strategy & Market Research",
    desc: (
      <div className="text-left">
        Business Growth Strategy – Define short- and long-term goals, market positioning, and revenue models. <br />
        Market & Competitor Analysis – Identify gaps, new opportunities, and trends. <br />
        Target Audience Development – Build Ideal Customer Profiles (ICPs) and buyer personas.
      </div>
    ),
  },
  {
    img: sale2,
    title: "Partnership & Networking",
    desc: (
      <div className="text-left">
        Strategic Partnerships / Alliances – Identify, approach, and negotiate with potential partners. <br />
        Channel / Reseller Development – Build distribution or affiliate channels. <br />
        Industry Event Representation – Attend expos, conferences, and networking events to generate leads.
      </div>
    ),
  },
  {
    img: sale3,
    title: "Lead Generation & Client Acquisition",
    desc: (
      <div className="text-left">
        Outbound Prospecting – Email, LinkedIn, and phone outreach to targeted prospects. <br />
        Inbound Strategy Support – Help create funnels, content, and offers to attract leads. <br />
        Appointment Setting / Demo Scheduling – Hand-off warm leads to sales teams.
      </div>
    ),
  },
  {
    img: sale4,
    title: "Training & Consulting",
    desc: (
      <div className="text-left">
        Sales & BD Training – Train staff on prospecting, negotiation, and relationship management. <br />
        Negotiation & Closing Techniques – Improve deal size and conversion rates. <br />
        Account Management & Customer Success – Build retention and referral systems.
      </div>
    ),
  },
  {
    img: sale5,
    title: "Reporting & Continuous Improvement",
    desc: (
      <div className="text-left">
        Weekly/Monthly BD Reporting – Track activity, opportunities, and revenue impact. <br />
        Market Feedback Loop – Gather insights from clients to improve offerings. <br />
        Competitive Intelligence Updates – Ongoing monitoring of industry trends.
      </div>
    ),
  },
  {
    img: sale6,
    title: "Sales Pipeline & Process Optimization",
    desc: (
      <div className="text-left">
        Pipeline Development – Design and optimize stages from lead to close. <br />
        Sales Playbook Creation – Scripts, objection handling, outreach templates. <br />
        Automation & Tools – Implement sales/marketing automation tools (HubSpot, Zoho, Pipedrive, etc.).
      </div>
    ),
  },
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

        {/* --- ADDED SECTION START --- */}
        <motion.section
          className="px-6 md:px-12 lg:px-20 py-16 bg-white overflow-hidden"
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
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-78 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
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
        {/* --- ADDED SECTION END --- */}

        <div className="mt-24" />
        <HelloSection />
      </div>
    </>
  );
}