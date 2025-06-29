import  { useState, useEffect,useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import about19 from "../../assets/images/tchreimg.jpg";
import { useInView } from 'react-intersection-observer';
import "swiper/css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import about1 from '../../assets/images/aboutImg.jpg';
import about2 from '../../assets/images/brand-2-logo-1.png';
import about3 from '../../assets/images/brand-2-logo-2.png';
import about4 from '../../assets/images/brand-2-logo-3.png';
import about5 from '../../assets/images/brand-2-logo-4.png';
import about6 from '../../assets/images/brand-2-logo-5.png';
import about7 from '../../assets/images/brand-2-logo-6.png';
import about8 from '../../assets/images/brand-2-logo-7.png';
import about9 from '../../assets/images/brand-2-logo-9.png';
import about10 from '../../assets/images/thumb-1.png';
import about11 from '../../assets/images/mission-item-1.jpg';
import about11b from '../../assets/svg/mission-item-1-mask.svg';
import about12 from '../../assets/images/mission-item-2.jpg';
import about12b from '../../assets/svg/mission-item-2-mask.svg';
import about13 from '../../assets/images/mission-item-3.jpg';
import about13b from '../../assets/svg/mission-item-3-mask.svg';
import about14 from '../../assets/svg/brand-2-svg-1.svg';
import about15 from '../../assets/svg/team-2-svg-1.svg';
import about16 from '../../assets/images/diploma_8793837.png';
import about17 from '../../assets/images/graduation_8670931 (1).png';
import about18 from '../../assets/images/support_8760081 (1).png';

const About: React.FC = () => {
  const values = [
    {
      title: "Creativity",
      description:
        "Encouraging behaviours which encompass notions of originality, and problem-solving in all that we do.",
      image: about11,
      bg:about11b,
    },
    {
      title: "Scholarship",
      description:
        "Encouraging behaviours which encompass notions of originality, and problem-solving in all that we do.",
        image: about12,
        bg:about12b,
    },
    {
      title: "Community",
      description:
        "Encouraging behaviours which encompass notions of originality, and problem-solving in all that we do.",
        image: about13,
        bg:about13b,
    },
  ];

  // const formatNumber = (value: number): string => {
  //   if (value >= 1000) {
  //     return `${(value / 1000).toFixed(0)}K`;
  //   }
  //   return value.toString();
  // };
  
 
    const [stats, setStats] = useState([
      { value: 0, target: 10000, label: 'Students Enrolled' },
      { value: 0, target: 3000, label: 'Enrollment Forms' },
      { value: 0, target: 240, label: 'Online Instructors' },
      { value: 0, target: 110, label: 'Countries' },
    ]);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5, 
    });
  
    const formatNumber = (value) => {
      return value >= 1000 ? `${value / 1000}k` : value;
    };
  
    useEffect(() => {
      if (!inView) return; // Start animation only when in view
  
      const interval = setInterval(() => {
        setStats((prevStats) =>
          prevStats.map((stat) => {
            if (stat.value < stat.target) {
              const increment = Math.ceil(stat.target / 10); 
              return {
                ...stat,
                value: Math.min(stat.value + increment, stat.target),
              };
            }
            return stat;
          })
        );
      }, 200); 
  
      return () => clearInterval(interval);
    }, [inView]);


  // Teachers Data
  const teachers = [
    {
      name: "Kathryn Murphy",
      subject: "Interior Design",
      image: about19,
      socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Mina Hollace",
      subject: "Interior Design",
 
      image: about19,
      socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Leslie Alexander",
      subject: "Interior Design",
      image: about19,
      socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Annette Black",
      subject: "Interior Design",
      image: about19,
      socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Annette Black",
      subject: "Interior Design",
      image: about19,
      socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
      },
    }, {
      name: "Annette Black",
      subject: "Interior Design",
      image: about19,
      socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        linkedin: "https://linkedin.com/",
      },
    },
  ];
  const partners = [
    { id: 1, name: 'Book & Books', logo: about2 },
    { id: 2, name: 'EducationFirst', logo: about3 },
    { id: 3, name: 'Best College', logo: about4 },
    { id: 4, name: 'Academics', logo: about5 },
    { id: 5, name: 'Penwriter', logo: about6 },
    { id: 6, name: 'Learning', logo: about7 },
    { id: 7, name: 'StudentChat', logo: about8 },
    { id: 8, name: 'Learning', logo: about9 },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null); 

  // Function to move to the previous slide
  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Ensure swiperRef is not null
    }
  };

  // Function to move to the next slide
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Ensure swiperRef is not null
    }
  };
  return (
    
    <div>
      <section className="py-16 ">
        <div className="px:4 lg:px-16 max-w-[1240px] mx-auto">
          <div>
            <h2 className="text-xl lg:text-2xl text-gray-800">About Our Classes</h2>
            <p className="mt-4 text-5xl lg:text-6xl font-bold">
              We providing the <br /> best quality online courses.
            </p>
          </div>
  </div>
  <div className="relative mt-12">
  {/* Full-width Image */}
  <img
    src={about1}
    alt="Student working on a laptop"
    className="w-full  h-auto object-cover min-h-[480px]"
  />

  {/* Overlay: Right Content */}
  <div className="absolute top-4 min-w-80 md:min-w-[500px] lg:top-20 right-2  lg:right-12 flex flex-col md:flex-row  justify-center h-auto gap-12 md:h-72 items-center bg-eightbg rounded-lg shadow-lg max-w-lg">
    <div className='text-left'>
      {/* Title */}
      <p className="text-sm my-4 px-3 py-1 text-center font-bold w-32  bg-bt-blue text-white rounded-lg uppercase">Our Stories</p>
      
      {/* Description */}
      <p className="mt-4 text-gray-700 text-sm">
        When you design products and <br />services in close partnership with <br />
        clients, you are creating a solution <br /> tailored to their specific needs.
      </p>
    {/* Text Content */}
    <div className="ml">
  <button
    className="mt-2 flex items-center font-semibold text-gray-800 group hover:text-blue-600 transition-all duration-300"
  >
    Meet the Team
    <span
      className="ml-2 h-8 w-8 py-2 flex items-center justify-center rounded-full border border-gray-800 text-gray-800 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
    >
      →
    </span>
  </button>
</div>


        </div>
      {/* Number and Details */}
      <div className="flex flex-col items-center mt-6 relative">
        {/* Transparent and Blur Effect for the Number */}
        <div
  className="relative text-9xl font-extrabold"
  style={{
    display: "inline-block",
    position: "relative",
    width: "auto",
    height: "auto",
  }}
>
  <span
    className="block text-transparent"
    style={{
      backgroundImage: `url(${about1})`,
      WebkitBackgroundClip: "text", 
      WebkitTextFillColor: "transparent",
      display: "inline-block",
    }}
  >
    8
  </span>
</div>

<p className="block font-semibold text-gray-700">Years of Experience</p>
    
      </div> 
    
  </div>
</div>

    </section>

      <section className="bg-white py-16 mx-auto max-w-[1240px]">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Header Section */}
          <div className="text-left">
            <div className="flex  baseline space-x-2">
              <span className="text-blue-600 text-xl rounded-full pl-[4px] pt-[3px] h-9 w-9 bg-eightbg">🌐</span>
              <h3 className="uppercase mt-1 font-semibold text-gray-500">
                Know about classes
              </h3>
            </div>
            <div className="next flex flex-col gap-4 md:flex-row justify-between ">
            <h2 className="text-5xl max-w-[600px] font-bold text-gray-900 mt-4">
              We create unique digital media experiences.
            </h2>
            <p className="mt-4 text-gray-600 font-semibold max-w-96 text-base lg:mx-auto">
              Online courses from the world's leading experts. Lorem ipsum is
              simply dummy of the printing and typesetting industry lorem.
            </p></div>
          </div>

          {/* Features Section */}
          <div className="flex flex-col md:flex-row gap-8 mt-12">
  {/* Feature 1 */}
  <div className="flex-1 bg-eightbg py-16 px-8 rounded-lg text-center shadow-lg transition-all duration-300 hover:w-[90%] group hover:scale-95 min-h-[300px]">
    <div className="bg-eightbg w-16 h-16 mx-auto rounded-full flex items-center justify-center">
      <span className="bg-eightbg mt-4 p-[2px] border-8 border-solid mb-48 border-white rounded-full transition-transform duration-300 hover:scale-125">
        <img src={about16} alt="ab" />
      </span>
    </div>
    <h4 className="-mt-4 text-xl font-bold text-gray-800">Professional Educators</h4>
    <p className="mt-2 text-gray-600">
      Get one-on-one help from our subject matter experts.
    </p>
  </div>

  {/* Feature 2 */}
  <div className="flex-1 bg-eightbg py-16 px-8 rounded-lg text-center shadow-lg transition-all duration-300 hover:w-[90%] group hover:scale-95 min-h-[300px]">
    <div className="bg-eightbg w-16 h-16 mx-auto rounded-full flex items-center justify-center">
      <span className="bg-eightbg mt-4 p-[2px] border-8 border-solid mb-48 border-white rounded-full transition-transform duration-300 hover:scale-125">
        <img src={about17} alt="ab" />
      </span>
    </div>
    <h4 className="-mt-4 text-xl font-bold text-gray-800">Real-Time Support</h4>
    <p className="mt-2 text-gray-600">
      Ask questions over live chat or schedule a virtual meeting.
    </p>
  </div>

  {/* Feature 3 */}
  <div className="flex-1 bg-eightbg py-16 px-8 rounded-lg text-center shadow-lg transition-all duration-300 group hover:scale-95 min-h-[300px]">
    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center">
      <span className="bg-eightbg mt-4 p-[2px] border-8 border-solid mb-48 border-white rounded-full transition-transform duration-300 group hover:scale-125">
        <img src={about18} alt="ab" />
      </span>
    </div>
    <h4 className="-mt-4 text-xl font-bold text-gray-800">Free Access</h4>
    <p className="mt-2 text-gray-600">
      Every course offers online tutoring at no additional charge.
    </p>
  </div>
</div>


        </div>
      </section>
          {/* Statistics Section */} 
          <div
      className="bg-blue-600 lg:px-16 text-white py-12 mt-16 flex flex-wrap justify-around"
      ref={ref}
    >
      {stats.map((stat, index) => (
        <div className="text-center" key={index}>
          <h3 className="text-4xl font-bold">{formatNumber(stat.value)}</h3>
          <p className="mt-2 text-gray-200">{stat.label}</p>
        </div>
      ))}
    </div>

      {/* Mission and Values Section */}
      <section className="  bg-gray-50 py-16 ">
  <div className=" max-w-[1240px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row  justify-between items-center md:gap-12">
    {/* Left Section: Illustration */}
    <div className="max-w-[560px] min-w-[300px] lg:-mt-40 lg:sticky lg:top-4">
      <img
        src={about10} // Replace with your illustration's path
        alt="Illustration"
        className="lg:max-w-[480px] lg:min-w-[300px] lg:-top-8 w-40 h-auto -scale-x-100 md:scale-x-100 sticky top-20"
      />
    </div>

    {/* Right Section: Content */}
    <div className="max-w-[600px]">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Mission and Values</h2>
      <p className="text-lg text-gray-600 mb-8">
        We prepare you to launch your career by providing a supportive, creative, and professional environment. Our mission is to prepare students to understand, contribute to, and succeed in a rapidly changing society.
      </p>

      {/* Value Cards */}
      <div className="flex flex-col gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow"
          >
            {/* Background Overlay */}
            <div
              className="absolute top-0 left-0 w-full h-full rounded-lg bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${value.bg})` }}
            ></div>

            {/* Content Section */}
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="mt-4 text-gray-600">{value.description}</p>
              <button className="mt-6 px-6 py-3 hover:bg-bt-blue    bg-black text-white rounded-md">
                Learn More →
              </button>
            </div>

            {/* Image Section */}
            <div className="relative hidden md:block z-10 flex-1 mt-6 md:mt-0 md:ml-6">
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/*! //qalib bura api-a da etmek */}
      {/* Meet Our Teachers Section */}
  
   <section className="max-w-[1240px] mx-auto bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="hsli flex flex-col md:flex-row justify-between">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Meet Our <span className="text-blue-600">Teachers <img src={about15} className='top-2 ml-48' alt="img" /></span>
          </h2>
          {/* Add previous/next buttons */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={goToPreviousSlide} // Call goToPreviousSlide on click
          className="w-11 h-11 flex items-center justify-center rounded-full border-[1px] border-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          &lt;
        </button>

        <button
          onClick={goToNextSlide} // Call goToNextSlide on click
          className="w-11 h-11 flex items-center justify-center rounded-full border-[1px] border-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          &gt;
        </button>
      </div>


      </div>
        <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index} className="max-w-[330px]">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md relative">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-40 h-40 rounded-full mb-4"
              />

              {/* Hover Icon and Socials */}
              <div
  className={`absolute top-4 right-4 flex items-center justify-center transition-all duration-300 ${
    hoveredIndex === index ? "h-32" : "h-12"
  } w-12 bg-blue-600 text-white rounded-full cursor-pointer`}
  onMouseEnter={() => setHoveredIndex(index)}
  onMouseLeave={() => setHoveredIndex(null)}
>
  <div
    className={`flex flex-col items-center transition-opacity duration-300 ${
      hoveredIndex === index ? "opacity-100" : "opacity-0"
    }`}
  >
    <a
      href={teacher.socials.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-2 hover:text-blue-300"
    >
      <FaFacebook size={16} />
    </a>
    <a
      href={teacher.socials.twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-2 hover:text-blue-300"
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

  {/* + or - for expand/collapse */}
  <span
    className={`text-lg font-bold mr-4  ${
      hoveredIndex === index ? "hidden" : "block"
    }`}
  >
    {hoveredIndex === index ? "-" : "+"}
  </span>
</div>


              {/* Teacher's Name and Subject */}
              <h3 className="text-lg font-semibold mt-8">{teacher.name}</h3>
              <p className="text-sm text-gray-500">{teacher.subject}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>


          <section className="my-8 py-16 max-w-[1240px] mx-auto bg-white ">
  <div className=" container mx-auto p-8  flex flex-col lg:gap-10 justify-between lg:flex-row  lg:items-start">
    {/* Left Side Text */}
    <div className="w-2/3 lg:w-w-24f  text-left mb-8 lg:mb-0">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Who will You Learn <span className="text-blue-600">With? <img src={about14} alt="img" /></span>
      </h2>
      <p className="text-gray-600 mb-6">
        You can list your partners or instructors' brands here to show off your site's credibility.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition">
        View All Partners
      </button>
    </div>

    {/* Right Side Partners */}
    <div className="lg:w-w-58f flex flex-row lg:px-8 flex-wrap items-center justify-between">
      {partners.map((partner) => (
        <div key={partner.id} className="s:w-14 s:h-14 m-4 flex items-center justify-between">
          <img
            src={partner.logo}
            alt={partner.name}
            className="object-contain w-full h-full"
          />
        </div>
      ))}
    </div>
  </div>
</section>

        </div>
    
  );
};

export default About;