import React from "react";
import Category from "./Category";
import CoursesOverview from "./CoursesOverview";
import Funfact from "./Funfact";
import Subscribe from "./Subscribe";
import PopularCourses from "./PopularCourses";
import PopularPost from "./PopularPost";
import Testimonials from "./Testimonials";
import Instructors from "./Instructors";
import ViewPrograms from "./ViewPrograms";

const HomePage = () => {
  return (
    <div>
      <CoursesOverview />
      <Funfact />
      <Category />
      <PopularCourses />
      <Instructors/>
      <ViewPrograms/>
      <Testimonials/>
      <PopularPost/>
      <Subscribe />
    </div>
  );
};

export default HomePage;