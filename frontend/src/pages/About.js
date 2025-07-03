import React from "react";
import { Link } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaGooglePay,
  FaApplePay,
  FaHeadset,
  FaTools,
  FaShippingFast,
  FaShieldAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">

      <div className="relative text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold">About Us</h1>
        <p className="text-lg mt-2">Your trusted online store for high-quality electrical devices.</p>
      </div>


      <div className="mt-10 p-6 bg-white shadow-lg rounded-lg transition-all hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          We specialize in providing the latest and most reliable electrical devices, ensuring our customers get the 
          best quality at competitive prices. Our mission is to offer seamless shopping experiences with top-notch 
          customer service.
        </p>
      </div>


      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Our Product Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[
            { name: "Smart Home Devices", icon: <FaTools /> },
            { name: "Home Appliances", icon: <FaShippingFast /> },
            { name: "Power Tools", icon: <FaShieldAlt /> },
            { name: "Wiring & Cables", icon: <FaTools /> },
            { name: "Security & Surveillance", icon: <FaShieldAlt /> },
            { name: "Industrial Electrical Equipment", icon: <FaShippingFast /> },
          ].map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg flex items-center gap-3 shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl text-blue-500">{item.icon}</div>
              <p className="text-gray-700 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center">
          <Link to="/" className="text-red-600 font-semibold text-lg underline">Browse All Categories →</Link>
        </p>
      </div>

    
      <div className="mt-10 p-6 bg-white shadow-lg rounded-lg transition-all hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800">Payment & Shipping Options</h2>
        <p className="text-gray-600 mt-4">
          We accept multiple payment options for a hassle-free shopping experience.
        </p>
        <div className="flex gap-6 justify-center text-4xl text-gray-700 mt-6">
          <FaCcVisa className="hover:text-blue-500 transition-all" />
          <FaCcMastercard className="hover:text-red-500 transition-all" />
          <FaPaypal className="hover:text-blue-700 transition-all" />
          <FaGooglePay className="hover:text-green-500 transition-all" />
          <FaApplePay className="hover:text-black transition-all" />
        </div>
        <p className="text-gray-600 mt-4 text-center">
          Enjoy fast and reliable shipping across the country.
        </p>
      </div>


      <div className="mt-10 flex flex-wrap items-center p-6 bg-gray-100 shadow-lg rounded-lg transition-all hover:shadow-2xl">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">24/7 Customer Support</h2>
          <p className="text-gray-600 mt-4">
            Have questions? Our dedicated support team is here to help you at any time.
          </p>
          <p className="mt-6">
            <Link to="/contact" className="text-red-600 font-semibold text-lg underline">Contact Support →</Link>
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center text-7xl text-red-600 animate-pulse">
          <FaHeadset />
        </div>
      </div>

     
    </div>
  );
};

export default About;
