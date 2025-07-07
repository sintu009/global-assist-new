import React from "react";
import planner7 from "../assets/planner7.jpeg";
import planner8 from "../assets/planner8.jpeg";
import planner9 from "../assets/planner9.jpeg";
import podcastOne from "../assets/podcast-one.jpg";
import podcastTwo from "../assets/podcast-two.jpg";
import podcastThree from "../assets/podcast-three.jpeg";
import event1 from "../assets/event1.jpeg";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";

const topic1Items = [
  {
    title: "Employee Recognition",
    videoUrl: "https://www.youtube.com/embed/aS-cWExV-gY",
  },
  {
    title: "In Conversation with Micky Gulati",
    videoUrl: "https://www.youtube.com/embed/K2MwFBzdcqA",
  },
  {
    title: "Global Assist Promo",
    videoUrl: "https://www.youtube.com/embed/HNY3T4IAQ9w",
  },
];

const topic2Items = [
  {
    title: "Client testimony",
    videoUrl: "https://www.youtube.com/embed/ZMk9Uk_WxYk",
  },
  {
    title: "Live at Charles Matthews Show",
    videoUrl: "https://www.youtube.com/embed/Eygj_qv0uG4",
  },
  {
    title: "Employee Testimony",
    videoUrl: "https://www.youtube.com/embed/sFl046RtEXY",
  },
  {
    title: "2021 Achievements",
    videoUrl: "https://www.youtube.com/embed/FBdQd7lGXvk",
  },
];

const topic3Items = [
  {
    image: planner7,
    title: "Award",
  },
  {
    image: planner8,
    title: "Client Testimony",
  },
  {
    image: planner9,
    title: "Award",
  },
];

const topic4Items = [
  {
    image: podcastOne,
    title: "",
    description: "An insightful session featuring key takeaways from industry leaders.",
  },
  {
    image: podcastTwo,
    title: "",
    description: "Exploring growth strategies with our expert panel.",
  },
  {
    image: podcastThree,
    title: "",
    description: "Real stories, real impact — from our amazing clients.",
  },
];

const topic5Items = [
  {
    image: event1,
    title: "Annual Meetup",
    description: "Celebrating achievements and setting future goals.",
  },
  {
    image: event2,
    title: "Team Building",
    description: "Strengthening bonds through collaborative activities.",
  },
  {
    image: event3,
    title: "Outreach Program",
    description: "Giving back to the community with our outreach initiative.",
  },
];

export default function SpectraPlanners() {
  return (
    <section className="text-[#0A0D17] font-['Roboto']">
      {/* Header */}
      <div className="bg-white py-8 px-4 md:px-16">
        <div className="max-w-7xl mx-auto mb-20">
          <p className="text-[20px] md:text-[15px] text-gray-500 tracking-[0.3em] font-medium uppercase mb-3 text-left ml-2">
            Spectra Planners
          </p>
          <p className="text-black text-[28px] md:text-[40px] leading-[32px] max-w-4xl text-left mt-8">
            Meet our Spectra Planners <span className="text-purple-700">every week</span>
          </p>
        </div>

        {/* Topic 01 */}
        <div className="max-w-7xl mx-auto -mb-1">
          <h2 className="text-2xl md:text-2xl md:pl-20 font-roboto text-gray-800 uppercase">
            
          </h2>
        </div>
        <div className="flex flex-row gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible max-w-7xl mx-auto scrollbar-hide">
          {topic1Items.map((item, index) => (
            <div key={index} className="bg-white rounded-[32px] p-8 transition duration-300 min-w-[100vw] sm:min-w-0">
              <div className="w-full h-[240px] md:w-[360px] mb-6 rounded-[24px] overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={item.videoUrl}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-[24px]"
                ></iframe>
              </div>
              <h3 className="text-[20px] font-bold mb-2">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Topic 02 */}
      <div className="bg-[#444444] py-8 px-4 md:px-29 text-white">
        <div className="max-w-7xl mx-auto -mb-2">
          <h2 className="text-2xl md:text-2xl md:pl-4 font-roboto uppercase"></h2>
        </div>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-2 md:px-0 w-max">
            {topic2Items.map((item, index) => (
              <div key={index} className="bg-[#444444] rounded-[32px] p-8 transition duration-300 min-w-[100vw] sm:min-w-0">
                <div className="w-full md:w-[360px] h-[240px] mb-6 rounded-[24px] overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={item.videoUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-[24px]"
                  ></iframe>
                </div>
                <h3 className="text-[20px] font-bold mb-2 text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topic 03 */}
      <div className="bg-white py-8 px-4 md:px-0">
        <div className="max-w-7xl mx-auto -mb-2">
          <h2 className="text-2xl md:text-2xl md:pl-20 font-roboto text-gray-800 uppercase"></h2>
        </div>
        <div className="flex flex-row gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible max-w-7xl mx-auto scrollbar-hide">
          {topic3Items.map((item, index) => (
            <div key={index} className="bg-white rounded-[32px] md:w-[400px] p-8 transition duration-300 min-w-[100vw] sm:min-w-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-[120vw] sm:w-full md:w-[560px] h-[440px] object-cover rounded-[24px] mb-6"
              />
              <h3 className="text-[20px] font-bold mb-2">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Topic 04 */}
      <div className="bg-[#444444] py-8 px-4 md:px-0">
        <div className="max-w-7xl mx-auto -mb-2">
          <h2 className="text-2xl md:text-2xl md:pl-20 font-roboto text-gray-800 uppercase"></h2>
        </div>
        <div className="flex flex-row gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible max-w-7xl mx-auto scrollbar-hide">
          {topic4Items.map((item, index) => (
            <div key={index} className="bg-[#444444] rounded-[32px] md:w-[400px] p-8 transition duration-300 min-w-[100vw] sm:min-w-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-[120vw] sm:w-full md:w-[560px] h-[440px] object-cover rounded-[24px] mb-6"
              />
              <h3 className="text-[20px] font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-[#CCCCCC] text-[16px] leading-[24px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Topic 05 */}
      <div className="bg-white py-8 px-4 md:px-0">
        <div className="max-w-7xl mx-auto -mb-2">
          <h2 className="text-2xl md:text-2xl md:pl-20 font-roboto text-gray-800 uppercase"> </h2>
        </div>
        <div className="flex flex-row gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible max-w-7xl mx-auto scrollbar-hide">
          {topic5Items.map((item, index) => (
            <div key={index} className="bg-white rounded-[32px] md:w-[400px] p-8 transition duration-300 min-w-[100vw] sm:min-w-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-[120vw] sm:w-full md:w-[560px] h-[440px] object-cover rounded-[24px] mb-6"
              />
              <h3 className="text-[20px] font-bold mb-2">{item.title}</h3>
              <p className="text-[#6B7280] text-[16px] leading-[24px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
