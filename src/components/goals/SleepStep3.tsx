import React, { useState } from 'react';
import { ArrowRight, Book, Coffee, StretchVertical as Stretching, Headphones, Lock, Timer } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface SleepStep3Props {
  onComplete: () => void;
}

interface BedtimeActivity {
  id: string;
  name: string;
  description: string;
  duration: string;
  icon: React.ReactNode;
  tips: string[];
  premium: boolean;
  selected: boolean;
}

const SleepStep3: React.FC<SleepStep3Props> = ({ onComplete }) => {
  const [activities, setActivities] = useState<BedtimeActivity[]>([
    {
      id: 'reading',
      name: 'Reading',
      description: 'Read a calming book or magazine',
      duration: '15-20 min',
      icon: <Book />,
      tips: [
        'Choose light or relaxing content',
        'Use soft, warm lighting',
        'Avoid e-readers with blue light',
        'Set a specific page limit'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'stretching',
      name: 'Light Stretching',
      description: 'Gentle stretches to release tension',
      duration: '5-10 min',
      icon: <Stretching />,
      tips: [
        'Focus on neck and shoulders',
        'Do gentle spine twists',
        'Practice child\'s pose',
        'Include deep breathing'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'tea',
      name: 'Herbal Tea',
      description: 'Enjoy a caffeine-free herbal tea',
      duration: '10-15 min',
      icon: <Coffee />,
      tips: [
        'Choose chamomile or lavender',
        'Drink 1-2 hours before bed',
        'Avoid sugar additions',
        'Keep temperature moderate'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'meditation',
      name: 'Sleep Meditation',
      description: 'Guided meditation for better sleep',
      duration: '10-15 min',
      icon: <Headphones />,
      tips: [
        'Use sleep-specific guidance',
        'Find a comfortable position',
        'Focus on breath awareness',
        'Practice body scanning'
      ],
      premium: true,
      selected: false
    }
  ]);

  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [showRoutineBuilder, setShowRoutineBuilder] = useState(false);

  const toggleActivity = (activityId: string) => {
    if (activities.filter(a => a.selected).length >= 3 && !activities.find(a => a.id === activityId)?.selected) {
      return;
    }
    setActivities(activities.map(activity =>
      activity.id === activityId ? { ...activity, selected: !activity.selected } : activity
    ));
  };

  const selectedCount = activities.filter(a => a.selected).length;
  const isValid = selectedCount >= 2 && selectedCount <= 3;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Build Your Bedtime Ritual</CardTitle>
          <p className="text-gray-600 mt-2">
            Choose 2-3 calming activities to create your perfect pre-sleep routine.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Activity Selection */}
            <div className="grid gap-4">
              {activities.map((activity) => (
                <div key={activity.id}>
                  <div
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedActivity === activity.id
                        ? 'border-primary-500 bg-primary-50'
                        : activity.selected
                        ? 'border-success-200 bg-success-50'
                        : activity.premium
                        ? 'border-gray-200 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => !activity.premium && setSelectedActivity(
                      selectedActivity === activity.id ? null : activity.id
                    )}
                  >
                    <div className="flex items-start">
                      <div className={`rounded-full p-2 mr-3 ${
                        activity.selected
                          ? 'bg-success-100 text-success-600'
                          : activity.premium
                          ? 'bg-gray-100 text-gray-500'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {activity.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <h3 className="font-medium text-gray-900">{activity.name}</h3>
                            {activity.premium && (
                              <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                                <Lock className="w-3 h-3 mr-1" />
                                Premium
                              </span>
                            )}
                          </div>
                          <div className="flex items-center">
                            <Timer className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-500">{activity.duration}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                        {!activity.premium && (
                          <Button
                            variant={activity.selected ? 'outline' : 'primary'}
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleActivity(activity.id);
                            }}
                            className="mt-2"
                          >
                            {activity.selected ? 'Selected' : 'Add to Routine'}
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Expanded Tips */}
                    {selectedActivity === activity.id && (
                      <div className="mt-4 pl-11">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Tips:</h4>
                        <ul className="space-y-2">
                          {activity.tips.map((tip, index) => (
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

            {/* Selected Activities Summary */}
            {selectedCount > 0 && (
              <div className="bg-primary-50 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-4">Your Bedtime Ritual:</h4>
                <div className="space-y-3">
                  {activities.filter(a => a.selected).map((activity, index) => (
                    <div key={activity.id} className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{activity.name} ({activity.duration})</span>
                    </div>
                  ))}
                  <p className="text-sm text-gray-600 mt-4">
                    Total duration: {activities
                      .filter(a => a.selected)
                      .reduce((acc, curr) => acc + parseInt(curr.duration.split('-')[0]), 0)}-
                    {activities
                      .filter(a => a.selected)
                      .reduce((acc, curr) => acc + parseInt(curr.duration.split('-')[1]), 0)} minutes
                  </p>
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
                    Start your routine at the same time each night
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Keep activities gentle and relaxing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Avoid checking time during your routine
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                onClick={onComplete}
                disabled={!isValid}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Natural Sleep Aids
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SleepStep3;