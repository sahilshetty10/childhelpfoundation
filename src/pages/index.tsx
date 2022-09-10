import type { NextPage } from "next";

// Import Swiper styles
import "swiper/css";
import PartnerSlider from "../components/PartnerSlider";
import HeroSlider from "../components/HeroSlider";
import Title from "../components/Title";
import EmergencyCases from "../components/EmergencyCases";
import WhatWeDo from "../components/WhatWeDo";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <>
      <HeroSlider />
      <Title title="MEDICAL EMERGENCY CASES" />
      <EmergencyCases />
      <Title title="WHAT WE DO TO SAVE CHILDREN" />
      <WhatWeDo />
      <Title title="TESTIMONIALS" />
      <Testimonials />
      <Title title="OUR PARTNERS" />
      <PartnerSlider />
    </>
  );
};

export default Home;
