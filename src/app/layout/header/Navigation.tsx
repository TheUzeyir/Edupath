'use client'; 
import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="header-navigation">
      <nav className="ml-7">
        <ul className="flex space-x-6 font-semibold text-gray-700">
          {[
            { href: "/courses", label: "Courses" },
            { href: "/blog", label: "Blog" },
            { href: "/instructor", label: "Instructor" },
            { href: "/contact", label: "Contact" },
            { href: "/about", label: "About" },
          ].map((item) => (
            <li key={item.href} className="relative group">
              <Link href={item.href} className="flex items-center space-x-2 hover:text-blue-500">
                <span>{item.label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;