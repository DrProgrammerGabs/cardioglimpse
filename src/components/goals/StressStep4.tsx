import React, { useState } from 'react';
import { ArrowRight, Coffee, Moon, Dumbbell, Utensils, AlertTriangle, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface LifestyleChange {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  currentHabit: string;
  targetHabit: string;
  tips: string[];
  premium: boolean;
  selected: boolean;
}

interface StressStep4Props {
  onComplete: () => void;
}

const StressStep4: React.FC<StressStep4Props> = ({ onComplete }) => {
  const [changes, setChanges] = useState<LifestyleChange[]>([
    {
      id: 'caffeine',
      name: 'Caffeine Management',
      description: 'Optimize caffeine intake for better stress response',
      icon: <Coffee />,
      currentHabit: 'Throughout the day',
      targetHabit: 'Before 2 PM only',
      tips: [
        'Switch to decaf after lunch',
        'Try herbal tea alternatives',
        'Stay hydrated with water',
        'Monitor effects on sleep'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'sleep',
      name: 'Sleep Hygiene',
      description: 'Improve sleep quality for better stress resilience',
      icon: <Moon />,
      currentHabit: 'Irregular schedule',
      targetHabit: 'Consistent 7-8 hours',
      tips: [
        'Set regular sleep/wake times',
        'Create a bedtime routine',
        'Limit screen time before bed',
        'Keep bedroom cool and dark'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'exercise',
      name: 'Regular Movement',
      description: 'Use exercise to reduce stress levels',
      icon: <Dumbbell />,
      currentHabit: 'Sedentary lifestyle',
      targetHabit: '30 min daily activity',
      tips: [
        'Start with short walks',
        'Find activities you enjoy',
        'Exercise with friends',
        'Take movement breaks'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'nutrition',
      name: 'Stress-Reducing Diet',
      description: 'Eat to support stress management',
      icon: <Utensils />,
      currentHabit: 'Irregular meals',
      targetHabit: 'Balanced, regular meals',
      tips: [
        'Eat regular meals',
        'Include protein with each meal',
        'Limit processed foods',
        'Stay hydrated'
      ],
      premium: false,
      selected: false
    }
  ]);

  const [selectedChange, setSelectedChange] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  const toggleChange = (changeId: string) => {
    setChanges(changes.map(change =>
      change.id === changeId ? { ...change, selected: !change.selected } : change
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Make Lifestyle Changes</CardTitle>
        <p className="text-gray-600 mt-2">
          Small changes in daily habits can significantly impact your stress levels.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Health Warning */}
          <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
              <div>
                <h4 className="text-warning-800 font-medium">Important Notice</h4>
                <p className="text-warning-700 text-sm mt-1">
                  Make changes gradually and consult healthcare providers before significant lifestyle changes,
                  especially if you have underlying health conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Lifestyle Changes */}
          <div className="grid gap-4">
            {changes.map((change) => (
              <div key={change.id}>
                <div
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedChange === change.id
                      ? 'border-primary-500 bg-primary-50'
                      : change.selected
                      ? 'border-success-200 bg-success-50'
                      : change.premium
                      ? 'border-gray-200 bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => !change.premium && setSelectedChange(
                    selectedChange === change.id ? null : change.id
                  )}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-3 ${
                      change.selected
                        ? 'bg-success-100 text-success-600'
                        : change.premium
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {change.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900">{change.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{change.description}</p>
                      
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                        <div className="text-gray-500">
                          <span className="font-medium">Current: </span>
                          {change.currentHabit}
                        </div>
                        <div className="text-primary-600">
                          <span className="font-medium">Target: </span>
                          {change.targetHabit}
                        </div>
                      </div>
                      
                      <Button
                        variant={change.selected ? 'outline' : 'primary'}
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleChange(change.id);
                        }}
                        className="mt-3"
                      >
                        {change.selected ? 'Selected' : 'Add to Plan'}
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Tips */}
                  {selectedChange === change.id && (
                    <div className="mt-4 pl-11">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Implementation Tips:</h4>
                      <ul className="space-y-2">
                        {change.tips.map((tip, index) => (
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

          {/* Progress Tracking */}
          {showDemo && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-medium text-gray-900 mb-4">Habit Tracker</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-7 gap-2">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-medium text-gray-500 mb-2">{day}</div>
                      <div className="h-8 bg-gray-50 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Success:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Focus on one change at a time to avoid feeling overwhelmed
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Track your progress and celebrate small wins
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Be patient - new habits take time to form
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
                Personalized habit recommendations
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Advanced progress tracking
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Expert lifestyle coaching
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
              {showDemo ? 'Hide Tracker' : 'Show Habit Tracker'}
            </Button>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={onComplete}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Support Network
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StressStep4;