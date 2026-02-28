import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { text: 'About Us', path: '/about-us' },
      { text: 'Our Solutions', path: '/solutions' },
      { text: 'Contact', path: '/contact' }
    ],
    services: [
      { text: 'Air Freight', path: '/solutions#air-freight', icon: '✈️' },
      { text: 'Ocean Freight', path: '/solutions#ocean-freight', icon: '🚢' },
      { text: 'Road Transport', path: '/solutions#road-transport', icon: '🚛' },
      { text: 'Warehousing', path: '/solutions#warehousing', icon: '🏭' },
      { text: 'Last Mile Delivery', path: '/solutions#last-mile', icon: '🚚' }
    ],
    contact: [
      { text: 'operations@east-in.com', path: 'mailto:operations@east-in.com', icon: '📧' },
      { text: '+91 7021821956', path: 'tel:+91 7021821956', icon: '📞' },
      { text: 'East-In Marine Freight Office G -1 , Plot No D3, Sect 14,CBD Belapur, Navi Mumbai 400614 ', path: 'https://maps.google.com/?q=JNPT+Uran+Navi+Mumbai', icon: '📍' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and Company Info */}
          <div className="md:w-1/3">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/assets/logo4.png" 
                alt="EIMF Logo" 
                className="h-40 w-auto mb-3 "
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              BEST IN MARINE ONBOARDS SERVICES.
            </p>
            
 {/* ----------------------facebook and linkedin icons links enable in futures updates------------------------ */}
            {/* <div className="flex space-x-4">
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div> */}
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase mb-3">Our Services</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <span className="mr-2 text-base">{link.icon}</span>
                      <span>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase mb-3">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.contact.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.path}
                      target={link.path.startsWith('http') ? '_blank' : undefined}
                      rel={link.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:text-white transition-colors duration-300 flex items-start"
                    >
                      <span className="mr-2 text-base">{link.icon}</span>
                      <span>{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} East-In Marine Freight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
