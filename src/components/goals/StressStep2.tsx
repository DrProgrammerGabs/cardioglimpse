import React, { useState } from 'react';
import { ArrowRight, Wind, Brain, Activity, Timer, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface StressBuster {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  steps: string[];
  benefits: string[];
  premium: boolean;
  selected: boolean;
}

interface StressStep2Props {
  onComplete: () => void;
}

const StressStep2: React.FC<StressStep2Props> = ({ onComplete }) => {
  const [techniques, setTechniques] = useState<StressBuster[]>([
    {
      id: 'breathing',
      name: '4-7-8 Breathing',
      description: 'Calming breath technique for instant relief',
      icon: <Wind />,
      duration: '1-2 minutes',
      steps: [
        'Inhale quietly through nose for 4 counts',
        'Hold breath for 7 counts',
        'Exhale completely through mouth for 8 counts',
        'Repeat cycle 4 times'
      ],
      benefits: [
        'Reduces anxiety quickly',
        'Lowers heart rate',
        'Improves focus',
        'Can be done anywhere'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'progressive-relaxation',
      name: 'Progressive Relaxation',
      description: 'Systematically relax muscle groups',
      icon: <Activity />,
      duration: '3-5 minutes',
      steps: [
        'Start with your toes, tense for 5 seconds',
        'Release and notice the relaxation',
        'Move up through each muscle group',
        'End with facial muscles'
      ],
      benefits: [
        'Releases physical tension',
        'Increases body awareness',
        'Promotes mental calm',
        'Improves sleep quality'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'mindful-pause',
      name: 'Mindful Pause',
      description: 'Quick mindfulness practice',
      icon: <Brain />,
      duration: '30 seconds',
      steps: [
        'Stop what you\'re doing',
        'Take one conscious breath',
        'Observe your surroundings',
        'Continue with renewed focus'
      ],
      benefits: [
        'Breaks stress cycle',
        'Centers attention',
        'Creates mental space',
        'Easy to remember'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'guided-techniques',
      name: 'Guided Techniques',
      description: 'Professional audio-guided exercises',
      icon: <Timer />,
      duration: 'Various',
      steps: [
        'Choose from library of exercises',
        'Follow expert guidance',
        'Track your progress',
        'Get personalized recommendations'
      ],
      benefits: [
        'Expert instruction',
        'Variety of techniques',
        'Progress tracking',
        'Customized approach'
      ],
      premium: true,
      selected: false
    }
  ]);

  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  const toggleTechnique = (techniqueId: string) => {
    setTechniques(techniques.map(technique =>
      technique.id === techniqueId ? { ...technique, selected: !technique.selected } : technique
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Quick Stress Busters</CardTitle>
        <p className="text-gray-600 mt-2">
          Learn and practice these quick techniques to manage stress in the moment.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Techniques */}
          <div className="grid gap-4">
            {techniques.map((technique) => (
              <div key={technique.id}>
                <div
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedTechnique === technique.id
                      ? 'border-primary-500 bg-primary-50'
                      : technique.selected
                      ? 'border-success-200 bg-success-50'
                      : technique.premium
                      ? 'border-gray-200 bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => !technique.premium && setSelectedTechnique(
                    selectedTechnique === technique.id ? null : technique.id
                  )}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-3 ${
                      technique.selected
                        ? 'bg-success-100 text-success-600'
                        : technique.premium
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {technique.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-900">{technique.name}</h3>
                          {technique.premium && (
                            <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                              <Lock className="w-3 h-3 mr-1" />
                              Premium
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{technique.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{technique.description}</p>
                      
                      {!technique.premium && (
                        <Button
                          variant={technique.selected ? 'outline' : 'primary'}
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTechnique(technique.id);
                          }}
                          className="mt-2"
                        >
                          {technique.selected ? 'Added to Toolkit' : 'Add to Toolkit'}
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedTechnique === technique.id && (
                    <div className="mt-4 pl-11 space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">How to Practice:</h4>
                        <ol className="space-y-2">
                          {technique.steps.map((step, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <span className="font-medium mr-2">{index + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Benefits:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {technique.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 bg-primary-200 rounded-full mr-2"></span>
                              {benefit}
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

          {/* Practice Timer */}
          {showDemo && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-medium text-gray-900 mb-4">Practice Timer</h4>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 rounded-full border-4 border-primary-500 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-600">2:00</span>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">Start</Button>
                  <Button variant="outline" size="sm">Reset</Button>
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
                  Practice these techniques when calm to use them effectively during stress
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Start with one technique and master it before adding others
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Use reminders to practice regularly throughout the day
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
                Guided audio exercises
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Progress tracking and insights
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Personalized technique recommendations
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
              {showDemo ? 'Hide Practice Timer' : 'Show Practice Timer'}
            </Button>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={onComplete}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Mindfulness Practices
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StressStep2;