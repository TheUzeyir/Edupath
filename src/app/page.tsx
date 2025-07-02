import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import About from "./page/About/About";
import HomePage from "./page/Home/Home";

export default function Home() {
  return (
    <>
      <Header/>
      {/* <HomePage/> */}
      <About/>
      <Footer/>
    </>
  );
}
