import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import box4 from "../assets/box4.png";

import mem1 from "../assets/mem1.png";
import mem2 from "../assets/mem2.png";
import mem3 from "../assets/mem3.png";
import mem4 from "../assets/mem4.png";

import karla from "../assets/karla.png";
import gurjeet from "../assets/gurjeet.png";
import gema from "../assets/gema.png";
import gladys from "../assets/gladys.png";
import anjali from "../assets/anjali.png";
import jeizl from "../assets/jeizl.png";
import mary from "../assets/mary.png";
import arpita from "../assets/arpita.png";
import jonald from "../assets/jonald.png";
import ankita from "../assets/ankita.png";
import manish from "../assets/manish.png";
import alma from "../assets/alma.png";
import shubham from "../assets/shubham.png";
import jesus from "../assets/jesús.png";
import zubair from "../assets/zubair.png";
import manav from "../assets/manav.png";
import zunaira from "../assets/zunaira.png";
import mark from "../assets/mark.png";
import sneha from "../assets/sneha.png";
import aradhya from "../assets/aradhya.png";
import mandeep from "../assets/mandeep.png";
import ronit from "../assets/ronit.png";
import arka from "../assets/arka.png";
import parameswari from "../assets/parmeshwari.png";
import fiorella from "../assets/fiorella.png";

export default function TeamSection() {
  const team = [
    { id: 1, name: "Natasha Shukla", role: "Business Head", box: box1, img: mem1 },
    { id: 2, name: "Raina Gupta", role: "Opertions Manager", box: box2, img: mem2 },
    { id: 3, name: "Anushka Gupta", role: "Sales Manager", box: box3, img: mem3 },
    { id: 4, name: "Kanika Chauhan", role: "Project Manager", box: box4, img: mem4 },
    { id: 5, name: "Arpita Singh", role: "Administrative Assistant", box: box1, img: arpita },
    { id: 6, name: "Jonald Garlan", role: "Medical VA", box: box1, img: jonald },
    { id: 7, name: "Ankita", role: "Real Estate VA", box: box1, img: ankita },
    { id: 8, name: "Mary David", role: "Medical VA", box: box1, img: mary },
    { id: 9, name: "Karla Ron", role: "Admin Assistant", box: box1, img: karla },
    { id: 10, name: "GURJEET KAUR RANA", role: "Admin Assistant", box: box1, img: gurjeet },
    { id: 11, name: "Gema Rebolledo", role: "Administration & Social Media VA", box: box1, img: gema },
    { id: 12, name: "Gladys Verina", role: "Real estate VA", box: box1, img: gladys},
    { id: 13, name: "Anjali", role: "Insurance VA", box: box1, img: anjali },
    { id: 14, name: "Jeizl", role: "Medical VA", box: box1, img: jeizl },
    { id: 15, name: "Manish Khera", role: "Accountant & Bookkeeper", box: box1, img: manish },
    { id: 16, name: "Alma Narvaez", role: "Bookkeeper & Admin assistant", box: box1, img: alma },
    { id: 17, name: "Shubham", role: "Graphic Designer & Video Editor", box: box1, img: shubham },
    { id: 18, name: "Jesús R. Quero", role: "Journalist / VA Marketing", box: box1, img: jesus },
    { id: 19, name: "Mohd Zubair", role: "Web Developer", box: box1, img: zubair },
    { id: 20, name: "Manav Basotia", role: "Creative Marketing Specialist", box: box1, img: manav },
    { id: 21, name: "Zunaira", role: "Business Developer", box: box1, img: zunaira },
    { id: 22, name: "Mark", role: "Business Developer", box: box1, img: mark },
    { id: 23, name: "Sneha Rathode", role: "Appointment Setter", box: box1, img: sneha },
    { id: 24, name: "Aradhya Sinha", role: "Social Media Analyst", box: box1, img: aradhya },
    { id: 25, name: "Mandeep", role: "Data Analyst", box: box1, img: mandeep },
    { id: 26, name: "Ronit Singh Nayal", role: "Web Developer", box: box1, img: ronit },
    { id: 27, name: "Arka", role: "Digital Marketing Consultant", box: box1, img: arka },
    { id: 28, name: "Parameswari Roy", role: "Business Development Executive", box: box1, img: parameswari },
    { id: 29, name: "Fiorella Arias", role: "Real Estate transaction coordinator", box: box1, img: fiorella },
  ];

  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        handleScroll('right');
      }
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="w-full py-20 px-6 lg:px-8">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
        <div className="text-center lg:text-left">
          <p className="text-xl font-semibold uppercase tracking-wider">
            <span className="gradient-shine">Our Team</span>
          </p>
          <h2 className="text-4xl md:text-4xl font-bold mt-4 text-gray-900">
            Meet the minds shaping <br />
            <span className="gradient-shine">an industry</span>
          </h2>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-lg text-gray-600">
            Meet the talented members of our team who help drive our growth and deliver tailored virtual assistant solutions.
          </p>
        </div>
      </div>

      {/* Team Carousel */}
      <div className="max-w-7xl mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-10 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {team.map((member) => (
            <div key={member.id} className="group flex flex-col items-center flex-shrink-0 w-[70vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw]">
              <div className="relative w-full">
                <img
                  src={member.box}
                  alt={`Box for ${member.name}`}
                  className="w-[95%] rounded-2xl mx-auto"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[105%] max-w-[360px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-115"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg font-bold text-gray-900">{member.name}</p>
                <p className="text-sm italic text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => handleScroll('left')}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-700"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-700"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}