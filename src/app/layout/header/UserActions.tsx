import React from "react";
import style from "./index.module.css";

const UserActions = () => {
  return (
    <div className="flex items-center space-x-6 text-gray-700">
      <div className="flex items-center space-x-2 cursor-pointer group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 15 16"
          fill="none"
          className="text-gray-600 group-hover:text-[#5956E9] transition-colors duration-300"
        >
          <path
            d="M13.4102 14.9697C13.4102 12.2666 10.721 10.0803 7.41016 10.0803C4.09933 10.0803 1.41016 12.2666 1.41016 14.9697M10.9027 4.49243C10.9027 6.42125 9.33909 7.98487 7.41028 7.98487C5.48146 7.98487 3.91784 6.42125 3.91784 4.49243C3.91784 2.56362 5.48146 1 7.41028 1C9.33909 1 10.9027 2.56362 10.9027 4.49243Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-base font-semibold group-hover:text-[#5956E9] transition-colors duration-300">
          Admin
        </span>
      </div>

      {/* Buton */}
      <button className={style.customButton}>Free Trial</button>

    </div>
  );
};

export default UserActions;
