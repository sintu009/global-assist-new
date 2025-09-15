import React, { useEffect, useRef, useState } from "react";
import stepImage from "../assets/img.png";
import hiw2 from "../assets/hiw2.jpg";
import hiw3 from "../assets/hiw3.jpg";
import hiw4 from "../assets/hiw4.jpg";
import hiw5 from "../assets/hiw5.jpg";
import hiw6 from "../assets/hiw6.jpg";
import hiw7 from "../assets/hiw7.jpg";
import hiw8 from "../assets/hiw8.jpg";

const steps = [
  {
    id: 1,
    desc: "Manage your calendar",
    text: "Manage complex personal and team calendars, and coordinate times for team meetings.",
    image: stepImage,
  },
  {
    id: 2,
    desc: "Basic research and reports",
    text: "Gather data from different platforms and produce reports and insights as required.",
    image: hiw2,
  },
  {
    id: 3,
    desc: "Receive Your Calls",
    text: "Your assistant can handle your phone calls, take notes, and attend/route them as required.",
    image: hiw3,
  },
  {
    id: 4,
    desc: "Make travel arrangements",
    text: "Your Assistant prepares itineraries for company executives, books hotels and cars, and more.",
    image: hiw4,
  },
  {
    id: 5,
    desc: "Respond to your emails",
    text: "Let your assistant manage emails, conduct follow-ups, forward important and urgent emails.",
    image: hiw5,
  },
  {
    id: 6,
    desc: "Order products and supplies",
    text: "Take care of miscellaneous needs such as ordering office supplies, furniture, team lunch, etc.",
    image: hiw6,
  },
  {
    id: 7,
    desc: "Handle CRM tools",
    text: "Your assistant can input and update records and collect information for your CRM tools.",
    image: hiw7,
  },
  {
    id: 8,
    desc: "Track expenses and invoices",
    text: "Creates or sends statements or invoices, track payments, and record company expenses.",
    image: hiw8,
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;

      const distanceScrolled = Math.min(
        sectionHeight,
        Math.max(0, scrollY - sectionTop)
      );

      setProgressHeight((distanceScrolled / sectionHeight) * 100);

      const revealed = steps.map((_, index) => {
        const stepTop = sectionTop + index * 300;
        return scrollY > stepTop;
      });
      setVisibleSteps(revealed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 px-4 max-w-6xl mx-auto scrollbar-hide"
    >
      {/* Center vertical progress line */}
<div className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gray-200 h-full transform -translate-x-1/2 z-0">
  <div
    className="bg-[#553982] w-full transition-all duration-300 ease-linear"
    style={{ height: `${progressHeight}%` }}
  />
</div>


      {/* Step content */}
      <div className="relative z-10 flex flex-col gap-20">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          const animate = visibleSteps[index];

          return (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center transition-all duration-700 ease-in-out ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Text block */}
              <div
                className={`md:w-1/2 md:px-10 transform transition-all duration-700 ease-in-out ${
                  animate
                    ? "opacity-100 translate-x-0"
                    : isEven
                    ? "opacity-0 -translate-x-20"
                    : "opacity-0 translate-x-20"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#553982] text-white flex items-center justify-center font-bold text-lg mb-4">
                  {step.id}
                </div>
                <div className="py-4">
                  <p className="text-sm font-semibold text-[#553982]">
                    {step.title}
                  </p>
                  <h4 className="text-3xl font-roboto text-[#553982] mt-1">
                    {step.desc}
                  </h4>
                  <p className="text-gray-600 text-sm mt-3 max-w-xs">
                    {step.text}
                  </p>
                </div>
              </div>

              {/* Image block */}
              <div
                className={`md:w-1/2 md:px-10 mt-6 md:mt-0 flex justify-center transform transition-all duration-700 ease-in-out ${
                  animate
                    ? "opacity-100 translate-x-0"
                    : isEven
                    ? "opacity-0 translate-x-20"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className="w-full max-w-[380px] rounded-lg shadow-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
