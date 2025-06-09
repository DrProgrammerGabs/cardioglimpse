import React, { useState } from 'react';
import { Scale, Clock, Brain, Calendar, ArrowLeft, CheckCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent } from '../ui/Card';
import HealthyRoutineStep1 from './HealthyRoutineStep1';
import HealthyRoutineStep2 from './HealthyRoutineStep2';
import HealthyRoutineStep3 from './HealthyRoutineStep3';
import HealthyRoutineStep4 from './HealthyRoutineStep4';
import HealthyRoutineStep5 from './HealthyRoutineStep5';

interface PlanStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isPremium: boolean;
  isCompleted: boolean;
}

const HealthyRoutinePlan: React.FC = () => {
  const [steps, setSteps] = useState<PlanStep[]>([
    {
      id: 'assessment',
      title: 'Current Routine Assessment',
      description: 'Understand your daily patterns and habits',
      icon: <Scale />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'habits',
      title: 'Choose Daily Habits',
      description: 'Select key habits to build your routine',
      icon: <Clock />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'reminders',
      title: 'Set Up Reminders',
      description: 'Create reminders and tracking system',
      icon: <Brain />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'rewards',
      title: 'Adjust & Reward Progress',
      description: 'Track progress and celebrate wins',
      icon: <Calendar />,
      isPremium: false,
      isCompleted: false
    },
    {
      id: 'planning',
      title: 'Plan Your Next Week',
      description: 'Review and plan for continued success',
      icon: <Calendar />,
      isPremium: false,
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
        return <HealthyRoutineStep1 onComplete={(data) => handleStepComplete(stepId, data)} />;
      case 'habits':
        return formData ? (
          <HealthyRoutineStep2 
            onComplete={() => handleStepComplete(stepId)} 
          />
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Please complete Step 1 first</h3>
            <p className="text-gray-600 mt-2">
              We need to understand your current routine before suggesting habits.
            </p>
          </div>
        );
      case 'reminders':
        return formData ? (
          <HealthyRoutineStep3
            onComplete={() => handleStepComplete(stepId)}
          />
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Please complete previous steps first</h3>
            <p className="text-gray-600 mt-2">
              Complete the previous steps to set up your reminders.
            </p>
          </div>
        );
      case 'rewards':
        return formData ? (
          <HealthyRoutineStep4
            onComplete={() => handleStepComplete(stepId)}
          />
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Please complete previous steps first</h3>
            <p className="text-gray-600 mt-2">
              Complete the previous steps to set up your rewards system.
            </p>
          </div>
        );
      case 'planning':
        return formData ? (
          <HealthyRoutineStep5
            onComplete={() => handleStepComplete(stepId)}
          />
        ) : (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Please complete previous steps first</h3>
            <p className="text-gray-600 mt-2">
              Complete the previous steps to plan your next week.
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
          <h2 className="text-2xl font-bold text-gray-900">Build a Healthy Routine</h2>
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
                            (step.id === 'habits' && !formData) ||
                            (step.id === 'reminders' && (!formData || !steps.find(s => s.id === 'habits')?.isCompleted)) ||
                            (step.id === 'rewards' && (!formData || !steps.find(s => s.id === 'reminders')?.isCompleted)) ||
                            (step.id === 'planning' && (!formData || !steps.find(s => s.id === 'rewards')?.isCompleted))
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
            Start with small, manageable changes
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
            Be consistent with your new habits
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
            Track your progress regularly
          </li>
          <li className="flex items-center text-gray-700">
            <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
            Adjust your routine as needed
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HealthyRoutinePlan;