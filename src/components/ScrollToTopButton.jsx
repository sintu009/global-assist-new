import React, { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-24 right-6 
          p-4 z-50
          rounded-full 
          text-white 
          shadow-lg 
          transition-all 
          duration-300 
          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
          hover:from-red-500 hover:via-pink-500 hover:to-purple-500
          hover:scale-110
          animate-bounce
        "
      >
        <FiChevronUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
