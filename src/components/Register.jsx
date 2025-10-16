import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-4">
      <title>Register</title>
      <div className="w-full max-w-md bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Join us and start your journey
        </p>

        <form className="space-y-5">
          <div>
            <label className="label-text text-gray-300 mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full bg-gray-800 text-gray-200 placeholder-gray-500 border-gray-700 focus:border-pink-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="label-text text-gray-300 mb-1 block">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full bg-gray-800 text-gray-200 placeholder-gray-500 border-gray-700 focus:border-pink-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="label-text text-gray-300 mb-1 block">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full bg-gray-800 text-gray-200 placeholder-gray-500 border-gray-700 focus:border-pink-500 focus:outline-none"
              required
            />
          </div>

          <button className="btn w-full bg-pink-600 hover:bg-pink-700 text-white border-none">
            Register
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
