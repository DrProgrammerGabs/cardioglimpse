import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your health journey?</h2>
            <p className="text-white text-opacity-90 text-lg">
              Join thousands of users who have already improved their heart health, fitness, and overall wellness with CardioGlimpse.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/risk-checker">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 focus:ring-white"
              >
                Try Risk Checker
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 focus:ring-white"
                rightIcon={<ArrowRight />}
              >
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;