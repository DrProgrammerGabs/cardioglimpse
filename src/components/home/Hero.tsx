import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-primary-50">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-up">
              Your Heart Health
              <span className="text-primary-500 block"> Journey Starts Here</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              CardioGlimpse provides personalized wellness plans for heart health, weight management, fitness, sleep, and more.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" rightIcon={<ArrowRight />}>
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary-200 rounded-full opacity-50"></div>
              <img 
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg" 
                alt="Doctor with patient" 
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 flex items-center z-20">
              <div className="mr-3">
                <svg className="w-10 h-10 text-primary-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Start your assessment in</p>
                <p className="text-lg font-bold text-gray-900">2 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;