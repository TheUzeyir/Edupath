'use client';
import React from "react";
import Link from "next/link";

const Navigation = () => {
  const navItems = [
    { href: "/courses", label: "Courses" },
    { href: "/blog", label: "Blog" },
    { href: "/instructor", label: "Instructor" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="ml-7">
      <ul className="flex space-x-6 font-semibold text-gray-700">
        {navItems.map((item) => (
          <li key={item.href} className="relative group">
            <Link
              href={item.href}
              className="flex items-center gap-1 hover:text-blue-500 transition-colors duration-200"
            >
              <span>{item.label}</span>
              {/* Aşağı ox ikonu istəyirsənsə, bura qalsın */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
