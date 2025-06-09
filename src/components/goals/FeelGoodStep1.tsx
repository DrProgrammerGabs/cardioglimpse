import React, { useState } from 'react';
import { ArrowRight, Brain, Sun, Moon, Battery } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface JournalEntry {
  type: 'drain' | 'lift';
  text: string;
  timeOfDay: string;
}

interface FormData {
  entries: JournalEntry[];
  bestTime: string;
  worstTime: string;
}

const FeelGoodStep1: React.FC<{
  onComplete: (data: FormData) => void;
}> = ({ onComplete }) => {
  const [formData, setFormData] = useState<FormData>({
    entries: [],
    bestTime: '',
    worstTime: ''
  });

  const [newEntry, setNewEntry] = useState<{
    type: 'drain' | 'lift';
    text: string;
    timeOfDay: string;
  }>({
    type: 'drain',
    text: '',
    timeOfDay: ''
  });

  const handleAddEntry = () => {
    if (newEntry.text && newEntry.timeOfDay) {
      setFormData(prev => ({
        ...prev,
        entries: [...prev.entries, newEntry]
      }));
      setNewEntry({
        type: 'drain',
        text: '',
        timeOfDay: ''
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.entries.length >= 3) {
      onComplete(formData);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Discover Your Energy Patterns</CardTitle>
          <p className="text-gray-600 mt-2">
            Understanding what affects your energy and mood is the first step to feeling better.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Energy Journal */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Energy Journal</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type
                    </label>
                    <select
                      value={newEntry.type}
                      onChange={(e) => setNewEntry(prev => ({ ...prev, type: e.target.value as 'drain' | 'lift' }))}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="drain">Energy Drain</option>
                      <option value="lift">Energy Lift</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time of Day
                    </label>
                    <select
                      value={newEntry.timeOfDay}
                      onChange={(e) => setNewEntry(prev => ({ ...prev, timeOfDay: e.target.value }))}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                      <option value="night">Night</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        value={newEntry.text}
                        onChange={(e) => setNewEntry(prev => ({ ...prev, text: e.target.value }))}
                        placeholder="What happened?"
                        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-primary-500"
                      />
                      <Button
                        type="button"
                        onClick={handleAddEntry}
                        disabled={!newEntry.text || !newEntry.timeOfDay}
                        className="rounded-l-none"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Journal Entries */}
                <div className="space-y-3">
                  {formData.entries.map((entry, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg flex items-start ${
                        entry.type === 'drain' ? 'bg-error-50' : 'bg-success-50'
                      }`}
                    >
                      {entry.type === 'drain' ? (
                        <Battery className="h-5 w-5 text-error-500 mt-1 mr-3" />
                      ) : (
                        <Sun className="h-5 w-5 text-success-500 mt-1 mr-3" />
                      )}
                      <div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium capitalize">
                            {entry.timeOfDay}
                          </span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-sm text-gray-600">
                            {entry.type === 'drain' ? 'Energy Drain' : 'Energy Lift'}
                          </span>
                        </div>
                        <p className="mt-1 text-gray-700">{entry.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Peak Energy Times */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Your Energy Peaks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    When do you feel most energetic?
                  </label>
                  <select
                    value={formData.bestTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, bestTime: e.target.value }))}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select time</option>
                    <option value="early-morning">Early Morning (5-8 AM)</option>
                    <option value="morning">Morning (8-11 AM)</option>
                    <option value="midday">Midday (11 AM-2 PM)</option>
                    <option value="afternoon">Afternoon (2-5 PM)</option>
                    <option value="evening">Evening (5-8 PM)</option>
                    <option value="night">Night (8-11 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    When is your energy lowest?
                  </label>
                  <select
                    value={formData.worstTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, worstTime: e.target.value }))}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select time</option>
                    <option value="early-morning">Early Morning (5-8 AM)</option>
                    <option value="morning">Morning (8-11 AM)</option>
                    <option value="midday">Midday (11 AM-2 PM)</option>
                    <option value="afternoon">Afternoon (2-5 PM)</option>
                    <option value="evening">Evening (5-8 PM)</option>
                    <option value="night">Night (8-11 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Tips for Better Self-Awareness:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-primary-500 mt-1 mr-3" />
                  <span className="text-gray-700">
                    Notice patterns in your mood and energy throughout the day
                  </span>
                </li>
                <li className="flex items-start">
                  <Sun className="h-5 w-5 text-primary-500 mt-1 mr-3" />
                  <span className="text-gray-700">
                    Pay attention to how different activities affect your energy levels
                  </span>
                </li>
                <li className="flex items-start">
                  <Moon className="h-5 w-5 text-primary-500 mt-1 mr-3" />
                  <span className="text-gray-700">
                    Consider how your sleep schedule impacts your daily rhythm
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                type="submit"
                disabled={formData.entries.length < 3 || !formData.bestTime || !formData.worstTime}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Joy Routine
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeelGoodStep1;