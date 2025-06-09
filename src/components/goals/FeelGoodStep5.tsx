import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, Brain, Calendar, Users, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FeelGoodStep5Props {
  onComplete: () => void;
}

interface JournalPrompt {
  id: string;
  prompt: string;
  placeholder: string;
}

const FeelGoodStep5: React.FC<FeelGoodStep5Props> = ({ onComplete }) => {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [journalEntry, setJournalEntry] = useState('');

  const journalPrompts: JournalPrompt[] = [
    {
      id: 'feelings',
      prompt: 'How are you feeling right now, and what led to these feelings?',
      placeholder: 'Take a moment to explore your current emotional state...'
    },
    {
      id: 'gratitude',
      prompt: 'What are three things that brought you joy or peace today?',
      placeholder: 'Even small moments of happiness count...'
    },
    {
      id: 'challenges',
      prompt: 'What challenges are you facing, and what support would help?',
      placeholder: 'Be honest about what you\'re struggling with...'
    }
  ];

  const supportFeatures = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "AI Wellness Coach",
      description: "Get 24/7 support and personalized guidance",
      premium: true
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Mood Journal",
      description: "Track your emotional journey with guided prompts",
      premium: false
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Therapy Scheduling",
      description: "Find and book sessions with licensed therapists",
      premium: true
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Support Groups",
      description: "Connect with others on similar journeys",
      premium: true
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Get the Support You Need</CardTitle>
          <p className="text-gray-600 mt-2">
            It's okay to ask for help. Choose the support that feels right for you.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Support Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    feature.premium ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-3 ${
                      feature.premium
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-primary-100 text-primary-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <h3 className="font-medium text-gray-900">{feature.title}</h3>
                        {feature.premium && (
                          <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                            <Lock className="w-3 h-3 mr-1" />
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Journal Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Express Your Feelings</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {journalPrompts.map((prompt) => (
                    <button
                      key={prompt.id}
                      onClick={() => setSelectedPrompt(prompt.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        selectedPrompt === prompt.id
                          ? 'bg-primary-100 text-primary-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {prompt.prompt}
                    </button>
                  ))}
                </div>

                {selectedPrompt && (
                  <textarea
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    placeholder={journalPrompts.find(p => p.id === selectedPrompt)?.placeholder}
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                )}
              </div>
            </div>

            {/* Professional Help Section */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">When to Seek Professional Help:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Feeling overwhelmed or unable to cope with daily life
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Experiencing persistent sadness or anxiety
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Changes in sleep, appetite, or energy levels
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Having thoughts of self-harm or feeling hopeless
                  </span>
                </li>
              </ul>
            </div>

            {/* Emergency Resources */}
            <div className="bg-warning-50 border border-warning-200 rounded-lg p-6">
              <h4 className="font-medium text-warning-800 mb-2">24/7 Crisis Support</h4>
              <p className="text-warning-700 text-sm mb-4">
                If you're in crisis or having thoughts of suicide, help is available 24/7:
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
    </div>
  );
};

export default FeelGoodStep5;