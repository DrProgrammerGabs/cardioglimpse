import React, { useState } from 'react';
import { ArrowRight, Users, Calendar, MessageSquare, Heart, AlertTriangle, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FertilityStep4Props {
  onComplete: () => void;
}

interface SupportActivity {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  tips: string[];
  premium: boolean;
  selected: boolean;
}

const FertilityStep4: React.FC<FertilityStep4Props> = ({ onComplete }) => {
  const [activities, setActivities] = useState<SupportActivity[]>([
    {
      id: 'communication',
      name: 'Open Communication',
      description: 'Regular check-ins and emotional support',
      icon: <MessageSquare />,
      tips: [
        'Schedule weekly fertility talks',
        'Share feelings and concerns openly',
        'Practice active listening',
        'Avoid blame or pressure'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'planning',
      name: 'Shared Planning',
      description: 'Coordinate fertility tracking and appointments',
      icon: <Calendar />,
      tips: [
        'Use a shared calendar for tracking',
        'Plan doctor visits together',
        'Set reminders for important dates',
        'Review progress as a team'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle Support',
      description: 'Make healthy changes together',
      icon: <Heart />,
      tips: [
        'Exercise together regularly',
        'Prepare healthy meals',
        'Quit harmful habits together',
        'Create stress-free routines'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'counseling',
      name: 'Fertility Counseling',
      description: 'Professional guidance for couples',
      icon: <Users />,
      tips: [
        'Regular counseling sessions',
        'Learn coping strategies',
        'Address concerns together',
        'Build emotional resilience'
      ],
      premium: true,
      selected: false
    }
  ]);

  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [showTip, setShowTip] = useState(true);

  const toggleActivity = (activityId: string) => {
    setActivities(activities.map(activity =>
      activity.id === activityId ? { ...activity, selected: !activity.selected } : activity
    ));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Partner Support & Teamwork</CardTitle>
          <p className="text-gray-600 mt-2">
            Build a strong support system with your partner through open communication and shared commitment.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Support Tip */}
            {showTip && (
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-primary-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-primary-800 font-medium">Remember</h4>
                    <p className="text-primary-700 text-sm mt-1">
                      The fertility journey is a shared experience. Supporting each other emotionally
                      is just as important as the physical aspects of conception.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => setShowTip(false)}
                    >
                      Got It
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Support Activities */}
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

                    {/* Expanded Tips */}
                    {selectedActivity === activity.id && (
                      <div className="mt-4 pl-11">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Implementation Tips:</h4>
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

            {/* Communication Guidelines */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Healthy Communication Tips:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Choose the right time and place for fertility discussions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Express appreciation for each other's efforts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Share both successes and challenges openly
                  </span>
                </li>
              </ul>
            </div>

            {/* Stress Warning */}
            <div className="bg-warning-50 rounded-lg p-6">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
                <div>
                  <h4 className="font-medium text-warning-800 mb-2">Managing Stress Together</h4>
                  <p className="text-warning-700">
                    If either partner feels overwhelmed, consider:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-warning-700">
                      <span className="w-1.5 h-1.5 bg-warning-300 rounded-full mr-2"></span>
                      Taking breaks from fertility discussions
                    </li>
                    <li className="flex items-center text-warning-700">
                      <span className="w-1.5 h-1.5 bg-warning-300 rounded-full mr-2"></span>
                      Seeking professional support
                    </li>
                    <li className="flex items-center text-warning-700">
                      <span className="w-1.5 h-1.5 bg-warning-300 rounded-full mr-2"></span>
                      Planning stress-relieving activities together
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Features */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Premium Features:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Access to fertility counselors
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Couples meditation sessions
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Partner sync features in app
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                onClick={onComplete}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Medical Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FertilityStep4;