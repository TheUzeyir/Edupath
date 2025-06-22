"use client";

import { BsArrowRight } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Şirkət Haqqında */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Edupath</h2>
          <p className="text-sm mb-4">
            Discover a world of knowledge and opportunities with our online education platform pursue a new career.
          </p>

          {/* Ünvan + Location icon */}
          <p className="text-sm flex items-center gap-2">
            <HiOutlineLocationMarker className="text-purple-600" />
            C/54 Northwest Freeway, Houston, USA 485
          </p>

          <p className="text-sm mt-2">📞 +152 534-468-854</p>
        </div>

        {/* Usefull Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Usefull Links</h3>
          <nav className="flex flex-col gap-2">
            <ArrowLink>Course</ArrowLink>
            <ArrowLink>Mission & Vision</ArrowLink>
            <ArrowLink>Join a Career</ArrowLink>
            <ArrowLink>Zoom Meeting</ArrowLink>
            <ArrowLink>Pricing Plan</ArrowLink>
          </nav>
        </div>

        {/* Our Institute */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Our Institute</h3>
          <nav className="flex flex-col gap-2">
            <ArrowLink>Contact Us</ArrowLink>
            <ArrowLink>Technology</ArrowLink>
            <ArrowLink>Instructors</ArrowLink>
            <ArrowLink>Pricing</ArrowLink>
            <ArrowLink>Services</ArrowLink>
          </nav>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
          <p className="text-sm mb-2">Bizimlə əlaqə saxlayın və yeniliklərdən xəbərdar olun.</p>
          <input
            type="email"
            placeholder="Email daxil edin"
            className="w-full px-3 py-2 text-sm text-black rounded mb-2"
          />
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 rounded">
            Abunə ol
          </button>
        </div>
      </div>

      {/* Alt Footer */}
      <div className="mt-12 border-t border-gray-700 pt-6 px-8 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Edupath. Design & Develop with ❤️ by Shreethemes.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Login</a>
        </div>
      </div>
    </footer>
  );
}

// Sol tərəfə sağ ox ikonu əlavə edən link komponenti
function ArrowLink({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
    >
      <BsArrowRight className="text-xs" />
      {children}
    </a>
  );
}
