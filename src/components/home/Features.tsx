import React from 'react';
import { 
  ActivitySquare, 
  Map, 
  Brain, 
  UserCheck, 
  Globe, 
  CreditCard
} from 'lucide-react';
import Container from '../ui/Container';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <ActivitySquare />,
      title: "Heart Risk Assessment",
      description: "Get a personalized heart risk score based on your medical data and lifestyle factors."
    },
    {
      icon: <Map />,
      title: "Hospital Locator",
      description: "Find nearby emergency centers and hospitals with real-time directions."
    },
    {
      icon: <Brain />,
      title: "AI-Powered Recommendations",
      description: "Receive intelligent suggestions to improve your health based on your unique profile."
    },
    {
      icon: <UserCheck />,
      title: "Personalized Plans",
      description: "Follow custom wellness plans tailored to your specific health goals and needs."
    },
    {
      icon: <Globe />,
      title: "Multilingual Support",
      description: "Access all features in multiple languages for a truly global experience."
    },
    {
      icon: <CreditCard />,
      title: "Flexible Pricing",
      description: "Choose between free basic features or premium plans with advanced tools."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Comprehensive Health Features</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Tools and insights designed to help you achieve your wellness goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;