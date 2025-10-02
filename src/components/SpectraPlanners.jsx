import React, { useRef } from "react";
import planner7 from "../assets/planner7.jpeg";
import planner9 from "../assets/planner9.jpeg";
import natashaclient from "../assets/natashaclient.mp4";
import podcastOne from "../assets/podcast-one.jpg";
import podcastTwo from "../assets/podcast-two.jpg";
import podcastThree from "../assets/podcast-three.jpeg";
import event1 from "../assets/event1.jpeg";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";
import img1 from "../assets/appre1.jpg";
import img2 from "../assets/appre2.jpg";
import img3 from "../assets/appre3.jpg";
import img4 from "../assets/appre4.jpg";
import img5 from "../assets/appre5.jpg";
import HelloSection from "./HelloSection";
import globalpromo from "../assets/globalpromo.mp4";

// ✅ 1. Imported the new image
import fourth from "../assets/fourth.jpg";

const topic1Items = [
    { title: "Employee Recognition", videoUrl: "https://www.youtube.com/embed/aS-cWExV-gY", type: "youtube" },
    { title: "Employee Testimony", videoUrl: "https://www.youtube.com/embed/sFl046RtEXY", type: "youtube" },
    { title: "Global Assist Promo", videoSrc: globalpromo, type: "local" },
];

const topic2Items = [
    { title: "Client testimony", videoUrl: "https://www.youtube.com/embed/ZMk9Uk_WxYk" },
    { title: "Live at Charles Matthews Show", videoUrl: "https://www.youtube.com/embed/Eygj_qv0uG4" },
    { title: "In Conversation with Micky Gulati", videoUrl: "https://www.youtube.com/embed/K2MwFBzdcqA" },
    { title: "2021 Achievements", videoUrl: "https://www.youtube.com/embed/FBdQd7lGXvk" },
];

// ✅ 2. Added the new item to the array
const topic3Items = [
    { image: planner7, title: "Award", type: "image" },
    { video: natashaclient, title: "Client Testimony", type: "video" },
    { image: planner9, title: "Award", type: "image" },
    { image: fourth, title: "Certificate", type: "image" },
];

const topic4Items = [
    { image: podcastOne, title: "", description: "An insightful session featuring key takeaways from industry leaders." },
    { image: podcastTwo, title: "", description: "Exploring growth strategies with our expert panel." },
    { image: podcastThree, title: "", description: "Real stories, real impact — from our amazing clients." },
];

const topic5Items = [
    { image: event1, title: "Annual Meetup", description: "Celebrating achievements and setting future goals." },
    { image: event2, title: "Team Building", description: "Strengthening bonds through collaborative activities." },
    { image: event3, title: "Outreach Program", description: "Giving back to the community with our outreach initiative." },
];

const appreciationImages = [img1, img2, img3, img4, img5];

export default function SpectraPlanners() {
    const appreciationScrollRef = useRef(null);
    const topic1ScrollRef = useRef(null);
    const topic2ScrollRef = useRef(null);
    const topic3ScrollRef = useRef(null);
    const topic4ScrollRef = useRef(null);
    const topic5ScrollRef = useRef(null);

    const scroll = (ref, direction) => {
        if (ref?.current) {
            const scrollAmount = ref.current.offsetWidth * 0.8;
            ref.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
        }
    };

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
                <div className="max-w-7xl mx-auto relative">
                    <button
                        onClick={() => scroll(topic1ScrollRef, "left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#333] text-white px-3 py-2 rounded-full md:hidden"
                    >
                        ←
                    </button>
                    <div
                        ref={topic1ScrollRef}
                        className="flex flex-row gap-6 overflow-x-auto lg:grid lg:grid-cols-3 lg:overflow-visible max-w-7xl mx-auto scrollbar-hide scroll-smooth"
                    >
                        {topic1Items.map((item, index) => (
                            <div key={index} className="bg-white rounded-[32px] p-8 transition duration-300 min-w-[100vw] sm:min-w-0">
                                <div className="w-full h-[240px] md:w-[360px] mb-6 rounded-[24px] overflow-hidden">
                                    {item.type === 'local' ? (
                                        <video controls className="w-full h-full object-cover rounded-[24px]">
                                            <source src={item.videoSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
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
                                    )}
                                </div>
                                <h3 className="text-[20px] font-bold mb-2">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => scroll(topic1ScrollRef, "right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#333] text-white px-3 py-2 rounded-full md:hidden"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* Topic 02 */}
            <div className="bg-gradient-to-r from-[#E90065] to-[#53389E] py-4 px-0 md:px-2 text-white">
                <div className="max-w-7xl mx-auto relative">
                    <button
                        onClick={() => scroll(topic2ScrollRef, "left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#E90065] to-[#53389E] text-white px-3 py-2 rounded-full md:px-3 md:py-2 md:block"
                    >
                        ←
                    </button>
                    <div
                        ref={topic2ScrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2"
                    >
                        {topic2Items.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 bg-gradient-to-r from-[#E90065] to-[#53389E] rounded-[32px] p-8 transition duration-300 min-w-[100vw] sm:min-w-0 md:w-[400px]"
                            >
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
                                <h3 className="text-[20px] font-bold mb-2 text-white">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => scroll(topic2ScrollRef, "right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#E90065] to-[#53389E] text-white px-3 py-2 rounded-full md:px-3 md:py-2 md:block"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* Topic 03 */}
            <div className="bg-gradient-to-b from-white to-gray-50 py-10 px-4">
                <div className="max-w-7xl mx-auto relative">
                    {/* Left arrow */}
                    <button
                        onClick={() => scroll(topic3ScrollRef, "left")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
                 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 
                 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition"
                    >
                        ←
                    </button>

                    {/* Scrollable section */}
                    <div
                        ref={topic3ScrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-6"
                    >
                        {topic3Items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-3xl 
                     flex-shrink-0 min-w-[85vw] sm:min-w-[360px] md:min-w-[420px] lg:min-w-[460px] p-6"
                            >
                                {/* Media container */}
                                <div className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[480px] 
                          overflow-hidden rounded-2xl mb-4 border border-gray-200 bg-gray-50">
                                    {item.type === "video" ? (
                                        <video
                                            controls
                                            className="w-full h-full object-contain bg-black rounded-2xl"
                                        >
                                            <source src={item.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain rounded-2xl"
                                        />
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>

                                {item.description && (
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => scroll(topic3ScrollRef, "right")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
                 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 
                 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition"
                    >
                        →
                    </button>
                </div>
            </div>





            {/* Topic 04 */}
            <div className="bg-gradient-to-r from-[#E90065] to-[#53389E] py-10 px-4 text-white">
                <div className="max-w-7xl mx-auto relative">
                    {/* Left arrow */}
                    <button
                        onClick={() => scroll(topic4ScrollRef, "left")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
                 bg-white/20 border border-white/40 text-white hover:bg-white/30 
                 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition"
                    >
                        ←
                    </button>

                    {/* Scrollable section */}
                    <div
                        ref={topic4ScrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 sm:px-4"
                    >
                        {topic4Items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-[#E90065] to-[#53389E] 
                     border border-white/20 rounded-3xl p-6 flex-shrink-0
                     min-w-[85vw] sm:min-w-[360px] md:min-w-[420px] lg:min-w-[440px]"
                            >
                                {/* Image */}
                                <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] 
                          overflow-hidden rounded-2xl mb-4 bg-black/10">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain rounded-2xl"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{item.title}</h3>

                                {/* Description */}
                                <p className="text-[#E5E5E5] text-sm sm:text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => scroll(topic4ScrollRef, "right")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
                 bg-white/20 border border-white/40 text-white hover:bg-white/30 
                 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition"
                    >
                        →
                    </button>
                </div>
            </div>


            {/* Topic 05 */}
            <div className="bg-white py-8 px-4">
                <div className="max-w-7xl mx-auto relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll(topic5ScrollRef, "left")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
                 bg-white border border-gray-300 text-[#333] hover:bg-gray-100
                 w-10 h-10 rounded-full flex items-center justify-center transition"
                    >
                        ←
                    </button>

                    {/* Scrollable Cards */}
                    <div
                        ref={topic5ScrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-1 sm:px-2"
                    >
                        {topic5Items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-3xl p-6 flex-shrink-0
                     min-w-[85vw] sm:min-w-[320px] md:min-w-[420px] lg:min-w-[460px]"
                            >
                                {/* Image */}
                                <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden rounded-2xl mb-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain rounded-2xl bg-gray-50"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll(topic5ScrollRef, "right")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
                 bg-white border border-gray-300 text-[#333] hover:bg-gray-100
                 w-10 h-10 rounded-full flex items-center justify-center transition"
                    >
                        →
                    </button>
                </div>
            </div>


            {/* Appreciation Moments */}
            <div className="bg-gradient-to-r from-[#E90065] to-[#53389E] py-10 px-4 text-white">
                <div className="max-w-7xl mx-auto mb-6">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Appreciation Moments</h2>

                    {/* Slider Wrapper */}
                    <div className="relative">
                        {/* Left Arrow */}
                        <button
                            onClick={() => scroll(appreciationScrollRef, "left")}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                   bg-white/20 border border-white/40 text-white hover:bg-white/30
                   w-10 h-10 rounded-full flex items-center justify-center transition"
                        >
                            ←
                        </button>

                        {/* Scrollable Content */}
                        <div
                            ref={appreciationScrollRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 sm:px-4"
                        >
                            {appreciationImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 min-w-[75vw] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[360px]"
                                >
                                    <img
                                        src={img}
                                        alt={`Appreciation ${idx + 1}`}
                                        className="rounded-2xl w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px] object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scroll(appreciationScrollRef, "right")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                   bg-white/20 border border-white/40 text-white hover:bg-white/30
                   w-10 h-10 rounded-full flex items-center justify-center transition"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>


            {/* HelloSection */}
            <HelloSection />

        </section>
    );
}