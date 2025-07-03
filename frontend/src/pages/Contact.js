import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Icons

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,contact')", 
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-lg mt-2">
            Get in touch for any inquiries about our products and services.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <form className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>

            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label className="text-lg font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Send Message
            </button>
          </form>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 bg-white p-6 shadow-lg rounded-lg transition hover:scale-105">
              <FaPhoneAlt className="text-3xl text-red-500" />
              <div>
                <p className="text-lg font-semibold">Call Us</p>
                <p className="text-gray-600">+91 8853782340</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 shadow-lg rounded-lg transition hover:scale-105">
              <FaEnvelope className="text-3xl text-red-500" />
              <div>
                <p className="text-lg font-semibold">Email Us</p>
                <p className="text-gray-600">yadavabhishekbca@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-6 shadow-lg rounded-lg transition hover:scale-105">
              <FaMapMarkerAlt className="text-3xl text-red-500" />
              <div>
                <p className="text-lg font-semibold">Visit Us</p>
                <p className="text-gray-600">MAHADEV PG COLLEGE VARANASI</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="h-[400px] w-full">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8454175786597!2d82.973914!3d25.317645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3199b9c858b3%3A0x5c738e544b46e53!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1619623160004!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
};

export default Contact;
