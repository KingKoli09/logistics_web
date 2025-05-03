import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const services = [
  { 
    title: "Air Freight", 
    description: "Fast and secure air transportation solutions",
    img: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    icon: "✈️",
    color: "from-blue-500/20 to-blue-600/20",
    path: "/solutions#air-freight"
  },
  { 
    title: "Ocean Freight", 
    description: "Cost-effective sea shipping services",
    img: "https://images.unsplash.com/photo-1679183958890-e8f1beb51e8a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🚢",
    color: "from-green-500/20 to-green-600/20",
    path: "/solutions#ocean-freight"
  },
  { 
    title: "Road Transport", 
    description: "Efficient ground transportation network",
    img: "https://images.unsplash.com/photo-1633155565182-16c06ed45ec5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🚛",
    color: "from-orange-500/20 to-orange-600/20",
    path: "/solutions#road-transport"
  },
  { 
    title: "Warehousing", 
    description: "Secure storage and distribution centers",
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🏭",
    color: "from-purple-500/20 to-purple-600/20",
    path: "/warehouse"
  },
  { 
    title: "Last Mile Delivery", 
    description: "Fast and reliable doorstep delivery services",
    img: "/assets/lastmile.jpg",
    icon: "🚚",
    color: "from-red-500/20 to-red-600/20",
    path: "/solutions#last-mile"
  },
];

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden"
    >
      {/* Background Video */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/about2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Left Section - Title & Description */}
      <div className="relative z-10 md:w-1/3 mb-12 md:mb-0 text-center md:text-left px-6 md:px-8 lg:px-12">
        <div className="max-w-md mx-auto md:mx-0">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-center md:text-left">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 text-center md:text-left">
            Comprehensive logistics solutions including air, ocean, road transport, warehousing, and last mile delivery services.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/solutions">
              <button className="group px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/30">
                View All Services
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Services Grid */}
      <div
        className={`relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:w-2/3 px-6 md:px-4 transition-opacity transition-transform duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleServiceClick(service.path)}
            className={`group relative bg-gradient-to-br ${service.color} backdrop-blur-sm border border-gray-700/30 shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/30 cursor-pointer`}
            role="button"
            aria-label={`Learn more about ${service.title}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl transform transition-transform duration-500 group-hover:scale-110">{service.icon}</span>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-300 opacity-90">{service.description}</p>
              <div className="mt-3 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
