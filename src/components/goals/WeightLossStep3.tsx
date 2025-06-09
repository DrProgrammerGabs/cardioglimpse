import React from 'react';
import { ArrowRight, Activity, Heart, Dumbbell, Timer, AlertCircle } from 'lucide-react';
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

interface WeightLossStep3Props {
  formData: FormData;
  onComplete: () => void;
}

const WeightLossStep3: React.FC<WeightLossStep3Props> = ({ formData, onComplete }) => {
  const getWorkoutPlan = () => {
    // Determine fitness level based on exercise frequency
    const fitnessLevel = 
      formData.exerciseFrequency === 'never' ? 'beginner' :
      formData.exerciseFrequency === '1-2' ? 'beginner-intermediate' :
      formData.exerciseFrequency === '3-4' ? 'intermediate' :
      'advanced';

    // Adjust intensity based on stress level and sleep
    const shouldReduceIntensity = 
      formData.stressLevel === 'very-high' || 
      formData.sleepHours === 'less-than-5';

    const workouts = {
      cardio: {
        beginner: [
          { name: 'Brisk Walking', duration: '20-30 minutes', intensity: 'Moderate' },
          { name: 'Stationary Bike', duration: '15-20 minutes', intensity: 'Light to Moderate' },
          { name: 'Swimming', duration: '20 minutes', intensity: 'Light' }
        ],
        'beginner-intermediate': [
          { name: 'Power Walking', duration: '30 minutes', intensity: 'Moderate' },
          { name: 'Cycling', duration: '25 minutes', intensity: 'Moderate' },
          { name: 'Elliptical', duration: '20 minutes', intensity: 'Moderate' }
        ],
        intermediate: [
          { name: 'Jogging', duration: '30 minutes', intensity: 'Moderate to High' },
          { name: 'HIIT (Low Impact)', duration: '20 minutes', intensity: 'High' },
          { name: 'Swimming Laps', duration: '30 minutes', intensity: 'Moderate to High' }
        ],
        advanced: [
          { name: 'Running', duration: '45 minutes', intensity: 'High' },
          { name: 'HIIT', duration: '30 minutes', intensity: 'Very High' },
          { name: 'Cardio Circuit', duration: '40 minutes', intensity: 'High' }
        ]
      },
      strength: {
        beginner: [
          { name: 'Bodyweight Squats', sets: '2-3', reps: '10-12' },
          { name: 'Wall Push-ups', sets: '2-3', reps: '8-10' },
          { name: 'Chair Dips', sets: '2', reps: '8-10' }
        ],
        'beginner-intermediate': [
          { name: 'Regular Squats', sets: '3', reps: '12-15' },
          { name: 'Modified Push-ups', sets: '3', reps: '10-12' },
          { name: 'Dumbbell Rows', sets: '3', reps: '12-15' }
        ],
        intermediate: [
          { name: 'Squat Variations', sets: '3-4', reps: '12-15' },
          { name: 'Push-ups', sets: '3-4', reps: '12-15' },
          { name: 'Dumbbell Circuit', sets: '3', reps: '15' }
        ],
        advanced: [
          { name: 'Complex Movements', sets: '4', reps: '12-15' },
          { name: 'Strength Circuit', sets: '4', reps: '15-20' },
          { name: 'HIIT with Weights', sets: '3-4', reps: '12-15' }
        ]
      }
    };

    return {
      level: fitnessLevel,
      reduced: shouldReduceIntensity,
      workouts: workouts[fitnessLevel]
    };
  };

  const plan = getWorkoutPlan();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Your Exercise Plan</CardTitle>
          <p className="text-gray-600 mt-2">
            Based on your current activity level and lifestyle, here's a customized workout plan to help you achieve your weight loss goals safely and effectively.
          </p>
        </CardHeader>
        <CardContent>
          {plan.reduced && (
            <div className="mb-6 p-4 bg-warning-50 border border-warning-200 rounded-lg flex items-start">
              <AlertCircle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
              <div>
                <h4 className="font-medium text-warning-800">Important Note</h4>
                <p className="text-warning-700 text-sm mt-1">
                  Based on your stress and sleep patterns, we've adjusted the intensity of your workouts. 
                  Remember to listen to your body and rest when needed.
                </p>
              </div>
            </div>
          )}

          <div className="space-y-8">
            {/* Cardio Section */}
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-primary-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Cardio Workouts</h3>
              </div>
              <div className="grid gap-4">
                {plan.workouts.cardio.map((workout, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{workout.name}</h4>
                        <div className="mt-1 space-y-1">
                          <p className="text-sm text-gray-600">
                            <Timer className="h-4 w-4 inline mr-1" />
                            Duration: {workout.duration}
                          </p>
                          <p className="text-sm text-gray-600">
                            <Activity className="h-4 w-4 inline mr-1" />
                            Intensity: {workout.intensity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strength Training Section */}
            <div>
              <div className="flex items-center mb-4">
                <Dumbbell className="h-6 w-6 text-primary-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Strength Training</h3>
              </div>
              <div className="grid gap-4">
                {plan.workouts.strength.map((workout, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{workout.name}</h4>
                        <div className="mt-1 space-y-1">
                          <p className="text-sm text-gray-600">
                            Sets: {workout.sets}
                          </p>
                          <p className="text-sm text-gray-600">
                            Reps: {workout.reps}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Schedule */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Weekly Schedule</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                    <span className="text-gray-700">Start with 3 workouts per week, alternating between cardio and strength training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                    <span className="text-gray-700">Rest at least one day between strength training sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                    <span className="text-gray-700">Gradually increase frequency and intensity as you build strength and endurance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Features */}
            <div className="p-4 bg-primary-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Premium Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                  Video demonstrations of all exercises
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                  Custom workout builder with progress tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                  Live virtual training sessions
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button
                onClick={onComplete}
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Continue to Progress Tracking
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeightLossStep3;