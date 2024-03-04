import HeroSection from "../HeroSection/HeroSection";
import TrustedSection from "../TrustedSection/TrustedSection";
import Features from "../Features/Features";


const Home = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <HeroSection />
      <TrustedSection />
      <Features/>
    </div>
  );
};

export default Home;
