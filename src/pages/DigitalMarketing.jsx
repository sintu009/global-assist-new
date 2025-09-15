import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import dm1 from "../assets/dm1.png";
import dm2 from "../assets/dm2.png";
import dm3 from "../assets/dm3.png";
import dm4 from "../assets/dm4.png";
import dm5 from "../assets/dm5.png";
import dm01 from "../assets/dm01.png";
import dm02 from "../assets/dm02.png";
import dm03 from "../assets/dm03.png";
import dm04 from "../assets/dm04.png";
import dm05 from "../assets/dm05.png";
import dm06 from "../assets/dm06.png";
import dm07 from "../assets/dm07.png";
import dm08 from "../assets/dm08.png";
import dm09 from "../assets/dm09.png";
import dm10 from "../assets/dm10.png";
import dm11 from "../assets/dm11.png";
import dm12 from "../assets/dm12.png";
import GetInTouch from "../components/GetInTouch";
import { CalendarDays, Mail } from "lucide-react";
import dmBg from "../assets/dm-bg.png";
import email from "../assets/email.png";
import calendar from "../assets/calender.png";
import work from "../assets/work.png";
import files from "../assets/files.png";
import travel from "../assets/travel.png";
import meet from "../assets/meet.png";
import HelloSection from "../components/HelloSection";


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
  const [activeService, setActiveService] = useState(null);

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

const services = [
  {
    img: dm01,
    title: "Social Media Management",
    desc: (
      <div className="text-left">
        We grow your presence, engagement & brand identity. <br />
        - Schedule & publish content <br />
        - Manage comments & DMs <br />
        - Analyze performance metrics
      </div>
    ),
  },
  {
    img: dm02,
    title: "Graphics, Video & Content Creation",
    desc: (
      <div className="text-left">
        Visuals that inspire, inform & convert. <br />
        - Design scroll-stopping graphics <br />
        - Edit brand-driven videos <br />
        - Create compelling content
      </div>
    ),
  },
  {
    img: dm03,
    title: "Facebook Marketplace",
    desc: (
      <div className="text-left">
        Sell more through a highly active platform. <br />
        - Post and optimize listings <br />
        - Respond to buyer inquiries <br />
        - Track conversions & interest
      </div>
    ),
  },
  {
    img: dm04,
    title: "Instagram Business",
    desc: (
      <div className="text-left">
        Turn your feed into a sales funnel. <br />
        - Set up & optimize profile <br />
        - Create & schedule posts/stories <br />
        - Analyze engagement data
      </div>
    ),
  },
  {
    img: dm05,
    title: "Social Media Advertising",
    desc: (
      <div className="text-left">
        Targeted ads that drive real ROI. <br />
        - Build ad creatives <br />
        - Set audience targeting <br />
        - Optimize for performance
      </div>
    ),
  },
  {
    img: dm06,
    title: "Influencer Outreach & Collaboration",
    desc: (
      <div className="text-left">
        Partner with the voices your audience trusts. <br />
        - Identify aligned influencers <br />
        - Pitch & negotiate deals <br />
        - Track engagement & reach
      </div>
    ),
  },
  {
    img: dm07,
    title: "SEO",
    desc: (
      <div className="text-left">
        Rank higher, get found faster. <br />
        - On-page SEO optimization <br />
        - Technical SEO audits <br />
        - Backlink & authority building
      </div>
    ),
  },
  {
    img: dm08,
    title: "Email Marketing",
    desc: (
      <div className="text-left">
        Engaging emails that convert and retain. <br />
        - Design & write campaigns <br />
        - Segment audience lists <br />
        - Analyze open & click rates
      </div>
    ),
  },
  {
    img: dm09,
    title: "Automations",
    desc: (
      <div className="text-left">
        Let marketing work while you sleep. <br />
        - Set up email flows <br />
        - Create nurture sequences <br />
        - Trigger smart actions
      </div>
    ),
  },
  {
    img: dm10,
    title: "Paid Ads (Google Ads, PPC)",
    desc: (
      <div className="text-left">
        Maximize traffic, leads & sales. <br />
        - Set up ad campaigns <br />
        - Optimize keywords & bids <br />
        - Monitor ad performance
      </div>
    ),
  },
  {
    img: dm11,
    title: "Lead Magnets",
    desc: (
      <div className="text-left">
        Attract leads with irresistible offers. <br />
        - Design downloadable assets <br />
        - Set up delivery funnels <br />
        - Track downloads & signups
      </div>
    ),
  },
  {
    img: dm12,
    title: "Landing Pages",
    desc: (
      <div className="text-left">
        High-converting pages made to sell. <br />
        - Design compelling layouts <br />
        - Write persuasive copy <br />
        - A/B test for conversions
      </div>
    ),
  },
];


  return (
    <>
      <Helmet>
        <title>Virtual Assistant Digital Marketing Services | SEO & Online Marketing Support</title>
        <meta name="description" content="Enhance your online presence with expert digital marketing virtual assistants. Global Assist Inc offers SEO, social media, and marketing support to grow your business." />
      </Helmet>
      <section className="font-['Roboto'] text-[#0A0D17] overflow-x-hidden scrollbar-hide">
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


        <motion.section 
            className="px-6 md:px-12 lg:px-20 py-16 bg-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05 }}
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                We make growth go viral
              </span>
            </h2>
          </div>

          {/* Intro text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-52 mb-12">
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              We craft data-driven digital marketing strategies that <br/>bring your brand to life online.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From SEO and paid ads to social media, content, and funnels—our campaigns are designed to grow your visibility and boost conversions. We don't just get you clicks; we bring you qualified leads. Whether you’re launching or scaling, we’re your creative and analytical partner in digital dominance. Results? We deliver them. Consistently.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.05 }}
              >
                <div className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
                  onClick={() => toggleService(idx)}>
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

        {/* Contact Form */}
        <div className="mt-24" />
        <HelloSection/>
      </section>
    </>
  );
};

export default DigitalMarketing;