import React from 'react';
import { Users, MessageCircle, Calendar, Award, ArrowRight, Lock } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Link } from 'react-router-dom';

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

interface WeightLossStep5Props {
  formData: FormData;
  onComplete: () => void;
}

const WeightLossStep5: React.FC<WeightLossStep5Props> = ({ formData, onComplete }) => {
  const coachingFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personal Wellness Coach",
      description: "Get matched with a certified nutrition and fitness expert who will guide your journey",
      benefits: [
        "Weekly check-ins and progress reviews",
        "Personalized advice and motivation",
        "Goal adjustments based on your progress",
        "Expert answers to your questions"
      ]
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "24/7 Chat Support",
      description: "Access to our coaching team whenever you need guidance or motivation",
      benefits: [
        "Instant responses to your questions",
        "Form checks for exercises",
        "Meal plan clarifications",
        "Emergency support for challenges"
      ]
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Weekly Coaching Sessions",
      description: "Schedule one-on-one video calls with your coach",
      benefits: [
        "In-depth progress analysis",
        "Workout technique review",
        "Nutrition plan adjustments",
        "Mental wellness support"
      ]
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Exclusive Resources",
      description: "Access premium content and tools for maximum success",
      benefits: [
        "Advanced workout libraries",
        "Recipe database with video tutorials",
        "Behavior change workshops",
        "Success tracking tools"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Premium Coaching Support</CardTitle>
          <p className="text-gray-600 mt-2">
            Upgrade to premium for personalized coaching and support to accelerate your weight loss journey.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Coach Preview */}
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg"
                  alt="Coach Sarah"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Meet Coach Sarah</h3>
                  <p className="text-sm text-gray-600">
                    Certified Nutrition Coach & Personal Trainer
                  </p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      4.9 (200+ clients)
                    </span>
                  </div>
                </div>
              </div>
              <blockquote className="italic text-gray-600 text-sm">
                "I'm here to support you every step of the way. Together, we'll create sustainable
                habits and achieve your weight loss goals with a personalized approach."
              </blockquote>
            </div>

            {/* Coaching Features */}
            <div className="grid gap-6">
              {coachingFeatures.map((feature, index) => (
                <div key={index} className="border rounded-lg p-6 bg-white">
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary-100 p-2 text-primary-600 mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-primary-200 rounded-full mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Benefits */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Additional Premium Benefits
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Priority support response within 2 hours
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Monthly progress reports and analysis
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Customized workout and meal plans
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Access to premium workshops and webinars
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col space-y-4">
              <Link to="/pricing">
                <Button
                  fullWidth
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Upgrade to Premium
                </Button>
              </Link>
              <Button
                variant="outline"
                fullWidth
                onClick={onComplete}
              >
                Complete Plan Setup
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeightLossStep5;