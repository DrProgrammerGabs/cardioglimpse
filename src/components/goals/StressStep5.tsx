import React, { useState } from 'react';
import { ArrowLeft, Users, MessageSquare, Calendar, Brain, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface StressStep5Props {
  onComplete: () => void;
}

const StressStep5: React.FC<StressStep5Props> = ({ onComplete }) => {
  const [selectedSupport, setSelectedSupport] = useState<string[]>([]);
  const [reflection, setReflection] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const supportOptions = [
    {
      id: 'friends-family',
      name: 'Friends & Family',
      description: 'Share with trusted loved ones',
      tips: [
        'Choose supportive listeners',
        'Be specific about your needs',
        'Schedule regular check-ins',
        'Express gratitude'
      ]
    },
    {
      id: 'support-groups',
      name: 'Support Groups',
      description: 'Connect with others facing similar challenges',
      tips: [
        'Find local or online groups',
        'Share experiences',
        'Learn from others',
        'Offer mutual support'
      ]
    },
    {
      id: 'professional',
      name: 'Professional Support',
      description: 'Seek guidance from mental health experts',
      tips: [
        'Research qualified providers',
        'Check insurance coverage',
        'Prepare for sessions',
        'Be open and honest'
      ]
    }
  ];

  const professionalResources = [
    {
      title: 'Therapists & Counselors',
      description: 'Licensed mental health professionals',
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: 'Support Groups',
      description: 'Peer-led stress management groups',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Wellness Coaches',
      description: 'Holistic stress management guidance',
      icon: <MessageSquare className="h-6 w-6" />
    }
  ];

  const toggleSupport = (supportId: string) => {
    setSelectedSupport(prev =>
      prev.includes(supportId)
        ? prev.filter(id => id !== supportId)
        : [...prev, supportId]
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Build Your Support Network</CardTitle>
        <p className="text-gray-600 mt-2">
          Having the right support system is crucial for managing stress effectively.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Support Options */}
          <div className="grid gap-4">
            {supportOptions.map((option) => (
              <div
                key={option.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedSupport.includes(option.id)
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => toggleSupport(option.id)}
              >
                <div className="flex items-start">
                  <div className={`rounded-full p-2 mr-3 ${
                    selectedSupport.includes(option.id)
                      ? 'bg-primary-100 text-primary-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{option.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                    
                    {selectedSupport.includes(option.id) && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Tips:</h4>
                        <ul className="space-y-2">
                          {option.tips.map((tip, index) => (
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
              </div>
            ))}
          </div>

          {/* Professional Resources */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="font-medium text-gray-900 mb-4">Professional Resources</h4>
            <div className="grid gap-4">
              {professionalResources.map((resource, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-full bg-primary-100 p-2 mr-3 text-primary-600">
                    {resource.icon}
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">{resource.title}</h5>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reflection */}
          {showDemo && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-medium text-gray-900 mb-4">Support Journal</h4>
              <textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="Reflect on your support needs and experiences..."
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
          )}

          {/* Emergency Resources */}
          <div className="bg-warning-50 border border-warning-200 rounded-lg p-6">
            <h4 className="font-medium text-warning-800 mb-2">24/7 Crisis Support</h4>
            <p className="text-warning-700 text-sm mb-4">
              If you're experiencing a mental health crisis or having thoughts of self-harm:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-warning-700">
                • National Crisis Hotline: 988
              </li>
              <li className="text-warning-700">
                • Crisis Text Line: Text HOME to 741741
              </li>
            </ul>
          </div>

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Building Support Tips:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Start with one or two trusted supporters
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Be clear about what kind of support you need
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Maintain boundaries and respect others' limits
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
                Access to wellness professionals
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Group support sessions
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Community forums and chat
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
              {showDemo ? 'Hide Journal' : 'Open Support Journal'}
            </Button>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
              onClick={() => window.history.back()}
            >
              Previous Step
            </Button>
            <Button onClick={onComplete}>
              Complete Journey
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StressStep5;