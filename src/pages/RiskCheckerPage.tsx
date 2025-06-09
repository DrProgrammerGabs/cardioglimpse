import React from 'react';
import RiskCalculator from '../components/risk/RiskCalculator';
import Container from '../components/ui/Container';

const RiskCheckerPage: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Heart Risk Assessment</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our AI-powered tool analyzes your health data to provide a personalized heart risk score and recommendations.
          </p>
        </div>
        
        <RiskCalculator />
      </Container>
    </div>
  );
};

export default RiskCheckerPage;