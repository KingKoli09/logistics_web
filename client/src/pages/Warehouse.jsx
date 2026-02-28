import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Warehouse = () => {
  const locations = [
    {
      Country: "India",
      details: [
        "MV Vessel Name",
        "C/O East-In Marine Freight",
        "Plot No. D3, Sect 14, CBD Belapur",
        "Navi Mumbai -400614",
        "Mr. Arun : + 91 7021821956"
      ],
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      Country: "Korea",
      details: [
        "MV Vessel Name",
        "East-In Marine Freight",
        "120dong, 11, Yutongdanji 1-ro 97beon-gil",
        "Gangseo-gu, Busan, 46721 Korea",
      ],
      image: "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      Country: "Dubai",
      details: [
        "MV Vessel Name",
        "East-In Marine Freight",
        "DMC DUBAI -UAE PO BOX 119034",
      ],
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      Country: "China",
      details: [
        "MV Vessel Name",
        "East-In Marine Freight",
        "NO.415,ZHENGMIN",
        "ROAD,SHANGHAI 200433 ,CHINA."
      ],
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      Country: "Singapore",
      details: [
        "MV Vessel Name",
        "East-In Marine Freight",
        "95 AIRPORT CARGO RD, #02-224",
        "SATS AIRFREIGHT TERMINAL 2,",
        "SINGAPORE 819461"
      ],
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      Country: "Amsterdam",
      details: [
        "MV Vessel Name",
        "East-In Marine Freight",
        "Kaapstadweg 36A",
        "NL-1047 HG Amsterdam",
        "Netherlands",
        "OPENING HOURS",
        "Goods receiving Mon/Fri 08:00 – 17:00",
        "Booking deadline for same day shipment Mon-Fri 08:00 – 15:00"
      ],
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      Country: "Denmark",
      details: [
        "MV Vessel Name",
        "East-In Marine Freight",
        "Jernholmen 49",
        "DK-2650 Hvidovre",
        "Denmark",
        "Opening hours",
        "Goods receiving MON/FRI 08.00 – 16.00",
        "Booking deadline for same day shipment Mon-Fri 08:00 – 15:00"
      ],
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white py-30" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")' }}>
        <Container className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">Our Warehouse Locations</h1>
          <p className="text-2xl text-blue-100 max-w-2xl mx-auto">
            Find our strategically located warehouses across the country
          </p>
        </Container>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
            {locations.map((location, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden w-full max-w-[280px] mx-auto transform hover:-translate-y-1"
              >
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={location.image} 
                    alt={location.Country}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white text-xl font-bold">
                    {location.Country}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {location.details.map((detail, idx) => {
                      const isOpeningHours = detail.toLowerCase().includes('opening hours') || detail.toLowerCase().includes('goods receiving');
                      const isContact = detail.toLowerCase().includes('tel') || detail.toLowerCase().includes('mob') || detail.toLowerCase().includes('fax');
                      
                      return (
                        <div 
                          key={idx} 
                          className="text-sm text-gray-700"
                        >
                          {detail}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Warehouse; 