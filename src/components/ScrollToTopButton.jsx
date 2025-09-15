import React, { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi"; // Arrow icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
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

  // Scroll to top smoothly
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
        className="fixed bottom-22 right-7 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-800 transition"
      >
        <FiChevronUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;

