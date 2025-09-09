export default function LearningModel() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-8">
            A <span className="text-orange-500">3-stage learning</span> model to
            turn you into a <span className="text-pink-600">Coding Ninja</span>
          </h2>
          <div className="relative border-l-4 border-orange-500 pl-6 space-y-12">
            <div>
              <span className="absolute -left-3 top-1.5 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">
                🚀
              </span>
              <h3 className="text-xl font-semibold">Learn</h3>
              <p className="text-gray-600">
                Experience seamless learning with problem solving modules,
                leaderboard and awards.
              </p>
            </div>
            <div>
              <span className="absolute -left-3 top-[105px] w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">
                ⭐
              </span>
              <h3 className="text-xl font-semibold">Excel</h3>
              <p className="text-gray-600">
                Track your skill level and progress for you to grow and achieve
                faster.
              </p>
            </div>
            <div>
              <span className="absolute -left-3 top-[210px] w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">
                🎯
              </span>
              <h3 className="text-xl font-semibold">Standout</h3>
              <p className="text-gray-600">
                Build standout resumes, attempt mocks, get feedback and land
                interviews with confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#0f1c2e] text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Trusted by learners</h3>
          <p className="text-gray-300 mb-8">
            1,000,000+ Coding Ninjas alumni from 1100+ companies & 4000+
            colleges working in top product companies.
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <i className="fa-brands fa-facebook text-blue-500 text-xl"></i>
                <span>Facebook</span>
              </span>
              <span className="font-semibold">⭐ 4.9 (7,000+ reviews)</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <i className="fa-brands fa-google text-red-500 text-xl"></i>
                <span>Google</span>
              </span>
              <span className="font-semibold">⭐ 4.7 (2,300+ reviews)</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-graduation-cap text-orange-400 text-xl"></i>
                <span>Course rating</span>
              </span>
              <span className="font-semibold">⭐ 4.8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}