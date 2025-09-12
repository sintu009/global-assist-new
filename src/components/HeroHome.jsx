import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import womenhome from "../assets/womenhome2.png";
import peephome from "../assets/peephome2.png";

const HeroHome = () => {
  const navigate = useNavigate();

  // Refs for direct DOM manipulation for maximum animation smoothness
  const h1LeftRef = useRef(null);
  const h1RightRef = useRef(null);
  const animatedScrollLeft = useRef(0);
  const animatedScrollRight = useRef(0);
  
  // Ref and state for scroll-triggered fade animations
  const contentRef = useRef(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // --- 1. Smoother Scroll Animation ---
    const handleScroll = () => {
      // The animation loop will use this value
      const scrollY = window.scrollY;
      
      // Animation loop for smoothing
      const smoothAnimation = () => {
        // Interpolate the current animation value towards the target (scrollY)
        const smoothness = 0.8; // Increased for a much faster, smoother effect
        animatedScrollLeft.current += (scrollY - animatedScrollLeft.current) * smoothness;
        animatedScrollRight.current += (scrollY - animatedScrollRight.current) * smoothness;

        // Directly update the transform style to bypass React's render cycle
        if (h1LeftRef.current) {
          h1LeftRef.current.style.transform = `translateX(${animatedScrollLeft.current * -0.2}px)`;
        }
        if (h1RightRef.current) {
          h1RightRef.current.style.transform = `translateX(${animatedScrollRight.current * 0.2}px)`;
        }
      };
      requestAnimationFrame(smoothAnimation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // --- 2. Re-triggering Fade-in Animation ---
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on whether the element is in the viewport
        setIsContentVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen lg:min-h-[130vh] bg-white overflow-hidden">
      {/* Right image pinned to the edge (desktop only) */}
  <div className="hidden md:block absolute bottom-0 right-0 w-[110%] max-w-[2000px] z-40 pointer-events-none">
        <img
          src={womenhome}
          alt="Virtual Assistant"
          className="w-full h-auto max-h-[180vh] object-contain object-right-bottom"
        />
      </div>

      {/* Centered animated headline */}
  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none select-none">
        {/* UPDATED: Added ref, removed style prop */}
        <h1 ref={h1LeftRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-[11rem] font- leading-tight whitespace-nowrap">
          <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            WE ARE GLOBAL
          </span>
        </h1>
        {/* UPDATED: Added ref, removed style prop */}
        <h1 ref={h1RightRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-[11rem] font- leading-tight whitespace-nowrap">
          <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            VIRTUAL ASSISTANTS
          </span>
        </h1>
      </div>

      {/* Content container */}
      {/* UPDATED: Added ref for the IntersectionObserver */}
      <div ref={contentRef} className="relative z-20 max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 pt-[20vh] md:pt-[24vh] md:mt-72">
        <div className="w-full md:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-32 lg:gap-48 items-start">
            
            {/* UPDATED: Animation now triggered by isContentVisible */}
            <h2 className={`text-2xl md:text-6xl font-semibold text-gray-900 transition-all duration-1500 ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Smart Hiring. <br /> Powerful Teams.
            </h2>
            
            <div className={`mt-4 md:mt-0 transition-all duration-1500 ease-out delay-200 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                Our specialty is offering expert, individualized, and incredibly
                effective virtual help solutions that are customized to meet
                your particular requirements.
              </p>
              
              <div className="relative inline-block mt-5 group">
                {/* UPDATED: Increased inset for a thicker, more visible border */}
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <button
                  className="relative px-6 py-3 bg-white rounded-full text-sm font-medium text-gray-800 border border-gray-800 group-hover:border-transparent transition"
                  onClick={() => navigate("/contact")}
                >
                  CONSULT WITH US
                </button>
              </div>

            </div>
          </div>

          <div className={`mt-8 md:mt-16 -ml-6 md:-ml-12 lg:-ml-25 w-[120%] md:w-[115%] lg:w-[95%] transition-opacity duration-1500 ease-out delay-300 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={peephome}
              alt="Our Team"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;