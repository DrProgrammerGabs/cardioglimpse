import React from 'react';
import PricingTiers from '../components/pricing/PricingTiers';
import FAQ from '../components/pricing/FAQ';
import Container from '../components/ui/Container';

const PricingPage: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Choose Your Plan</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan to help you achieve your health and wellness goals.
          </p>
        </div>
        
        <PricingTiers />
        <FAQ />
        
        <div className="bg-primary-50 rounded-lg p-8 mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Looking for a custom solution for your organization? We offer tailored wellness programs for businesses, healthcare providers, and insurance companies.
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </Container>
    </div>
  );
};

export default PricingPage;