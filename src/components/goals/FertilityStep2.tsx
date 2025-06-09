import React, { useState } from 'react';
import { ArrowRight, Apple, Fish, Leaf, Coffee, AlertTriangle, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FertilityStep2Props {
  onComplete: () => void;
}

interface FoodCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  foods: string[];
  tips: string[];
  premium: boolean;
  selected: boolean;
}

const FertilityStep2: React.FC<FertilityStep2Props> = ({ onComplete }) => {
  const [categories, setCategories] = useState<FoodCategory[]>([
    {
      id: 'leafy-greens',
      name: 'Leafy Greens & Vegetables',
      description: 'Rich in folate and essential nutrients',
      icon: <Leaf />,
      foods: [
        'Spinach',
        'Kale',
        'Swiss chard',
        'Broccoli',
        'Brussels sprouts',
        'Asparagus'
      ],
      tips: [
        'Aim for 2-3 servings daily',
        'Include variety of colors',
        'Steam or eat raw for maximum nutrients',
        'Add to smoothies for easy intake'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'healthy-fats',
      name: 'Omega-3 Rich Foods',
      description: 'Essential fatty acids for reproductive health',
      icon: <Fish />,
      foods: [
        'Wild salmon',
        'Sardines',
        'Chia seeds',
        'Flaxseeds',
        'Walnuts',
        'Avocados'
      ],
      tips: [
        'Consume 2-3 servings of fatty fish weekly',
        'Add seeds to breakfast or snacks',
        'Use olive oil for cooking',
        'Include nuts in daily diet'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'fruits',
      name: 'Antioxidant-Rich Fruits',
      description: 'Support egg health and fertility',
      icon: <Apple />,
      foods: [
        'Berries',
        'Citrus fruits',
        'Pomegranate',
        'Apples',
        'Pears',
        'Grapes'
      ],
      tips: [
        'Eat 2-3 servings of fruit daily',
        'Choose organic when possible',
        'Include variety of colors',
        'Best consumed fresh'
      ],
      premium: false,
      selected: false
    },
    {
      id: 'meal-plan',
      name: 'Custom Meal Planning',
      description: 'Personalized fertility nutrition plan',
      icon: <Coffee />,
      foods: [
        'Weekly meal plans',
        'Shopping lists',
        'Recipe suggestions',
        'Portion guidance'
      ],
      tips: [
        'Tailored to your preferences',
        'Balanced nutrient ratios',
        'Easy-to-follow recipes',
        'Regular plan updates'
      ],
      premium: true,
      selected: false
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showWarning, setShowWarning] = useState(true);

  const toggleCategory = (categoryId: string) => {
    setCategories(categories.map(category =>
      category.id === categoryId ? { ...category, selected: !category.selected } : category
    ));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Nutrition for Fertility</CardTitle>
          <p className="text-gray-600 mt-2">
            Build a fertility-friendly diet with these essential food groups.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Nutrition Warning */}
            {showWarning && (
              <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-warning-800 font-medium">Important Notice</h4>
                    <p className="text-warning-700 text-sm mt-1">
                      Always consult with your healthcare provider before making significant dietary changes,
                      especially if you're trying to conceive or have specific health conditions.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => setShowWarning(false)}
                    >
                      I Understand
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Food Categories */}
            <div className="grid gap-4">
              {categories.map((category) => (
                <div key={category.id}>
                  <div
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'border-primary-500 bg-primary-50'
                        : category.selected
                        ? 'border-success-200 bg-success-50'
                        : category.premium
                        ? 'border-gray-200 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => !category.premium && setSelectedCategory(
                      selectedCategory === category.id ? null : category.id
                    )}
                  >
                    <div className="flex items-start">
                      <div className={`rounded-full p-2 mr-3 ${
                        category.selected
                          ? 'bg-success-100 text-success-600'
                          : category.premium
                          ? 'bg-gray-100 text-gray-500'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <h3 className="font-medium text-gray-900">{category.name}</h3>
                            {category.premium && (
                              <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                                <Lock className="w-3 h-3 mr-1" />
                                Premium
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                        {!category.premium && (
                          <Button
                            variant={category.selected ? 'outline' : 'primary'}
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCategory(category.id);
                            }}
                            className="mt-2"
                          >
                            {category.selected ? 'Added to Plan' : 'Add to Plan'}
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedCategory === category.id && (
                      <div className="mt-4 pl-11 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Recommended Foods:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {category.foods.map((food, index) => (
                              <div key={index} className="flex items-center text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-primary-200 rounded-full mr-2"></span>
                                {food}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Tips:</h4>
                          <ul className="space-y-2">
                            {category.tips.map((tip, index) => (
                              <li key={index} className="flex items-start text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-primary-200 rounded-full mr-2 mt-1.5"></span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Nutrition Tips */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">General Nutrition Tips:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Stay hydrated with 8-10 glasses of water daily
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Limit caffeine intake to 200mg per day
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Avoid processed foods and excess sugar
                  </span>
                </li>
              </ul>
            </div>

            {/* Foods to Avoid */}
            <div className="bg-warning-50 rounded-lg p-6">
              <h4 className="font-medium text-warning-800 mb-4">Foods to Limit or Avoid:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-warning-500 mt-1 mr-2" />
                  <span className="text-warning-700">Trans fats and processed foods</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-warning-500 mt-1 mr-2" />
                  <span className="text-warning-700">Excess refined sugars</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-4 w-4 text-warning-500 mt-1 mr-2" />
                  <span className="text-warning-700">High-mercury fish</span>
                </li>
              </ul>
            </div>

            {/* Premium Features */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Premium Features:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Personalized meal plans
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Recipe database with nutrition tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Consultation with fertility nutritionist
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                onClick={onComplete}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Exercise & Stress Management
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FertilityStep2;