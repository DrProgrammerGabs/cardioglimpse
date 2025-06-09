import React, { useState } from 'react';
import { ArrowRight, Brain, Headphones, Book, Pencil, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface MindfulnessPractice {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  instructions: string[];
  benefits: string[];
  premium: boolean;
  selected: boolean;
}

interface StressStep3Props {
  onComplete: () => void;
}

const StressStep3: React.FC<StressStep3Props> = ({ onComplete }) => {
  const [practices, setPractices] = useState<MindfulnessPractice[]>([
    {
      id: 'body-scan',
      name: 'Body Scan',
      description: 'Systematic awareness of body sensations',
      icon: <Brain />,
      duration: '5-10 minutes',
      instructions: [
        'Find a comfortable position',
        'Close your eyes and take deep breaths',
        'Focus attention on each body part',
        'Notice sensations without judgment'
      ],
      benefits: [
        'Reduces physical tension',
        'Improves body awareness',
        'Promotes relaxation',
        'Helps identify stress signals'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'mindful-walking',
      name: 'Mindful Walking',
      description: 'Walking meditation practice',
      icon: <Brain />,
      duration: '10-15 minutes',
      instructions: [
        'Walk at a natural pace',
        'Notice each step and breath',
        'Observe surroundings mindfully',
        'Return focus when mind wanders'
      ],
      benefits: [
        'Combines exercise and meditation',
        'Enhances present-moment awareness',
        'Improves focus',
        'Can be done anywhere'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'journaling',
      name: 'Mindful Journaling',
      description: 'Express thoughts and feelings on paper',
      icon: <Pencil />,
      duration: '5-15 minutes',
      instructions: [
        'Find a quiet space',
        'Write without judgment',
        'Express current thoughts and feelings',
        'Notice patterns and insights'
      ],
      benefits: [
        'Processes emotions',
        'Gains perspective',
        'Tracks stress patterns',
        'Develops self-awareness'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'guided-meditation',
      name: 'Guided Meditations',
      description: 'Professional audio-guided sessions',
      icon: <Headphones />,
      duration: 'Various',
      instructions: [
        'Choose from meditation library',
        'Follow expert guidance',
        'Practice regularly',
        'Track your progress'
      ],
      benefits: [
        'Expert instruction',
        'Variety of techniques',
        'Structured practice',
        'Progress tracking'
      ],
      premium: true,
      selected: false
    }
  ]);

  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);
  const [showDemo, setShowDemo] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');

  const togglePractice = (practiceId: string) => {
    setPractices(practices.map(practice =>
      practice.id === practiceId ? { ...practice, selected: !practice.selected } : practice
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Mindfulness Practices</CardTitle>
        <p className="text-gray-600 mt-2">
          Develop mindfulness skills to stay grounded and manage stress more effectively.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Mindfulness Practices */}
          <div className="grid gap-4">
            {practices.map((practice) => (
              <div key={practice.id}>
                <div
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedPractice === practice.id
                      ? 'border-primary-500 bg-primary-50'
                      : practice.selected
                      ? 'border-success-200 bg-success-50'
                      : practice.premium
                      ? 'border-gray-200 bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => !practice.premium && setSelectedPractice(
                    selectedPractice === practice.id ? null : practice.id
                  )}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-3 ${
                      practice.selected
                        ? 'bg-success-100 text-success-600'
                        : practice.premium
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {practice.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="font-medium text-gray-900">{practice.name}</h3>
                          {practice.premium && (
                            <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                              <Lock className="w-3 h-3 mr-1" />
                              Premium
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{practice.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{practice.description}</p>
                      
                      {!practice.premium && (
                        <Button
                          variant={practice.selected ? 'outline' : 'primary'}
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePractice(practice.id);
                          }}
                          className="mt-2"
                        >
                          {practice.selected ? 'Added to Practice' : 'Add to Practice'}
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedPractice === practice.id && (
                    <div className="mt-4 pl-11 space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Instructions:</h4>
                        <ol className="space-y-2">
                          {practice.instructions.map((instruction, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <span className="font-medium mr-2">{index + 1}.</span>
                              {instruction}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Benefits:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {practice.benefits.map((benefit, index) => (
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

          {/* Journal Demo */}
          {showDemo && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-medium text-gray-900 mb-4">Mindful Journal</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Today's Reflection
                  </label>
                  <textarea
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    placeholder="What's on your mind? Write freely without judgment..."
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="flex justify-end">
                  <Button size="sm">Save Entry</Button>
                </div>
              </div>
            </div>
          )}

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Mindful Practice:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Start with short sessions and gradually increase duration
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Practice at the same time each day to build a habit
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Be patient and non-judgmental with yourself
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
                Library of guided meditations
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Advanced mindfulness courses
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Progress tracking and insights
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
              {showDemo ? 'Hide Journal' : 'Try Journaling'}
            </Button>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={onComplete}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Lifestyle Changes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StressStep3;