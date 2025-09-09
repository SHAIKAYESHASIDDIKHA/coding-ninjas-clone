
import awsLogo from "../assets/aws.jpg";
import flipkartLogo from "../assets/flipkart.jpg";
import optumLogo from "../assets/optum.jpg";
import amazonLogo from "../assets/amazon.jpg";
import paypalLogo from "../assets/paypal.jpg";
import uberLogo from "../assets/uber.jpg";
import googleLogo from "../assets/google.jpg";

export default function Companies() {
  const companies = [
    { name: "AWS", role: "Service to product", img: awsLogo },
    { name: "Flipkart", role: "CS/IT", img: flipkartLogo },
    { name: "Optum", role: "Non-CS/IT", img: optumLogo },
    { name: "Amazon", role: "E-commerce", img: amazonLogo },
    { name: "PayPal", role: "Fintech", img: paypalLogo },
    { name: "Uber", role: "Transportation", img: uberLogo },
    { name: "Google", role: "Search Engine", img: googleLogo },
  ];

  return (
    <section className="py-12 bg-white text-green-950">
      <h2 className="text-4xl font-extrabold text-center mb-6">
        Our Ninjas at top tech companies
      </h2>
      <div className="flex gap-10 justify-center flex-wrap">
        {companies.map((c, i) => (
          <div
            key={i}
            className="w-40 h-28 flex flex-col items-center justify-center border rounded-xl shadow-md p-4"
          >
            <img src={c.img} alt={c.name} className="h-10 object-contain mb-2" />
            <p className="font-semibold">{c.name}</p>
            <p className="text-sm text-gray-500">{c.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}