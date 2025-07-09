import React, { useState, useEffect } from "react";
import FormPopup from "./FormPopup";
import { useNavigate } from "react-router-dom";


export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* ✅ Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Content */}
      <div
        className={`relative z-10 min-h-[80vh] flex items-center justify-center text-center text-black px-4 transition-all duration-300 ${
          showPopup ? "blur-sm" : ""
        }`}
      >
        <div className="space-y-4">
          <p className="uppercase text-sm tracking-widest text-gray-700">One Stop Shop</p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug text-black">
            Accomplish More. Juggle Less.<br />Streamline your operations{" "}
            <br />
            with our expert services.
          </h1>
          <button
  onClick={() => navigate("/contact")}
  className="mt-4 bg-purple-800 text-white px-6 py-2 rounded-md text-sm hover:bg-purple-900 transition"
>
  EXPLORE MORE
</button>

        </div>
      </div>

      {/* ✅ Popup */}
      {showPopup && <FormPopup onClose={() => setShowPopup(false)} />}
    </section>
  );
}
