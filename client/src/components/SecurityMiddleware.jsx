import React, { useEffect } from 'react';
import { securityConfig } from '../config/security';

const SecurityMiddleware = ({ children }) => {
  useEffect(() => {
    // 1. Set security headers using meta tags
    // These headers protect against various web vulnerabilities
    const metaTags = [
      // Content Security Policy - Controls what resources can be loaded
      { name: 'Content-Security-Policy', content: generateCSP() },
      
      // Prevent MIME type sniffing
      { name: 'X-Content-Type-Options', content: securityConfig.headers['X-Content-Type-Options'] },
      
      // Prevent clickjacking
      { name: 'X-Frame-Options', content: securityConfig.headers['X-Frame-Options'] },
      
      // Enable XSS protection
      { name: 'X-XSS-Protection', content: securityConfig.headers['X-XSS-Protection'] },
      
      // Control referrer information
      { name: 'Referrer-Policy', content: securityConfig.headers['Referrer-Policy'] },
      
      // Restrict browser features
      { name: 'Permissions-Policy', content: securityConfig.headers['Permissions-Policy'] },
    ];

    // Add or update meta tags in the document head
    metaTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // 2. Add security event listeners for production environment
    const handleContextMenu = (e) => {
      // Prevent right-click in production to protect content
      if (import.meta.env.PROD) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e) => {
      // Prevent access to developer tools in production
      if (import.meta.env.PROD) {
        if (
          e.key === 'F12' || // Developer Tools
          (e.ctrlKey && e.shiftKey && e.key === 'I') || // Developer Tools
          (e.ctrlKey && e.shiftKey && e.key === 'J') || // Console
          (e.ctrlKey && e.key === 'U') // View Source
        ) {
          e.preventDefault();
        }
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Helper function to generate Content Security Policy string
  const generateCSP = () => {
    const { csp } = securityConfig;
    return Object.entries(csp)
      .map(([key, value]) => `${key} ${value.join(' ')}`)
      .join('; ');
  };

  // Render children with security measures applied
  return <>{children}</>;
};

export default SecurityMiddleware; 