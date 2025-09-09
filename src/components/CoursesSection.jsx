// src/components/CoursesSection.jsx
import React from "react";

export default function CoursesSection() {
  const courses = [
    {
      title: "Full Stack Web Development with GenAI",
      desc: "140+ Hrs of content • 600+ Problems • 10k+ Learners",
      img: "https://img.icons8.com/color/96/stack.png", // sample icon
    },
    {
      title: "Data Analytics with GenAI",
      desc: "100+ Hrs of content • 300+ Problems • 2000+ Learners",
      img: "https://img.icons8.com/color/96/combo-chart--v1.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Bootcamp</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition"
          >
            <img src={course.img} alt={course.title} className="w-16 h-16" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{course.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}