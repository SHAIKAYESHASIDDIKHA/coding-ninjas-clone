
import React from "react";
import mentorImg from "../assets/mentor.png";

export default function MentorSession() {
  return (
    <div className="px-10 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={mentorImg}
            alt="Mentor Session"
            className="w-3/4 rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
             Mentor Session
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Learn directly from experienced mentors who guide you step by step in your coding journey.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="text-green-500 font-bold mr-2">✔</span>
              Personalized 1:1 guidance from experts
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold mr-2">✔</span>
              Clear doubts in real-time during sessions
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold mr-2">✔</span>
              Practical advice on projects and interviews
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}