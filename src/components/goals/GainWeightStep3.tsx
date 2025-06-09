import React, { useState } from 'react';
import { ArrowRight, Apple } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface NutritionPlan {
  mealType: string;
  foods: string[];
  portions: string[];
}

interface GainWeightStep3Props {
  onComplete: () => void;
}

const GainWeightStep3: React.FC<GainWeightStep3Props> = ({ onComplete }) => {
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);

  const nutritionPlans: NutritionPlan[] = [
    {
      mealType: 'Breakfast',
      foods: [
        'Oatmeal with nuts and fruits',
        'Whole grain toast with avocado',
        'Greek yogurt with granola',
        'Protein smoothie'
      ],
      portions: [
        '1 cup oatmeal + 1/4 cup nuts + 1 banana',
        '2 slices toast + 1 whole avocado',
        '1 cup yogurt + 1/2 cup granola',
        '2 scoops protein + 1 cup milk + fruits'
      ]
    },
    {
      mealType: 'Lunch',
      foods: [
        'Quinoa bowl with chicken',
        'Salmon with sweet potato',
        'Whole grain pasta with meatballs',
        'Rice and beans with vegetables'
      ],
      portions: [
        '1 cup quinoa + 6oz chicken + vegetables',
        '6oz salmon + 1 large sweet potato',
        '1.5 cups pasta + 4 meatballs + sauce',
        '1 cup rice + 1 cup beans + vegetables'
      ]
    },
    {
      mealType: 'Dinner',
      foods: [
        'Lean steak with potatoes',
        'Grilled chicken with rice',
        'Fish with quinoa',
        'Turkey with whole grain pasta'
      ],
      portions: [
        '8oz steak + 2 medium potatoes',
        '8oz chicken + 1.5 cups rice',
        '8oz fish + 1 cup quinoa',
        '8oz turkey + 1.5 cups pasta'
      ]
    },
    {
      mealType: 'Snacks',
      foods: [
        'Trail mix',
        'Protein shake',
        'Peanut butter sandwich',
        'Fruit and nuts'
      ],
      portions: [
        '1/2 cup mix',
        '1 scoop protein + 1 cup milk',
        '2 slices bread + 2 tbsp peanut butter',
        '1 fruit + 1/4 cup nuts'
      ]
    }
  ];

  const handleFoodSelect = (food: string) => {
    setSelectedFoods(prev => {
      if (prev.includes(food)) {
        return prev.filter(f => f !== food);
      }
      return [...prev, food];
    });
  };

  const isValid = () => selectedFoods.length >= 8;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Focus on Nutrient-Dense Foods</CardTitle>
        <p className="text-gray-600 mt-2">
          Select at least 8 nutrient-rich foods to include in your daily meal plan.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {nutritionPlans.map((plan) => (
            <div key={plan.mealType} className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">{plan.mealType}</h3>
              <div className="grid gap-4">
                {plan.foods.map((food, index) => (
                  <div
                    key={food}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedFoods.includes(food)
                        ? 'bg-primary-50 border-primary-200 border'
                        : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                    }`}
                    onClick={() => handleFoodSelect(food)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{food}</p>
                        <p className="text-sm text-gray-600 mt-1">{plan.portions[index]}</p>
                      </div>
                      <Apple className={`w-5 h-5 ${
                        selectedFoods.includes(food)
                          ? 'text-primary-500'
                          : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Nutrition Tips for Healthy Weight Gain:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Choose whole, unprocessed foods whenever possible</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Include protein with every meal</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">Add healthy fats to increase calorie intake</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={onComplete}
              disabled={!isValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Next Step
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GainWeightStep3;