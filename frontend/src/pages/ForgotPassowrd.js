import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Updated import

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email) {
      setMessage("Please enter your email.");
    } else {
      // Handle sending password reset link
      // Example: call API to send reset link
      console.log(`Sending reset link to: ${email}`);
      setMessage("If an account with that email exists, we have sent a password reset link.");
      setTimeout(() => navigate("/login"), 3000); // Redirect after 3 seconds
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center space-x-2 mt-1">
              <FaEnvelope />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
