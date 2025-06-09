import React, { useState } from 'react';
import { ArrowRight, Droplets, Wallet as Walk, Salad, Moon, Clock, CheckCircle, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface Habit {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  targetOptions: string[];
  tips: string[];
  premium: boolean;
  selected: boolean;
  target?: string;
}

interface HealthyRoutineStep2Props {
  onComplete: (selectedHabits: { id: string; target: string }[]) => void;
}

const HealthyRoutineStep2: React.FC<HealthyRoutineStep2Props> = ({ onComplete }) => {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: 'water',
      name: 'Daily Water Intake',
      description: 'Stay hydrated throughout the day',
      icon: <Droplets />,
      targetOptions: ['6 glasses', '8 glasses', '10 glasses', '12 glasses'],
      tips: [
        'Keep a water bottle nearby',
        'Set hourly reminders',
        'Drink a glass after each bathroom break',
        'Use a tracking app'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'walking',
      name: 'Daily Walking',
      description: 'Get moving with regular walks',
      icon: <Walk />,
      targetOptions: ['10 minutes', '15 minutes', '20 minutes', '30 minutes'],
      tips: [
        'Walk during phone calls',
        'Take the stairs instead of elevator',
        'Park farther from entrances',
        'Walk after meals'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'vegetables',
      name: 'Eat More Vegetables',
      description: 'Include vegetables in your meals',
      icon: <Salad />,
      targetOptions: ['1 serving', '2 servings', '3 servings', '4+ servings'],
      tips: [
        'Add veggies to breakfast',
        'Prep cut vegetables for snacks',
        'Start meals with a salad',
        'Include a vegetable side dish'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'sleep',
      name: 'Consistent Sleep Schedule',
      description: 'Maintain regular sleep and wake times',
      icon: <Moon />,
      targetOptions: ['7 hours', '7.5 hours', '8 hours', '8.5 hours'],
      tips: [
        'Set a bedtime alarm',
        'Create a relaxing routine',
        'Avoid screens before bed',
        'Keep bedroom cool and dark'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'meditation',
      name: 'Daily Meditation',
      description: 'Practice mindfulness and relaxation',
      icon: <Clock />,
      targetOptions: ['5 minutes', '10 minutes', '15 minutes', '20 minutes'],
      tips: [
        'Start with guided sessions',
        'Same time each day',
        'Find a quiet space',
        'Focus on breathing'
      ],
      premium: true,
      selected: false
    }
  ]);

  const [selectedHabit, setSelectedHabit] = useState<string | null>(null);

  const toggleHabit = (habitId: string) => {
    if (habits.filter(h => h.selected).length >= 3 && !habits.find(h => h.id === habitId)?.selected) {
      return;
    }
    setHabits(habits.map(habit =>
      habit.id === habitId ? { ...habit, selected: !habit.selected } : habit
    ));
  };

  const setHabitTarget = (habitId: string, target: string) => {
    setHabits(habits.map(habit =>
      habit.id === habitId ? { ...habit, target } : habit
    ));
  };

  const handleSubmit = () => {
    const selectedHabits = habits
      .filter(h => h.selected && h.target)
      .map(h => ({ id: h.id, target: h.target! }));
    onComplete(selectedHabits);
  };

  const isValid = () => {
    const selectedCount = habits.filter(h => h.selected).length;
    const allHaveTargets = habits
      .filter(h => h.selected)
      .every(h => h.target);
    return selectedCount >= 2 && selectedCount <= 3 && allHaveTargets;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Choose Your Daily Habits</CardTitle>
        <p className="text-gray-600 mt-2">
          Select 2-3 habits to focus on. Start small and build consistency over time.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
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
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{habit.description}</p>
                      
                      {!habit.premium && (
                        <div className="mt-3">
                          <div className="flex items-center space-x-4">
                            <Button
                              variant={habit.selected ? 'outline' : 'primary'}
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleHabit(habit.id);
                              }}
                              leftIcon={habit.selected ? <CheckCircle className="w-4 h-4" /> : undefined}
                            >
                              {habit.selected ? 'Selected' : 'Add Habit'}
                            </Button>
                            
                            {habit.selected && (
                              <select
                                value={habit.target || ''}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  setHabitTarget(habit.id, e.target.value);
                                }}
                                className="ml-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <option value="">Set target</option>
                                {habit.targetOptions.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expanded Tips */}
                  {selectedHabit === habit.id && (
                    <div className="mt-4 pl-11">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Tips for Success:</h4>
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

          {/* Selected Habits Summary */}
          {habits.some(h => h.selected) && (
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Your Selected Habits:</h4>
              <div className="space-y-3">
                {habits.filter(h => h.selected).map((habit, index) => (
                  <div key={habit.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{habit.name}</span>
                    </div>
                    <span className="text-gray-600 font-medium">
                      {habit.target || 'Set target →'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Success:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Start with achievable targets - you can always increase them later
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Choose habits that complement each other
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Focus on consistency over perfection
                </span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={handleSubmit}
              disabled={!isValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Set Reminders
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthyRoutineStep2;