import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import About from "./page/About/About";
import Blog from "./page/Blog/Blog";
import ContactPage from "./page/Contact/Contact";
import Courses from "./page/Courses/Courses";
import FAQComponent from "./page/Faq/Faq";
import HomePage from "./page/Home/Home";
import Detail from "./page/Instructor/Detail";

export default function Home() {
  return (
    <>
      <Header/>
      {/* <HomePage/> */}
      {/* <About/> */}
      {/* <ContactPage/> */}
      {/* <Blog/> */}
      {/* <Courses/> */}
      {/* <FAQComponent/> */}
      <Detail/>
      <Footer/>
    </>
  );
}
