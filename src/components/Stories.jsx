import { text } from "framer-motion/client";

export default function Stories() {
  const stories = [
    {
      name: "Twisam",
      role: "Full Stack Developer",
      text: "From optometrist to IT pro, thanks to Coding Ninjas...",
      company: "Cogent e Private ltd",
    },
    {
      name: "Onkar Lapate",
      role: "SDE-1",
      text: "Chose Coding Ninjas for structured, high-quality learning...",
      company: "Sunday Softwares",
    },
    {
      name: "Durgesh Chaubey",
      role: "SDE-1",
      text: "Coding Ninjas exceeded my college experience...",
      company: "Mastercard",
    },
    {
        name: "Siddharth",
        role: "SDE-1",
        text: "Coding Ninjas provided the right guidance and resources...",
        company: "Microsoft",
    }
  ];

  return (
    <section className="py-12 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Stories from people like you</h2>
      <div className="flex gap-16 overflow-x-auto px-6">
        {stories.map((s, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl w-72 flex-shrink-0 shadow-md">
            <h3 className="text-lg font-semibold">{s.name}</h3>
            <p className="text-sm text-gray-400">{s.role}</p>
            <p className="mt-3 text-sm">{s.text}</p>
            <p className="mt-2 text-xs text-orange-400">Post: {s.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}