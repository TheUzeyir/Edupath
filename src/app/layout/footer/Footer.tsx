'use client';
import React from "react";
import Link from "next/link";
import logo from "../../../assets/images/logo-black.png";
import playStore from "../../../assets/images/google-play.jpg";
import appStore from "../../../assets/images/apple-store.jpg";

const Footer = () => {
  return (
    <div className="bg-[#F3F4F8]">
      <div className="container">
        <div className="grid grid-cols-4 text-secondary py-14 font-medium">
          {/* Logo & About */}
          <div>
            <Link href="/">
              <img src={logo.src} width={120} alt="logo" />
            </Link>
            <p className="py-7">
              Acadia education theme, built specifically for the education
              centers which is teaching and involve learners.
            </p>
            <Link href="/contact">
              <button className="bg-primary hover:bg-white border-2 border-primary duration-500 hover:text-primary rounded-3xl py-2 px-7 text-white text-[18px] font-semibold">
                Contact us
                <span className="inline-block ml-2">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71533 1L13 5.28471L8.71533 9.56941"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M1 5.28467H12.88"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* About Links */}
          <div className="footer-list leading-loose duration-75 ml-20">
            <h2 className="text-xl text-black font-bold pb-7">About</h2>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/blog">News & Blogs</Link></li>
              <li><Link href="/teacher">Become a Teachers</Link></li>
              <li><Link href="/event">Events</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-list leading-loose duration-75 ml-20">
            <h2 className="text-xl text-black font-bold pb-7">Quick links</h2>
            <ul>
              <li><Link href="/student">Students</Link></li>
              <li><Link href="/addmition">Addmission</Link></li>
              <li><Link href="/faculty">Faculty & Staffs</Link></li>
              <li><Link href="/media">Media Relations</Link></li>
              <li><Link href="/alumni">Alumni</Link></li>
              <li><Link href="/visit">Visit</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-list grid justify-end">
            <div>
              <h2 className="text-xl text-black font-bold pb-7">Our Newsletter</h2>
              <p>Got Questions? Call us</p>
              <span className="text-[22px] text-black"> +670 413 90 762</span>
              <div className="flex items-center my-6 hover:text-primary duration-300">
                <span className="inline-block mr-1">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6H5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 5.40039L10.496 7.40015C9.672 8.05607 8.32 8.05607 7.496 7.40015L5 5.40039"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 11.4004H5.8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 8.19922H3.4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>acadia@gmail.com</span>
              </div>
              <div className="flex">
                <a href="https://play.google.com/store/search?q=acadia&c=apps">
                  <img src={playStore.src} alt="playstore" />
                </a>
                <a href="https://www.apple.com/tr/search/acadia?src=globalnav">
                  <img src={appStore.src} alt="applestore" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t py-5">
        <div className="container">
          <div className="footer-end flex justify-between">
            <div className="social flex">
              {["facebook-f", "twitter", "linkedin-in", "youtube"].map((icon) => (
                <div
                  key={icon}
                  className="bg-[#EDEFF2] mx-1 px-3 py-2 rounded-full text-secondary hover:bg-primary hover:text-white duration-300"
                >
                  <i className={`fa-brands fa-${icon}`}></i>
                </div>
              ))}
            </div>
            <div className="copyright text-secondary font-semibold">
              <p>
                © 2024 <span className="text-primary hover:text-secondary"><Link href="/">Acadia.</Link></span> All rights reserved.
              </p>
            </div>
            <div className="language">en</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
