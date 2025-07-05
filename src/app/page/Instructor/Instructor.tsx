'use client'; 
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaArrowRight } from "react-icons/fa";

import ins1 from "@/assets/images/leadership-thumb-1.jpg";
import ins2 from "@/assets/images/leadership-thumb-2.jpg";
import ins3 from "@/assets/images/leadership-thumb-3.jpg";
import courseImg from "@/assets/images/course-thumb-5.jpg";
import courseImg2 from "@/assets/images/course-thumb-4.jpg";

type Course = {
  title: string;
  category: string;
  lessons: number;
  imgCourse: string;
  students: number;
  rating: number;
  price: string;
  originalPrice?: string;
};

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: any;
  facebook?: string;
  twitter?: string;
  courses: number;
  students: number;
  biography?: string;
  popularCourses?: Course[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Courtney Henry",
    role: "Principal",
    image: ins1,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    courses: 12,
    students: 1500,
  },
  {
    id: 2,
    name: "Kristin Watson",
    role: "Athletic Assistant",
    image: ins2,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    courses: 8,
    students: 1200,
  },
  {
    id: 3,
    name: "Chea-Lene Chang",
    role: "Principal",
    image: ins3,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    courses: 10,
    students: 1300,
  },
  {
    id: 4,
    name: "James Warren",
    role: "Owner & Founder",
    image: ins1,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    courses: 15,
    students: 2000,
  },
  {
    id: 5,
    name: "Indigo Violet",
    role: "Professor of Computer Science",
    image: ins1,
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    courses: 20,
    students: 37,
    biography: `Indigo Violet is an accomplished educator and expert...`,
    popularCourses: [
      {
        title: "Computer Science: Mathematical and Analytical",
        category: "Art & Design",
        lessons: 12,
        imgCourse: courseImg2.src,
        students: 45,
        rating: 5.0,
        price: "$26.00",
        originalPrice: "$54.00",
      },
      {
        title: "Machine Learning A-Z: Hands-on Python and Java",
        category: "Art & Design",
        lessons: 12,
        imgCourse: courseImg.src,
        students: 45,
        rating: 5.0,
        price: "$26.00",
        originalPrice: "$84.00",
      },
    ],
  },
];

const Instructor = () => {
  const router = useRouter();

  const handleDetails = (member: TeamMember) => {
    // Use localStorage to transfer data (safer for large data)
    localStorage.setItem("selectedMember", JSON.stringify(member));
    router.push(`/instructor/${member.id}`);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative group">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover mb-2 rounded-lg transition-transform duration-300 group-hover:shadow-lg"
                />
                <div className="absolute flex inset-0 bg-gradient-to-b from-transparent to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 items-end justify-between">
                  <div className="flex space-x-4 mb-4">
                    {member.facebook && (
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:text-blue-400 h-8 w-8 flex items-center justify-center text-black rounded-full"
                      >
                        <FaFacebook />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:text-blue-400 h-8 w-8 flex items-center justify-center text-black rounded-full"
                      >
                        <FaTwitter />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center mb-4 gap-2">
                    <button
                      onClick={() => handleDetails(member)}
                      className="text-white uppercase text-xs font-semibold"
                    >
                      Details
                    </button>
                    <span
                      onClick={() => handleDetails(member)}
                      className="group hover:bg-white w-8 h-8 border border-white hover:border-blue-500 rounded-full text-lg transition-transform transform group-hover:-rotate-45 cursor-pointer flex items-center justify-center"
                    >
                      <FaArrowRight className="text-white group-hover:text-blue-500" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-left flex-1 py-4">
                <p className="text-gray-500 font-semibold text-xs">{member.role}</p>
                <h3 className="text-lg font-semibold">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
