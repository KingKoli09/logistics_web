import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center text-white text-center overflow-hidden"
    >
      {/* Background Video */}
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>

      {/* Content with Scroll Animation */}
      <motion.div
        className="relative z-10 max-w-2xl px-6 md:px-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-md">
          East-In Marine <br />
          <span className="text-blue-400"> Freight </span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 drop-shadow-md">
          Dedicated Marine Logistics & Freight Forwader for Multi Modes Freight Options for Air,Sea & Road and Last Mile Delivery
        </p>
        <Link to="/solutions">
          <motion.button
            className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-500 transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services →
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
