import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and company info */}
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-lg font-semibold">Your Company Name</h3>
            <p className="text-sm">Your company slogan or brief description</p>
          </div>
        </div>

        {/* Center: Links */}
        <div className="flex space-x-8">
          <a href="/" className="hover:text-blue-400">
            Home
          </a>
          <a href="/about" className="hover:text-blue-400">
            About Us
          </a>
          <a href="/services" className="hover:text-blue-400">
            Services
          </a>
          <a href="/blog" className="hover:text-blue-400">
            Blog
          </a>
        </div>

        {/* Right side: Contact info */}
        <div className="text-sm">
          <p className="mb-2">Contact Us</p>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:contact@yourcompany.com"
              className="text-blue-400 hover:underline"
            >
              contact@yourcompany.com
            </a>
          </p>
          <p className="mb-2">Phone: +123 456 7890</p>
          <p className="mb-2">Address: 123 Main Street, City, Country</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
