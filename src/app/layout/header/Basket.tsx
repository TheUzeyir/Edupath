import React from "react";


const Basket = () => {
  return (
    <div className="basket mx-5 relative group pr-8 py-1 border-r ">
      <svg className="group-hover:text-blue-500      text-gray-600 transition-colors duration-300"
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.87331 20.4999H14.2211C17.2875 20.4999 19.6399 19.3923 18.9717 14.9346L18.1937 8.89345C17.7818 6.66919 16.363 5.81793 15.1182 5.81793H4.93967C3.67652 5.81793 2.34013 6.73326 1.86416 8.89345L1.08613 14.9346C0.518621 18.8889 2.80695 20.4999 5.87331 20.4999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5.73156 5.59824C5.73156 3.21216 7.66585 1.27787 10.0519 1.27787V1.27787C11.2009 1.273 12.3045 1.72603 13.1187 2.53679C13.9329 3.34754 14.3906 4.44923 14.3906 5.59824V5.59824"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.08973 10.1017H7.1355"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12.9257 10.1017H12.9714"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <span className="absolute left-3 -top-3 inline-flex items-center justify-center w-6 h-6 bg-[#5956E9] text-white text-xs font-bold rounded-full">1</span>
    </div>
  );
};

export default Basket;
