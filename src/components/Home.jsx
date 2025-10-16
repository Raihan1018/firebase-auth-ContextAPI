import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-gray-100 flex flex-col">
      <title>Home</title>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
          Build. Launch. Grow.
        </h2>
        <p className="text-gray-400 max-w-2xl mb-8 text-lg">
          Empower your ideas with simplicity and speed. A modern web platform
          built for developers and creators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/register"
            className="btn bg-indigo-600 hover:bg-indigo-700 border-none text-white px-8 py-3 rounded-full transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="btn bg-transparent border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white px-8 py-3 rounded-full transition"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
