import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface GainWeightStep2Props {
  onComplete: () => void;
  onBack: () => void;
  formData: {
    age: string;
    gender: string;
    height: string;
    weight: string;
    activityLevel: string;
    weightGoal: string;
    dietaryPreferences: string[];
  };
}

const GainWeightStep2: React.FC<GainWeightStep2Props> = ({ onComplete, onBack, formData }) => {
  // Calculate BMR using Mifflin-St Jeor Equation
  const calculateBMR = () => {
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height);
    const age = parseFloat(formData.age);
    const gender = formData.gender;

    if (gender === 'male') {
      return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      return (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
  };

  // Calculate TDEE (Total Daily Energy Expenditure)
  const calculateTDEE = () => {
    const bmr = calculateBMR();
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      very: 1.725,
      extra: 1.9
    };
    return Math.round(bmr * activityMultipliers[formData.activityLevel]);
  };

  // Calculate target calories for weight gain
  const calculateTargetCalories = () => {
    const tdee = calculateTDEE();
    const weeklyGainKg = parseFloat(formData.weightGoal);
    // Each kg of weight gain requires approximately 7700 calories
    const additionalDailyCalories = Math.round((weeklyGainKg * 7700) / 7);
    return tdee + additionalDailyCalories;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Your Personalized Calorie Plan</CardTitle>
        <p className="text-gray-600 mt-2">
          Based on your information, here's your recommended daily calorie intake for healthy weight gain.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-primary-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Base Metabolic Rate (BMR)</p>
                <p className="text-2xl font-bold text-primary-600">{Math.round(calculateBMR())}</p>
                <p className="text-xs text-gray-500">calories/day</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Current Maintenance</p>
                <p className="text-2xl font-bold text-primary-600">{calculateTDEE()}</p>
                <p className="text-xs text-gray-500">calories/day</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Target Intake</p>
                <p className="text-2xl font-bold text-primary-600">{calculateTargetCalories()}</p>
                <p className="text-xs text-gray-500">calories/day</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Macronutrient Distribution</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-800">Protein</p>
                <p className="text-lg font-bold text-green-600">25-30%</p>
                <p className="text-sm text-green-700">For muscle growth</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-800">Carbohydrates</p>
                <p className="text-lg font-bold text-blue-600">45-55%</p>
                <p className="text-sm text-blue-700">For energy</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm font-medium text-yellow-800">Healthy Fats</p>
                <p className="text-lg font-bold text-yellow-600">20-25%</p>
                <p className="text-sm text-yellow-700">For hormones</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Key Recommendations:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Eat frequent meals (5-6 times per day)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Include protein with every meal</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Focus on calorie-dense, nutritious foods</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Combine with strength training for muscle gain</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between space-x-4 pt-6">
            <Button
              onClick={onBack}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
              variant="outline"
            >
              Back
            </Button>
            <Button
              onClick={onComplete}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Meal Plan
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GainWeightStep2;