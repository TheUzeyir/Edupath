import React from "react";

const CategoryIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.1998 4.80017H4.7998V11.2002H11.1998V4.80017Z" fill="#23344D" />
    <path d="M2.4 15.9998C3.72 15.9998 4.8 14.9198 4.8 13.5998V11.1998H2.4C1.08 11.1998 0 12.2798 0 13.5998C0 14.9198 1.08 15.9998 2.4 15.9998Z" fill="#23344D" />
    <path d="M2.4 4.8H4.8V2.4C4.8 1.08 3.72 0 2.4 0C1.08 0 0 1.08 0 2.4C0 3.72 1.08 4.8 2.4 4.8Z" fill="#23344D" />
    <path d="M11.2002 4.8H13.6002C14.9202 4.8 16.0002 3.72 16.0002 2.4C16.0002 1.08 14.9202 0 13.6002 0C12.2802 0 11.2002 1.08 11.2002 2.4V4.8Z" fill="#23344D" />
    <path d="M13.6002 15.9998C14.9202 15.9998 16.0002 14.9198 16.0002 13.5998C16.0002 12.2798 14.9202 11.1998 13.6002 11.1998H11.2002V13.5998C11.2002 14.9198 12.2802 15.9998 13.6002 15.9998Z" fill="#23344D" />
  </svg>
);

const categories = [
  { id: 1, title: "Development", coursesCount: 15 },
  { id: 2, title: "Design", coursesCount: 12 },
  { id: 3, title: "Marketing", coursesCount: 8 },
  { id: 4, title: "Photography", coursesCount: 10 },
  { id: 5, title: "Business", coursesCount: 7 },
  { id: 6, title: "IT & Software", coursesCount: 13 },
  { id: 7, title: "Personal Development", coursesCount: 9 },
  { id: 8, title: "Music", coursesCount: 5 },
];

const CoursesCategory = () => {
  return (
    <div className="container py-20 px-20">
      <div className="courses-wrapper grid grid-cols-4 gap-10">
        {categories.map(({ id, title, coursesCount }) => (
          <div
            key={id}
            className="courses-item border border-inherit rounded-3xl duration-500 hover:-translate-y-1 hover:border-blue-400 p-8"
          >
            <span className="bg-[#A3D6C2] inline-block p-4 rounded-lg text-black text-3xl mb-7">
              <CategoryIcon />
            </span>
            <h2 className="font-semibold text-lg">{title}</h2>
            <span className="text-sm text-gray-400">{coursesCount} Courses</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesCategory;
