import React, { useState } from 'react';
import { ArrowLeft, Stethoscope, Calendar, FileText, AlertTriangle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FertilityStep5Props {
  onComplete: () => void;
}

interface MedicalResource {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  recommendations: string[];
  premium: boolean;
}

const FertilityStep5: React.FC<FertilityStep5Props> = ({ onComplete }) => {
  const [showWarning, setShowWarning] = useState(true);

  const resources: MedicalResource[] = [
    {
      id: 'timing',
      title: 'When to Seek Help',
      description: 'Recommended timelines for medical consultation',
      icon: <Calendar />,
      recommendations: [
        'Under 35: After 12 months of trying',
        '35-40: After 6 months of trying',
        'Over 40: After 3 months of trying',
        'Immediately if known fertility issues'
      ],
      premium: false
    },
    {
      id: 'tests',
      title: 'Initial Testing',
      description: 'Common fertility evaluations',
      icon: <FileText />,
      recommendations: [
        'Hormone level testing',
        'Ovulation assessment',
        'Sperm analysis',
        'Physical examination'
      ],
      premium: false
    },
    {
      id: 'specialists',
      title: 'Finding Specialists',
      description: 'Guide to fertility healthcare providers',
      icon: <Stethoscope />,
      recommendations: [
        'Reproductive endocrinologists',
        'Fertility clinics',
        'OB/GYN specialists',
        'Urologists for male factors'
      ],
      premium: true
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">When to Get Medical Support</CardTitle>
          <p className="text-gray-600 mt-2">
            Understanding when and how to seek professional medical help is an important part of your fertility journey.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Medical Warning */}
            {showWarning && (
              <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-warning-800 font-medium">Important Medical Notice</h4>
                    <p className="text-warning-700 text-sm mt-1">
                      This information is for guidance only. Always consult healthcare professionals
                      for personalized medical advice based on your specific situation.
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

            {/* Medical Resources */}
            <div className="grid gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className={`p-6 rounded-lg border ${
                    resource.premium ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-3 ${
                      resource.premium
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-primary-100 text-primary-600'
                    }`}>
                      {resource.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center">
                        <h3 className="font-medium text-gray-900">{resource.title}</h3>
                        {resource.premium && (
                          <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center">
                            <Lock className="w-3 h-3 mr-1" />
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      
                      <div className="mt-4 space-y-2">
                        {resource.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-primary-200 rounded-full mr-2"></span>
                            {rec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Considerations */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Additional Considerations:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Keep detailed records of your fertility journey to share with healthcare providers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Prepare questions for your healthcare provider before appointments
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Research fertility clinics and their success rates in your area
                  </span>
                </li>
              </ul>
            </div>

            {/* Insurance & Costs */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Understanding Costs:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Check your insurance coverage for fertility treatments
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Inquire about payment plans and financing options
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Research grants and financial assistance programs
                  </span>
                </li>
              </ul>
            </div>

            {/* Premium Features */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Premium Features:</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Specialist directory with reviews
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Treatment cost calculator
                </li>
                <li className="flex items-center text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  Medical record organization
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
                onClick={() => window.history.back()}
              >
                Previous Step
              </Button>
              <Button onClick={onComplete}>
                Complete Journey
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FertilityStep5;