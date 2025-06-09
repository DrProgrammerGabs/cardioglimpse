import React, { useState } from 'react';
import { ArrowRight, Bell, CheckSquare, Smartphone, Calendar, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface Reminder {
  habitId: string;
  time: string;
  days: string[];
  notificationType: string;
}

interface HealthyRoutineStep3Props {
  onComplete: (reminders: Reminder[]) => void;
}

const HealthyRoutineStep3: React.FC<HealthyRoutineStep3Props> = ({ onComplete }) => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showDemo, setShowDemo] = useState(false);

  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const notificationTypes = [
    { id: 'push', name: 'Push Notification', icon: <Smartphone className="h-5 w-5" /> },
    { id: 'calendar', name: 'Calendar Event', icon: <Calendar className="h-5 w-5" /> },
    { id: 'both', name: 'Both', icon: <Bell className="h-5 w-5" /> }
  ];

  const habits = [
    { id: 'water', name: 'Water Intake' },
    { id: 'walking', name: 'Daily Walk' },
    { id: 'vegetables', name: 'Eat Vegetables' }
  ];

  const addReminder = (habitId: string) => {
    setReminders([
      ...reminders,
      {
        habitId,
        time: '',
        days: [],
        notificationType: 'push'
      }
    ]);
  };

  const updateReminder = (index: number, field: keyof Reminder, value: any) => {
    const updatedReminders = [...reminders];
    updatedReminders[index] = {
      ...updatedReminders[index],
      [field]: value
    };
    setReminders(updatedReminders);
  };

  const toggleDay = (reminderIndex: number, day: string) => {
    const reminder = reminders[reminderIndex];
    const updatedDays = reminder.days.includes(day)
      ? reminder.days.filter(d => d !== day)
      : [...reminder.days, day];
    
    updateReminder(reminderIndex, 'days', updatedDays);
  };

  const isValid = () => {
    return reminders.length > 0 && reminders.every(reminder => 
      reminder.time && 
      reminder.days.length > 0 && 
      reminder.notificationType
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Set Up Reminders & Tracking</CardTitle>
        <p className="text-gray-600 mt-2">
          Create reminders for your habits and choose how you want to track your progress.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Reminders Setup */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Habit Reminders</h3>
            
            {habits.map((habit) => {
              const habitReminder = reminders.find(r => r.habitId === habit.id);
              
              return (
                <div key={habit.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-gray-900">{habit.name}</h4>
                    {!habitReminder && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addReminder(habit.id)}
                        leftIcon={<Bell className="h-4 w-4" />}
                      >
                        Add Reminder
                      </Button>
                    )}
                  </div>

                  {habitReminder && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Reminder Time
                          </label>
                          <input
                            type="time"
                            value={habitReminder.time}
                            onChange={(e) => {
                              const index = reminders.findIndex(r => r.habitId === habit.id);
                              updateReminder(index, 'time', e.target.value);
                            }}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Notification Type
                          </label>
                          <div className="flex space-x-2">
                            {notificationTypes.map((type) => (
                              <button
                                key={type.id}
                                onClick={() => {
                                  const index = reminders.findIndex(r => r.habitId === habit.id);
                                  updateReminder(index, 'notificationType', type.id);
                                }}
                                className={`flex items-center p-2 rounded-md border ${
                                  habitReminder.notificationType === type.id
                                    ? 'border-primary-500 bg-primary-50 text-primary-600'
                                    : 'border-gray-300 hover:border-gray-400'
                                }`}
                              >
                                {type.icon}
                                <span className="ml-2 text-sm">{type.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Repeat on Days
                        </label>
                        <div className="flex space-x-2">
                          {weekdays.map((day) => (
                            <button
                              key={day}
                              onClick={() => {
                                const index = reminders.findIndex(r => r.habitId === habit.id);
                                toggleDay(index, day);
                              }}
                              className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                                habitReminder.days.includes(day)
                                  ? 'border-primary-500 bg-primary-50 text-primary-600'
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Tracking Preview */}
          {showDemo && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-medium text-gray-900 mb-4">Habit Tracking Preview</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <CheckSquare className="h-5 w-5 text-success-500 mr-2" />
                    <span className="text-gray-700">Daily Progress</span>
                  </div>
                  <div className="flex space-x-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          i < 3 ? 'bg-success-100 text-success-600' : 'bg-gray-100'
                        }`}
                      >
                        {i < 3 && <CheckSquare className="h-4 w-4" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Premium Features */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Lock className="h-5 w-5 text-gray-500 mr-2" />
              <h4 className="font-medium text-gray-900">Premium Features</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                Smart habit suggestions based on your routine
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                Advanced progress analytics and insights
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                Habit streak rewards and achievements
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
                  Set reminders for times when you're most likely to complete the habit
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Track your progress daily to stay motivated
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Celebrate small wins and progress milestones
                </span>
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
              {showDemo ? 'Hide Preview' : 'Show Tracking Preview'}
            </Button>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={() => onComplete(reminders)}
              disabled={!isValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Rewards
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthyRoutineStep3;