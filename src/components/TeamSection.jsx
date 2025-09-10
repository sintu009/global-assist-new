import React from "react";
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import box4 from "../assets/box4.png";

import mem1 from "../assets/mem1.png";
import mem2 from "../assets/mem2.png";
import mem3 from "../assets/mem3.png";
import mem4 from "../assets/mem4.png";

export default function TeamSection() {
  const team = [
    { id: 1, name: "Srishti Khatri", role: "Business Head", box: box1, img: mem1 },
    { id: 2, name: "Ravneet Kaur", role: "Business Development Manager", box: box2, img: mem2 },
    { id: 3, name: "Gurleen Kaur", role: "Business Development Executive", box: box3, img: mem3 },
    { id: 4, name: "Akshita", role: "Business Development Executive", box: box4, img: mem4 },
  ];

  return (
    <section className="w-full py-20 px-6 lg:px-8">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider">
            <span className="gradient-shine">Our Team</span>
          </p>
          <h2 className="text-4xl md:text-4xl font-bold mt-2 text-gray-900">
            Meet the minds shaping <br />
            <span className="text-purple-700">an industry</span>
          </h2>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-lg text-gray-600">
            Meet the talented members of our team who help drive our growth and deliver tailored virtual assistant solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {team.map((member) => (
          // Step 1: Add "group" to the parent container
          <div key={member.id} className="group flex flex-col items-center">
            <div className="relative w-full">
              <img
                src={member.box}
                alt={`Box ${member.id}`}
                className="w-[95%] rounded-2xl mx-auto"
              />
              {/* Step 2: Add animation classes and use "group-hover" on the image */}
              <img
                src={member.img}
                alt={member.name}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[105%] max-w-[360px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-120"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-bold text-gray-900">{member.name}</p>
              <p className="text-sm italic text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}