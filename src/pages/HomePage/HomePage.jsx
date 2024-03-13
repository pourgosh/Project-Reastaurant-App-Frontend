import "./homePage.css";
import HeroSection from "../../components/TopHeroSection/HeroSection";
import MenuLinks from "../../components/MenuLinks/MenuLinks";
import About from "../../components/AboutUs/About";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MenuLinks />
      <About />
    </>
  );
};

export default HomePage;
