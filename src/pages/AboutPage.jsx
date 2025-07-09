import React from 'react';
import AboutV1Hero from '../components/AboutV1Hero';
import DiverseTeamSection from '../components/DiverseTeamSection';
import DepartmentsSection from '../components/DepartmentsSection';
import OurTeamSection from '../components/OurTeamSection';

const AboutPage = () => {
  return (
    <div className="overflow-hidden"> {/* Added overflow-hidden to handle potential layout shifts from rotated images */}
      <AboutV1Hero />
      <DiverseTeamSection />
      <OurTeamSection/>
      <DepartmentsSection />
      {/* Note: The Footer and Header are already in your App.jsx, so they don't need to be here */}
    </div>
  );
};

export default AboutPage;