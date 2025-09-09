import React from "react";

const TopRatedCourses = () => {
  const courses = [
    {
      title: "Data Structures & Algorithms",
      desc: "Master problem-solving and coding interviews with in-depth DSA training.",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png",
    },
    {
      title: "Full Stack Web Development",
      desc: "Learn MERN stack and build industry-level projects.",
      img: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    },
    {
      title: "Machine Learning",
      desc: "Build AI models and become industry ready with ML & Python.",
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048949.png",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          Top <span className="text-orange-600">Rated Courses</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Learn from expert mentors and boost your coding journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-20 h-20 mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{course.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedCourses;