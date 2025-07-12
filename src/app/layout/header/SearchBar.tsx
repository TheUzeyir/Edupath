import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xs mx-4">
      <input
        type="search"
        placeholder="Search for courses..."
        className="w-full px-4 py-2 text-sm font-semibold bg-[#F4F4F3] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M16.0004 16L12.3754 12.375M14.3333 7.66665C14.3333 11.3485 11.3485 14.3333 7.66665 14.3333C3.98476 14.3333 1 11.3485 1 7.66665C1 3.98476 3.98476 1 7.66665 1C11.3485 1 14.3333 3.98476 14.3333 7.66665Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
