import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-white font-bold mb-4">Contact us</h2>
          <p className="mb-2">📞 1800-123-3598</p>
          <p className="mb-2">✉ contact@codingninjas.com</p>
        </div>
        <div>
          <h2 className="text-white font-bold mb-4">Coding Ninjas</h2>
          <ul className="space-y-2 font-semibold">
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Pricing & Refund Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold mb-4">Products</h2>
          <ul className="space-y-2 font-semibold">
            <li>Job Bootcamp</li>
            <li>Code 360</li>
            <li>Professional Certifications</li>
            <li>Student Certifications</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold mb-4">Community</h2>
          <ul className="space-y-2 font-semibold">
            <li>10X Club</li>
            <li>Student Chapters</li>
            <li>Hire from us</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sunrise Mentors Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}