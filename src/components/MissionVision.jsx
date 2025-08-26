import React from "react";
import { motion } from "framer-motion";
import threePeepAbout from "../assets/3peepabout.png";

const MissionVision = () => {
  return (
    <section className="w-full flex flex-col relative overflow-hidden">
      {/* Background Text Behind Image */}
      <h1
        className="absolute top-10 left-1/2 -translate-x-1/2 text-gray-400 
        text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] 
        font-extrabold tracking-widest z-0 opacity-20 text-center leading-tight"
      >
        GLOBAL <br /> ASSIST
      </h1>

      {/* Top Image Section */}
      <div className="w-full h-auto flex justify-center py-8 relative z-10">
        <img
          src={threePeepAbout}
          alt="Our Team"
          className="h-auto object-cover max-w-screen-lg md:max-w-screen-md"
        />
      </div>

      {/* Content Columns */}
      <div className="relative w-full flex flex-col md:flex-row gap-0 md:gap-16 mt-[-100px] md:mt-[-200px] z-20">
        {/* Mission Section (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}   // start hidden & left
          whileInView={{ opacity: 1, x: 0 }} // animate to visible & centered
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 p-10 md:p-20 bg-[#28B3DB] flex flex-col justify-center text-white rounded-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our<br />Mission
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-6">
            To Be The World's Most Trusted Virtual Assistant Partner
          </p>
          <p className="text-base leading-relaxed">
            At Global Assist, our mission is to be the most trusted global
            partner in virtual assistance, delivering high-quality,
            cost-effective business solutions. We empower businesses of all
            sizes to scale smarter through expertly trained virtual assistants
            and our 360° support model.
            <br />
            <br />
            As a seamless extension of your team, we focus on implementing
            astute, long-term partnerships with operational excellence—every
            client, every task, every day.
          </p>
        </motion.div>

        {/* Vision Section (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}   // start hidden & right
          whileInView={{ opacity: 1, x: 0 }} // animate to visible & centered
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2 p-10 md:p-20 bg-[#E4176C] flex flex-col justify-center text-white rounded-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our<br />Vision
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-6">
            Unlocking global potential through scalable, remote-first solutions.
          </p>
          <p className="text-base leading-relaxed">
            We envision a world where geography never limits access to talent or
            growth. At Global Assist, we're leading the shift to a virtual-first
            future with 360° Total Virtual Team Solutions—helping businesses
            build scalable, efficient remote teams without the overhead of
            traditional hiring.
            <br />
            <br />
            Our goal is to be the go-to partner for flexible workforce models
            and to shape a smarter, more sustainable global remote economy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
