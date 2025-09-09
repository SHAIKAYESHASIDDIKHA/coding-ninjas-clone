export default function ComparisonSection() {
  return (
    <section className="bg-[#0f1c2e] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Why choose <span className="text-orange-500">Coding Ninjas</span>?
        </h2>
      </div>
      <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-6 text-sm text-center border-b border-gray-700">
          <div className="p-4 font-semibold">Features</div>
          <div className="col-span-2 p-4 font-semibold text-orange-500">
            Coding Ninjas
          </div>
          <div className="col-span-3 p-4 font-semibold">Others</div>
        </div>
        {[
          "Structured + problem solving based",
          "Fastest 1:1 doubt support",
          "Integrated prep platform",
          "Profiles highlighted on Naukri",
          "Free resources",
        ].map((feature, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 text-center border-b border-gray-800 last:border-b-0"
          >
            <div className="p-4">{feature}</div>
            <div className="col-span-2 p-4 text-green-400 font-bold">✔</div>
            <div className="col-span-3 p-4 text-red-400 font-bold">✘</div>
          </div>
        ))}
        <div className="p-6">
          <div className="relative h-2 bg-gray-700 rounded-full">
            <div className="absolute left-0 top-0 h-2 w-1/3 bg-orange-400 rounded-full"></div>
            <div className="absolute left-0 top-0 h-2 w-5/6 bg-pink-500 rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>Average role, under-confident</span>
            <span className="text-pink-400">
              Your dream role, faster and with confidence 🚀
            </span>
          </div>
        </div>
        <div className="text-center pb-8">
          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition">
            Explore Offerings
          </button>
        </div>
      </div>
    </section>
  );
}