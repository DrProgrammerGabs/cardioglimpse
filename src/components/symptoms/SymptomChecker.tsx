import React, { useState } from 'react';
import { AlertTriangle, Heart, Activity, ThermometerSnowflake as ThermometerSnow, Droplets, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface Symptom {
  id: string;
  name: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  icon: React.ReactNode;
}

interface Assessment {
  urgency: 'emergency' | 'urgent' | 'non-urgent';
  recommendation: string;
  nextSteps: string[];
}

const SymptomChecker: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [loading, setLoading] = useState(false);

  const symptoms: Symptom[] = [
    {
      id: 'chest-pain',
      name: 'Chest Pain',
      description: 'Pain, pressure, or discomfort in the chest area',
      severity: 'high',
      icon: <Heart className="h-6 w-6" />
    },
    {
      id: 'shortness-breath',
      name: 'Shortness of Breath',
      description: 'Difficulty breathing or catching your breath',
      severity: 'high',
      icon: <Activity className="h-6 w-6" />
    },
    {
      id: 'dizziness',
      name: 'Dizziness',
      description: 'Feeling lightheaded or unsteady',
      severity: 'medium',
      icon: <ThermometerSnow className="h-6 w-6" />
    },
    {
      id: 'sweating',
      name: 'Excessive Sweating',
      description: 'Unusual or excessive sweating, especially when cool',
      severity: 'medium',
      icon: <Droplets className="h-6 w-6" />
    }
  ];

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const analyzeSymptoms = () => {
    setLoading(true);
    
    // Simulate API call for symptom analysis
    setTimeout(() => {
      const hasHighSeverity = symptoms
        .filter(s => selectedSymptoms.includes(s.id))
        .some(s => s.severity === 'high');

      const hasMultipleSymptoms = selectedSymptoms.length > 1;

      let assessment: Assessment;

      if (hasHighSeverity) {
        assessment = {
          urgency: 'emergency',
          recommendation: 'Seek immediate medical attention',
          nextSteps: [
            'Call emergency services (911) immediately',
            'Stay calm and seated if experiencing dizziness',
            'Have someone stay with you until help arrives',
            'Keep a list of your current medications ready'
          ]
        };
      } else if (hasMultipleSymptoms) {
        assessment = {
          urgency: 'urgent',
          recommendation: 'Urgent medical attention recommended',
          nextSteps: [
            'Visit the nearest urgent care center',
            'Monitor your symptoms closely',
            'Prepare a list of your symptoms and their duration',
            'Contact your healthcare provider'
          ]
        };
      } else {
        assessment = {
          urgency: 'non-urgent',
          recommendation: 'Monitor symptoms and consult healthcare provider',
          nextSteps: [
            'Schedule an appointment with your doctor',
            'Keep track of your symptoms',
            'Rest and stay hydrated',
            'Follow up if symptoms worsen'
          ]
        };
      }

      setAssessment(assessment);
      setLoading(false);
    }, 1500);
  };

  const resetChecker = () => {
    setSelectedSymptoms([]);
    setAssessment(null);
  };

  const renderUrgencyColor = (urgency: Assessment['urgency']) => {
    switch (urgency) {
      case 'emergency':
        return 'bg-error-50 border-error-200 text-error-700';
      case 'urgent':
        return 'bg-warning-50 border-warning-200 text-warning-700';
      case 'non-urgent':
        return 'bg-success-50 border-success-200 text-success-700';
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {!assessment ? (
        <div>
          <div className="bg-warning-50 border border-warning-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
              <div>
                <h3 className="text-warning-800 font-medium">Important Notice</h3>
                <p className="text-warning-700 text-sm mt-1">
                  If you're experiencing a medical emergency, call emergency services (911) immediately.
                  This tool is not a substitute for professional medical advice.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Select Your Symptoms</h3>
            <p className="text-gray-600">Choose all symptoms that apply to you:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {symptoms.map(symptom => (
                <Card
                  key={symptom.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedSymptoms.includes(symptom.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'hover:border-gray-300'
                  }`}
                  onClick={() => toggleSymptom(symptom.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className={`rounded-full p-2 mr-3 ${
                        selectedSymptoms.includes(symptom.id)
                          ? 'bg-primary-100 text-primary-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {symptom.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{symptom.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{symptom.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button
                onClick={analyzeSymptoms}
                disabled={selectedSymptoms.length === 0}
                isLoading={loading}
                fullWidth
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Analyze Symptoms
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <Card className={`border-2 ${renderUrgencyColor(assessment.urgency)}`}>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Assessment Result</CardTitle>
              <div className="mt-4">
                <span className="inline-block px-4 py-2 rounded-full text-lg font-semibold capitalize">
                  {assessment.urgency} Care Needed
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-xl font-medium">{assessment.recommendation}</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Next Steps:</h4>
                <ul className="space-y-3">
                  {assessment.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center rounded-full bg-gray-100 p-1 mr-3">
                        <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Button
                  variant="outline"
                  onClick={resetChecker}
                  fullWidth
                >
                  Check Different Symptoms
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;