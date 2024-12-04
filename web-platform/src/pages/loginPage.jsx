import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 flex flex-col items-center justify-center px-16">
        <h1 className="text-2xl text-gray-900 font-medium mb-8">LOGIN</h1>

        <div className="flex gap-4 mb-6">
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
          or use your email to log in
        </p>

        <form className="w-full max-w-md">
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
          <Link to="/main"><div className="w-full py-3 bg-gray-900 text-center text-white rounded-lg hover:bg-gray-700">Login</div></Link>
        </form>
        <div className="font-thin text-black mt-10">Don't have an account <Link to="/signup"><span className="font-bold text-black cursor-pointer">Signup here</span></Link></div>
      </div>

      <div className="w-1/2 bg-gray-900 flex items-center justify-center bg-cover bg-center">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path d="M0,0 C30,20 70,20 100,0 L100,100 L0,100 Z" fill="#2D2D3A" />
        </svg>
      </div>
    </div>
  );
};

export default LoginPage;
