import React from 'react';
import AboutV1Hero from '../components/AboutV1Hero';
import DiverseTeamSection from '../components/DiverseTeamSection';
import DepartmentsSection from '../components/DepartmentsSection';
import OurTeamSection from '../components/OurTeamSection';
import GetInTouch from '../components/GetInTouch';
import MissionVision from '../components/MissionVision';
import Timeline from '../components/Timeline';
import FooterNew from '../components/FooterNew';
const AboutPage = () => {
  return (
    <div className="overflow-hidden"> 
      <AboutV1Hero />
      <DiverseTeamSection />
      <MissionVision />
      <Timeline />
      <OurTeamSection/>
      <DepartmentsSection />
      <GetInTouch/>
      <FooterNew/>
    </div>
  );
};

export default AboutPage;