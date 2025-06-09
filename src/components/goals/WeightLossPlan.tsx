import React, { useState } from 'react';
import { Scale, Utensils, Dumbbell, LineChart as ChartLineUp, Users, ArrowLeft, CheckCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent } from '../ui/Card';
import WeightLossStep1 from './WeightLossStep1';
import WeightLossStep2 from './WeightLossStep2';
import WeightLossStep3 from './WeightLossStep3';
import WeightLossStep4 from './WeightLossStep4';

interface PlanStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isPremium: boolean;
  isCompleted: boolean;
}

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

const WeightLossPlan: React.FC = () => {
  const [steps, setSteps] = useState<PlanStep[]>([
    {
      id: 'habits',
      title: 'Understand Your Current Habits',
      description: 'Complete a comprehensive assessment of your eating and activity patterns',
      icon: <Scale />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'diet',
      title: 'Get Your Personalized Diet Plan',
      description: 'Receive a customized nutrition plan based on your preferences and goals',
      icon: <Utensils />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'exercise',
      title: 'Start Your Exercise Routine',
      description: 'Begin with tailored workouts that match your fitness level',
      icon: <Dumbbell />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'tracking',
      title: 'Track Your Progress',
      description: 'Monitor your weight, measurements, and habits with our tools',
      icon: <ChartLineUp />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'coaching',
      title: 'Get Coaching Support',
      description: 'Connect with certified nutrition and fitness coaches',
      icon: <Users />,
      isPremium: true,
      isCompleted: false
    }
  ]);

  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleStepComplete = (stepId: string, data?: FormData) => {
    if (data) {
      setFormData(data);
    }
    
    setSteps(steps.map(step =>
      step.id === stepId ? { ...step, isCompleted: true } : step
    ));
    
    setActiveStep(null);
  };

  const handleStartStep = (stepId: string) => {
    setActiveStep(stepId);
  };

  const calculateProgress = () => {
    const completedSteps = steps.filter(step => !step.isPremium && step.isCompleted).length;
    const totalSteps = steps.filter(step => !step.isPremium).length;
    return (completedSteps / totalSteps) * 100;
  };

  const renderStepContent = (stepId: string) => {
    switch (stepId) {
      case 'habits':
        return <WeightLossStep1 onComplete={(data) => handleStepComplete(stepId, data)} />;
      case 'diet':
        return formData ? (
          <WeightLossStep2 
            formData={formData} 
            onComplete={() => handleStepComplete(stepId)} 
          />
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Please complete Step 1 first</h3>
            <p className="text-gray-600 mt-2">
              We need to understand your habits before creating a personalized diet plan.
            </p>
          </div>
        );
      case 'exercise':
        return formData ? (
          <WeightLossStep3
            formData={formData}
            onComplete={() => handleStepComplete(stepId)}
          />
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Please complete previous steps first</h3>
            <p className="text-gray-600 mt-2">
              We need to understand your habits and dietary preferences before creating an exercise plan.
            </p>
          </div>
        );
      case 'tracking':
        return formData ? (
          <WeightLossStep4
            formData={formData}
            onComplete={() => handleStepComplete(stepId)}
          />
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Please complete previous steps first</h3>
            <p className="text-gray-600 mt-2">
              Complete the previous steps to set up your progress tracking.
            </p>
          </div>
        );
      default:
        return (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Step Coming Soon</h3>
            <p className="text-gray-600 mt-2">
              This step is currently under development. Check back soon!
            </p>
          </div>
        );
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/goals" className="mr-4">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft />}>
              Back to Goals
            </Button>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900">Weight Loss Plan</h2>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Progress:</span>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${calculateProgress()}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-900">
            {Math.round(calculateProgress())}%
          </span>
        </div>
      </div>

      <div className="grid gap-6">
        {steps.map((step, index) => (
          <Card key={step.id} className={`border ${step.isCompleted ? 'bg-success-50' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className={`rounded-full p-3 mr-4 ${
                  step.isCompleted
                    ? 'bg-success-100 text-success-600'
                    : step.isPremium
                    ? 'bg-gray-100 text-gray-400'
                    : 'bg-primary-100 text-primary-600'
                }`}>
                  {step.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mr-2">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    {step.isPremium && (
                      <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                        <Lock className="w-3 h-3 mr-1" />
                        Premium
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  {activeStep === step.id ? (
                    renderStepContent(step.id)
                  ) : (
                    <div className="flex items-center justify-between">
                      {step.isPremium ? (
                        <Link to="/pricing">
                          <Button variant="outline\" size="sm">
                            Upgrade to Premium
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant={step.isCompleted ? 'outline' : 'primary'}
                          size="sm"
                          onClick={() => step.isCompleted ? null : handleStartStep(step.id)}
                          leftIcon={step.isCompleted ? <CheckCircle className="w-4 h-4" /> : undefined}
                          disabled={
                            (step.id === 'diet' && !formData) ||
                            (step.id === 'exercise' && (!formData || !steps.find(s => s.id === 'diet')?.isCompleted)) ||
                            (step.id === 'tracking' && (!formData || !steps.find(s => s.id === 'exercise')?.isCompleted))
                          }
                        >
                          {step.isCompleted ? 'Completed' : 'Start Step'}
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-primary-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Tips for Success</h3>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
            Set realistic goals and celebrate small victories
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
            Stay consistent with your meal and exercise plan
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
            Track your progress regularly to stay motivated
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
            Join our community for support and accountability
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WeightLossPlan;