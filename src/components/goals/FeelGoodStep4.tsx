import React, { useState } from 'react';
import { ArrowRight, Moon, Smartphone, Coffee, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FeelGoodStep4Props {
  onComplete: () => void;
}

interface SleepHabit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
  tips: string[];
}

const FeelGoodStep4: React.FC<FeelGoodStep4Props> = ({ onComplete }) => {
  const [habits, setHabits] = useState<SleepHabit[]>([
    {
      id: 'no-screens',
      title: 'No Screens Before Bed',
      description: 'Avoid blue light exposure 1 hour before bedtime',
      icon: <Smartphone />,
      completed: false,
      tips: [
        'Use night mode on devices if needed',
        'Read a physical book instead',
        'Try journaling or drawing',
        'Listen to calming music or podcasts'
      ]
    },
    {
      id: 'bedtime',
      title: 'Consistent Bedtime',
      description: 'Go to bed at the same time every night',
      icon: <Clock />,
      completed: false,
      tips: [
        'Set a bedtime reminder',
        'Start your wind-down routine 30 minutes before',
        'Adjust gradually in 15-minute increments',
        'Maintain schedule on weekends'
      ]
    },
    {
      id: 'caffeine',
      title: 'Manage Caffeine',
      description: 'No caffeine after 3 PM',
      icon: <Coffee />,
      completed: false,
      tips: [
        'Switch to herbal tea in the afternoon',
        'Try decaf alternatives',
        'Stay hydrated with water',
        'Be aware of hidden caffeine sources'
      ]
    },
    {
      id: 'routine',
      title: 'Relaxing Routine',
      description: 'Develop a calming pre-sleep routine',
      icon: <Moon />,
      completed: false,
      tips: [
        'Take a warm shower or bath',
        'Practice gentle stretching',
        'Try deep breathing exercises',
        'Use aromatherapy (lavender, chamomile)'
      ]
    }
  ]);

  const [selectedHabit, setSelectedHabit] = useState<string | null>(null);

  const toggleHabit = (habitId: string) => {
    setHabits(habits.map(habit =>
      habit.id === habitId ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const calculateProgress = () => {
    const completed = habits.filter(habit => habit.completed).length;
    return (completed / habits.length) * 100;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Sleep Better, Feel Better</CardTitle>
          <p className="text-gray-600 mt-2">
            Quality sleep is essential for emotional well-being. Build these habits for better rest.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Progress Bar */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Your Progress</span>
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

            {/* Sleep Habits */}
            <div className="grid gap-4">
              {habits.map((habit) => (
                <div key={habit.id}>
                  <div
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedHabit === habit.id
                        ? 'border-primary-500 bg-primary-50'
                        : habit.completed
                        ? 'border-success-200 bg-success-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedHabit(selectedHabit === habit.id ? null : habit.id)}
                  >
                    <div className="flex items-start">
                      <div className={`rounded-full p-2 mr-3 ${
                        habit.completed
                          ? 'bg-success-100 text-success-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {habit.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-gray-900">{habit.title}</h3>
                          <Button
                            variant={habit.completed ? 'outline' : 'primary'}
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleHabit(habit.id);
                            }}
                            leftIcon={habit.completed ? <CheckCircle className="w-4 h-4" /> : undefined}
                          >
                            {habit.completed ? 'Completed' : 'Mark Complete'}
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{habit.description}</p>
                      </div>
                    </div>

                    {/* Expanded Tips */}
                    {selectedHabit === habit.id && (
                      <div className="mt-4 pl-11">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Tips:</h4>
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

            {/* Sleep Warning Signs */}
            <div className="bg-warning-50 border border-warning-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
                <div>
                  <h4 className="text-warning-800 font-medium mb-2">When to Seek Help</h4>
                  <p className="text-warning-700 text-sm">
                    If you experience persistent sleep issues like insomnia, sleep apnea symptoms, or 
                    daytime exhaustion, consult a healthcare provider. Quality sleep is crucial for 
                    mental and physical well-being.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Features Teaser */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Premium Sleep Features:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                  Sleep cycle tracking and analysis
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                  Guided sleep meditations
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                  Personalized bedtime routine builder
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                onClick={onComplete}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Final Step
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeelGoodStep4;