import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      setIsDarkBg(scrollPosition < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".menu-container")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { text: "ABOUT US", path: "/about-us" },
    { text: "OUR WAREHOUSES", path: "/warehouse" },
    { text: "OUR SERVICES", path: "/solutions" },
    { text: "CONTACT", path: "/contact" }
  ];

  return (
    <nav 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[75%] transition-all duration-300 z-50 ${
        isScrolled 
          ? "bg-white/45 backdrop-blur-md border border-gray-200 shadow-xl" 
          : "bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg"
      } rounded-full`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center h-12 " aria-label="Home">
          {/* <img src="/assets/logo2.png" alt="EIMF Logo" className="h-30 w-auto" /> */}
          <span className="text-2xl font-extrabold tracking-wider">EIMF</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={`hidden md:flex space-x-8 text-sm font-semibold transition-all duration-300 ${
          isScrolled ? "text-gray-700" : "text-gray-700"
        }`}>
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.path}
                className="hover:text-blue-500 transition-all duration-300 py-2"
                aria-label={item.text}
              >
                {item.text}
              </Link>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          className={`md:hidden text-2xl transition-all duration-300 hover:scale-110 ${
            isScrolled ? "text-gray-900" : "text-gray-900"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 w-[85%] max-w-[400px] h-[60vh] bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl flex flex-col items-center justify-center space-y-6 transition-all duration-500 ease-in-out ${
          menuOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        } text-gray-900 menu-container`}
        role="dialog"
        aria-modal="true"
      >
        {navLinks.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="text-lg font-medium hover:text-blue-400 transition-all duration-300 py-2"
            onClick={() => setMenuOpen(false)}
            aria-label={item.text}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  // Add any props if needed in the future
};

export default Navbar;
