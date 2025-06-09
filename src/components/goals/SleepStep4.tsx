import React, { useState } from 'react';
import { ArrowRight, Leaf, AlertTriangle, Pill, Apple, Moon, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface SleepStep4Props {
  onComplete: () => void;
}

interface NaturalAid {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  warnings: string[];
  tips: string[];
  premium: boolean;
  selected: boolean;
}

const SleepStep4: React.FC<SleepStep4Props> = ({ onComplete }) => {
  const [aids, setAids] = useState<NaturalAid[]>([
    {
      id: 'melatonin',
      name: 'Melatonin',
      description: 'Natural sleep hormone supplement',
      icon: <Moon />,
      warnings: [
        'Start with lowest effective dose',
        'Consult healthcare provider first',
        'May cause morning grogginess',
        'Not recommended for long-term use'
      ],
      tips: [
        'Take 30-60 minutes before bed',
        'Typical doses range from 0.5-5mg',
        'Keep consistent timing',
        'Store in a cool, dark place'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'magnesium',
      name: 'Magnesium-Rich Foods',
      description: 'Natural mineral for relaxation',
      icon: <Apple />,
      warnings: [
        'High doses may cause digestive issues',
        'Check interactions with medications',
        'Not suitable for kidney problems',
        'May lower blood pressure'
      ],
      tips: [
        'Include nuts and seeds in diet',
        'Try leafy greens at dinner',
        'Consider magnesium-rich bananas',
        'Add pumpkin seeds to meals'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'herbs',
      name: 'Herbal Remedies',
      description: 'Natural calming herbs',
      icon: <Leaf />,
      warnings: [
        'Check for allergies',
        'Avoid during pregnancy',
        'May interact with medications',
        'Quality varies by brand'
      ],
      tips: [
        'Try chamomile or valerian',
        'Use lavender essential oil',
        'Consider passionflower tea',
        'Start with single herbs'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'supplements',
      name: 'Advanced Supplements',
      description: 'Personalized supplement plan',
      icon: <Pill />,
      warnings: [
        'Professional guidance required',
        'Regular monitoring needed',
        'Potential interactions',
        'Individual response varies'
      ],
      tips: [
        'Comprehensive sleep analysis',
        'Tailored dosage plans',
        'Progress tracking',
        'Expert consultations'
      ],
      premium: true,
      selected: false
    }
  ]);

  const [selectedAid, setSelectedAid] = useState<string | null>(null);
  const [showWarning, setShowWarning] = useState(true);

  const toggleAid = (aidId: string) => {
    setAids(aids.map(aid =>
      aid.id === aidId ? { ...aid, selected: !aid.selected } : aid
    ));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Natural Sleep Aids</CardTitle>
          <p className="text-gray-600 mt-2">
            Explore natural ways to support your sleep. Always consult with a healthcare provider before starting any supplements.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Medical Warning */}
            {showWarning && (
              <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-warning-800 font-medium">Important Health Notice</h4>
                    <p className="text-warning-700 text-sm mt-1">
                      The information provided is for educational purposes only. Always consult your healthcare provider before starting any new supplements or sleep aids.
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

            {/* Natural Aids */}
            <div className="grid gap-4">
              {aids.map((aid) => (
                <div key={aid.id}>
                  <div
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedAid === aid.id
                        ? 'border-primary-500 bg-primary-50'
                        : aid.selected
                        ? 'border-success-200 bg-success-50'
                        : aid.premium
                        ? 'border-gray-200 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => !aid.premium && setSelectedAid(
                      selectedAid === aid.id ? null : aid.id
                    )}
                  >
                    <div className="flex items-start">
                      <div className={`rounded-full p-2 mr-3 ${
                        aid.selected
                          ? 'bg-success-100 text-success-600'
                          : aid.premium
                          ? 'bg-gray-100 text-gray-500'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {aid.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <h3 className="font-medium text-gray-900">{aid.name}</h3>
                            {aid.premium && (
                              <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                                <Lock className="w-3 h-3 mr-1" />
                                Premium
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{aid.description}</p>
                        {!aid.premium && (
                          <Button
                            variant={aid.selected ? 'outline' : 'primary'}
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleAid(aid.id);
                            }}
                            className="mt-2"
                          >
                            {aid.selected ? 'Selected' : 'Learn More'}
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedAid === aid.id && (
                      <div className="mt-4 pl-11 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-warning-800 mb-2">Important Warnings:</h4>
                          <ul className="space-y-2">
                            {aid.warnings.map((warning, index) => (
                              <li key={index} className="flex items-start text-sm text-warning-700">
                                <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                                {warning}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Usage Tips:</h4>
                          <ul className="space-y-2">
                            {aid.tips.map((tip, index) => (
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

            {/* General Tips */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Best Practices:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Start with one natural aid at a time to evaluate effectiveness
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Keep a sleep diary to track what works best for you
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Natural aids work best when combined with good sleep habits
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
                  Personalized supplement recommendations
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Expert consultation for natural remedies
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Detailed effectiveness tracking
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                onClick={onComplete}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Sleep Tracking
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SleepStep4;