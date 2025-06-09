import React, { useState } from 'react';
import { ArrowRight, Activity, Clock, AlertTriangle } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FormData {
  currentWalkDuration: string;
  walkFrequency: string;
  walkPace: string;
  limitingFactors: string[];
  exerciseHistory: string;
  fitnessGoals: string[];
  healthConditions: string[];
  energyLevel: string;
}

interface WalkExerciseStep1Props {
  onComplete: (data: FormData) => void;
}

const WalkExerciseStep1: React.FC<WalkExerciseStep1Props> = ({ onComplete }) => {
  const [formData, setFormData] = useState<FormData>({
    currentWalkDuration: '',
    walkFrequency: '',
    walkPace: '',
    limitingFactors: [],
    exerciseHistory: '',
    fitnessGoals: [],
    healthConditions: [],
    energyLevel: ''
  });

  const [showWarning, setShowWarning] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const arrayField = name as keyof FormData;
      const currentArray = formData[arrayField] as string[];
      
      setFormData(prev => ({
        ...prev,
        [arrayField]: checkbox.checked
          ? [...currentArray, value]
          : currentArray.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const limitingFactors = [
    'Joint pain',
    'Shortness of breath',
    'Lack of energy',
    'Time constraints',
    'Weather conditions',
    'Motivation',
    'Access to facilities',
    'Safety concerns'
  ];

  const fitnessGoals = [
    'Walk longer distances',
    'Increase walking speed',
    'Improve endurance',
    'Weight management',
    'Better mobility',
    'Reduce pain',
    'Social exercise',
    'Stress reduction'
  ];

  const healthConditions = [
    'High blood pressure',
    'Heart condition',
    'Diabetes',
    'Arthritis',
    'Back pain',
    'Respiratory condition',
    'Recent surgery',
    'Balance issues'
  ];

  const isFormValid = () => {
    return (
      formData.currentWalkDuration &&
      formData.walkFrequency &&
      formData.walkPace &&
      formData.energyLevel &&
      formData.fitnessGoals.length > 0
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Assess Your Current Fitness Level</CardTitle>
        <p className="text-gray-600 mt-2">
          Let's understand your current activity level and goals to create a personalized plan.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {showWarning && (
            <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
                <div>
                  <h4 className="text-warning-800 font-medium">Important Health Notice</h4>
                  <p className="text-warning-700 text-sm mt-1">
                    Consult your healthcare provider before starting any new exercise program,
                    especially if you have any health conditions or concerns.
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

          {/* Current Walking Ability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How long can you currently walk comfortably?
            </label>
            <select
              name="currentWalkDuration"
              value={formData.currentWalkDuration}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select duration</option>
              <option value="5-10">5-10 minutes</option>
              <option value="11-20">11-20 minutes</option>
              <option value="21-30">21-30 minutes</option>
              <option value="31-45">31-45 minutes</option>
              <option value="46-60">46-60 minutes</option>
              <option value="60+">More than 60 minutes</option>
            </select>
          </div>

          {/* Walking Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How often do you currently walk for exercise?
            </label>
            <select
              name="walkFrequency"
              value={formData.walkFrequency}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select frequency</option>
              <option value="rarely">Rarely or never</option>
              <option value="1-2">1-2 times per week</option>
              <option value="3-4">3-4 times per week</option>
              <option value="5+">5 or more times per week</option>
              <option value="daily">Daily</option>
            </select>
          </div>

          {/* Walking Pace */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How would you describe your typical walking pace?
            </label>
            <select
              name="walkPace"
              value={formData.walkPace}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select pace</option>
              <option value="leisurely">Leisurely - Easy conversation</option>
              <option value="moderate">Moderate - Can talk but slightly breathless</option>
              <option value="brisk">Brisk - Breathing heavily</option>
              <option value="power">Power walking - Very challenging</option>
            </select>
          </div>

          {/* Limiting Factors */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              What factors limit your walking or exercise? (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {limitingFactors.map((factor) => (
                <label key={factor} className="flex items-center">
                  <input
                    type="checkbox"
                    name="limitingFactors"
                    value={factor}
                    checked={formData.limitingFactors.includes(factor)}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{factor}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Exercise History */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Briefly describe your exercise history
            </label>
            <textarea
              name="exerciseHistory"
              value={formData.exerciseHistory}
              onChange={handleInputChange}
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              placeholder="Example: Previously active but stopped 2 years ago, or New to regular exercise..."
            />
          </div>

          {/* Fitness Goals */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              What are your fitness goals? (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {fitnessGoals.map((goal) => (
                <label key={goal} className="flex items-center">
                  <input
                    type="checkbox"
                    name="fitnessGoals"
                    value={goal}
                    checked={formData.fitnessGoals.includes(goal)}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{goal}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Health Conditions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Do you have any of these health conditions? (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {healthConditions.map((condition) => (
                <label key={condition} className="flex items-center">
                  <input
                    type="checkbox"
                    name="healthConditions"
                    value={condition}
                    checked={formData.healthConditions.includes(condition)}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{condition}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Energy Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How would you rate your typical energy level?
            </label>
            <select
              name="energyLevel"
              value={formData.energyLevel}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select energy level</option>
              <option value="low">Low - Often tired</option>
              <option value="moderate">Moderate - Some energy most days</option>
              <option value="good">Good - Usually energetic</option>
              <option value="excellent">Excellent - Consistently energetic</option>
            </select>
          </div>

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Assessment:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Be honest about your current abilities - this helps create a realistic plan
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Consider both physical and environmental factors that affect your activity
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Think about what motivates you to be more active
                </span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={() => onComplete(formData)}
              disabled={!isFormValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Goal Setting
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalkExerciseStep1;