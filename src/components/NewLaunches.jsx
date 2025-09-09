import React from "react";

// Import your JPGs
import aiImg from "../assets/ai.jpg";
import webImg from "../assets/web.jpg";
import dataImg from "../assets/data.jpg";

const launches = [
  {
    id: 1,
    title: "Generative AI with Python",
    desc: "Learn the foundations of AI with practical hands-on projects.",
    tag: "🔥 Trending",
    img: aiImg, // using imported jpg
  },
  {
    id: 2,
    title: "Full-Stack Web Development Bootcamp",
    desc: "Master MERN stack with real-world projects and job assistance.",
    tag: "⭐ Popular",
    img: webImg,
  },
  {
    id: 3,
    title: "Data Science & Analytics Certification",
    desc: "IIT-certified course covering ML, data analysis, and visualization.",
    tag: "🆕 New",
    img: dataImg,
  },
];

export default function NewLaunches() {
  return (
    <section className="bg-gray-50 py-10 px-6 md:px-20">
      <h2 className="text-6xl font-extrabold text-center text-orange-600 mb-8">
        🚀 New Launches
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {launches.map((launch) => (
          <div
            key={launch.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={launch.img}
              alt={launch.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <span className="text-sm font-semibold text-blue-600 uppercase">
                {launch.tag}
              </span>
              <h3 className="text-2xl font-bold mt-2 text-gray-900">
                {launch.title}
              </h3>
              <p className="text-gray-600 mt-2">{launch.desc}</p>

              <button className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition">
                Explore →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}