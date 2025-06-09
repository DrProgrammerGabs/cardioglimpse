import React from 'react';
import Button from '../ui/Button';
import Card, { CardContent } from '../ui/Card';

interface DiabetesStep2Props {
  onComplete: () => void;
}

const DiabetesStep2: React.FC<DiabetesStep2Props> = ({ onComplete }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Create Your Diabetes-Friendly Meal Plan</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Daily Calorie Target
              </label>
              <select 
                className="w-full rounded-md border border-gray-300 px-3 py-2"
                required
              >
                <option value="">Select calorie range</option>
                <option value="1200-1500">1200-1500 calories</option>
                <option value="1500-1800">1500-1800 calories</option>
                <option value="1800-2100">1800-2100 calories</option>
                <option value="2100-2400">2100-2400 calories</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Carbohydrate Distribution
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    name="carbs" 
                    value="consistent" 
                    className="mr-2"
                    required 
                  />
                  <span>Consistent carbs across meals</span>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    name="carbs" 
                    value="variable" 
                    className="mr-2" 
                  />
                  <span>Variable carbs based on activity</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dietary Preferences
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    name="preferences" 
                    value="low-fat" 
                    className="mr-2" 
                  />
                  <span>Low-fat options</span>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    name="preferences" 
                    value="vegetarian" 
                    className="mr-2" 
                  />
                  <span>Vegetarian meals</span>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    name="preferences" 
                    value="gluten-free" 
                    className="mr-2" 
                  />
                  <span>Gluten-free options</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meal Timing Preference
              </label>
              <select 
                className="w-full rounded-md border border-gray-300 px-3 py-2"
                required
              >
                <option value="">Select meal frequency</option>
                <option value="3-meals">3 main meals</option>
                <option value="3-meals-snacks">3 meals + 2-3 snacks</option>
                <option value="6-small-meals">6 smaller meals</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <Button type="submit" variant="primary">
              Complete Step
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default DiabetesStep2;