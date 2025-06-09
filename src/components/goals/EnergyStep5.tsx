import React, { useState } from 'react';
import { ArrowLeft, Battery, LineChart, Brain, Calendar, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface EnergyStep5Props {
  onComplete: () => void;
}

const EnergyStep5: React.FC<EnergyStep5Props> = ({ onComplete }) => {
  const [energyRating, setEnergyRating] = useState<number | null>(null);
  const [improvements, setImprovements] = useState<string[]>([]);
  const [challenges, setChallenges] = useState<string[]>([]);
  const [nextFocus, setNextFocus] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const commonImprovements = [
    'More consistent energy levels',
    'Better morning alertness',
    'Less afternoon slumps',
    'Improved focus',
    'Faster recovery from fatigue',
    'Better sleep quality'
  ];

  const commonChallenges = [
    'Maintaining sleep schedule',
    'Regular movement breaks',
    'Consistent hydration',
    'Healthy meal timing',
    'Managing stress levels',
    'Avoiding caffeine crashes'
  ];

  const focusAreas = [
    'Sleep optimization',
    'Nutrition timing',
    'Movement routine',
    'Stress management',
    'Hydration habits',
    'Energy-boosting activities'
  ];

  const toggleImprovement = (improvement: string) => {
    setImprovements(prev =>
      prev.includes(improvement)
        ? prev.filter(i => i !== improvement)
        : [...prev, improvement]
    );
  };

  const toggleChallenge = (challenge: string) => {
    setChallenges(prev =>
      prev.includes(challenge)
        ? prev.filter(c => c !== challenge)
        : [...prev, challenge]
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Energy Level Check-in</CardTitle>
        <p className="text-gray-600 mt-2">
          Review your progress and plan your next energy-boosting steps.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Energy Rating */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Current Energy Rating</h3>
            <div className="flex items-center justify-between space-x-4 mb-4">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setEnergyRating(rating)}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 ${
                    energyRating === rating
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <Battery className={`h-6 w-6 ${
                      energyRating === rating ? 'text-primary-500' : 'text-gray-400'
                    }`} />
                    <span className="mt-2 text-sm font-medium">
                      {rating === 1 ? 'Very Low' :
                       rating === 2 ? 'Low' :
                       rating === 3 ? 'Moderate' :
                       rating === 4 ? 'Good' :
                       'Excellent'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Improvements */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Noticed Improvements</h3>
            <div className="grid grid-cols-2 gap-3">
              {commonImprovements.map((improvement) => (
                <button
                  key={improvement}
                  onClick={() => toggleImprovement(improvement)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-200 ${
                    improvements.includes(improvement)
                      ? 'border-success-500 bg-success-50 text-success-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {improvement}
                </button>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Current Challenges</h3>
            <div className="grid grid-cols-2 gap-3">
              {commonChallenges.map((challenge) => (
                <button
                  key={challenge}
                  onClick={() => toggleChallenge(challenge)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-200 ${
                    challenges.includes(challenge)
                      ? 'border-warning-500 bg-warning-50 text-warning-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {challenge}
                </button>
              ))}
            </div>
          </div>

          {/* Next Focus Area */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Next Week's Focus</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {focusAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => setNextFocus(area)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-200 ${
                    nextFocus === area
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Visualization */}
          {showDemo && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-medium text-gray-900 mb-4">Energy Trends</h4>
              <div className="space-y-4">
                <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Energy level trend chart</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-success-50 rounded-lg">
                    <div className="text-success-600 font-medium">Improved</div>
                    <div className="text-sm text-gray-600">Morning Energy</div>
                  </div>
                  <div className="p-4 bg-warning-50 rounded-lg">
                    <div className="text-warning-600 font-medium">In Progress</div>
                    <div className="text-sm text-gray-600">Afternoon Slump</div>
                  </div>
                  <div className="p-4 bg-primary-50 rounded-lg">
                    <div className="text-primary-600 font-medium">Consistent</div>
                    <div className="text-sm text-gray-600">Evening Routine</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Success Tips */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Continued Success:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Focus on one improvement area at a time
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Track your energy levels at the same times each day
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Celebrate small wins and progress milestones
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
                Detailed energy analytics
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                AI-powered recommendations
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Expert coaching support
              </li>
            </ul>
          </div>

          {/* Demo Toggle */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDemo(!showDemo)}
            >
              {showDemo ? 'Hide Progress Chart' : 'Show Progress Chart'}
            </Button>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
              onClick={() => window.history.back()}
            >
              Previous Step
            </Button>
            <Button onClick={onComplete}>
              Complete Journey
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnergyStep5;