import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "./HeroSection";
import ServicesWeOffer from "./ServicesWeOffer";
import CompetitiveAdvantages from "./CompetitiveAdvantages";
import GetInTouch from "./GetInTouch";
import StatsAndReviews from "./StatsAndReviews";
import IniniteLogoSlider from "./InfiniteLogoSlider";
import HeroHome from "./HeroHome";
import CompetitiveAdvantagesNew from "./CompetitiveAdvantagesNew";

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Best Virtual Assistant Services for Small Businesses | Global Assist Inc</title>
        <meta
          name="description"
          content="Looking for reliable and affordable virtual assistant services? Global Assist Inc provides expert support to help businesses streamline tasks and improve efficiency."
        />
      </Helmet>

      <HeroSection />
      <HeroHome />
      <ServicesWeOffer />
      <CompetitiveAdvantagesNew />
      <CompetitiveAdvantages />
      <IniniteLogoSlider />
      <StatsAndReviews />
      <GetInTouch />
    </main>
  );
};

export default HomePage;
