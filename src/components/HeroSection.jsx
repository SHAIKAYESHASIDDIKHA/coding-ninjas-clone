import mentorVideo from "../assets/mentor.mp4";

export default function HeroSection() {
  return (
    <section className="bg-neutral-700 text-fuchsia-950 py-16 px-8 min-h-screen flex flex-col justify-center">
      <h1 className="text-2xl md:text-9xl font-extrabold mb-12 text-center">
        WHY  US
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden max-w-sm">
          <video
            src={mentorVideo}
            controls
            autoPlay
            muted
            loop
            className="w-full h-110 object-cover"
          />
          <div className="p-6">
            <h2 className="text-lg font-extrabold text-red-500">Ankush Singla</h2>
            <p className="text-sm text-gray-400">
              Co-founder of Coding Ninjas | Mentor
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-6xl font-extrabold text-red-400">Mentor Guidelines</h2>
          
          <p className="flex items-center text-gray-200 italic">
            <span className="text-green-400 mr-2">✔</span>
            “A doubt is like a speed breaker in your learning.”
          </p>
          <p className="flex items-center text-gray-200 italic">
            <span className="text-green-400 mr-2">✔</span>
            “Consistency is the key to mastering coding.”
          </p>
          <p className="flex items-center text-gray-200 italic">
            <span className="text-green-400 mr-2">✔</span>
            “Never stop asking questions; curiosity drives progress.”
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="flex flex-col items-center">
          <span className="text-4xl">☕</span>
          <p className="text-lg mt-2 text-white">Placement assistance</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">👨‍🏫</span>
          <p className="text-lg mt-2 text-white">Stanford/IIT/MAANG faculty</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">⚡</span>
          <p className="text-lg mt-2 text-white">Fastest 1:1 doubt support</p>
        </div>
      </div>
    </section>
  );
}