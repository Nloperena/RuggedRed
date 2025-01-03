// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2025 Rugged Red. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-light">Facebook</a>
          <a href="#" className="hover:text-light">Instagram</a>
          <a href="#" className="hover:text-light">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
