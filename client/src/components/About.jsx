import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="relative w-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 py-16 px-6 md:px-16 lg:px-32 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-orange-300 opacity-10 rounded-full absolute -top-32 -left-32 blur-3xl"></div>
        <div className="w-80 h-80 bg-blue-300 opacity-10 rounded-full absolute bottom-0 right-0 blur-3xl"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-4xl font-semibold text-orange-600 mb-8 border-b-4 border-orange-400 inline-block pb-2 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        About East-In Marine Freight
      </motion.h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative z-10">
        {/* Left Section - Company Overview */}
        <motion.div
          className="flex flex-col self-start"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Company Overview</h3>
          <p className="text-gray-600 leading-relaxed">
            EIMF has an infrastructure set up for the forwarding of landed goods from vessels. 
            Arrangements can be made for air or ocean freight of landed spares to destinations all over the world.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Our bonded 3rd Party warehouse facility offers Vessel owners/Managers the flexibility 
            of buying ships spares in bulk and storing at low-cost storage rates and calling-off the 
            stock whenever vessel calls/need.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            EIMF offers services like Door to Deck/Door To Airport / Door To Seaport, which provides end-to-end logistics for delivering goods from the supplier's warehouse directly to the ship's deck/Airports/Seaports. This service manages the entire process, from Collection to delivery, reducing operational expenses and increasing efficiency for customers.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Customers can concentrate on their core business while EIMF manages the complexities of supply chain and logistics.
          </p>
        </motion.div>

        {/* Middle Section - Services */}
        <motion.div
          className="flex flex-col self-start"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Customized Delivery Flexibility</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Door To Deck Services</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Door To Airport/Seaport</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Neutralizing & Repacking</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Fumigation Services</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Warehousing</span>
            </li>
          </ul>
        </motion.div>

        {/* Right Section - Benefits */}
        <motion.div
          className="flex flex-col self-start"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">How You Benefit</h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Highly specialized door-to-deck delivery service for ship spares and marine parts</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Time sensitive, assured delivery of ship spares and marine parts</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Full control of physical operation and communication throughout supply chain</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Single point of contact for across Indian ports</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Flexible transport options and competitive rates</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Door To Deck Section */}
      <motion.div
        className="mt-12 bg-white p-8 rounded-lg shadow-lg relative z-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Door To Deck Services</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ship Spare parts delivery is a vital service that requires local expertise to ensure 
              successful execution. EIMF is known for its speedy, reliable and efficient In-bond 
              clearances and Onboard deliveries of urgent overseas ship spares.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it is a critical spare part delivery or simply a case of meeting a delivery deadline, 
              EIMF offers pre-clearance of imported merchandise to meet its deadline across the Indian ports.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Locations</h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-600">
              <li>India</li>
              <li>China</li>
              <li>Japan</li>
              <li>Korea</li>
              <li>Dubai</li>
              <li>Singapore</li>
              <li>Amsterdam</li>
              <li>Denmark</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
