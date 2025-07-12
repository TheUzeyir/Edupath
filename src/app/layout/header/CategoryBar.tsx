'use client';
import React from "react";
import Image from "next/image";
import categorySvg from "@/assets/svg/header/category.svg";

const CategoryBar = () => {
  return (
    <div className="header-category flex items-center pl-6">
      <Image src={categorySvg} width={17} height={17} alt="category icon" />
      <button
        aria-haspopup="true"
        aria-expanded="false"
        className="ml-2 font-bold text-[#5956E9] text-[16px]"
      >
        Category
      </button>
    </div>
  );
};

export default CategoryBar;
