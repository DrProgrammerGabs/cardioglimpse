import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent } from '../ui/Card';

interface FormData {
  mealsPerDay: string;
  exerciseFrequency: string;
  dietaryRestrictions: string[];
  typicalDay: string;
  snackingHabits: string;
  waterIntake: string;
  sleepHours: string;
  stressLevel: string;
}

const WeightLossStep1: React.FC<{
  onComplete: (data: FormData) => void;
}> = ({ onComplete }) => {
  const [formData, setFormData] = useState<FormData>({
    mealsPerDay: '',
    exerciseFrequency: '',
    dietaryRestrictions: [],
    typicalDay: '',
    snackingHabits: '',
    waterIntake: '',
    sleepHours: '',
    stressLevel: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      dietaryRestrictions: checked
        ? [...prev.dietaryRestrictions, value]
        : prev.dietaryRestrictions.filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const isFormValid = () => {
    return (
      formData.mealsPerDay &&
      formData.exerciseFrequency &&
      formData.typicalDay &&
      formData.snackingHabits &&
      formData.waterIntake &&
      formData.sleepHours &&
      formData.stressLevel
    );
  };

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Meals per day */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How many meals do you typically eat per day?
            </label>
            <select
              name="mealsPerDay"
              value={formData.mealsPerDay}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select an option</option>
              <option value="1-2">1-2 meals</option>
              <option value="3">3 meals</option>
              <option value="4-5">4-5 meals</option>
              <option value="6+">6+ meals</option>
            </select>
          </div>

          {/* Exercise frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How often do you exercise each week?
            </label>
            <select
              name="exerciseFrequency"
              value={formData.exerciseFrequency}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select an option</option>
              <option value="never">Never</option>
              <option value="1-2">1-2 times</option>
              <option value="3-4">3-4 times</option>
              <option value="5+">5+ times</option>
            </select>
          </div>

          {/* Dietary restrictions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Do you have any dietary restrictions? (Select all that apply)
            </label>
            <div className="space-y-2">
              {[
                'Vegetarian',
                'Vegan',
                'Gluten-free',
                'Dairy-free',
                'Nut allergies',
                'Kosher',
                'Halal'
              ].map(restriction => (
                <div key={restriction} className="flex items-center">
                  <input
                    type="checkbox"
                    id={restriction}
                    name="dietaryRestrictions"
                    value={restriction}
                    checked={formData.dietaryRestrictions.includes(restriction)}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor={restriction} className="ml-2 text-sm text-gray-700">
                    {restriction}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Typical day description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe your typical day's eating pattern
            </label>
            <textarea
              name="typicalDay"
              value={formData.typicalDay}
              onChange={handleInputChange}
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Example: Skip breakfast, lunch at noon, snack at 3pm, dinner at 7pm..."
            />
          </div>

          {/* Snacking habits */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How would you describe your snacking habits?
            </label>
            <select
              name="snackingHabits"
              value={formData.snackingHabits}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select an option</option>
              <option value="rarely">Rarely snack</option>
              <option value="sometimes">Sometimes snack</option>
              <option value="frequent">Frequent snacker</option>
              <option value="constant">Constant snacker</option>
            </select>
          </div>

          {/* Water intake */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How much water do you drink daily?
            </label>
            <select
              name="waterIntake"
              value={formData.waterIntake}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select an option</option>
              <option value="less-than-2">Less than 2 cups</option>
              <option value="2-4">2-4 cups</option>
              <option value="5-7">5-7 cups</option>
              <option value="8+">8+ cups</option>
            </select>
          </div>

          {/* Sleep hours */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How many hours do you typically sleep per night?
            </label>
            <select
              name="sleepHours"
              value={formData.sleepHours}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select an option</option>
              <option value="less-than-5">Less than 5 hours</option>
              <option value="5-6">5-6 hours</option>
              <option value="7-8">7-8 hours</option>
              <option value="9+">9+ hours</option>
            </select>
          </div>

          {/* Stress level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How would you rate your daily stress level?
            </label>
            <select
              name="stressLevel"
              value={formData.stressLevel}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select an option</option>
              <option value="low">Low stress</option>
              <option value="moderate">Moderate stress</option>
              <option value="high">High stress</option>
              <option value="very-high">Very high stress</option>
            </select>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={!isFormValid()}
              fullWidth
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Step 2
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default WeightLossStep1;