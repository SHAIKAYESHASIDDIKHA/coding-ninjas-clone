import React from "react";

const CodingContests = () => {
  const contests = [
    {
      name: "CodeWars Challenge",
      date: "Starts: 15th Sept 2025",
      img: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
    },
    {
      name: "Hackathon 2025",
      date: "Starts: 1st Oct 2025",
      img: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
    },
    {
      name: "AlgoSprint Contest",
      date: "Starts: 20th Oct 2025",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721296.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          Coding <span className="text-orange-600">Contests</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Sharpen your skills by competing with the best minds.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {contests.map((contest, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={contest.img}
                alt={contest.name}
                className="w-20 h-20 mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{contest.name}</h3>
              <p className="text-orange-600 mt-2 text-sm">{contest.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingContests;