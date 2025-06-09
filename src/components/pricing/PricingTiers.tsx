import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardFooter, CardHeader, CardTitle } from '../ui/Card';

interface PlanFeature {
  name: string;
  free: boolean;
  premium: boolean;
  web3: boolean;
}

const PricingTiers: React.FC = () => {
  const features: PlanFeature[] = [
    { name: 'Basic Heart Risk Assessment', free: true, premium: true, web3: true },
    { name: 'Hospital Locator', free: true, premium: true, web3: true },
    { name: 'Basic Wellness Goal Plans', free: true, premium: true, web3: true },
    { name: 'Advanced Risk Analysis', free: false, premium: true, web3: true },
    { name: 'Personalized Meal Plans', free: false, premium: true, web3: true },
    { name: 'Custom Exercise Programs', free: false, premium: true, web3: true },
    { name: 'Progress Tracking Tools', free: false, premium: true, web3: true },
    { name: 'Personal Health Coach', free: false, premium: true, web3: true },
    { name: 'Family Plan Sharing', free: false, premium: false, web3: true },
    { name: 'Crypto Rewards for Goals', free: false, premium: false, web3: true },
    { name: 'NFT Health Achievements', free: false, premium: false, web3: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Free Plan */}
      <Card className="border border-gray-200">
        <CardHeader className="text-center pt-8 pb-6">
          <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-10a1 1 0 112 0v4a1 1 0 11-2 0V6z" clipRule="evenodd" />
            </svg>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Free Plan</CardTitle>
          <p className="text-gray-600">Basic tools to get started</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">$0</span>
            <span className="text-gray-600 ml-1">/month</span>
          </div>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {feature.free ? (
                  <Check className="h-5 w-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                )}
                <span className={feature.free ? 'text-gray-700' : 'text-gray-400'}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-6">
          <Button fullWidth>
            Get Started
          </Button>
        </CardFooter>
      </Card>
      
      {/* Premium Plan */}
      <Card className="border-2 border-primary-500 relative transform scale-105 shadow-xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
        <CardHeader className="text-center pt-8 pb-6">
          <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Premium</CardTitle>
          <p className="text-gray-600">Full access and coaching</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">$9.99</span>
            <span className="text-gray-600 ml-1">/month</span>
          </div>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {feature.premium ? (
                  <Check className="h-5 w-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                )}
                <span className={feature.premium ? 'text-gray-700' : 'text-gray-400'}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-6">
          <Button fullWidth className="bg-primary-500 hover:bg-primary-600">
            Start Premium
          </Button>
        </CardFooter>
      </Card>
      
      {/* Web3 Plan */}
      <Card className="border border-gray-200">
        <CardHeader className="text-center pt-8 pb-6">
          <div className="bg-secondary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Web3</CardTitle>
          <p className="text-gray-600">Crypto + NFT rewards</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-gray-900">$14.99</span>
            <span className="text-gray-600 ml-1">/month</span>
          </div>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {feature.web3 ? (
                  <Check className="h-5 w-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                )}
                <span className={feature.web3 ? 'text-gray-700' : 'text-gray-400'}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-6">
          <Button fullWidth className="bg-secondary-500 hover:bg-secondary-600">
            Join Web3
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingTiers;