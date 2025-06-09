import React, { useState } from 'react';
import { Scale, Activity, Brain, Heart, ArrowLeft, CheckCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent } from '../ui/Card';
import DiabetesStep1 from './DiabetesStep1';
import DiabetesStep2 from './DiabetesStep2';
import DiabetesStep3 from './DiabetesStep3';
import DiabetesStep4 from './DiabetesStep4';
import DiabetesStep5 from './DiabetesStep5';

interface PlanStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isPremium: boolean;
  isCompleted: boolean;
}

const DiabetesPlan: React.FC = () => {
  const [steps, setSteps] = useState<PlanStep[]>([
    {
      id: 'assessment',
      title: 'Blood Sugar Assessment',
      description: 'Track your glucose levels and symptoms',
      icon: <Scale />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'diet',
      title: 'Meal Planning',
      description: 'Create a diabetes-friendly diet plan',
      icon: <Activity />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'activity',
      title: 'Physical Activity',
      description: 'Safe exercise recommendations',
      icon: <Brain />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'monitoring',
      title: 'Blood Sugar Monitoring',
      description: 'Set up tracking schedule',
      icon: <Heart />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'support',
      title: 'Support Network',
      description: 'Connect with care team and resources',
      icon: <Heart />,
      isPremium: true,
      isCompleted: false
    }
  ]);

  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);

  const handleStepComplete = (stepId: string, data?: any) => {
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
      case 'assessment':
        return <DiabetesStep1 onComplete={(data) => handleStepComplete(stepId, data)} />;
      case 'diet':
        return formData ? (
          <DiabetesStep2 
            onComplete={() => handleStepComplete(stepId)} 
          />
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Please complete Step 1 first</h3>
            <p className="text-gray-600 mt-2">
              We need to understand your blood sugar patterns before creating a meal plan.
            </p>
          </div>
        );
      case 'activity':
        return formData ? (
          <DiabetesStep3
            onComplete={() => handleStepComplete(stepId)}
          />
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Please complete previous steps first</h3>
            <p className="text-gray-600 mt-2">
              Complete the previous steps to get exercise recommendations.
            </p>
          </div>
        );
      case 'monitoring':
        return formData ? (
          <DiabetesStep4
            onComplete={() => handleStepComplete(stepId)}
          />
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Please complete previous steps first</h3>
            <p className="text-gray-600 mt-2">
              Complete the previous steps to set up your monitoring plan.
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
          <h2 className="text-2xl font-bold text-gray-900">Diabetes Management Plan</h2>
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
                            (step.id === 'activity' && (!formData || !steps.find(s => s.id === 'diet')?.isCompleted)) ||
                            (step.id === 'monitoring' && (!formData || !steps.find(s => s.id === 'activity')?.isCompleted))
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
            Monitor blood sugar levels regularly
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
            Follow your meal plan consistently
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
            Stay active with regular exercise
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
            Take medications as prescribed
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DiabetesPlan;