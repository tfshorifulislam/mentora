import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner';
import SomeProjectDisplay from '@/components/Review';
import TrustCompanies from '@/components/TrustedCompanies';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TrustCompanies />
      <AboutUs />
      <SomeProjectDisplay/>
    </div>
  );
};

export default HomePage;