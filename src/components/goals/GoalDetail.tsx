import React, { useState } from 'react';
import { Heart, Dumbbell, Smile, Moon, Utensils, Baby, Scaling as Walking, ActivitySquare, Battery, CheckCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle, CardFooter } from '../ui/Card';

interface GoalDetailProps {
  goalId: string;
}

interface GoalStep {
  id: string;
  title: string;
  description: string;
  isPremium: boolean;
  isCompleted: boolean;
}

interface GoalData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  steps: GoalStep[];
}

const goalData: Record<string, GoalData> = {
  'weight-loss': {
    id: 'weight-loss',
    title: 'Weight Loss',
    description: 'A personalized plan to help you lose weight in a healthy, sustainable way.',
    icon: <Heart size={24} />,
    color: 'bg-primary-100 text-primary-600',
    steps: [
      {
        id: 'step1',
        title: 'Initial Assessment',
        description: 'Complete your health profile and set your weight loss target.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step2',
        title: 'Nutrition Plan',
        description: 'Get a customized meal plan based on your preferences and goals.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step3',
        title: 'Activity Schedule',
        description: 'Receive a tailored exercise plan that fits your lifestyle.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step4',
        title: 'Personal Coaching',
        description: 'Connect with a certified nutrition coach for personalized guidance.',
        isPremium: true,
        isCompleted: false
      },
      {
        id: 'step5',
        title: 'Progress Tracking',
        description: 'Track your weight, measurements, and habits with our advanced tools.',
        isPremium: true,
        isCompleted: false
      }
    ]
  },
  'fitness': {
    id: 'fitness',
    title: 'Fitness & Health',
    description: 'Build strength, endurance, and overall fitness with our comprehensive program.',
    icon: <Dumbbell size={24} />,
    color: 'bg-secondary-100 text-secondary-600',
    steps: [
      {
        id: 'step1',
        title: 'Fitness Assessment',
        description: 'Evaluate your current fitness level and identify areas for improvement.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step2',
        title: 'Workout Plan',
        description: 'Get a customized exercise routine based on your fitness level and goals.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step3',
        title: 'Nutrition Guide',
        description: 'Learn how to fuel your body properly for optimal performance.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step4',
        title: 'Video Tutorials',
        description: 'Access our library of exercise videos with proper form demonstrations.',
        isPremium: true,
        isCompleted: false
      },
      {
        id: 'step5',
        title: 'Performance Analytics',
        description: 'Track your progress with detailed metrics and performance insights.',
        isPremium: true,
        isCompleted: false
      }
    ]
  },
  'sleep': {
    id: 'sleep',
    title: 'Better Sleep',
    description: 'Improve your sleep quality and wake up feeling refreshed and energized.',
    icon: <Moon size={24} />,
    color: 'bg-purple-100 text-purple-600',
    steps: [
      {
        id: 'step1',
        title: 'Sleep Assessment',
        description: 'Analyze your current sleep patterns and identify issues.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step2',
        title: 'Sleep Environment',
        description: 'Optimize your bedroom for better sleep quality.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step3',
        title: 'Evening Routine',
        description: 'Develop a relaxing pre-sleep routine to prepare your body for rest.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step4',
        title: 'Sleep Tracking',
        description: 'Monitor your sleep cycles and quality with advanced tracking tools.',
        isPremium: true,
        isCompleted: false
      },
      {
        id: 'step5',
        title: 'Personalized Recommendations',
        description: 'Get custom advice based on your sleep data and progress.',
        isPremium: true,
        isCompleted: false
      }
    ]
  },
  'heart-health': {
    id: 'heart-health',
    title: 'Lower BP & Cholesterol',
    description: 'Manage your cardiovascular health with targeted lifestyle changes.',
    icon: <ActivitySquare size={24} />,
    color: 'bg-red-100 text-red-600',
    steps: [
      {
        id: 'step1',
        title: 'Heart Risk Assessment',
        description: 'Complete your heart health profile and understand your risk factors.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step2',
        title: 'Nutrition Plan',
        description: 'Get a heart-healthy eating plan tailored to your needs.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step3',
        title: 'Activity Guidelines',
        description: 'Learn the best exercises for cardiovascular health.',
        isPremium: false,
        isCompleted: false
      },
      {
        id: 'step4',
        title: 'Stress Management',
        description: 'Access techniques to reduce stress and improve heart health.',
        isPremium: true,
        isCompleted: false
      },
      {
        id: 'step5',
        title: 'Medical Integration',
        description: 'Connect with healthcare providers and track medical metrics.',
        isPremium: true,
        isCompleted: false
      }
    ]
  }
};

const GoalDetail: React.FC<GoalDetailProps> = ({ goalId }) => {
  const [steps, setSteps] = useState(goalData[goalId]?.steps || []);
  const goal = goalData[goalId];
  
  if (!goal) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold">Goal not found</h3>
        <p className="text-gray-600 mt-2">Please select a valid wellness goal.</p>
        <Link to="/" className="mt-4 inline-block">
          <Button>Go to Home</Button>
        </Link>
      </div>
    );
  }

  const handleToggleComplete = (stepId: string) => {
    setSteps(
      steps.map((step) =>
        step.id === stepId ? { ...step, isCompleted: !step.isCompleted } : step
      )
    );
  };

  const freeSteps = steps.filter(step => !step.isPremium);
  const premiumSteps = steps.filter(step => step.isPremium);
  
  return (
    <div>
      <div className="mb-8 flex items-center">
        <div className={`rounded-full p-4 mr-4 ${goal.color}`}>
          {goal.icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{goal.title}</h2>
          <p className="text-gray-600">{goal.description}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Your Wellness Plan</h3>
        
        <div className="space-y-4">
          {freeSteps.map((step, index) => (
            <Card key={step.id} className="border border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <div 
                    className={`rounded-full p-2 mr-4 flex-shrink-0 ${
                      step.isCompleted ? 'bg-success-100 text-success-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <span className="flex items-center justify-center w-6 h-6 text-lg font-semibold">
                      {step.isCompleted ? <CheckCircle size={20} /> : index + 1}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                  </div>
                  <div className="ml-4">
                    <Button 
                      size="sm"
                      variant={step.isCompleted ? 'outline' : 'primary'}
                      onClick={() => handleToggleComplete(step.id)}
                    >
                      {step.isCompleted ? 'Completed' : 'Start'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {premiumSteps.length > 0 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Premium Features</h3>
            <Link to="/pricing">
              <Button size="sm" variant="outline">View Plans</Button>
            </Link>
          </div>
          
          <div className="space-y-4">
            {premiumSteps.map((step, index) => (
              <Card key={step.id} className="border border-gray-200 bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <div className="rounded-full p-2 mr-4 flex-shrink-0 bg-gray-200 text-gray-500">
                      <Lock size={20} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-800">{step.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                    </div>
                    <div className="ml-4">
                      <Link to="/pricing">
                        <Button size="sm" variant="primary">
                          Upgrade
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-primary-50 rounded-lg p-6 mb-4">
        <h3 className="text-lg font-semibold mb-2">Your Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-primary-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${(steps.filter(s => s.isCompleted).length / freeSteps.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          Complete all steps to unlock additional resources and tips.
        </p>
      </div>
    </div>
  );
};

export default GoalDetail;