import React from "react";

const Testimonials = () => {
  const students = [
    {
      name: "Ananya Sharma",
      role: "Software Engineer at Amazon",
      feedback:
        "Coding Ninjas helped me crack my dream company with structured learning and amazing mentors!",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Rohit Mehta",
      role: "SDE at Microsoft",
      feedback:
        "The mentorship and doubt support were game changers. I improved my coding skills drastically.",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Priya Singh",
      role: "Data Scientist at Google",
      feedback:
        "The courses are practical and aligned with industry needs. Highly recommend to every learner!",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          Student <span className="text-orange-600">Success Stories</span>
        </h2>
        <p className="text-gray-600 mt-6 text-lg">
          Hear from our alumni who cracked their dream companies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={student.img}
                alt={student.name}
                className="w-20 h-20 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{student.name}</h3>
              <p className="text-orange-600 text-sm">{student.role}</p>
              <p className="text-gray-600 mt-3 text-sm">{student.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;