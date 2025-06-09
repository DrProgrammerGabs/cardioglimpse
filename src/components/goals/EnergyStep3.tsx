import React, { useState } from 'react';
import { ArrowRight, Activity, Wind, Brain, Timer, AlertTriangle, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface Movement {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  benefits: string[];
  tips: string[];
  premium: boolean;
  selected: boolean;
}

interface EnergyStep3Props {
  onComplete: () => void;
}

const EnergyStep3: React.FC<EnergyStep3Props> = ({ onComplete }) => {
  const [movements, setMovements] = useState<Movement[]>([
    {
      id: 'desk-stretches',
      name: 'Desk Stretches',
      description: 'Simple stretches to do at your desk',
      icon: <Wind />,
      duration: '2-3 minutes',
      benefits: [
        'Improves circulation',
        'Reduces muscle tension',
        'Increases flexibility',
        'Relieves stiffness'
      ],
      tips: [
        'Stretch every hour',
        'Focus on neck and shoulders',
        'Gentle wrist rotations',
        'Stand and reach up high'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'quick-walk',
      name: 'Energy Walk',
      description: 'Brief walk to boost energy and mood',
      icon: <Activity />,
      duration: '5-10 minutes',
      benefits: [
        'Increases blood flow',
        'Boosts endorphins',
        'Improves focus',
        'Reduces fatigue'
      ],
      tips: [
        'Walk briskly',
        'Swing your arms',
        'Take stairs if possible',
        'Get some sunlight'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'mindful-break',
      name: 'Mindful Break',
      description: 'Quick meditation and breathing exercises',
      icon: <Brain />,
      duration: '3-5 minutes',
      benefits: [
        'Reduces stress',
        'Increases alertness',
        'Improves concentration',
        'Calms the mind'
      ],
      tips: [
        'Find a quiet spot',
        'Focus on breathing',
        'Close your eyes',
        'Release tension'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'guided-exercises',
      name: 'Guided Energy Boosters',
      description: 'Professional guided movement sessions',
      icon: <Timer />,
      duration: 'Various',
      benefits: [
        'Expert instruction',
        'Targeted exercises',
        'Progress tracking',
        'Personalized routines'
      ],
      tips: [
        'Follow video guidance',
        'Track your progress',
        'Set reminders',
        'Join live sessions'
      ],
      premium: true,
      selected: false
    }
  ]);

  const [selectedMovement, setSelectedMovement] = useState<string | null>(null);
  const [showWarning, setShowWarning] = useState(true);

  const toggleMovement = (movementId: string) => {
    setMovements(movements.map(movement =>
      movement.id === movementId ? { ...movement, selected: !movement.selected } : movement
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Movement & Energy Breaks</CardTitle>
        <p className="text-gray-600 mt-2">
          Regular movement and strategic breaks can significantly boost your energy levels throughout the day.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Safety Warning */}
          {showWarning && (
            <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
                <div>
                  <h4 className="text-warning-800 font-medium">Movement Safety</h4>
                  <p className="text-warning-700 text-sm mt-1">
                    Start gently and listen to your body. If you experience any pain or discomfort,
                    stop and consult a healthcare provider.
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

          {/* Movement Options */}
          <div className="grid gap-4">
            {movements.map((movement) => (
              <div key={movement.id}>
                <div
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedMovement === movement.id
                      ? 'border-primary-500 bg-primary-50'
                      : movement.selected
                      ? 'border-success-200 bg-success-50'
                      : movement.premium
                      ? 'border-gray-200 bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => !movement.premium && setSelectedMovement(
                    selectedMovement === movement.id ? null : movement.id
                  )}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-3 ${
                      movement.selected
                        ? 'bg-success-100 text-success-600'
                        : movement.premium
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {movement.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-900">{movement.name}</h3>
                          {movement.premium && (
                            <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                              <Lock className="w-3 h-3 mr-1" />
                              Premium
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{movement.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{movement.description}</p>
                      
                      {!movement.premium && (
                        <Button
                          variant={movement.selected ? 'outline' : 'primary'}
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMovement(movement.id);
                          }}
                          className="mt-2"
                        >
                          {movement.selected ? 'Selected' : 'Add to Routine'}
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedMovement === movement.id && (
                    <div className="mt-4 pl-11 space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Benefits:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {movement.benefits.map((benefit, index) => (
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
                          {movement.tips.map((tip, index) => (
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

          {/* Implementation Tips */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Making Breaks a Habit:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Set reminders for regular movement breaks
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Start with shorter breaks and gradually increase duration
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Use natural breaks like phone calls or meetings as movement opportunities
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
                Video demonstrations of exercises
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Customized movement schedules
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Energy level tracking and analytics
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={onComplete}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Sleep & Hydration
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnergyStep3;