import React from 'react';
import { Heart, Dumbbell, Smile, Moon, Utensils, Baby, Scaling as Walking, ActivitySquare, Battery } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';

interface GoalOption {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}

const GoalSelector: React.FC = () => {
  const navigate = useNavigate();
  
  const goals: GoalOption[] = [
    { 
      id: 'weight-loss', 
      title: 'I want to lose weight', 
      icon: <Heart size={24} />, 
      color: 'bg-primary-100 text-primary-600' 
    },
    { 
      id: 'fitness', 
      title: 'I want to be fit and healthy', 
      icon: <Dumbbell size={24} />, 
      color: 'bg-secondary-100 text-secondary-600' 
    },
    { 
      id: 'wellbeing', 
      title: 'I want to feel good', 
      icon: <Smile size={24} />, 
      color: 'bg-accent-100 text-accent-600' 
    },
    { 
      id: 'sleep', 
      title: 'I want better sleep', 
      icon: <Moon size={24} />, 
      color: 'bg-purple-100 text-purple-600' 
    },
    { 
      id: 'weight-gain', 
      title: 'I want to gain weight', 
      icon: <Utensils size={24} />, 
      color: 'bg-yellow-100 text-yellow-600' 
    },
    { 
      id: 'fertility', 
      title: 'I want fertility support', 
      icon: <Baby size={24} />, 
      color: 'bg-pink-100 text-pink-600' 
    },
    { 
      id: 'activity', 
      title: 'I want to walk/exercise better', 
      icon: <Walking size={24} />, 
      color: 'bg-green-100 text-green-600' 
    },
    { 
      id: 'heart-health', 
      title: 'I want to lower BP or cholesterol', 
      icon: <ActivitySquare size={24} />, 
      color: 'bg-red-100 text-red-600' 
    },
    { 
      id: 'energy', 
      title: 'I want more energy', 
      icon: <Battery size={24} />, 
      color: 'bg-blue-100 text-blue-600' 
    }
  ];

  const handleGoalSelect = (goalId: string) => {
    // Navigate to the goals page with the selected goal
    navigate(`/goals?goal=${goalId}`);
  };

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">What's your health dream?</h2>
      <p className="text-center text-gray-600 mb-10">Choose your goal to begin:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((goal) => (
          <Card 
            key={goal.id} 
            hover={true}
            onClick={() => handleGoalSelect(goal.id)}
            className="transition-all duration-300"
          >
            <div className="p-6 flex items-center">
              <div className={`rounded-full p-3 mr-4 ${goal.color}`}>
                {goal.icon}
              </div>
              <span className="text-lg font-medium text-gray-800">{goal.title}</span>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center text-gray-600">
        <p>Multilingual support, free and premium plans available.</p>
      </div>
    </div>
  );
};

export default GoalSelector;