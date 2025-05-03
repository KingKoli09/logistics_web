// import { Link } from 'react-router-dom';

// function Services() {
//   return (
//     <section
//       className="relative w-full text-white py-16 px-6 md:px-16"
//       style={{
//         backgroundImage: "url('/images/your-background.jpg')", // Update with actual background
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto text-center">
//         <h2 className="text-orange-500 text-3xl md:text-4xl font-bold mb-6 border-b-2 border-orange-500 inline-block">
//           Our Solutions
//         </h2>

//         <p className="text-lg font-light max-w-xl mx-auto mb-12">
//           We provide top-tier services that cater to diverse needs, ensuring excellence 
//           and reliability for our clients worldwide.
//         </p>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {[1, 2, 3, 4, 5, 6].map((service, index) => (
//             <div 
//               key={index} 
//               className="relative group bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
//             >
//               {/* Service Image */}
//               <img
//                 src={`/images/service${service}.jpg`} // Update with actual images
//                 alt={`Service ${service}`}
//                 className="w-full h-48 object-cover"
//               />

//               {/* Overlay & Text */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold">Service {service}</h3>
//                 <p className="text-gray-600 mt-2">
//                   Description of service {service}, explaining its benefits and features.
//                 </p>

//                 {/* Read More Button */}
//                 <Link
//                   to="/our-solution"
//                   className="text-orange-500 font-medium mt-4 inline-block hover:underline"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;
