import React from "react";
import heroImg from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="px-10 py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Your one stop destination to <br />
            <span className="text-yellow-300">Code, Create & Connect</span>
          </h1>
          <p className="text-lg text-gray-100 mb-6">
            Learn coding with real projects, collaborate with peers, and get mentorship 
            from industry experts—all in one place.
          </p>

          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Get Started
            </button>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Code Create Connect"
            className="w-3/4 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}