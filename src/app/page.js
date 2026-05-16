import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner';
import TrustCompanies from '@/components/TrustedCompanies';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TrustCompanies />
      <AboutUs />
    </div>
  );
};

export default HomePage;