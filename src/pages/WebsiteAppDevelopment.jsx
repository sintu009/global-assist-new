import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroLaptop from "../assets/hero-laptop.png";
import heroPhone from "../assets/heroPhone.png";
import whyChoose from "../assets/why-choose.png";
import process from "../assets/process.png";
import portfolio from "../assets/portfolio.png";
import getStarted from "../assets/get-started.png";
import smm2 from "../assets/website1.png";
import smm3 from "../assets/website2.png";
import smm4 from "../assets/website3.png";
import smm5 from "../assets/website4.png";
import GetInTouch from "../components/GetInTouch";
import bgLines from "../assets/bg-lines.png";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import web7 from "../assets/web7.png";
import web8 from "../assets/web8.png";
import web9 from "../assets/web9.png";
import HelloSection from "../components/HelloSection";

// Animation wrapper
const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const WebsiteAppDevelopment = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (idx) => {
    setActiveService(activeService === idx ? null : idx);
  };

const services = [
  {
    img: web1,
    title: "Website Maintenance",
    desc: (
      <div className="text-left">
        Keep your site secure, smooth, and updated. <br />
        - Monitor & fix bugs <br />
        - Update plugins/themes <br />
        - Perform regular backups
      </div>
    ),
  },
  {
    img: web2,
    title: "Redesigning Website",
    desc: (
      <div className="text-left">
        Modern design with conversion in mind. <br />
        - Revamp outdated UI/UX <br />
        - Align with brand identity <br />
        - Improve user navigation
      </div>
    ),
  },
  {
    img: web3,
    title: "Content Update & Optimization",
    desc: (
      <div className="text-left">
        Keep your site fresh and search-ready. <br />
        - Update outdated info <br />
        - Improve keyword placement <br />
        - Optimize readability & flow
      </div>
    ),
  },
  {
    img: web4,
    title: "Blog Writing",
    desc: (
      <div className="text-left">
        Drive traffic with valuable content. <br />
        - Write SEO-optimized blogs <br />
        - Target audience-specific topics <br />
        - Maintain brand tone & voice
      </div>
    ),
  },
  {
    img: web5,
    title: "Product Listings",
    desc: (
      <div className="text-left">
        Showcase your offerings effectively. <br />
        - Add/update product details <br />
        - Optimize titles & descriptions <br />
        - Upload images & pricing
      </div>
    ),
  },
  {
    img: web6,
    title: "E-Commerce Integration & Optimization",
    desc: (
      <div className="text-left">
        Boost store performance & user flow. <br />
        - Connect payment gateways <br />
        - Improve checkout experience <br />
        - Sync inventory & logistics
      </div>
    ),
  },
  {
    img: web7,
    title: "Content Management System (CMS)",
    desc: (
      <div className="text-left">
        Manage content without the tech hassle. <br />
        - Set up or update CMS <br />
        - Organize site structure <br />
        - Provide content access control
      </div>
    ),
  },
  {
    img: web8,
    title: "SEO Optimization",
    desc: (
      <div className="text-left">
        Make your site Google’s favorite. <br />
        - Fix on-page SEO issues <br />
        - Improve metadata & tags <br />
        - Speed up load times
      </div>
    ),
  },
  {
    img: web9,
    title: "Custom Web Development",
    desc: (
      <div className="text-left">
        Tailored features to match your vision. <br />
        - Build unique site elements <br />
        - Add custom functionality <br />
        - Ensure mobile responsiveness
      </div>
    ),
  },
];

  return (
    <div className="font-roboto text-[#0f0e1b] bg-white">

      {/* HERO SECTION */}
      <section className="relative bg-[#0F172A] text-white w-full min-h-screen lg:h-[1300px] px-6 py-20 overflow-hidden font-roboto">
        <img src={bgLines} alt="Background Lines" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none -mt-6" />

        <FadeInSection>
          <div className="hidden lg:flex relative lg:top-45 z-10 w-full max-w-[1500px] mx-auto flex-row items-center justify-between px-20">
            <div className="flex-1 text-left mt-[-900px]">
              <span className="inline-block px-4 py-1 mb-4 text-xs bg-[#2e2c48] text-gray-300 rounded-full">
                Expert Website Development Services
              </span>
              <h1 className="text-7xl font-bold leading-tight">
                Crafting <br />
                Digital Experiences <br />
                That Inspire
              </h1>
            </div>

            <div className="relative flex flex-col items-center gap-0">
              <div className="relative z-10 translate-x-[100px] -translate-y-[180px]">
                <img src={heroPhone} alt="Phone" className="w-[400px]" />
              </div>
              <div className="relative z-10 translate-x-[-350px] translate-y-[50px]">
                <img src={heroLaptop} alt="Laptop" className="w-[1000px]" />
                <div className="absolute top-[30%] left-[105%] w-[320px] text-white text-base leading-relaxed mt-17">
                  In today’s digital age, businesses rely on meticulously crafted websites to excel.
                  At Global Assist, we provide tailored development services for your success.
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="block lg:hidden relative z-10 max-w-xl mx-auto text-center">
            <span className="inline-block px-4 py-1 mb-4 text-xs bg-[#2e2c48] text-gray-300 rounded-full">
              Expert Website Development Services
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
              Crafting <br />
              Digital Experiences <br />
              That Inspire
            </h1>
            <div className="mt-10 flex flex-col items-center gap-6">
              <img src={heroPhone} alt="Phone" className="w-32 sm:w-40" />
              <img src={heroLaptop} alt="Laptop" className="w-[90%] max-w-md" />
              <p className="text-sm sm:text-base mt-65 px-4 ">
                In today’s digital age, businesses rely on meticulously crafted websites to excel.
                At Global Assist, we provide tailored development services for your success.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* WHY CHOOSE US */}
      <FadeInSection>
        <section className="px-6 py-20 bg-white text-[#0f0e1b] max-w-[1280px] mx-auto font-['Roboto']">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
                WHY CHOOSE OUR WEBSITE <br /> DEVELOPMENT SERVICES?
              </h2>
              <p className="mb-4 text-[17px] text-[#797979] leading-relaxed">
                Discovering the right partner for website development is pivotal, and here's why our services stand out:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[17px] text-gray-800 leading-relaxed">
                <li><strong>Customized Solutions:</strong> Tailored website development aligns with your brand identity and business goals for a website that reflects your vision.</li>
                <li><strong>Responsive Design:</strong> Our websites adapt seamlessly across all devices, boosting user experience and search engine rankings.</li>
                <li><strong>SEO-Friendly:</strong> Optimized websites ensure better visibility online, following SEO best practices for higher rankings.</li>
                <li><strong>E-Commerce:</strong>We integrate secure, user-friendly online stores, streamlining the buying process for a seamless shopping experience.</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={whyChoose} alt="Why Choose Us" className="w-full max-w-[550px]" />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* DEVELOPMENT PROCESS */}
      <FadeInSection>
        <section className="bg-white py-20 px-6 text-[#0f0e1b] max-w-[1280px] mx-auto font-['Roboto']">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 flex justify-center">
              <img src={process} alt="Process" className="w-full max-w-[450px]" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
                OUR WEBSITE DEVELOPMENT <br /> PROCESS
              </h2>
              <p className="mb-4 text-[17px] text-[#797979] leading-relaxed">
                Our website development process is transparent, efficient, and collaborative, ensuring that your website is delivered on time and within budget. Here is an overview of our website development process:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[17px] text-gray-800 leading-relaxed">
                <li><strong>Discovery:</strong> We delve into your objectives, audience, and preferences, conducting thorough research to craft a website strategy aligned with your goals.</li>
                <li><strong>Design & Development:</strong> Our designers craft mockups while developers build your website with cutting-edge tech, prioritizing speed, security, scalability.</li>
                <li><strong>Testing:</strong> Before launch, we rigorously test your site for functionality, responsiveness, and performance optimization. We ensure compatibility across browsers/devices, test forms, links, and navigation.</li>
                <li><strong>Launch:</strong> Upon your approval, we deploy your site to the live server. Count on our support for smooth performance, maintenance, and training for independent website management.</li>
              </ul>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* PORTFOLIO */}
      <FadeInSection>
        <section className="bg-white py-20 px-6 text-[#0f0e1b] max-w-[1280px] mx-auto font-['Roboto']">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
                OUR WEBSITE DEVELOPMENT <br /> SERVICES PORTFOLIO
              </h2>
              <p className="mb-4 text-[17px] text-[#797979] leading-relaxed">
                Over the years, we've partnered with diverse industries, crafting impactful websites that boost online presence. Here are some standout projects:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[17px] text-gray-800 leading-relaxed">
                <li><strong>Fashion Brand E-Commerce:</strong>Our visually stunning site integrates secure payments, offering easy browsing and purchasing.</li>
                <li><strong>Consulting Firm Redesign:</strong>We revamped a dated site with a professional design, enhancing UX and service display.</li>
                <li><strong>Restaurant Website:</strong>Our responsive design includes menus, reservations, and social integration for seamless access and ordering.</li>
                <li><strong>Portfolio Showcase:</strong>We created a sleek showcase of our projects, highlighting diverse design and functionality expertise.</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={portfolio} alt="Portfolio" className="w-full max-w-[500px]" />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* GET STARTED */}
      <FadeInSection>
        <section className="bg-white py-20 px-6 text-[#0f0e1b] max-w-[1280px] mx-auto font-['Roboto']">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 flex justify-center">
              <img src={getStarted} alt="Get Started" className="w-full max-w-[600px]" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
                GET STARTED WITH OUR <br /> WEBSITE DEVELOPMENT SERVICES
              </h2>
              <p className="text-[17px] text-[#797979] leading-relaxed">
                In conclusion, investing in professional website development services is essential for businesses looking to establish a strong online presence and attract more customers. At Global assist, we are committed to delivering high-quality websites that not only meet but exceed your expectations. Our customized solutions, responsive design, SEO optimization, e-commerce integration, and content management systems ensure that your website stands out from the competition.

<br/><br/>Contact us today to get started on your website development project and take your online presence to the next level. Our experienced team will work closely with you to understand your requirements and deliver a website that not only looks great but also helps you achieve your business goals. Let us be your partner in creating a powerful online presence that drives results.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      
<section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            We transform outdated, slow, or underperforming websites into<br/>modern, high-converting digital experiences.
          </span>
        </h2>
      </div>

      {/* Intro text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-52 mb-12">
        <p className="text-lg font-semibold text-gray-800 leading-relaxed">
          From live chat to helpdesk management, we handle every query with professionalism and empathy.

        </p>
        <p className="text-gray-600 leading-relaxed">
          From redesign and mobile optimization to SEO, integrations, and maintenance—we ensure your site works beautifully, looks sharp, and drives results.

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
          </div>
        ))}
      </div>
    </section>

      <div className="mt-24" />
      <HelloSection />
    </div>
  );
};

export default WebsiteAppDevelopment;