import React from "react";
import HeroSection from "./HeroSection";
import ServicesWeOffer from "./ServicesWeOffer";
import CompetitiveAdvantages from "./CompetitiveAdvantages";
import GetInTouch from "./GetInTouch";
import StatsAndReviews from "./StatsAndReviews";
import IniniteLogoSlider from "./InfiniteLogoSlider";

const HomePage = () => {
  return (
    <main className="">
      <HeroSection />
      <ServicesWeOffer />
        <CompetitiveAdvantages />/
       <IniniteLogoSlider/>
       <StatsAndReviews/>
       <GetInTouch />
    </main>
  );
};

export default HomePage;
