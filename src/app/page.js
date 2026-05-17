import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner';
import Project from '@/components/Project';
import BecomeACreator from '@/components/Review';
import TrustCompanies from '@/components/TrustedCompanies';
import React from 'react';


const HomePage = () => {
  return (
    <div>
      <Banner />
      <TrustCompanies />
      <AboutUs />
      <Project />
      <BecomeACreator />
    </div>
  );
};

export default HomePage;