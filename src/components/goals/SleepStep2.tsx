import React, { useState } from 'react';
import { ArrowRight, Thermometer, Sun, Volume2, Wind, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface SleepStep2Props {
  onComplete: () => void;
}

interface EnvironmentFactor {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tips: string[];
  premium: boolean;
  completed: boolean;
}

const SleepStep2: React.FC<SleepStep2Props> = ({ onComplete }) => {
  const [factors, setFactors] = useState<EnvironmentFactor[]>([
    {
      id: 'temperature',
      title: 'Optimal Temperature',
      description: 'Keep your bedroom between 18-20°C (65-68°F)',
      icon: <Thermometer />,
      tips: [
        'Use a programmable thermostat',
        'Layer bedding for easy adjustment',
        'Consider a fan for air circulation',
        'Wear breathable sleepwear'
      ],
      premium: false,
      completed: false
    },
    {
      id: 'darkness',
      title: 'Complete Darkness',
      description: 'Block out all light sources for better sleep',
      icon: <Sun />,
      tips: [
        'Install blackout curtains',
        'Cover electronic displays',
        'Use an eye mask if needed',
        'Address light leaks from doors'
      ],
      premium: false,
      completed: false
    },
    {
      id: 'noise',
      title: 'Sound Management',
      description: 'Create a quiet environment or use consistent background noise',
      icon: <Volume2 />,
      tips: [
        'Use earplugs or white noise',
        'Address squeaky doors/floors',
        'Consider a white noise machine',
        'Communicate quiet hours with household'
      ],
      premium: false,
      completed: false
    },
    {
      id: 'air-quality',
      title: 'Air Quality',
      description: 'Ensure good ventilation and clean air',
      icon: <Wind />,
      tips: [
        'Open windows during the day',
        'Use an air purifier',
        'Keep plants in bedroom',
        'Regular dusting and vacuuming'
      ],
      premium: true,
      completed: false
    }
  ]);

  const [selectedFactor, setSelectedFactor] = useState<string | null>(null);

  const toggleFactor = (factorId: string) => {
    setFactors(factors.map(factor =>
      factor.id === factorId ? { ...factor, completed: !factor.completed } : factor
    ));
  };

  const calculateProgress = () => {
    const completedCount = factors.filter(f => !f.premium && f.completed).length;
    const totalRequired = factors.filter(f => !f.premium).length;
    return (completedCount / totalRequired) * 100;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Optimize Your Sleep Environment</CardTitle>
          <p className="text-gray-600 mt-2">
            Create the perfect conditions for restful sleep by optimizing these key environmental factors.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Progress Bar */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Setup Progress</span>
                <span className="text-sm font-medium text-gray-700">
                  {Math.round(calculateProgress())}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
            </div>

            {/* Environment Factors */}
            <div className="grid gap-4">
              {factors.map((factor) => (
                <div key={factor.id}>
                  <div
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedFactor === factor.id
                        ? 'border-primary-500 bg-primary-50'
                        : factor.completed
                        ? 'border-success-200 bg-success-50'
                        : factor.premium
                        ? 'border-gray-200 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => !factor.premium && setSelectedFactor(
                      selectedFactor === factor.id ? null : factor.id
                    )}
                  >
                    <div className="flex items-start">
                      <div className={`rounded-full p-2 mr-3 ${
                        factor.completed
                          ? 'bg-success-100 text-success-600'
                          : factor.premium
                          ? 'bg-gray-100 text-gray-500'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {factor.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <h3 className="font-medium text-gray-900">{factor.title}</h3>
                            {factor.premium && (
                              <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                                <Lock className="w-3 h-3 mr-1" />
                                Premium
                              </span>
                            )}
                          </div>
                          {!factor.premium && (
                            <Button
                              variant={factor.completed ? 'outline' : 'primary'}
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFactor(factor.id);
                              }}
                            >
                              {factor.completed ? 'Completed' : 'Mark Complete'}
                            </Button>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{factor.description}</p>
                      </div>
                    </div>

                    {/* Expanded Tips */}
                    {selectedFactor === factor.id && (
                      <div className="mt-4 pl-11">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Implementation Tips:</h4>
                        <ul className="space-y-2">
                          {factor.tips.map((tip, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 bg-primary-200 rounded-full mr-2 mt-1.5"></span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Tips */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Expert Tips:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Test different temperatures to find your optimal sleeping condition
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Consider seasonal adjustments to your sleep environment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Make gradual changes and note which improvements help most
                  </span>
                </li>
              </ul>
            </div>

            {/* Premium Features */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Premium Features:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Smart device integration for temperature control
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Advanced air quality monitoring
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Personalized environment optimization tips
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                onClick={onComplete}
                disabled={calculateProgress() < 100}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Bedtime Ritual
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SleepStep2;