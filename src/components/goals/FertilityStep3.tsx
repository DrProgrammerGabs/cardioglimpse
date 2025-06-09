import React, { useState } from 'react';
import { ArrowRight, Dumbbell, Brain, Wind, Heart, AlertTriangle, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FertilityStep3Props {
  onComplete: () => void;
}

interface Activity {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  intensity: string;
  benefits: string[];
  tips: string[];
  premium: boolean;
  selected: boolean;
}

const FertilityStep3: React.FC<FertilityStep3Props> = ({ onComplete }) => {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: 'walking',
      name: 'Walking',
      description: 'Gentle cardio to improve blood flow',
      icon: <Heart />,
      duration: '30-45 min',
      intensity: 'Low',
      benefits: [
        'Improves circulation',
        'Reduces stress',
        'Maintains healthy weight',
        'Safe throughout fertility journey'
      ],
      tips: [
        'Walk at a comfortable pace',
        'Choose flat terrain',
        'Stay hydrated',
        'Wear supportive shoes'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'yoga',
      name: 'Fertility Yoga',
      description: 'Gentle poses and breathing exercises',
      icon: <Wind />,
      duration: '20-30 min',
      intensity: 'Low to Moderate',
      benefits: [
        'Reduces stress hormones',
        'Improves blood flow to reproductive organs',
        'Enhances flexibility',
        'Promotes relaxation'
      ],
      tips: [
        'Focus on gentle poses',
        'Listen to your body',
        'Practice deep breathing',
        'Avoid hot yoga'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'strength',
      name: 'Light Strength Training',
      description: 'Maintain muscle tone and bone density',
      icon: <Dumbbell />,
      duration: '20-30 min',
      intensity: 'Moderate',
      benefits: [
        'Maintains muscle mass',
        'Supports bone health',
        'Improves metabolism',
        'Enhances body stability'
      ],
      tips: [
        'Use lighter weights',
        'Focus on form',
        'Avoid straining',
        'Include rest days'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'meditation',
      name: 'Guided Meditation',
      description: 'Reduce stress and anxiety',
      icon: <Brain />,
      duration: '10-15 min',
      intensity: 'Low',
      benefits: [
        'Lowers stress hormones',
        'Improves sleep quality',
        'Enhances emotional well-being',
        'Supports hormone balance'
      ],
      tips: [
        'Practice daily',
        'Find a quiet space',
        'Use guided sessions',
        'Start with short sessions'
      ],
      premium: true,
      selected: false
    }
  ]);

  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [showWarning, setShowWarning] = useState(true);

  const toggleActivity = (activityId: string) => {
    setActivities(activities.map(activity =>
      activity.id === activityId ? { ...activity, selected: !activity.selected } : activity
    ));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Stay Active & Manage Stress</CardTitle>
          <p className="text-gray-600 mt-2">
            Choose gentle exercises and stress management techniques that support fertility.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Exercise Warning */}
            {showWarning && (
              <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-warning-800 font-medium">Exercise Safety Notice</h4>
                    <p className="text-warning-700 text-sm mt-1">
                      Consult your healthcare provider before starting any new exercise routine,
                      especially when trying to conceive. Stop any activity that causes discomfort.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => setShowWarning(false)}
                    >
                      I Understand
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Activities */}
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
                          <div className="text-sm text-gray-500">
                            {activity.duration} • {activity.intensity} Intensity
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
                            {activity.selected ? 'Selected' : 'Add to Plan'}
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedActivity === activity.id && (
                      <div className="mt-4 pl-11 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Benefits:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {activity.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-primary-200 rounded-full mr-2"></span>
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
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
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Exercise Guidelines */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Exercise Guidelines:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Keep intensity moderate - you should be able to talk while exercising
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Exercise 3-4 times per week, allowing rest days
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Stay well-hydrated and avoid overheating
                  </span>
                </li>
              </ul>
            </div>

            {/* Activities to Avoid */}
            <div className="bg-warning-50 rounded-lg p-6">
              <h4 className="font-medium text-warning-800 mb-4">Activities to Avoid:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-warning-500 mt-1 mr-2" />
                  <span className="text-warning-700">High-intensity interval training (HIIT)</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-warning-500 mt-1 mr-2" />
                  <span className="text-warning-700">Hot yoga or hot Pilates</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-warning-500 mt-1 mr-2" />
                  <span className="text-warning-700">Contact sports or activities with fall risk</span>
                </li>
              </ul>
            </div>

            {/* Premium Features */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Premium Features:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Guided meditation sessions
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Video exercise tutorials
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Personalized activity tracking
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                onClick={onComplete}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Partner Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FertilityStep3;