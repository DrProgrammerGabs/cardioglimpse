import React, { useState } from 'react';
import { ArrowLeft, LineChart, Moon, Brain, Calendar, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface SleepStep5Props {
  onComplete: () => void;
}

interface PremiumFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

const SleepStep5: React.FC<SleepStep5Props> = ({ onComplete }) => {
  const [showDemo, setShowDemo] = useState(false);

  const premiumFeatures: PremiumFeature[] = [
    {
      id: 'tracking',
      title: 'Smart Sleep Tracking',
      description: 'Advanced AI-powered sleep cycle analysis',
      icon: <LineChart className="h-6 w-6" />,
      benefits: [
        'Track sleep stages and cycles',
        'Monitor sleep quality trends',
        'Get personalized insights',
        'Export detailed sleep reports'
      ]
    },
    {
      id: 'patterns',
      title: 'Sleep Pattern Analysis',
      description: 'Understand your unique sleep patterns',
      icon: <Moon className="h-6 w-6" />,
      benefits: [
        'Identify optimal bedtime',
        'Analyze sleep efficiency',
        'Track environmental factors',
        'Detect sleep disturbances'
      ]
    },
    {
      id: 'coaching',
      title: 'AI Sleep Coach',
      description: 'Personalized guidance for better sleep',
      icon: <Brain className="h-6 w-6" />,
      benefits: [
        'Daily sleep recommendations',
        'Habit improvement suggestions',
        'Progress milestone tracking',
        'Adaptive sleep plans'
      ]
    },
    {
      id: 'planning',
      title: 'Smart Sleep Planner',
      description: 'Optimize your sleep schedule',
      icon: <Calendar className="h-6 w-6" />,
      benefits: [
        'Travel sleep adjustment',
        'Shift work optimization',
        'Nap time recommendations',
        'Schedule adjustments'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Premium Sleep Tools</CardTitle>
          <p className="text-gray-600 mt-2">
            Unlock advanced features to optimize your sleep and track your progress.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Premium Features */}
            <div className="grid gap-6">
              {premiumFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="border border-gray-200 rounded-lg p-6 bg-gray-50"
                >
                  <div className="flex items-start">
                    <div className="rounded-full bg-gray-100 p-3 text-gray-500">
                      {feature.icon}
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex items-center">
                        <h3 className="font-medium text-gray-900">{feature.title}</h3>
                        <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                          <Lock className="w-3 h-3 mr-1" />
                          Premium
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                      
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {feature.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Section */}
            {showDemo && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h4 className="font-medium text-gray-900 mb-4">Sleep Analytics Preview</h4>
                <div className="space-y-4">
                  {/* Sleep Score */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="text-sm text-gray-600">Sleep Score</span>
                      <div className="text-2xl font-bold text-gray-900">85</div>
                    </div>
                    <div className="h-16 w-16 rounded-full border-4 border-primary-500 flex items-center justify-center">
                      <span className="text-primary-600 font-bold">Good</span>
                    </div>
                  </div>

                  {/* Sleep Stages */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="text-sm font-medium text-gray-700 mb-3">Sleep Stages</h5>
                    <div className="space-y-2">
                      {['Deep Sleep', 'Light Sleep', 'REM', 'Awake'].map((stage) => (
                        <div key={stage} className="flex items-center">
                          <div className="w-24 text-sm text-gray-600">{stage}</div>
                          <div className="flex-grow">
                            <div className="h-2 bg-gray-200 rounded-full">
                              <div 
                                className="h-2 bg-gray-400 rounded-full"
                                style={{ width: `${Math.random() * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Demo Toggle */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDemo(!showDemo)}
              >
                {showDemo ? 'Hide Demo' : 'Show Analytics Demo'}
              </Button>
            </div>

            {/* Benefits Section */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Premium Benefits:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Get personalized recommendations based on your sleep data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Track your progress and identify areas for improvement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Access expert guidance and premium content
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
                onClick={() => window.history.back()}
              >
                Previous Step
              </Button>
              <Link to="/pricing">
                <Button>
                  Upgrade to Premium
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SleepStep5;