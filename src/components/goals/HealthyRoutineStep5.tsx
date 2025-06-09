import React, { useState } from 'react';
import { ArrowLeft, Calendar, CheckCircle, Star, Brain, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface HealthyRoutineStep5Props {
  onComplete: () => void;
}

const HealthyRoutineStep5: React.FC<HealthyRoutineStep5Props> = ({ onComplete }) => {
  const [reflection, setReflection] = useState('');
  const [newHabit, setNewHabit] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const suggestedHabits = [
    'Morning meditation',
    'Evening stretching',
    'Meal planning Sunday',
    'Digital detox hour',
    'Mindful eating practice',
    'Afternoon power walk'
  ];

  const reflectionPrompts = [
    'What habits were easiest to maintain?',
    'Which times of day worked best?',
    'What obstacles did you face?',
    'How did your energy levels change?'
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Plan Your Next Week</CardTitle>
        <p className="text-gray-600 mt-2">
          Reflect on your progress and set intentions for the week ahead.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Progress Reflection */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Weekly Reflection</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center mb-3">
                <Brain className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-sm text-gray-600">Reflection Prompts:</span>
              </div>
              <ul className="space-y-2">
                {reflectionPrompts.map((prompt, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-200 rounded-full mr-2"></span>
                    {prompt}
                  </li>
                ))}
              </ul>
            </div>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Share your thoughts on your progress this week..."
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* New Habit Selection */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add a New Habit</h3>
            <p className="text-gray-600 mb-4">
              Choose one new habit to incorporate into your routine next week.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {suggestedHabits.map((habit) => (
                <button
                  key={habit}
                  onClick={() => setNewHabit(habit)}
                  className={`p-3 text-left rounded-lg border transition-colors duration-200 ${
                    newHabit === habit
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {habit}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                placeholder="Or type your own habit..."
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Weekly Overview */}
          {showDemo && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-medium text-gray-900 mb-4">Next Week's Overview</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-7 gap-2">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-medium text-gray-500 mb-2">{day}</div>
                      <div className="h-24 bg-gray-50 rounded-lg p-2">
                        <div className="text-xs text-gray-600">3 habits</div>
                        <div className="mt-2">
                          <CheckCircle className="h-4 w-4 text-success-500 mx-auto" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Success Strategies */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Success Strategies:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Star className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Prepare for your habits the night before
                </span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Stack new habits with existing routines
                </span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Share your goals with an accountability partner
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
                Detailed habit analytics and insights
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                AI-powered routine optimization
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Expert coaching and feedback
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
              {showDemo ? 'Hide Overview' : 'Show Weekly Overview'}
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

export default HealthyRoutineStep5;