import React, { useState } from 'react';
import { ArrowRight, Moon, Sun, Clock, Smartphone } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface SleepStep1Props {
  onComplete: (data: SleepHabits) => void;
}

interface SleepHabits {
  bedtime: string;
  wakeTime: string;
  screenUse: boolean;
  sleepQuality: string;
  sleepDuration: string;
  wakeupFrequency: string;
}

const SleepStep1: React.FC<SleepStep1Props> = ({ onComplete }) => {
  const [habits, setHabits] = useState<SleepHabits>({
    bedtime: '',
    wakeTime: '',
    screenUse: false,
    sleepQuality: '',
    sleepDuration: '',
    wakeupFrequency: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setHabits(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = () => {
    onComplete(habits);
  };

  const isFormValid = () => {
    return (
      habits.bedtime &&
      habits.wakeTime &&
      habits.sleepQuality &&
      habits.sleepDuration &&
      habits.wakeupFrequency
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Assess Your Sleep Habits</CardTitle>
          <p className="text-gray-600 mt-2">
            Let's understand your current sleep patterns to create a personalized improvement plan.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Sleep Schedule */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What time do you usually go to bed?
                </label>
                <div className="relative">
                  <Moon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="time"
                    name="bedtime"
                    value={habits.bedtime}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What time do you usually wake up?
                </label>
                <div className="relative">
                  <Sun className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="time"
                    name="wakeTime"
                    value={habits.wakeTime}
                    onChange={handleInputChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>

            {/* Sleep Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How many hours of sleep do you typically get?
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  name="sleepDuration"
                  value={habits.sleepDuration}
                  onChange={handleInputChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select hours of sleep</option>
                  <option value="less-than-5">Less than 5 hours</option>
                  <option value="5-6">5-6 hours</option>
                  <option value="6-7">6-7 hours</option>
                  <option value="7-8">7-8 hours</option>
                  <option value="8-9">8-9 hours</option>
                  <option value="more-than-9">More than 9 hours</option>
                </select>
              </div>
            </div>

            {/* Sleep Quality */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How would you rate your sleep quality?
              </label>
              <select
                name="sleepQuality"
                value={habits.sleepQuality}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select sleep quality</option>
                <option value="poor">Poor - Wake up feeling tired</option>
                <option value="fair">Fair - Sometimes refreshed</option>
                <option value="good">Good - Usually refreshed</option>
                <option value="excellent">Excellent - Always refreshed</option>
              </select>
            </div>

            {/* Night Wakings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How often do you wake up during the night?
              </label>
              <select
                name="wakeupFrequency"
                value={habits.wakeupFrequency}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select frequency</option>
                <option value="rarely">Rarely or never</option>
                <option value="once">Once per night</option>
                <option value="few-times">Few times per night</option>
                <option value="frequently">Frequently throughout the night</option>
              </select>
            </div>

            {/* Screen Usage */}
            <div className="flex items-center">
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="screenUse"
                    checked={habits.screenUse}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Do you use screens (phone, tablet, TV) in bed?
                  </label>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Did You Know?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Adults need 7-9 hours of sleep per night for optimal health
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Blue light from screens can disrupt your natural sleep cycle
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Consistent sleep and wake times help regulate your body's internal clock
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                onClick={handleSubmit}
                disabled={!isFormValid()}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Sleep Environment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SleepStep1;