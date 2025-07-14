import React from 'react';
import AboutV1Hero from '../components/AboutV1Hero';
import DiverseTeamSection from '../components/DiverseTeamSection';
import DepartmentsSection from '../components/DepartmentsSection';
import OurTeamSection from '../components/OurTeamSection';
import GetInTouch from '../components/GetInTouch';

const AboutPage = () => {
  return (
    <div className="overflow-hidden"> 
      <AboutV1Hero />
      <DiverseTeamSection />
      <OurTeamSection/>
      <DepartmentsSection />
      <GetInTouch/>
     
    </div>
  );
};

export default AboutPage;