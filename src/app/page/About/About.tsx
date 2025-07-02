"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "swiper/css";

import about1 from "../../../assets/images/aboutImg.jpg";
import about2 from "../../../assets/images/brand-2-logo-1.png";
import about3 from "../../../assets/images/brand-2-logo-2.png";
import about4 from "../../../assets/images/brand-2-logo-3.png";
import about5 from "../../../assets/images/brand-2-logo-4.png";
import about6 from "../../../assets/images/brand-2-logo-5.png";
import about7 from "../../../assets/images/brand-2-logo-6.png";
import about8 from "../../../assets/images/brand-2-logo-7.png";
import about9 from "../../../assets/images/brand-2-logo-9.png";
import about10 from "../../../assets/images/thumb-1.png";
import about11 from "../../../assets/images/mission-item-1.jpg";
import about11b from "../../../assets/svg/mission-item-1-mask.svg";
import about12 from "../../../assets/images/mission-item-2.jpg";
import about12b from "../../../assets/svg/mission-item-2-mask.svg";
import about13 from "../../../assets/images/mission-item-3.jpg";
import about13b from "../../../assets/svg/mission-item-3-mask.svg";
import about15 from "../../../assets/svg/team-2-svg-1.svg";
import about16 from "../../../assets/images/diploma_8793837.png";
import about17 from "../../../assets/images/graduation_8670931 (1).png";
import about18 from "../../../assets/images/support_8760081 (1).png";
import about19 from "../../../assets/images/tchreimg.jpg";

const About = () => {
  const values = [
    {
      title: "Creativity",
      description:
        "Encouraging behaviours which encompass notions of originality, and problem-solving in all that we do.",
      image: about11,
      bg: about11b,
    },
    {
      title: "Scholarship",
      description:
        "Encouraging behaviours which encompass notions of originality, and problem-solving in all that we do.",
      image: about12,
      bg: about12b,
    },
    {
      title: "Community",
      description:
        "Encouraging behaviours which encompass notions of originality, and problem-solving in all that we do.",
      image: about13,
      bg: about13b,
    },
  ];

  const [stats, setStats] = useState([
    { value: 0, target: 10000, label: "Students Enrolled" },
    { value: 0, target: 3000, label: "Enrollment Forms" },
    { value: 0, target: 240, label: "Online Instructors" },
    { value: 0, target: 110, label: "Countries" },
  ]);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => {
          if (stat.value < stat.target) {
            const inc = Math.ceil(stat.target / 20);
            return {
              ...stat,
              value: Math.min(stat.value + inc, stat.target),
            };
          }
          return stat;
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, [inView]);

  const formatNumber = (num: number) =>
    num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();

  const teachers = Array(6).fill({
    name: "Annette Black",
    subject: "Interior Design",
    image: about19,
    socials: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
    },
  });

  const partners = [
    { id: 1, name: "Book & Books", logo: about2 },
    { id: 2, name: "EducationFirst", logo: about3 },
    { id: 3, name: "Best College", logo: about4 },
    { id: 4, name: "Academics", logo: about5 },
    { id: 5, name: "Penwriter", logo: about6 },
    { id: 6, name: "Learning", logo: about7 },
    { id: 7, name: "StudentChat", logo: about8 },
    { id: 8, name: "Learning", logo: about9 },
  ];

  const [hoveredTeacher, setHoveredTeacher] = useState<number | null>(null);
  const swiperRef = useRef<any>(null);

  const prevSlide = () => swiperRef.current?.swiper.slidePrev();
  const nextSlide = () => swiperRef.current?.swiper.slideNext();

  return (
    <div>
      {/* About Our Classes */}
      <section className="py-16 max-w-[1240px] mx-auto px-4 lg:px-16">
        <h2 className="text-xl lg:text-2xl text-gray-800">About Our Classes</h2>
        <p className="mt-4 text-5xl lg:text-6xl font-bold">
          We providing the <br /> best quality online courses.
        </p>

        <div className="relative mt-12">
          <img
            src={about1.src}
            alt="Student working on laptop"
            className="w-full min-h-[480px] object-cover"
          />

          <div className="absolute top-4 right-2 lg:top-20 lg:right-12 flex flex-col md:flex-row items-center justify-center gap-12 md:h-72 bg-eightbg rounded-lg shadow-lg max-w-lg min-w-80 md:min-w-[500px]">
            <div className="text-left">
              <p className="text-sm font-bold uppercase text-white bg-bt-blue rounded-lg w-32 py-1 px-3 text-center my-4">
                Our Stories
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                When you design products and <br />
                services in close partnership with <br />
                clients, you are creating a solution <br />
                tailored to their specific needs.
              </p>
              <button className="mt-2 flex items-center font-semibold text-gray-800 group hover:text-blue-600 transition duration-300">
                Meet the Team
                <span className="ml-2 h-8 w-8 flex items-center justify-center rounded-full border border-gray-800 text-gray-800 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  →
                </span>
              </button>
            </div>

            <div className="flex flex-col items-center mt-6 relative">
              <span
                className="text-9xl font-extrabold inline-block text-transparent"
                style={{
                  backgroundImage: `url(${about1})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                8
              </span>
              <p className="font-semibold text-gray-700">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Know About Classes */}
      <section className="bg-white py-16 max-w-[1240px] mx-auto px-6 lg:px-20">
        <div className="mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-blue-600 text-xl rounded-full pl-[4px] pt-[3px] h-9 w-9 bg-eightbg">
              🌐
            </span>
            <h3 className="uppercase font-semibold text-gray-500">Know about classes</h3>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
            <h2 className="text-5xl max-w-[600px] font-bold text-gray-900">
              We create unique digital media experiences.
            </h2>
            <p className="text-gray-600 font-semibold max-w-96 text-base lg:mx-auto">
              Online courses from the world's leading experts. Lorem ipsum is simply dummy of
              the printing and typesetting industry lorem.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {[
            {
              img: about16,
              title: "Professional Educators",
              desc: "Get one-on-one help from our subject matter experts.",
            },
            {
              img: about17,
              title: "Real-Time Support",
              desc: "Ask questions over live chat or schedule a virtual meeting.",
            },
            {
              img: about18,
              title: "Free Access",
              desc: "Every course offers online tutoring at no additional charge.",
            },
          ].map(({ img, title, desc }, i) => (
            <div
              key={i}
              className="flex-1 bg-eightbg py-16 px-8 rounded-lg text-center shadow-lg transition-all duration-300 hover:w-[90%] group hover:scale-95 min-h-[300px]"
            >
              <div className="bg-eightbg w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                <span className="mt-4 p-[2px] border-8 border-white rounded-full hover:scale-125 transition-transform duration-300">
                  <img src={img.src} alt={title} />
                </span>
              </div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">{title}</h4>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section
        className="bg-blue-600 text-white py-12 mt-16 flex flex-wrap justify-around"
        ref={ref}
      >
        {stats.map(({ label, value }, i) => (
          <div key={i} className="text-center m-4 min-w-[120px]">
            <h3 className="text-4xl font-bold">{formatNumber(value)}</h3>
            <p className="mt-2 text-gray-200">{label}</p>
          </div>
        ))}
      </section>

      {/* Mission and Values */}
      <section className="bg-gray-50 py-16 max-w-[1240px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center md:gap-12">
        <div className="max-w-[560px] min-w-[300px] lg:-mt-40 lg:sticky lg:top-4">
          <img
            src={about10.src}
            alt="Illustration"
            className="lg:max-w-[480px] lg:min-w-[300px] w-40 h-auto -scale-x-100 md:scale-x-100 sticky top-20"
          />
        </div>

        <div className="max-w-[600px]">
          <h2 className="text-4xl font-bold mb-6">Mission and Values</h2>
          <p className="text-lg text-gray-600 mb-8">
            We prepare you to launch your career by providing a supportive, creative, and
            professional environment. Our mission is to prepare students to understand,
            contribute to, and succeed in a rapidly changing society.
          </p>

          <div className="flex flex-col gap-8">
            {values.map(({ title, description, image, bg }, idx) => (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow"
              >
                <div
                  className="absolute inset-0 rounded-lg opacity-10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${bg})` }}
                />
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                  <p className="mt-4 text-gray-600">{description}</p>
                  <button className="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-bt-blue transition">
                    Learn More →
                  </button>
                </div>
                <div className="relative hidden md:block z-10 flex-1 mt-6 md:mt-0 md:ml-6">
                  <img src={image.src} alt={title} className="w-full h-auto rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Teachers */}
      <section className="max-w-[1240px] mx-auto bg-white py-16 px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Meet Our{" "}
            <span className="text-blue-600">
              Teachers <img src={about15} alt="decorative" className="inline ml-4" />
            </span>
          </h2>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition"
              aria-label="Previous Slide"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition"
              aria-label="Next Slide"
            >
              &gt;
            </button>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {teachers.map((teacher, i) => (
            <SwiperSlide key={i} className="max-w-[330px]">
              <div
                className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                onMouseEnter={() => setHoveredTeacher(i)}
                onMouseLeave={() => setHoveredTeacher(null)}
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-40 h-40 rounded-full mb-4"
                />
                <h3 className="font-semibold text-lg">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.subject}</p>

                <div
                  className={`absolute top-4 right-4 flex flex-col items-center space-y-2 bg-blue-600 text-white rounded-full p-2 transition-all duration-300 overflow-hidden ${
                    hoveredTeacher === i ? "h-32 w-12" : "h-12 w-12"
                  }`}
                  aria-label={`${teacher.name} social links`}
                >
                  <a
                    href={teacher.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300"
                  >
                    <FaFacebook size={16} />
                  </a>
                  <a
                    href={teacher.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300"
                  >
                    <FaTwitter size={16} />
                  </a>
                  <a
                    href={teacher.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300"
                  >
                    <FaLinkedin size={16} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default About;
