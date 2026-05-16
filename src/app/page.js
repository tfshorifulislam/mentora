import AboutUs from '@/components/AboutUs';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import BecomeACreator from '@/components/Review';
import TrustCompanies from '@/components/TrustedCompanies';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TrustCompanies />
      <AboutUs />
      <BecomeACreator />
      <Footer />
    </div>
  );
};

export default HomePage;