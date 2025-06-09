import React from 'react';
import Hero from '../components/home/Hero';
import GoalSelector from '../components/home/GoalSelector';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import Container from '../components/ui/Container';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16">
        <Container>
          <GoalSelector />
        </Container>
      </section>
      
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;