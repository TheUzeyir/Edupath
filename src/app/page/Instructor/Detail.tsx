"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bgImgg from "@/assets/images/bgbgbg.png";
import backgI from "@/assets/images/course-thumb-4.jpg";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

type Course = {
  title: string;
  category: string;
  lessons: number;
  students: number;
  originalPrice: string;
  price: string;
};

type Member = {
  name: string;
  image: string;
  courses: number;
  students: number;
  biography: string;
  popularCourses: Course[];
};

const Detail = () => {
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("selectedMember");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setMember(parsed);
      } catch (err) {
        console.error("Invalid JSON from localStorage:", err);
      }
    }
  }, []);

  if (!member) {
    return <div className="container mx-auto px-4 py-8">No details available.</div>;
  }

  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-[1140px] px-10 w-full rounded-lg">
        <Image
          src={bgImgg}
          alt="Background"
          className="rounded-lg h-64 object-cover w-full"
        />

        {/* Header Section */}
        <div className="flex justify-between m-auto">
          <div className="relative">
            <div className="absolute bottom-[-30px] gap-4 ml-[180px] transform -translate-x-1/2 flex flex-col md:flex-row items-center text-white">
              <Image
                src={member.image}
                alt={member.name}
                width={112}
                height={112}
                className="rounded-full border-4 border-white shadow-lg"
              />
              <div className="flex flex-col mb-6">
                <h5 className="mt-3 text-xl font-semibold">{member.name}</h5>
                <div className="flex gap-3 text-white min-w-72">
                  <p>{member.courses} Courses</p>
                  <p>{member.students} Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-2 mt-[-80px] mr-8">
            <FaFacebook className="text-white border border-white rounded-full hover:text-gray-600 hover:bg-white w-8 h-8 p-2 cursor-pointer" />
            <FaTwitter className="text-white border border-white rounded-full hover:text-gray-600 hover:bg-white w-8 h-8 p-2 cursor-pointer" />
            <FaLinkedin className="text-white border border-white rounded-full hover:text-gray-600 hover:bg-white w-8 h-8 p-2 cursor-pointer" />
            <FaYoutube className="text-white border border-white rounded-full hover:text-gray-600 hover:bg-white w-8 h-8 p-2 cursor-pointer" />
          </div>
        </div>

        {/* Biography */}
        <div className="container mx-auto py-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Biography</h3>
            <p className="text-gray-700 whitespace-pre-line">{member.biography}</p>
          </div>
        </div>

        {/* Courses */}
        {member.popularCourses?.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Popular Courses</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {member.popularCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg px-4 py-4 relative"
                >
                  <Image
                    src={backgI}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="p-4 flex flex-col gap-4">
                    <p className="inline-block rounded-md max-w-[100px] bg-[rgba(23,162,184,0.08)] text-[#17A2B8] text-[13px] font-medium px-3 py-1">
                      {course.category}
                    </p>
                    <p className="text-gray-700">
                      📘 {course.lessons} Lessons | 👤 {course.students} Students
                    </p>
                    <h4 className="text-lg font-semibold">{course.title}</h4>
                    <hr />
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-gray-800 font-medium text-sm">
                          5.0 <span className="text-gray-500">/5</span>
                        </p>
                        <div className="flex text-yellow-500 space-x-1">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                      <div className="text-right">
                        <del className="text-gray-500 text-sm">{course.originalPrice}</del>
                        <span className="text-lg font-semibold text-blue-600 ml-2">
                          {course.price}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <button className="bg-blue-500 text-white font-semibold min-w-[240px] rounded-3xl py-2 px-9">
                        Preview this Course
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
