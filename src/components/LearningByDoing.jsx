import React from "react";
import learningImg from "../assets/learning.png";

export default function LearningByDoing() {
  return (
    <div className="px-10 py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={learningImg}
            alt="Learning Session"
            className="w-2/4 rounded-xl shadow"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Learning by Doing
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            In this session, you will engage in live classes and practical activities
            designed to reinforce your coding knowledge.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="text-green-500 font-bold mr-2">✔</span>
              Live interactive classes with mentors
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold mr-2">✔</span>
              Hands-on coding practice
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold mr-2">✔</span>
              Real-world examples & explanations
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}