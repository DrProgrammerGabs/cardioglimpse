import React, { useState } from 'react';
import { ArrowRight, Sun, Moon, Utensils, Dumbbell, Clock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface RoutineAssessment {
  wakeTime: string;
  breakfastTime: string;
  lunchTime: string;
  dinnerTime: string;
  exerciseTime: string;
  exerciseType: string;
  exerciseDuration: string;
  sleepTime: string;
  challenges: string[];
  energyLevel: string;
}

interface HealthyRoutineStep1Props {
  onComplete: (data: RoutineAssessment) => void;
}

const HealthyRoutineStep1: React.FC<HealthyRoutineStep1Props> = ({ onComplete }) => {
  const [assessment, setAssessment] = useState<RoutineAssessment>({
    wakeTime: '',
    breakfastTime: '',
    lunchTime: '',
    dinnerTime: '',
    exerciseTime: '',
    exerciseType: '',
    exerciseDuration: '',
    sleepTime: '',
    challenges: [],
    energyLevel: ''
  });

  const commonChallenges = [
    'Inconsistent wake times',
    'Skipping meals',
    'Lack of exercise',
    'Late night screen time',
    'Stress affecting routine',
    'Poor sleep quality',
    'No time for self-care',
    'Irregular meal times'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAssessment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleChallengeToggle = (challenge: string) => {
    setAssessment(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge]
    }));
  };

  const isFormValid = () => {
    return (
      assessment.wakeTime &&
      assessment.sleepTime &&
      assessment.energyLevel &&
      assessment.challenges.length > 0
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Current Routine Assessment</CardTitle>
        <p className="text-gray-600 mt-2">
          Let's understand your daily schedule to create a personalized routine that works for you.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Sleep Schedule */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Wake Up Time
              </label>
              <div className="relative">
                <Sun className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="time"
                  name="wakeTime"
                  value={assessment.wakeTime}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bedtime
              </label>
              <div className="relative">
                <Moon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="time"
                  name="sleepTime"
                  value={assessment.sleepTime}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Meal Times */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Meal Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['breakfast', 'lunch', 'dinner'].map((meal) => (
                <div key={meal}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                    {meal} Time
                  </label>
                  <div className="relative">
                    <Utensils className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="time"
                      name={`${meal}Time`}
                      value={assessment[`${meal}Time` as keyof RoutineAssessment]}
                      onChange={handleInputChange}
                      className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exercise */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Exercise Routine</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exercise Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="time"
                    name="exerciseTime"
                    value={assessment.exerciseTime}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Exercise
                </label>
                <div className="relative">
                  <Dumbbell className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="exerciseType"
                    value={assessment.exerciseType}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select type</option>
                    <option value="walking">Walking</option>
                    <option value="running">Running</option>
                    <option value="cycling">Cycling</option>
                    <option value="swimming">Swimming</option>
                    <option value="yoga">Yoga</option>
                    <option value="strength">Strength Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select
                  name="exerciseDuration"
                  value={assessment.exerciseDuration}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select duration</option>
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="90">1.5 hours</option>
                  <option value="120">2+ hours</option>
                </select>
              </div>
            </div>
          </div>

          {/* Energy Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How's your energy level throughout the day?
            </label>
            <select
              name="energyLevel"
              value={assessment.energyLevel}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select energy level</option>
              <option value="high">Consistently high energy</option>
              <option value="variable">Energy varies throughout the day</option>
              <option value="afternoon-slump">Afternoon energy slump</option>
              <option value="low">Generally low energy</option>
              <option value="exhausted">Often exhausted</option>
            </select>
          </div>

          {/* Common Challenges */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              What challenges do you face with your current routine?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {commonChallenges.map((challenge) => (
                <label key={challenge} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={assessment.challenges.includes(challenge)}
                    onChange={() => handleChallengeToggle(challenge)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{challenge}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Quick Tips:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Be honest about your current routine - this helps create a more realistic plan
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Consider both weekday and weekend patterns
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Include all regular activities, even if they seem minor
                </span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={() => onComplete(assessment)}
              disabled={!isFormValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Daily Habits
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthyRoutineStep1;