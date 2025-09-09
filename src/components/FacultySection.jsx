import React from "react";
import ankushImg from "../assets/ankush.jpg";
import parikhImg from "../assets/parikh.jpg";
import nidhiImg from "../assets/nidhi.jpg";

const facultyData = [
  {
    name: "Ankush Singla",
    role: "Co-Founder & Instructor",
    teaches: "Basics of C++ with DSA, Data Science & Machine Learning, Competitive Programming",
    image: ankushImg,
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Parikh Jain",
    role: "Instructor & Founding Member @ Coding Ninjas",
    teaches: "Basics of Python with DSA, Competitive Programming, Product Companies Interview Prep",
    image: parikhImg,
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Nidhi Agarwal",
    role: "Founding Member & Product Manager @ Coding Ninjas",
    teaches: "Basics of C++ with DSA, Data Science & Machine Learning, Data Analytics Course",
    image: nidhiImg,
    linkedin: "https://www.linkedin.com",
  },
];

export default function FacultySection() {
  return (
    <section className="px-10 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Faculty that brings out the best in you
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
          >
            {/* Profile Image */}
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{faculty.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{faculty.role}</p>
            <p className="text-gray-700 text-sm mb-4">{faculty.teaches}</p>
            <a
              href={faculty.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-medium hover:underline"
            >
              LinkedIn profile →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}