import React, { useState } from 'react';
import { ArrowRight, Gift, Trophy, Star, Sparkles, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface Reward {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  premium: boolean;
  selected: boolean;
}

interface HealthyRoutineStep4Props {
  onComplete: (selectedRewards: string[]) => void;
}

const HealthyRoutineStep4: React.FC<HealthyRoutineStep4Props> = ({ onComplete }) => {
  const [rewards, setRewards] = useState<Reward[]>([
    {
      id: 'favorite-activity',
      name: 'Favorite Activity Time',
      description: 'Dedicate time to an activity you enjoy',
      icon: <Star />,
      duration: '10-15 minutes',
      premium: false,
      selected: false
    },
    {
      id: 'healthy-treat',
      name: 'Healthy Treat',
      description: 'Enjoy a nutritious snack or smoothie',
      icon: <Gift />,
      duration: 'Once per goal achieved',
      premium: false,
      selected: false
    },
    {
      id: 'social-reward',
      name: 'Social Connection',
      description: 'Call a friend or plan a meetup',
      icon: <Trophy />,
      duration: '15-30 minutes',
      premium: false,
      selected: false
    },
    {
      id: 'premium-rewards',
      name: 'Premium Rewards',
      description: 'Unlock special achievements and perks',
      icon: <Sparkles />,
      duration: 'Varies',
      premium: true,
      selected: false
    }
  ]);

  const [selectedReward, setSelectedReward] = useState<string | null>(null);
  const [showAdjustments, setShowAdjustments] = useState(false);

  const toggleReward = (rewardId: string) => {
    setRewards(rewards.map(reward =>
      reward.id === rewardId ? { ...reward, selected: !reward.selected } : reward
    ));
  };

  const handleSubmit = () => {
    const selectedRewardIds = rewards
      .filter(reward => reward.selected)
      .map(reward => reward.id);
    onComplete(selectedRewardIds);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Adjust & Reward Progress</CardTitle>
        <p className="text-gray-600 mt-2">
          Choose rewards to celebrate your achievements and make adjustments as needed.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Routine Adjustments */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Making Adjustments</h3>
            <p className="text-gray-600 mb-4">
              It's normal to need adjustments as you build your routine. Here's how to make changes effectively:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Start with small changes - adjust one habit at a time
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Give each adjustment at least a week before making further changes
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Keep what works and modify what doesn't
                </span>
              </li>
            </ul>
          </div>

          {/* Rewards Selection */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Choose Your Rewards</h3>
            <div className="grid gap-4">
              {rewards.map((reward) => (
                <div key={reward.id}>
                  <div
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedReward === reward.id
                        ? 'border-primary-500 bg-primary-50'
                        : reward.selected
                        ? 'border-success-200 bg-success-50'
                        : reward.premium
                        ? 'border-gray-200 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => !reward.premium && setSelectedReward(
                      selectedReward === reward.id ? null : reward.id
                    )}
                  >
                    <div className="flex items-start">
                      <div className={`rounded-full p-2 mr-3 ${
                        reward.selected
                          ? 'bg-success-100 text-success-600'
                          : reward.premium
                          ? 'bg-gray-100 text-gray-500'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {reward.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <h3 className="font-medium text-gray-900">{reward.name}</h3>
                            {reward.premium && (
                              <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                                <Lock className="w-3 h-3 mr-1" />
                                Premium
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{reward.duration}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{reward.description}</p>
                        
                        {!reward.premium && (
                          <Button
                            variant={reward.selected ? 'outline' : 'primary'}
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleReward(reward.id);
                            }}
                            className="mt-2"
                          >
                            {reward.selected ? 'Selected' : 'Choose Reward'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Features */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Premium Rewards Include:</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Digital achievement badges and milestones
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Exclusive wellness content unlocks
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Community challenges and rewards
              </li>
            </ul>
          </div>

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Success:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Choose rewards that motivate but don't undermine your goals
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Celebrate small wins consistently
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Share your achievements with supportive friends or family
                </span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={handleSubmit}
              disabled={!rewards.some(r => r.selected)}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Next Week's Plan
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthyRoutineStep4;