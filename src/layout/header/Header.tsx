"use client";

import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

export default function Header() {
  return (
    <header className="bg-purple-600 shadow-md py-4">
      <div className="mx-auto px-12 max-w-screen-xl flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          UdyPath
        </div>

        {/* Naviqasiya */}
        <nav className="space-x-6 text-white font-medium hidden md:flex">
          <NavItem label="Home" />
          <NavItem label="Courses" />
          <NavItem label="About Us" />
          <NavItem label="Pages" />
          <NavItem label="Contact Us" />
        </nav>

        {/* İkonlar */}
        <div className="flex items-center space-x-4 text-gray-100 text-xl">
          <button title="Axtarış">
            <CiSearch />
          </button>
          <button title="Profil">
            <RxAvatar />
          </button>
          <button title="Səbət">
            <MdOutlineShoppingBag className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <a href="#" className="flex items-center gap-1 hover:text-gray-200">
      {label}
      <IoChevronDown className="text-sm" />
    </a>
  );
}
