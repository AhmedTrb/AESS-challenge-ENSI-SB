import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex bg-white">
      <div className="flex-1 bg-gray-900 p-8 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
        <p className="mb-8 leading-relaxed opacity-90">
          To keep connected with us, please log in with your personal info
        </p>
        <a
          href="/login"
          className="px-6 py-3 border-2 border-white rounded-full text-white uppercase font-medium hover:bg-white hover:text-gray-900 transition"
        >
          Log In
        </a>
      </div>

      <div className="flex-1 p-8 flex flex-col items-center">
        <h1 className="text-2xl text-gray-900 font-semibold mb-8">
          Create Account
        </h1>

        <div className="flex gap-4 mb-8">
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center border rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center border rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center border rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <p className="text-sm text-gray-600 mb-8">
          or use your email for registration
        </p>

        <form className="w-full max-w-sm">
          <div className="relative mb-4">
            <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Name"
              className="w-full pl-12 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div className="relative mb-4">
            <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-12 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <div className="relative mb-6">
            <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <Link to="/login">
          <div className="w-full text-center py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700">Sign Up</div></Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
