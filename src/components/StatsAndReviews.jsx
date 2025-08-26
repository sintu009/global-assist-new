import React from "react";
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
import statsImage from "../assets/stat2.png";


const reviews = [
  {
    stars: "★★★★★",
    text: "Our VA is consistent and hard-working and has proved to be an asset. I am pleased with the services we have received from Global Assist",
    name: "Victoria Segovia",
    position: "Communications Manager, USA",
  },
  {
    stars: "★★★★★",
    text: "We really enjoy having the services as part of our business model. VA is a good communicator, consistent, very organized, trustworthy, and reliable.”. The service has been extremely professional and accessible. We definitely think every business should try it.",
    name: "Malindi Demery",
    position: "Managing Director, USA",
  },
  {
    stars: "★★★★★",
    text: "I have worked with Shraddha. She has been excellent! She has been conscientious, punctual, and attentive. She has provided invaluable insights and her perspective during the task. I appreciate whatever resources I was provided to improve our virtual work.",
    name: "Phill Garrow",
    position: "Writer",
  },
  {
    stars: "★★★★★",
    text: "The sales Virtual Assistant allotted to me did a very good job on all assignments. He called Potential prospects of my Real Estate business to alert them to a building that was for lease at the beach. He stirred up great interest with a few clients calling me before I could call them. His administrative work was also very good.",
    name: "David Milstead",
    position: "Managing Senior Director, USA",
  },
  {
    stars: "★★★★★",
    text: "I highly recommend the quality of work, professionalism and speed in which VA from Global Assist works. They have added immense value to the marketing team, despite working virtually. I have absolutely no hesitation in recommending their competency for any project",
    name: "Dorina Lipovanciuc",
    position: "Managing Director, USA",
  },
  {
    stars: "★★★★★",
    text: "My VA was detail oriented, a receptive listener and effective communicator. She would think on her own feet after an assignment was given and often demonstrated her best efforts when working on an assignment. I would use her again when the need arises.",
    name: "Confidential",
    position: "Confidential",
  },
];

const StatsAndReviews = () => {
  const controls = useAnimation();

  return (
    <section className="bg-white text-[#0A0D17] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Numbers That Speak
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
        <div className="w-64 h-56 sm:w-72 sm:h-56 bg-pink-100 rounded-3xl p-5 flex flex-col justify-end">
          <h3 className="text-3xl font-semibold text-black">
            <CountUp end={2100} duration={3} separator="," enableScrollSpy />+
          </h3>
          <p className="text-sm text-gray-400 mt-1">Trusted by users</p>
        </div>

        <div className="w-64 h-56 sm:w-72 sm:h-56 bg-pink-100 rounded-3xl p-5 flex flex-col justify-end">
          <h3 className="text-3xl font-semibold text-black">
            <CountUp end={4} duration={3} enableScrollSpy /> Rewards
          </h3>
          <p className="text-sm text-gray-400 mt-1">Industry Recognitions</p>
        </div>

        <div className="w-64 h-56 sm:w-72 sm:h-56 bg-pink-100 rounded-3xl p-5 flex flex-col justify-end">
          <h3 className="text-3xl font-semibold text-black">
            <CountUp end={1700} duration={3} enableScrollSpy />+
          </h3>
          <p className="text-sm text-gray-400 mt-1">Projects Done</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <h3 className="text-3xl font-roboto mb-3">Customer Reviews</h3>
          <p className="text-gray-600 mb-8 font-roboto">
            Stories that inspire. See the happiness our solutions generate.
          </p>
        </div>

        {/* Right Side: Auto Scrolling Reviews */}
        <div className="relative h-72 overflow-hidden">
          <motion.div
            className="flex flex-col gap-6"
            animate={controls}
            onHoverStart={() => controls.stop()}   // ⏸ stop on hover
            onHoverEnd={() =>
              controls.start({
                y: ["0%", "-100%"],
                transition: { duration: 30, ease: "linear", repeat: Infinity },
              })
            } // ▶️ restart on unhover
            initial={{ y: "0%" }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-r from-white to-gray-100 rounded-xl shadow-md w-full"
              >
                <div className="text-yellow-400 text-xl mb-2">
                  {review.stars}
                </div>
                <p className="text-gray-700 text-sm mb-2">{review.text}</p>
                <div>
                  <strong className="text-sm">{review.name}</strong>
                  <p className="text-xs text-gray-600">{review.position}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsAndReviews;
