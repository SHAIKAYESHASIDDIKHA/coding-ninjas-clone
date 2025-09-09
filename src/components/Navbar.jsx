import bgimg from "../assets/codingninjas.jpg";
import Logo from "../assets/Logo.png";

import { useState } from "react";

export default function CodingNinjasLanding() {
  const [experience, setExperience] = useState("");

  return (
    <div className="min-h-screen text-white font-sans" style={{ backgroundImage: `url(${bgimg})`,  }}>
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="text-orange-600 font-extrabold text-6xl">codingninjas🧑‍💻</div>
        <nav className="hidden md:flex gap-25 text-gray-800 font-extrabold text-2xl">
          <a href="#" className="hover:text-orange-500">Job Bootcamp</a>
          <a href="#" className="hover:text-orange-500">IIT Certifications</a>
          <a href="#" className="hover:text-orange-500">New Launches</a>
        </nav>
        <button className="bg-blue-950 text-white px-6 py-3 font-extrabold rounded-lg text-2xl">
          Login
        </button>
      </header>
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 py-16 items-center">
        <div className="space-y-6">
          <p className="text-green-400 text-3xl tracking-wide">
            Restricted by opportunities?
          </p>

          <h1 className="text-8xl md:text-7xl font-extrabold leading-snug">
            Get the tech career <br /> you deserve.{" "}
            <span className="text-blue-400">Faster.</span>
          </h1>

          <div className="space-y-5 mt-8 text-2xl">
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-2xl">✔</span>
              <p>
                <span className="font-bold">128% average hike</span> via our placement cell
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-2xl">✔</span>
              <p>
                <span className="font-bold">1.5 Lac+ learners</span> cracked top tech companies
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-2xl">✔</span>
              <p>
                <span className="font-bold">1,400+ alumni in MAANG</span> & 103 unicorn startups
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-8">
          <h2 className="text-xl font-semibold mb-6">
            Let’s find the right course for you
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block font-medium mb-2">Experience</label>
              <div className="space-y-2">
                {[
                  "Working Professional - Technical Roles",
                  "Working Professional - Non Technical",
                  "College Student - Final Year",
                  "College Student - 1st to Pre-final Year",
                  "Others",
                ].map((option, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="experience"
                      value={option}
                      checked={experience === option}
                      onChange={(e) => setExperience(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Select topic of interest</label>
              <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
                <option value="">Select your options/choices</option>
                <option value="web">Web Development</option>
                <option value="dsa">Data Structures & Algorithms</option>
                <option value="ai">AI / ML</option>
                <option value="cloud">Cloud & DevOps</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}