'use client';

import { useEffect, useState } from 'react';
import { FaCircleArrowUp } from 'react-icons/fa6';

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

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-25 right-3 z-50  text-gray-100 p-3 rounded-full shadow-lg hover:text-2xl transition"
        aria-label="Scroll to top"
      >
        <FaCircleArrowUp className="text-3xl" />
      </button>
    )
  );
};

export default ScrollToTopButton;
