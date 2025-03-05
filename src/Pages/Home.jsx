import AboutUs from "../Components/AboutUs";
import Announcements from "../Components/Announcements";
import CallToAction from "../Components/CallToAction";
import HeroSection from "../Components/HeroSection";
import QuickLinks from "../Components/QuickLinks";
const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <HeroSection />
      <QuickLinks />
      <AboutUs />
      <Announcements />
      <CallToAction />
    </div>
  );
};

export default Home;
