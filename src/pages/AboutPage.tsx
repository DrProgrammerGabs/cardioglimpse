import React from 'react';
import { Heart, Award, Users, Globe, Sparkles } from 'lucide-react';
import Container from '../components/ui/Container';

const AboutPage: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary-100 rounded-full mb-6">
            <Heart className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CardioGlimpse</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A smart wellness platform dedicated to making heart health accessible and manageable for everyone.
          </p>
        </div>

        {/* Creator Profile */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
                alt="Dr. Marie Gabrielle A. Laguna"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
              <h3 className="text-xl text-primary-600 mb-4">Dr. Marie Gabrielle A. Laguna</h3>
              <p className="text-gray-600 mb-6">
                As a physician, wellness advocate, and cloud architect, Dr. Laguna combines medical expertise 
                with technological innovation to create accessible healthcare solutions. Her vision for CardioGlimpse 
                stems from years of clinical experience and a deep understanding of preventive healthcare.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  Physician
                </span>
                <span className="px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium">
                  Wellness Advocate
                </span>
                <span className="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium">
                  Cloud Architect
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower individuals with accessible, personalized heart health management tools and knowledge, 
              making preventive healthcare a natural part of everyday life.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              A world where everyone has the tools and knowledge to take control of their heart health, 
              leading to longer, healthier lives through prevention and early intervention.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Award className="h-6 w-6" />,
              title: "Medical Expertise",
              description: "Built on proven medical knowledge and latest research"
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Personalized Care",
              description: "Tailored recommendations for your unique health journey"
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: "Global Access",
              description: "Available worldwide with multilingual support"
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              title: "Innovation",
              description: "Cutting-edge AI and technology for better health outcomes"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Health Journey</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Start your personalized wellness journey today and take the first step towards better heart health.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;