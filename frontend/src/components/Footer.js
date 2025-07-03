import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    
        <div>
          <h3 className="text-xl font-bold">Dynamic Coding with Abhi Yadav</h3>
          <p className="text-gray-400 mt-2">Your trusted source for the latest electrical devices. Quality products with secure payments.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/cart" className="hover:text-blue-400">Shop</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-bold mb-3">Customer Support</h3>
          <p className="flex items-center space-x-2"><FaPhoneAlt /> <span>+91 8853782340</span></p>
          <p className="flex items-center space-x-2"><FaEnvelope /> <span>ay005562@gmail.com</span></p>
          <p className="flex items-center space-x-2"><FaMapMarkerAlt /> <span>Jairampur Numari, Sarnath, Varanasi</span></p>
        </div>

     
        <div>
          <h3 className="text-lg font-bold mb-3">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin size={24} /></a>
          </div>

          <h3 className="text-lg font-bold mt-4">Secure Payments</h3>
          <div className="flex space-x-4 mt-2">
            <FaCcVisa size={36} className="text-blue-500" />
            <FaCcMastercard size={36} className="text-red-500" />
            <FaPaypal size={36} className="text-blue-400" />
          </div>
        </div>
      </div>


      <div className="text-center mt-6 text-gray-400 text-sm border-t border-gray-700 pt-4">
        &copy; Dynamic Coding with Abhi Yadav 
      </div>
    </footer>
  );
};

export default Footer;
