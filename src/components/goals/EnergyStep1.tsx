import React, { useState } from 'react';
import { ArrowRight, Battery, Coffee, Moon, Brain } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface EnergyAssessment {
  lowEnergyTimes: string[];
  activities: string[];
  nutrition: string[];
  sleepQuality: string;
  stressLevel: string;
  notes: string;
}

interface EnergyStep1Props {
  onComplete: (data: EnergyAssessment) => void;
}

const EnergyStep1: React.FC<EnergyStep1Props> = ({ onComplete }) => {
  const [assessment, setAssessment] = useState<EnergyAssessment>({
    lowEnergyTimes: [],
    activities: [],
    nutrition: [],
    sleepQuality: '',
    stressLevel: '',
    notes: ''
  });

  const timeSlots = [
    'Early Morning (5-8 AM)',
    'Morning (8-11 AM)',
    'Midday (11 AM-2 PM)',
    'Afternoon (2-5 PM)',
    'Evening (5-8 PM)',
    'Night (8-11 PM)'
  ];

  const commonActivities = [
    'Sitting at desk',
    'Screen time',
    'After meals',
    'During meetings',
    'After exercise',
    'Commuting'
  ];

  const nutritionFactors = [
    'Skipped meals',
    'Heavy meals',
    'High sugar foods',
    'Caffeine crash',
    'Dehydration',
    'Low protein intake'
  ];

  const handleTimeToggle = (time: string) => {
    setAssessment(prev => ({
      ...prev,
      lowEnergyTimes: prev.lowEnergyTimes.includes(time)
        ? prev.lowEnergyTimes.filter(t => t !== time)
        : [...prev.lowEnergyTimes, time]
    }));
  };

  const handleActivityToggle = (activity: string) => {
    setAssessment(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const handleNutritionToggle = (factor: string) => {
    setAssessment(prev => ({
      ...prev,
      nutrition: prev.nutrition.includes(factor)
        ? prev.nutrition.filter(f => f !== factor)
        : [...prev.nutrition, factor]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAssessment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = () => {
    return (
      assessment.lowEnergyTimes.length > 0 &&
      assessment.activities.length > 0 &&
      assessment.sleepQuality &&
      assessment.stressLevel
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Identify Energy Patterns</CardTitle>
        <p className="text-gray-600 mt-2">
          Let's understand when and why your energy levels drop to create a targeted improvement plan.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Low Energy Times */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              When do you typically feel low on energy?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeToggle(time)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-200 ${
                    assessment.lowEnergyTimes.includes(time)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <Battery className="h-4 w-4 mr-2" />
                    {time}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              What are you typically doing when energy drops?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {commonActivities.map((activity) => (
                <button
                  key={activity}
                  onClick={() => handleActivityToggle(activity)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-200 ${
                    assessment.activities.includes(activity)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {activity}
                </button>
              ))}
            </div>
          </div>

          {/* Nutrition Factors */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Select any nutrition factors that apply:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {nutritionFactors.map((factor) => (
                <button
                  key={factor}
                  onClick={() => handleNutritionToggle(factor)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-200 ${
                    assessment.nutrition.includes(factor)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {factor}
                </button>
              ))}
            </div>
          </div>

          {/* Sleep Quality */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How would you rate your sleep quality?
            </label>
            <div className="relative">
              <Moon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                name="sleepQuality"
                value={assessment.sleepQuality}
                onChange={handleInputChange}
                className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select sleep quality</option>
                <option value="excellent">Excellent - Wake up refreshed</option>
                <option value="good">Good - Generally well-rested</option>
                <option value="fair">Fair - Sometimes tired</option>
                <option value="poor">Poor - Often tired</option>
                <option value="very-poor">Very Poor - Always exhausted</option>
              </select>
            </div>
          </div>

          {/* Stress Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What's your typical stress level?
            </label>
            <div className="relative">
              <Brain className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                name="stressLevel"
                value={assessment.stressLevel}
                onChange={handleInputChange}
                className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select stress level</option>
                <option value="low">Low - Rarely stressed</option>
                <option value="moderate">Moderate - Occasionally stressed</option>
                <option value="high">High - Often stressed</option>
                <option value="very-high">Very High - Constantly stressed</option>
              </select>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={assessment.notes}
              onChange={handleInputChange}
              placeholder="Any other factors affecting your energy levels..."
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Accurate Assessment:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Consider your energy patterns over the past week
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Include both workdays and weekends
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Note any recent changes to your routine
                </span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={() => onComplete(assessment)}
              disabled={!isFormValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Nutrition Boosts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnergyStep1;