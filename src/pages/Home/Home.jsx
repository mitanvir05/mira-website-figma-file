import HeroSection from "./HeroSection/HeroSection";
import TrustedSection from "./TrustedSection/TrustedSection";
import Features from "./Features/Features";
import WorkTogether from "./Worktogether/Worktogether";
import Connect from "./Connect/Connect";


const Home = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <HeroSection />
      <TrustedSection />
      <Features/>
      <WorkTogether/>
      <Connect/>
    </div>
  );
};

export default Home;
