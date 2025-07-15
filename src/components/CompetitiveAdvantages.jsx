import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import num1 from "../assets/num1.png";
import num2 from "../assets/num2.png";
import num3 from "../assets/num3.png";
import num4 from "../assets/num4.png";
import left from "../assets/left.png";
import mobile from "../assets/mobile.png";
import rigth from "../assets/rigth.png";
import google from "../assets/google.png";
import mid1 from "../assets/mid1.png";
import mid2 from "../assets/mid2.png";
import mid3 from "../assets/mid3.png";
import mid4 from "../assets/mid4.png";

const advantages = [
  {
    id: 1,
    numImg: num1,
    desc: `In today's business world, diversification is essential for survival and growth. At Global Assist, we offer a diverse team of virtual assistants from around the world, including India, the Philippines, Canada, and the Central America. Each VA brings unique skills, ensuring a perfect match for your needs. Whether it's admin, creative, or technical support, our team seamlessly integrates into your operations, offering fresh perspectives and tailored solutions. Continuously expanding our talent pool, we stay agile to meet evolving business demands. With diverse skills and cultural insights, we provide flexibility to tackle any challenge, keeping your operations competitive and agile.`,
  },
  {
    id: 2,
    numImg: num2,
    desc: `At Global Assist, innovation drives everything we do. Our virtual assistants use cutting-edge tools to streamline operations, boost efficiency, and spur growth. From advanced software for project management to data analysis techniques, our team tackles business challenges with creativity. We prioritize continuous improvement, offering regular training to stay updated on industry trends. This proactive culture empowers our VAs to introduce effective strategies, ensuring you stay ahead of the curve, adapt to market changes, and leverage the latest technologies for transformative outcomes.`,
  },
  {
    id: 3,
    numImg: num3,
    desc: `In today's interconnected world, a global perspective is essential for business success. Our diverse virtual assistants offer insights from varied cultural backgrounds, enriching your business strategies. With our international team, adept at navigating global markets, you gain round-the-clock support across time zones, ensuring competitiveness. Our global presence enables tailored solutions for regional markets, facilitating expansion and effective local engagement.`,
  },
  {
    id: 4,
    numImg: num4,
    desc: `At Global Assist, we ensure impactful results. Our rigorously trained virtual assistants elevate efficiency, customer satisfaction, and overall productivity, backed by a proven track record. Clients consistently report significant improvements, empowering them to focus on business growth. Our commitment to excellence is evident in numerous success stories, spanning small businesses to enterprises. By partnering with us, you access a dedicated team capable of driving measurable results and overcoming challenges, enhancing your strategic goals. Entrust us with your virtual assistant needs, and experience the difference in your bottom line and business success.`,
  },
];

export default function CompetitiveAdvantages() {
  
 const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};


 const sideFade = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
});


  return (
    <section className="font-roboto bg-white text-gray-800 overflow-x-hidden md:snap-y md:snap-mandatory">

      {advantages.map((adv, index) => {
        let middleImage = mid1;
        if (adv.id === 3) middleImage = mid3;
        else if (adv.id === 4) middleImage = mid4;
        else if (index % 2 === 1) middleImage = mid2;

        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={adv.id}
            className="min-h-fit py-16 md:py-24 md:snap-start flex flex-col justify-center px-6 md:px-20"

            initial="hidden"
            whileInView="visible"
           viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="grid md:grid-cols-3 gap-10 items-center max-w-7xl mx-auto">
              {isEven ? (
                <>
                  <motion.div
                    className="flex flex-col items-center order-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={sideFade("left")}
                  >
                    <img src={adv.numImg} alt={`num${adv.id}`} className="w-40 md:w-60 h-auto" />
                  </motion.div>

                  <motion.div
                    className="flex justify-center order-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={fadeIn}
                  >
                    <img
                      src={middleImage}
                      alt="middle visual"
                      className="rounded-2xl w-[280px] md:w-[400px] h-auto"
                    />
                  </motion.div>

                  <motion.div
                    className="text-sm md:text-base text-justify order-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={sideFade("right")}
                  >
                    {adv.desc}
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className="flex flex-col items-center order-1 md:order-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={sideFade("right")}
                  >
                    <img src={adv.numImg} alt={`num${adv.id}`} className="w-40 md:w-60 h-auto" />
                  </motion.div>

                  <motion.div
                    className="flex justify-center order-2 md:order-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={fadeIn}
                  >
                    <img
                      src={middleImage}
                      alt="middle visual"
                      className="rounded-2xl w-[280px] md:w-[400px] h-auto"
                    />
                  </motion.div>

                  <motion.div
                    className="text-sm md:text-base text-justify order-3 md:order-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={sideFade("left")}
                  >
                    {adv.desc}
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        );
      })}

    {/* CTA Section */}
      <div className="min-h-screen md:snap-start flex flex-col items-center justify-center px-6 text-center space-y-6">

        <div className="block md:hidden space-y-4">
          <div className="text-xl font-semibold text-gray-700">
            Battle-tested Service You<br />Can Count On
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={google} alt="Google" className="w-20 h-auto" />
            <span className="text-lg font-semibold">4.8</span>
            <span className="text-yellow-500 text-base">★★★★★</span>
          </div>
          <p className="text-base max-w-md mx-auto text-gray-700">
            Global Assist is consistently ranked as one of the best talent-as-a-service providers on all leading B2B review sites.
          </p>
          <motion.img
            src={mobile}
            alt="App"
            className="w-[260px] mt-4 mx-auto"
            style={{ height: "500px", objectFit: "cover" }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 5 }}
          />
        </div>

        <div className="hidden md:flex flex-row items-end gap-34 max-w-[100vw] overflow-hidden">
          <img
            src={left}
            alt="left"
            className="w-[240px] md:w-[300px] h-[560px] rounded-2xl object-cover"
          />
          <div className="relative flex flex-col items-center w-[300px] md:w-[320px]">
            <img src={google} alt="rating" className="w-52 h-auto z-10 mb-4" />
            <motion.img
              src={mobile}
              alt="App"
              className="z-20 relative w-[280px]"
              style={{ height: "440px", objectFit: "cover" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 10 }}
            />
            <p className="absolute top-28 text-xl font-normal px-2 z-0 leading-snug text-gray-700">
              Global Assist is consistently ranked as one of the top virtual
              assistant services, trusted by small to large businesses worldwide.
            </p>
          </div>
          <img
            src={rigth}
            alt="right"
            className="w-[240px] md:w-[300px] h-[560px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
