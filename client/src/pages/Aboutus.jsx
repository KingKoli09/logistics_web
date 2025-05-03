import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShip, FaWarehouse, FaGlobe, FaTruck, FaPlane,FaShuttleVan   } from 'react-icons/fa';

const Aboutus = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-30 md:py-32 overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/10"></div>
        <Container className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            About East-In Marine Freight
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Your Trusted Partner in Marine Logistics
          </p>
        </Container>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <Container className="max-w-4xl mx-auto">
          <Row className="items-center">
            <Col md={6} className="mb-12 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
                Company Overview
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  EIMF has an infrastructure set up for the forwarding of landed goods from vessels. 
                  Arrangements can be made for air or ocean freight of landed spares to destinations all over the world.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our bonded 3rd Party warehouse facility offers Vessel owners/Managers the flexibility 
                  of buying ships spares in bulk and storing at low-cost storage rates and calling-off the 
                  stock whenever vessel calls/need.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We also offer our own General warehouse, with storage for up to 50 kgs per box 
                  shipment at our CBD Belapur warehouse, and above weight in JNPT warehouse.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                  <FaShip className="text-4xl text-blue-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Marine Freight</h3>
                  <p className="text-gray-600">Global shipping solutions</p>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                  <FaWarehouse className="text-4xl text-blue-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Warehouse Hub</h3>
                  <p className="text-gray-600">Secure storage facilities</p>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                  <FaGlobe className="text-4xl text-blue-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Network</h3>
                  <p className="text-gray-600">Worldwide coverage</p>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                  <FaTruck className="text-4xl text-blue-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Logistics</h3>
                  <p className="text-gray-600">Efficient delivery</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <Container className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <FaTruck className="text-3xl text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Door To Deck</h3>
                <p className="text-gray-600">Specialized delivery service for ship spares and marine parts</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaShip className="text-3xl text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ocean Freight</h3>
                <p className="text-gray-600">Cost-effective sea shipping services</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaTruck className="text-3xl text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Road Transport</h3>
                <p className="text-gray-600">Efficient ground transportation network</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaWarehouse className="text-3xl text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Warehousing</h3>
                <p className="text-gray-600">Secure storage and distribution centers</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPlane className="text-3xl text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Air Freight</h3>
                <p className="text-gray-600">Secure storage and distribution centers</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaShuttleVan  className="text-3xl text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Last Mile Delivery</h3>
                <p className="text-gray-600">Secure storage and distribution centers</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How We Benefit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Specialized Service</h3>
              <p className="text-gray-600">Highly specialized door-to-deck delivery service for ship spares and marine parts</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Time-Sensitive</h3>
              <p className="text-gray-600">Assured delivery of ship spares and marine parts with pre-clearance capabilities</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Single Point of Contact</h3>
              <p className="text-gray-600">Full control of operations and communication throughout the supply chain</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Aboutus;
