import React, { useState } from 'react';
import { ArrowRight, Calendar, Thermometer, Clock, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FertilityData {
  cycleLength: string;
  periodLength: string;
  trackingMethod: string[];
  lastPeriod: string;
  symptoms: string[];
}

interface FertilityStep1Props {
  onComplete: (data: FertilityData) => void;
}

const FertilityStep1: React.FC<FertilityStep1Props> = ({ onComplete }) => {
  const [formData, setFormData] = useState<FertilityData>({
    cycleLength: '',
    periodLength: '',
    trackingMethod: [],
    lastPeriod: '',
    symptoms: []
  });

  const trackingMethods = [
    {
      id: 'calendar',
      name: 'Calendar Tracking',
      description: 'Track your cycle dates',
      icon: <Calendar className="h-5 w-5" />,
      premium: false
    },
    {
      id: 'temperature',
      name: 'Temperature Tracking',
      description: 'Monitor basal body temperature',
      icon: <Thermometer className="h-5 w-5" />,
      premium: false
    },
    {
      id: 'ovulation',
      name: 'Ovulation Prediction',
      description: 'AI-powered fertility window prediction',
      icon: <Clock className="h-5 w-5" />,
      premium: true
    }
  ];

  const symptoms = [
    'Cramping',
    'Breast tenderness',
    'Mood changes',
    'Fatigue',
    'Headaches',
    'Bloating'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
        ? [...prev[name as keyof FertilityData] as string[], value]
        : (prev[name as keyof FertilityData] as string[]).filter(item => item !== value)
    }));
  };

  const isFormValid = () => {
    return (
      formData.cycleLength &&
      formData.periodLength &&
      formData.lastPeriod &&
      formData.trackingMethod.length > 0
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Track Your Cycle</CardTitle>
        <p className="text-gray-600 mt-2">
          Understanding your menstrual cycle is key to identifying your fertile window.
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* Cycle Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Cycle Length
              </label>
              <select
                name="cycleLength"
                value={formData.cycleLength}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select length</option>
                {Array.from({ length: 15 }, (_, i) => i + 21).map(num => (
                  <option key={num} value={num}>{num} days</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Period Length
              </label>
              <select
                name="periodLength"
                value={formData.periodLength}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select length</option>
                {Array.from({ length: 10 }, (_, i) => i + 2).map(num => (
                  <option key={num} value={num}>{num} days</option>
                ))}
              </select>
            </div>
          </div>

          {/* Last Period Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Day of Last Period
            </label>
            <input
              type="date"
              name="lastPeriod"
              value={formData.lastPeriod}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Tracking Methods */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Select Tracking Methods
            </label>
            <div className="grid gap-4">
              {trackingMethods.map((method) => (
                <div
                  key={method.id}
                  className={`p-4 rounded-lg border ${
                    method.premium ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-3 ${
                      method.premium
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-primary-100 text-primary-600'
                    }`}>
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <label className="font-medium text-gray-900 flex items-center">
                          {!method.premium && (
                            <input
                              type="checkbox"
                              name="trackingMethod"
                              value={method.id}
                              checked={formData.trackingMethod.includes(method.id)}
                              onChange={handleCheckboxChange}
                              className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            />
                          )}
                          {method.name}
                          {method.premium && (
                            <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                              <Lock className="w-3 h-3 mr-1" />
                              Premium
                            </span>
                          )}
                        </label>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Symptoms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Common Symptoms (Optional)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {symptoms.map((symptom) => (
                <label key={symptom} className="flex items-center">
                  <input
                    type="checkbox"
                    name="symptoms"
                    value={symptom}
                    checked={formData.symptoms.includes(symptom)}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{symptom}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tracking Tips:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Track your cycle consistently for more accurate predictions
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Take temperature readings at the same time each morning
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Note any unusual symptoms or cycle changes
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
                AI-powered fertility predictions
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Advanced symptom tracking
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Personalized insights and recommendations
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={() => onComplete(formData)}
              disabled={!isFormValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Nutrition
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FertilityStep1;