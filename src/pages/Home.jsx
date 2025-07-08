import React from 'react';
import HeroSlideshow from '../components/HeroSlideshow';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  return (
    <div>
      <HeroSlideshow />
      <FeaturesSection />
      <TestimonialCarousel />
    </div>
  );
};

export default Home;