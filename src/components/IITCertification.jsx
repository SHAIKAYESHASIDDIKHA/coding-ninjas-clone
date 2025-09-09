import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";

export default function IITCertifications() {
  const certifications = [
    {
      id: 1,
      title: "PG Certification in Data Analytics with GenAI",
      tag: "For college students",
      institute: "E&ICT Academy IIT Guwahati",
      duration: "6 months",
      image: cert1,
    },
    {
      id: 2,
      title: "PG Certification in Data Science with GenAI",
      tag: "For graduates",
      institute: "E&ICT Academy IIT Guwahati",
      duration: "9 months",
      image: cert2,
    },
    {
      id: 3,
      title: "Advanced Certification in GenAI for Non-Tech Professionals",
      tag: "For graduates",
      institute: "IITM Pravartak, IIT Madras",
      duration: "6 months",
      image: cert3,
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">IIT Certifications</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg shadow-md p-4 bg-white"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <span className="inline-block bg-orange-500 text-white px-2 py-1 text-xs rounded mb-2">
              {course.tag}
            </span>
            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm">{course.institute}</p>
            <p className="text-gray-500 text-xs">{course.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}