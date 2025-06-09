import React from 'react';
import HospitalLocator from '../components/hospital/HospitalLocator';
import Container from '../components/ui/Container';

const HospitalLocatorPage: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Hospital Locator</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find the nearest hospitals and emergency centers based on your location for immediate care when you need it most.
          </p>
        </div>
        
        <HospitalLocator />
      </Container>
    </div>
  );
};

export default HospitalLocatorPage;