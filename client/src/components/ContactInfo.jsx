import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="relative w-full pt-32 pb-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            <span className="inline">Get in </span>
            <span className="inline text-blue-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-xl">
            Have questions about our services? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full mx-auto">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">East-In Marine Freight,
              Office G -1 , Plot No D3, Sect 14, 
              CBD Belapur, Navi Mumbai 400614.</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-lg w-full mx-auto">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+91 7021821956</p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-lg w-full mx-auto">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">operations@east-in.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
