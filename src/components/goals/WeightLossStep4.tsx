import React, { useState } from 'react';
import { ArrowRight, LineChart, Scale, TrendingUp, Calendar, Camera, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Link } from 'react-router-dom';

interface FormData {
  mealsPerDay: string;
  exerciseFrequency: string;
  dietaryRestrictions: string[];
  typicalDay: string;
  snackingHabits: string;
  waterIntake: string;
  sleepHours: string;
  stressLevel: string;
}

interface WeightLossStep4Props {
  formData: FormData;
  onComplete: () => void;
}

const WeightLossStep4: React.FC<WeightLossStep4Props> = ({ formData, onComplete }) => {
  const [showDemo, setShowDemo] = useState(false);

  const trackingFeatures = [
    {
      icon: <Scale className="h-6 w-6" />,
      title: 'Weight Log',
      description: 'Track your weight changes over time',
      premium: false,
      demo: (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Today</span>
              <input
                type="number"
                placeholder="Enter weight"
                className="w-24 p-1 border border-gray-300 rounded text-right"
                disabled
              />
            </div>
            <div className="h-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm">Weight trend chart</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Body Measurements',
      description: 'Record key measurements for a complete progress picture',
      premium: true,
      demo: (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Waist</label>
              <input
                type="number"
                className="w-full p-1 border border-gray-300 rounded bg-gray-100"
                disabled
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Hips</label>
              <input
                type="number"
                className="w-full p-1 border border-gray-300 rounded bg-gray-100"
                disabled
              />
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Habit Tracker',
      description: 'Monitor daily meals, water intake, and exercise',
      premium: false,
      demo: (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" disabled />
              <span className="text-sm text-gray-600">Log breakfast</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" disabled />
              <span className="text-sm text-gray-600">30 min exercise</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" disabled />
              <span className="text-sm text-gray-600">8 cups of water</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: 'Progress Photos',
      description: 'Visualize your transformation with photo tracking',
      premium: true,
      demo: (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded flex items-center justify-center"
              >
                <Lock className="h-4 w-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Track Your Progress</CardTitle>
          <p className="text-gray-600 mt-2">
            Monitor your weight loss journey and celebrate your achievements with these tracking tools.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Tracking Features */}
            <div className="grid gap-6">
              {trackingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 ${
                    feature.premium ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`rounded-full p-2 mr-3 ${
                        feature.premium
                          ? 'bg-gray-100 text-gray-500'
                          : 'bg-primary-100 text-primary-600'
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <h3 className="font-medium text-gray-900">{feature.title}</h3>
                        {feature.premium && (
                          <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                            <Lock className="w-3 h-3 mr-1" />
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                      {showDemo && feature.demo}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Toggle */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDemo(!showDemo)}
              >
                {showDemo ? 'Hide Demo' : 'Show Demo'}
              </Button>
            </div>

            {/* Tips Section */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Tips for Successful Tracking:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Weigh yourself at the same time each day, preferably in the morning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Take measurements and photos every 2-4 weeks
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Focus on non-scale victories like energy levels and how clothes fit
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Celebrate small wins and adjust your goals as needed
                  </span>
                </li>
              </ul>
            </div>

            {/* Premium Features */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Premium Features Include:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Advanced analytics and trend reports
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Body composition analysis
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Custom progress milestones and rewards
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Export data and generate reports
                </li>
              </ul>
              <div className="mt-4">
                <Link to="/pricing">
                  <Button variant="outline" size="sm" fullWidth>
                    Upgrade to Premium
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <Button
                onClick={onComplete}
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Complete Plan Setup
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeightLossStep4;