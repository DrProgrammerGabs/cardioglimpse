import React, { useState } from 'react';
import { ArrowRight, Moon, Droplets, Clock, Sun, AlertTriangle, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface Habit {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  target: string;
  tips: string[];
  premium: boolean;
  selected: boolean;
}

interface EnergyStep4Props {
  onComplete: () => void;
}

const EnergyStep4: React.FC<EnergyStep4Props> = ({ onComplete }) => {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: 'sleep-schedule',
      name: 'Consistent Sleep Schedule',
      description: 'Go to bed and wake up at the same time',
      icon: <Moon />,
      target: '7-8 hours of sleep',
      tips: [
        'Set a bedtime alarm',
        'Create a relaxing routine',
        'Dim lights an hour before bed',
        'Keep bedroom cool and dark'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'water-intake',
      name: 'Regular Hydration',
      description: 'Stay hydrated throughout the day',
      icon: <Droplets />,
      target: '8-10 glasses daily',
      tips: [
        'Keep a water bottle nearby',
        'Set hydration reminders',
        'Track your intake',
        'Add fruit for flavor'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'morning-routine',
      name: 'Energizing Morning Routine',
      description: 'Start your day with energy-boosting habits',
      icon: <Sun />,
      target: '15-30 minute routine',
      tips: [
        'Natural light exposure',
        'Light stretching',
        'Hydrate immediately',
        'Protein-rich breakfast'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'sleep-tracking',
      name: 'Advanced Sleep Analysis',
      description: 'Track and optimize your sleep cycles',
      icon: <Clock />,
      target: 'Personalized insights',
      tips: [
        'Monitor sleep stages',
        'Track sleep quality',
        'Get recommendations',
        'Optimize sleep timing'
      ],
      premium: true,
      selected: false
    }
  ]);

  const [selectedHabit, setSelectedHabit] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  const toggleHabit = (habitId: string) => {
    setHabits(habits.map(habit =>
      habit.id === habitId ? { ...habit, selected: !habit.selected } : habit
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Sleep & Hydration Habits</CardTitle>
        <p className="text-gray-600 mt-2">
          Quality sleep and proper hydration are fundamental for maintaining high energy levels.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Health Warning */}
          <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
              <div>
                <h4 className="text-warning-800 font-medium">Important Health Notice</h4>
                <p className="text-warning-700 text-sm mt-1">
                  If you experience persistent sleep issues or unusual fatigue, consult a healthcare provider.
                  These tips are not a substitute for medical advice.
                </p>
              </div>
            </div>
          </div>

          {/* Habits Selection */}
          <div className="grid gap-4">
            {habits.map((habit) => (
              <div key={habit.id}>
                <div
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedHabit === habit.id
                      ? 'border-primary-500 bg-primary-50'
                      : habit.selected
                      ? 'border-success-200 bg-success-50'
                      : habit.premium
                      ? 'border-gray-200 bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => !habit.premium && setSelectedHabit(
                    selectedHabit === habit.id ? null : habit.id
                  )}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-3 ${
                      habit.selected
                        ? 'bg-success-100 text-success-600'
                        : habit.premium
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {habit.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-900">{habit.name}</h3>
                          {habit.premium && (
                            <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                              <Lock className="w-3 h-3 mr-1" />
                              Premium
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{habit.target}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{habit.description}</p>
                      
                      {!habit.premium && (
                        <Button
                          variant={habit.selected ? 'outline' : 'primary'}
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleHabit(habit.id);
                          }}
                          className="mt-2"
                        >
                          {habit.selected ? 'Selected' : 'Add to Routine'}
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Expanded Tips */}
                  {selectedHabit === habit.id && (
                    <div className="mt-4 pl-11">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Implementation Tips:</h4>
                      <ul className="space-y-2">
                        {habit.tips.map((tip, index) => (
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

          {/* Sleep & Hydration Tips */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Key Principles:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Consistency is more important than duration for sleep
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Small, frequent sips are better than large amounts at once
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Monitor your energy levels in relation to sleep and hydration
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
                Advanced sleep tracking and analysis
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Smart hydration reminders
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Personalized optimization tips
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={onComplete}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Energy Check-in
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnergyStep4;