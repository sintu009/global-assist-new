import React, { useRef, useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import Laiminaimg from "../assets/team/Laimina-Methuselha.jpg";
import charlesimg from "../assets/team/Charles-Methuselha.jpg";
import bertaBernalsImg from "../assets/team/berta-bernals.png";
import juiTollenImg from "../assets/team/jui-tollen.png";
import mark from "../assets/team/mark.jpg";
import mandeep from "../assets/team/mandeep.jpg";
import aradhya from "../assets/team/Aradhya.png";
import manav from "../assets/team/Manav.png";
import anjali from "../assets/team/anushka.jpg";
import natasha from '../assets/team/Natasha.jpg';
import jonald from "../assets/team/Jonald.jpeg";
import sneha from "../assets/team/sneha.jpg";
import zubair from "../assets/team/zubair.jpg";
import ronit from "../assets/team/ronit.jpg";
import kanika from "../assets/team/kanika.jpg";
import raina from "../assets/team/raina.jpg";
import shubham from "../assets/team/shubham.jpg";
import arpita from "../assets/team/arpita.jpg";
import alma from "../assets/team/alma.jpg";
import jesus from "../assets/team/jesus.png";
import manish from "../assets/team/manish.jpg";
import arka from "../assets/team/arka.jpg";
import ankita from "../assets/team/ankita.jpg";
import zunaira from "../assets/team/zunaira.jpg";
import roy from "../assets/team/roy.jpg";
import gurjeet from "../assets/team/gurjeet.jpg";
import gema from "../assets/team/gema.png";
import arias from "../assets/team/arias.jpg";
import anjali2 from "../assets/team/anjali.jpg";

// Team Card Component
const OtherTeamMemberCard = ({ image, name, title, linkedin }) => (
  <div className="flex flex-col items-center text-center">
    <img src={image} alt={name} className="w-56 h-60 rounded-lg object-cover mb-3" />
    <p className="text-purple-700 text-sm font-medium">{title}</p>
    <h4 className="text-base font-semibold text-gray-900">{name}</h4>
    {linkedin && (
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 mt-1 hover:text-blue-800"
      >
        <FaLinkedin size={20} />
      </a>
    )}
  </div>
);

const OurTeamSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const teamMembers = [
    { image: arpita, name: "Arpita Singh", title: "Administrative Assistant" },
    { image: shubham, name: "Shubham", title: "Graphic Designer & Video Editor" },
    { image: raina, name: "Raina Gupta", title: "Opertions Manager" },
    { image: jonald, name: "Jonald Garlan", title: "Virtual Assistant" },
    { image: jesus, name: "Jesús R. Quero", title: "Journalist / VA Marketing" },
    { image: kanika, name: "Kanika Chauhan", title: "Project Manager" },
    { image: natasha, name: "Natasha Shukla", title: "Project Manager" },
    { image: zubair, name: "Mohd Zubair", title: "Web Developer" },
    { image: manav, name: "Manav Basotia", title: "Creative Marketing Specialist" },
    { image: zunaira, name: "Zunaira", title: "Business Developer" },
    { image: mark, name: "Mark", title: "Business Developer" },
    { image: sneha, name: "Sneha Rathode", title: "Appointment Setter" },
    { image: aradhya, name: "Aradhya Sinha", title: "Business Development Manager" },
    { image: mandeep, name: "Mandeep", title: "Data Analyst" },
    { image: anjali, name: "Anushka Gupta", title: "BDM & Sales Lead" },
    { image: ronit, name: "Ronit Singh Nayal", title: "Web Developer" },
    { image: manish, name: "Manish Khera", title: "Accountant & Bookkeeper" },
    { image: alma, name: "Alma Narvaez", title: "Bookkeeper & Admin assistant" },
    { image: arka, name: "Arka", title: "Digital Marketing Consultant" },
    { image: ankita, name: "Ankita", title: "Virtual Assistant" },
    { image: roy, name: "Parameswari Roy ", title: "Business Development Executive" },
    { image: gurjeet, name: "GURJEET KAUR RANA", title: "Virtual Assistant" },
    { image: gema, name: "Gema Rebolledo", title: "Administration & Social Media VA" },
    { image: arias, name: "Fiorella Arias", title: "Real Estate transaction coordinator" },
    { image: anjali2, name: "Anjali", title: "Sales and Business Development" },
  ];

  const ceoData = {
    name: "Laimina Methuselha",
    title: "FOUNDER and CEO",
    image: Laiminaimg,
    shortDesc: "Meet Lamina Methuselha, the visionary founder and CEO behind Global Assist Inc...",
    fullDesc: "Meet Lamina Methuselha, the visionary founder and CEO behind Global Assist Inc,. a dynamic and growing organization revolutionizing outsourcing and virtual work solutions for small and mid-size firms by providing more employment opportunities and delivering innovative virtual solutions that empower business to thrive in today’s dynamic landscape.Lamina's professional journey, with an impressive 15 years of corporate expertise, reflects her unwavering commitment to excellence. Having spearheaded a successful staffing brand for 8 years, she transitioned to establish Global Assist Inc. as her own visionary venture. Her mission? To bridge the gap for small and mid-size businesses by connecting them with top-tier talent, thereby combatting unemployment while enabling individuals to pursue their passions from the comfort of their homes. Beyond her professional pursuits, Lamina is a devoted mother of two who cherishes quality time spent with her family and delights in exploring new destinations through travel.",
    linkedin: "https://www.linkedin.com/in/laimina-m-824a89137/"
  };

  const cooData = {
    name: "Charles Methuselha",
    title: "CO-FOUNDER and COO",
    image: charlesimg,
    shortDesc: "Introducing Charles Methuselha, the dynamic Co-Founder and Chief Operating Officer...",
    fullDesc: "Introducing Charles Methuselha, the dynamic Co-Founder and Chief Operating Officer driving innovation and efficiency at Global Assist Inc. With a keen focus on creating robust SOPs, implementing protocols, and optimizing systems, Charles plays a pivotal role in ensuring the organization operates seamlessly.Boasting an impressive 25 years of multifaceted experience across diverse industries including Recruiting, Real Estate, Corporate, ITES, BPO, KPO, and Aviation, Charles brings a wealth of expertise to the table. His extensive background spans key domains such as Operations, Sales, Business Development, Training, and Administration, making him a versatile leader adept at navigating complex challenges and driving strategic growth initiatives.Beyond his professional prowess, Charles is fueled by a passion for fast cars and engineering, embodying a perfect blend of work and play. While he thrives in the fast-paced business world, he also understands the importance of family, always prioritizing quality time with loved ones.",
    linkedin: "https://www.linkedin.com/in/charles-methuselha-302ba8a5/"
  };

  const [showFull, setShowFull] = useState({ ceo: false, coo: false });

  const handleToggle = (key) => {
    setShowFull((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      const visibleWidth = scrollContainer.offsetWidth;
      const index = Math.round(scrollContainer.scrollLeft / visibleWidth);
      setActiveIndex(index);
    };

    const handleResize = () => {
      const visibleWidth = scrollContainer.offsetWidth;
      const totalWidth = scrollContainer.scrollWidth;
      setMaxIndex(Math.ceil(totalWidth / visibleWidth) - 1);
    };

    handleResize();
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full bg-white py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">OUR TEAM</h2>
        <h3 className="text-2xl md:text-4xl text-gray-900 mb-10">
          Meet the minds shaping <span className="text-purple-700">an industry</span>
        </h3>

        {/* CEO & COO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[{ ...ceoData, key: "ceo" }, { ...cooData, key: "coo" }].map((person) => (
            <div key={person.key} className="flex flex-col sm:flex-row items-start p-6 bg-gray-50 rounded-lg shadow-sm">
              <img src={person.image} alt={person.name} className="w-48 h-56 sm:w-56 sm:h-64 rounded-lg object-cover mb-4 sm:mb-0 sm:mr-6" />
              <div>
                <p className="text-purple-700 text-xs font-medium uppercase mb-1">{person.title}</p>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{person.name}</h4>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 hover:text-blue-800 mb-2">
                  <FaLinkedin size={20} />
                </a>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {showFull[person.key] ? person.fullDesc : person.shortDesc}
                </p>
                <button className="text-purple-600 text-sm mt-2 underline" onClick={() => handleToggle(person.key)}>
                  {showFull[person.key] ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scrollable Team List */}
        <div className="relative mt-4">
          <div className="overflow-x-auto hide-scrollbar" ref={scrollRef}>
            <div className="flex gap-6 min-w-max pb-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex-none w-48 sm:w-56">
                  <OtherTeamMemberCard {...member} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows + Dot Progress */}
          <div className="flex items-center justify-center gap-6 mt-6">
            {/* Left Arrow */}
            <button
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: "smooth" });
                }
              }}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>

            {/* Dot Progress Bar */}
            <div className="relative w-48 h-1 bg-gray-300 rounded">
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-800 rounded-full transition-all duration-300"
                style={{
                  left: `calc(${(activeIndex / (maxIndex || 1)) * 100}% - 8px)`
                }}
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: "smooth" });
                }
              }}
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
