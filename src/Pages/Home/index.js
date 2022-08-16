import Footer from "../../Common/Footer/Footer";
import Counter from "../../Common/Home Components/Counter/Counter";
import Destinations from "../../Common/Home Components/Destinations/Destinations";
import HomeAbout from "../../Common/Home Components/HomeAbout/HomeAbout";
import IntroVideo from "../../Common/Home Components/Intro Video/IntroVideo";
import Partners from "../../Common/Home Components/Partners/Partners";
import Testimonials from "../../Common/Home Components/Testimonials/Testimonials";
import TopTour from "../../Common/Home Components/Top Tour/TopTour";
import TourGuides from "../../Common/Home Components/Tour Guides/TourGuides";
import HomeBlock1 from "../../Common/HomeBlock1/HomeBlok1";
import HomeBlock2 from "../../Common/HomeBlock2/HomeBlock2";
import SearchArea from "../../Common/Search Area/SearchArea";
import Slider from "../../Common/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <SearchArea />

      <HomeBlock1 />

      <HomeAbout />

      <Destinations />

      <TopTour />

      <Counter />

      <IntroVideo />

      <TourGuides />

      <HomeBlock2 />

      <Testimonials />

      <Partners />

      <Footer />
    </div>
  );
};

export default Home;
