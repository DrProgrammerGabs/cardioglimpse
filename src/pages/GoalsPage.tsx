import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Dumbbell, Moon, Brain, Battery, Baby, ActivitySquare, Clock, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Goal {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

const GoalsPage: React.FC = () => {
  const navigate = useNavigate();
  
  const goals: Goal[] = [
    {
      id: 'weight-loss',
      title: 'Lose Weight',
      description: 'Create a sustainable weight loss plan with personalized nutrition and exercise guidance',
      icon: <Heart />,
      path: '/goals/weight-loss',
      color: 'bg-primary-100 text-primary-600'
    },
    {
      id: 'be-fit',
      title: 'Be Fit & Healthy',
      description: 'Build strength, endurance and overall fitness with tailored workouts',
      icon: <Dumbbell />,
      path: '/goals/be-fit',
      color: 'bg-secondary-100 text-secondary-600'
    },
    {
      id: 'feel-good',
      title: 'Feel Good',
      description: 'Improve mental wellness through mindfulness and stress management',
      icon: <Brain />,
      path: '/goals/feel-good',
      color: 'bg-accent-100 text-accent-600'
    },
    {
      id: 'better-sleep',
      title: 'Better Sleep',
      description: 'Develop better sleep habits and create an optimal rest environment',
      icon: <Moon />,
      path: '/goals/better-sleep',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'gain-weight',
      title: 'Gain Weight',
      description: 'Build healthy weight with balanced nutrition and strength training',
      icon: <Dumbbell />,
      path: '/goals/gain-weight',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: 'fertility-support',
      title: 'Fertility Support',
      description: 'Support reproductive health with specialized wellness plans',
      icon: <Baby />,
      path: '/goals/fertility-support',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      id: 'walk-exercise',
      title: 'Walk/Exercise Better',
      description: 'Improve mobility and build an exercise routine that works for you',
      icon: <ActivitySquare />,
      path: '/goals/walk-exercise',
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'lower-bp-cholesterol',
      title: 'Lower BP/Cholesterol',
      description: 'Manage cardiovascular health with lifestyle modifications',
      icon: <Heart />,
      path: '/goals/lower-bp-cholesterol',
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 'more-energy',
      title: 'More Energy',
      description: 'Boost your energy levels and reduce fatigue naturally',
      icon: <Battery />,
      path: '/goals/more-energy',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'manage-diabetes',
      title: 'Manage Diabetes',
      description: 'Control blood sugar through diet, exercise and lifestyle changes',
      icon: <ActivitySquare />,
      path: '/manage-diabetes',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      id: 'for-athletes',
      title: 'For Athletes',
      description: 'Optimize performance with specialized training and nutrition plans',
      icon: <Dumbbell />,
      path: '/for-athletes',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 'prevent-heart-disease',
      title: 'Prevent Heart Disease',
      description: 'Reduce risk factors and maintain heart health through lifestyle changes',
      icon: <Heart />,
      path: '/prevent-heart-disease',
      color: 'bg-rose-100 text-rose-600'
    }
  ];

  const handleGoalSelect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Your Wellness Journey</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose your goal to begin a personalized plan tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <Card
              key={goal.id}
              className="transition-all duration-300 hover:shadow-lg"
              hover
              onClick={() => handleGoalSelect(goal.path)}
            >
              <div className="p-6">
                <div className={`rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 ${goal.color}`}>
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-gray-600 mb-4">{goal.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Start Plan
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Not sure where to start?</h3>
          <p className="text-gray-600 mb-6">
            Take our wellness assessment to get personalized recommendations based on your current health status.
          </p>
          <Button>
            Take Assessment
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default GoalsPage;