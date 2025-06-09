import React from 'react';
import { ArrowRight, Utensils, Apple, Coffee, Salad, Fish } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

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

interface WeightLossStep2Props {
  formData: FormData;
  onComplete: () => void;
}

const WeightLossStep2: React.FC<WeightLossStep2Props> = ({ formData, onComplete }) => {
  const getMealPlan = () => {
    const meals = [];
    
    // Basic meal structure based on meals per day
    switch (formData.mealsPerDay) {
      case '1-2':
        meals.push(
          { time: 'Brunch (11:00 AM)', icon: <Coffee />, suggestions: ['Greek yogurt with berries and honey', 'Whole grain toast with avocado', 'Scrambled eggs with spinach'] },
          { time: 'Dinner (6:00 PM)', icon: <Utensils />, suggestions: ['Grilled chicken breast with quinoa', 'Steamed vegetables', 'Mixed green salad'] }
        );
        break;
      case '3':
        meals.push(
          { time: 'Breakfast (8:00 AM)', icon: <Coffee />, suggestions: ['Oatmeal with nuts and fruits', 'Whole grain toast with peanut butter', 'Fresh fruit smoothie'] },
          { time: 'Lunch (1:00 PM)', icon: <Salad />, suggestions: ['Quinoa bowl with vegetables', 'Grilled chicken salad', 'Lentil soup with whole grain bread'] },
          { time: 'Dinner (7:00 PM)', icon: <Fish />, suggestions: ['Baked fish with herbs', 'Brown rice', 'Roasted vegetables'] }
        );
        break;
      default:
        meals.push(
          { time: 'Breakfast (8:00 AM)', icon: <Coffee />, suggestions: ['Protein smoothie', 'Whole grain cereal with milk', 'Fresh fruits'] },
          { time: 'Morning Snack (10:30 AM)', icon: <Apple />, suggestions: ['Apple slices with almond butter', 'Mixed nuts', 'Greek yogurt'] },
          { time: 'Lunch (1:00 PM)', icon: <Salad />, suggestions: ['Mixed green salad with protein', 'Whole grain wrap', 'Vegetable soup'] },
          { time: 'Afternoon Snack (4:00 PM)', icon: <Apple />, suggestions: ['Carrot sticks with hummus', 'Protein bar', 'Mixed berries'] },
          { time: 'Dinner (7:00 PM)', icon: <Utensils />, suggestions: ['Lean protein with vegetables', 'Quinoa or brown rice', 'Steamed vegetables'] }
        );
    }

    // Adjust for dietary restrictions
    if (formData.dietaryRestrictions.includes('Vegetarian') || formData.dietaryRestrictions.includes('Vegan')) {
      meals.forEach(meal => {
        meal.suggestions = meal.suggestions.map(suggestion => 
          suggestion.includes('chicken') ? 'Grilled tofu' :
          suggestion.includes('fish') ? 'Tempeh' :
          suggestion.includes('Greek yogurt') ? 'Plant-based yogurt' :
          suggestion
        );
      });
    }

    return meals;
  };

  const mealPlan = getMealPlan();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Your Personalized Diet Plan</CardTitle>
          <p className="text-gray-600 mt-2">
            Based on your habits and preferences, here's a customized meal plan to help you achieve your weight loss goals.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mealPlan.map((meal, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                <div className="flex items-center mb-3">
                  <div className="rounded-full bg-primary-100 p-2 text-primary-600 mr-3">
                    {meal.icon}
                  </div>
                  <h3 className="font-medium text-gray-900">{meal.time}</h3>
                </div>
                <ul className="space-y-2 pl-11">
                  {meal.suggestions.map((suggestion, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <h4 className="font-medium text-gray-900">Additional Recommendations:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Drink {formData.waterIntake === '8+' ? 'maintain' : 'increase to'} at least 8 cups of water daily</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Use a food tracking app to monitor portions and calories</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Eat slowly and mindfully, taking at least 20 minutes per meal</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-4 bg-primary-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Premium Features:</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                Detailed nutrition information for each meal
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                Weekly meal plans with shopping lists
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                Recipe database with video tutorials
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <Button
              onClick={onComplete}
              fullWidth
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Exercise Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeightLossStep2;