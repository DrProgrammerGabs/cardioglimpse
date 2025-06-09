import React, { useState } from 'react';
import { ArrowRight, Sun, Heart, Pencil, Music, Laugh } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface JoyActivity {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  timeEstimate: string;
}

interface FeelGoodStep2Props {
  onComplete: (selectedActivities: string[]) => void;
}

const FeelGoodStep2: React.FC<FeelGoodStep2Props> = ({ onComplete }) => {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const activities: JoyActivity[] = [
    {
      id: 'morning-walk',
      name: 'Morning Walk & Sunshine',
      description: 'Start your day with natural light and gentle movement',
      icon: <Sun className="h-6 w-6" />,
      timeEstimate: '15-20 min'
    },
    {
      id: 'connect-call',
      name: 'Connect with Loved Ones',
      description: 'Call or message someone who brings you joy',
      icon: <Heart className="h-6 w-6" />,
      timeEstimate: '10-15 min'
    },
    {
      id: 'gratitude',
      name: 'Gratitude Journal',
      description: 'Write down three things you\'re thankful for',
      icon: <Pencil className="h-6 w-6" />,
      timeEstimate: '5 min'
    },
    {
      id: 'laughter',
      name: 'Daily Laughter',
      description: 'Watch something funny or share jokes',
      icon: <Laugh className="h-6 w-6" />,
      timeEstimate: '5-10 min'
    },
    {
      id: 'music',
      name: 'Music Break',
      description: 'Listen to your favorite uplifting songs',
      icon: <Music className="h-6 w-6" />,
      timeEstimate: '10-15 min'
    }
  ];

  const toggleActivity = (activityId: string) => {
    setSelectedActivities(prev => {
      if (prev.includes(activityId)) {
        return prev.filter(id => id !== activityId);
      }
      if (prev.length < 3) {
        return [...prev, activityId];
      }
      return prev;
    });
  };

  const handleSubmit = () => {
    if (selectedActivities.length === 3) {
      onComplete(selectedActivities);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Create Your Joy Routine</CardTitle>
          <p className="text-gray-600 mt-2">
            Choose 3 activities that you'll commit to doing daily. Small pleasures can have a big impact on your mood!
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid gap-4">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  onClick={() => toggleActivity(activity.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedActivities.includes(activity.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-3 ${
                      selectedActivities.includes(activity.id)
                        ? 'bg-primary-100 text-primary-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {activity.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900">{activity.name}</h3>
                        <span className="text-sm text-gray-500">{activity.timeEstimate}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Tips for Success:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">Start with activities that feel easy and enjoyable</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">Set specific times for each activity in your daily schedule</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">Track your mood before and after each activity</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={selectedActivities.length !== 3}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Mindfulness Tools
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeelGoodStep2;