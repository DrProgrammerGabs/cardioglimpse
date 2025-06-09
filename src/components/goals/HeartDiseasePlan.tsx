import React, { useState } from 'react';
import { Scale, Activity, Brain, Heart, ArrowLeft, CheckCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent } from '../ui/Card';
import HeartDiseaseStep1 from './HeartDiseaseStep1';
import HeartDiseaseStep2 from './HeartDiseaseStep2';
import HeartDiseaseStep3 from './HeartDiseaseStep3';
import HeartDiseaseStep4 from './HeartDiseaseStep4';
import HeartDiseaseStep5 from './HeartDiseaseStep5';

const steps = [
  {
    id: 1,
    name: 'Basic Information',
    description: 'Enter your basic health information',
    icon: Scale,
    component: HeartDiseaseStep1,
    isPremium: false,
  },
  {
    id: 2,
    name: 'Lifestyle Factors',
    description: 'Share your lifestyle habits',
    icon: Activity,
    component: HeartDiseaseStep2,
    isPremium: false,
  },
  {
    id: 3,
    name: 'Medical History',
    description: 'Provide your medical background',
    icon: Brain,
    component: HeartDiseaseStep3,
    isPremium: false,
  },
  {
    id: 4,
    name: 'Heart Health',
    description: 'Specific heart-related information',
    icon: Heart,
    component: HeartDiseaseStep4,
    isPremium: true,
  },
  {
    id: 5,
    name: 'Results',
    description: 'View your heart disease risk assessment',
    icon: CheckCircle,
    component: HeartDiseaseStep5,
    isPremium: true,
  },
];

export default function HeartDiseaseAssessment() {
  const [currentStep, setCurrentStep] = useState(1);

  const CurrentStepComponent = steps.find((step) => step.id === currentStep)?.component;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/assessments" className="inline-flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Assessments
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <Card>
            <CardContent>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-start space-x-4 p-4 rounded-lg ${
                      currentStep === step.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        currentStep === step.id ? 'bg-blue-100' : 'bg-gray-100'
                      }`}
                    >
                      {step.isPremium ? (
                        <Lock
                          className={`w-6 h-6 ${
                            currentStep === step.id ? 'text-blue-600' : 'text-gray-500'
                          }`}
                        />
                      ) : (
                        <step.icon
                          className={`w-6 h-6 ${
                            currentStep === step.id ? 'text-blue-600' : 'text-gray-500'
                          }`}
                        />
                      )}
                    </div>
                    <div>
                      <h3
                        className={`font-medium ${
                          currentStep === step.id ? 'text-blue-900' : 'text-gray-900'
                        }`}
                      >
                        {step.name}
                      </h3>
                      <p
                        className={`text-sm ${
                          currentStep === step.id ? 'text-blue-600' : 'text-gray-500'
                        }`}
                      >
                        {step.description}
                      </p>
                      {step.isPremium ? (
                        <Link to="/pricing">
                          <Button variant="outline" size="sm">
                            Upgrade to Premium
                          </Button>
                        </Link>
                      ) : (
                        <button
                          onClick={() => setCurrentStep(step.id)}
                          className={`text-sm font-medium ${
                            currentStep === step.id ? 'text-blue-600' : 'text-gray-500'
                          } hover:text-blue-800`}
                        >
                          {currentStep === step.id ? 'Current Step' : 'Go to Step'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-8">
          <Card>
            <CardContent>{CurrentStepComponent && <CurrentStepComponent />}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}