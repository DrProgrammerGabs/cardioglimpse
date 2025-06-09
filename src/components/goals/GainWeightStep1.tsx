import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FormData {
  age: string;
  gender: string;
  height: string;
  weight: string;
  activityLevel: string;
  weightGoal: string;
  dietaryPreferences: string[];
}

interface GainWeightStep1Props {
  onComplete: (data: FormData) => void;
}

const GainWeightStep1: React.FC<GainWeightStep1Props> = ({ onComplete }) => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
    weightGoal: '',
    dietaryPreferences: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        dietaryPreferences: checkbox.checked
          ? [...prev.dietaryPreferences, value]
          : prev.dietaryPreferences.filter(pref => pref !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const isFormValid = () => {
    return (
      formData.age &&
      formData.gender &&
      formData.height &&
      formData.weight &&
      formData.activityLevel &&
      formData.weightGoal
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Calculate Your Calorie Needs</CardTitle>
        <p className="text-gray-600 mt-2">
          Let's determine your daily calorie requirements for healthy weight gain.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                placeholder="Enter height in cm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                placeholder="Enter weight in kg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Level
            </label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select activity level</option>
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Lightly active (1-3 days/week)</option>
              <option value="moderate">Moderately active (3-5 days/week)</option>
              <option value="very">Very active (6-7 days/week)</option>
              <option value="extra">Extra active (very active + physical job)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Weight Gain (per week)
            </label>
            <select
              name="weightGoal"
              value={formData.weightGoal}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select weekly goal</option>
              <option value="0.25">0.25 kg (gradual gain)</option>
              <option value="0.5">0.5 kg (moderate gain)</option>
              <option value="1">1 kg (rapid gain)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dietary Preferences
            </label>
            <div className="space-y-2">
              {['Vegetarian', 'Vegan', 'Gluten-free', 'Lactose-free', 'Halal', 'Kosher'].map((pref) => (
                <label key={pref} className="flex items-center">
                  <input
                    type="checkbox"
                    name="dietaryPreferences"
                    value={pref}
                    checked={formData.dietaryPreferences.includes(pref)}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{pref}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Healthy Weight Gain:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Aim for a gradual weight gain of 0.25-0.5 kg per week</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Focus on nutrient-dense foods rather than empty calories</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Combine increased calorie intake with strength training</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              type="submit"
              disabled={!isFormValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Calculate Calorie Needs
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default GainWeightStep1;