import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const Solutions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const solutions = [
    {
      id: "air-freight",
      title: "Air Freight",
      description: "Fast and secure air transportation solutions",
      features: [
        "Express delivery services",
        "Global air cargo network",
        "Temperature-controlled shipping",
        "Customs clearance support",
        "Operate Domestics Air Transfer",
        "Domestics Courier services Door to Door in India"
      ],
      icon: "✈️",
      bgImage: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      color: "blue"
    },
    {
      id: "ocean-freight",
      title: "Ocean Freight",
      description: "Cost-effective sea shipping services",
      features: [
        "Full container load (FCL)",
        "Less than container load (LCL)",
        "Bulk cargo handling",
        "Port-to-port services"
      ],
      icon: "🚢",
      bgImage: "https://images.unsplash.com/photo-1679183958890-e8f1beb51e8a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "road-transport",
      title: "Road Transport",
      description: "Efficient ground transportation network",
      features: [
        "Local and regional delivery",
        "Temperature-controlled vehicles",
        "Flexible LTL & FTL options",
        "Flexible scheduling"
      ],
      icon: "🚛",
      bgImage: "https://images.unsplash.com/photo-1633155565182-16c06ed45ec5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "warehousing",
      title: "Warehousing",
      description: "Secure storage and distribution centers",
      features: [
        "Bonded warehouse facilities",
        "Inventory management",
        "Cross-docking services",
        "Value-added services"
      ],
      icon: "🏭",
      bgImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "last-mile",
      title: "Last Mile Delivery",
      description: "Fast and reliable doorstep delivery services",
      features: [
        "Door-to-door/Deck delivery",
        "Flexible scheduling",
        "Customer support"
      ],
      icon: "🚚",
      bgImage: "/assets/lastmile.jpg"
    }
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const handleLearnMore = (title, id) => {
    if (title === "Warehousing") {
      navigate('/warehouse');
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white py-30" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")' }}>
        <Container className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">Our Services</h1>
          <p className="text-2xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive transportation and warehousing services
          </p>
        </Container>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <Container className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                id={solution.id}
                className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300
                          border border-gray-100 hover:border-blue-100 w-full max-w-[360px]`}
              >
                <div className="aspect-video overflow-hidden relative rounded-t-xl">
                  <img 
                    src={solution.bgImage} 
                    alt={solution.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{solution.icon}</span>
                      <h3 className="text-lg font-bold text-white">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-600 mb-3 text-sm whitespace-nowrap">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 text-left">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg 
                          className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-4 py-3 border-t border-gray-100">
                  {solution.title === "Warehousing" && (
                    <button 
                      onClick={() => handleLearnMore(solution.title, solution.id)}
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 
                               bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg
                               font-medium transition-colors duration-300 text-sm"
                    >
                      View Locations
                      <svg 
                        className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <Container className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 w-full max-w-xs transform hover:scale-105">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-blue-100 text-base">Extensive network of partners and agents worldwide</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 w-full max-w-xs transform hover:scale-105">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-blue-100 text-base">Experienced professionals in logistics and transportation</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Solutions; 