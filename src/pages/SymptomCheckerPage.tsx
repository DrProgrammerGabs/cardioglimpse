import React from 'react';
import SymptomChecker from '../components/symptoms/SymptomChecker';
import Container from '../components/ui/Container';

const SymptomCheckerPage: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Emergency Symptom Checker</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Quickly assess your symptoms and get AI-powered recommendations for your next steps,
            from self-care to emergency services.
          </p>
        </div>
        
        <SymptomChecker />
      </Container>
    </div>
  );
};

export default SymptomCheckerPage;