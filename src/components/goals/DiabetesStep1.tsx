import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, Activity } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FormData {
  fastingGlucose: string;
  postMealGlucose: string;
  a1c: string;
  lastReadingDate: string;
  diabetesType: string;
  medications: string[];
  symptoms: string[];
  complications: string[];
  lifestyle: {
    diet: string;
    exercise: string;
    stress: string;
    sleep: string;
  };
}

interface DiabetesStep1Props {
  onComplete: (data: FormData) => void;
}

const DiabetesStep1: React.FC<DiabetesStep1Props> = ({ onComplete }) => {
  const [formData, setFormData] = useState<FormData>({
    fastingGlucose: '',
    postMealGlucose: '',
    a1c: '',
    lastReadingDate: '',
    diabetesType: '',
    medications: [],
    symptoms: [],
    complications: [],
    lifestyle: {
      diet: '',
      exercise: '',
      stress: '',
      sleep: ''
    }
  });

  const [showWarning, setShowWarning] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const arrayField = name as keyof FormData;
      const currentArray = formData[arrayField] as string[];
      
      setFormData(prev => ({
        ...prev,
        [arrayField]: checkbox.checked
          ? [...currentArray, value]
          : currentArray.filter(item => item !== value)
      }));
    } else if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof FormData],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const commonMedications = [
    'Metformin',
    'Insulin',
    'Sulfonylureas',
    'DPP-4 inhibitors',
    'GLP-1 receptor agonists',
    'SGLT2 inhibitors',
    'Thiazolidinediones',
    'Other diabetes medication'
  ];

  const commonSymptoms = [
    'Frequent urination',
    'Excessive thirst',
    'Increased hunger',
    'Fatigue',
    'Blurred vision',
    'Slow healing',
    'Numbness/tingling',
    'Mood changes'
  ];

  const diabetesComplications = [
    'Eye problems',
    'Kidney disease',
    'Nerve damage',
    'Heart disease',
    'Foot problems',
    'Skin conditions',
    'Dental issues',
    'High blood pressure'
  ];

  const isFormValid = () => {
    return (
      formData.fastingGlucose &&
      formData.diabetesType &&
      formData.lastReadingDate &&
      formData.lifestyle.diet &&
      formData.lifestyle.exercise
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Blood Sugar Assessment</CardTitle>
        <p className="text-gray-600 mt-2">
          Let's understand your current blood sugar control and diabetes management.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {showWarning && (
            <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
                <div>
                  <h4 className="text-warning-800 font-medium">Important Health Notice</h4>
                  <p className="text-warning-700 text-sm mt-1">
                    Always consult with your healthcare provider about your diabetes management plan.
                    This tool is for tracking purposes only and does not replace medical advice.
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

          {/* Blood Sugar Readings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fasting Blood Glucose (mg/dL)
              </label>
              <input
                type="number"
                name="fastingGlucose"
                value={formData.fastingGlucose}
                onChange={handleInputChange}
                placeholder="80-130"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Post-meal Blood Glucose (mg/dL)
              </label>
              <input
                type="number"
                name="postMealGlucose"
                value={formData.postMealGlucose}
                onChange={handleInputChange}
                placeholder="Less than 180"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* A1C and Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Latest A1C (%)
              </label>
              <input
                type="number"
                step="0.1"
                name="a1c"
                value={formData.a1c}
                onChange={handleInputChange}
                placeholder="7.0"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Last Readings
              </label>
              <input
                type="date"
                name="lastReadingDate"
                value={formData.lastReadingDate}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Diabetes Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type of Diabetes
            </label>
            <select
              name="diabetesType"
              value={formData.diabetesType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select type</option>
              <option value="type1">Type 1 Diabetes</option>
              <option value="type2">Type 2 Diabetes</option>
              <option value="gestational">Gestational Diabetes</option>
              <option value="prediabetes">Prediabetes</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Current Medications */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Current Medications (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {commonMedications.map((medication) => (
                <label key={medication} className="flex items-center">
                  <input
                    type="checkbox"
                    name="medications"
                    value={medication}
                    checked={formData.medications.includes(medication)}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{medication}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Current Symptoms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Current Symptoms (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {commonSymptoms.map((symptom) => (
                <label key={symptom} className="flex items-center">
                  <input
                    type="checkbox"
                    name="symptoms"
                    value={symptom}
                    checked={formData.symptoms.includes(symptom)}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{symptom}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Complications */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Complications (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {diabetesComplications.map((complication) => (
                <label key={complication} className="flex items-center">
                  <input
                    type="checkbox"
                    name="complications"
                    value={complication}
                    checked={formData.complications.includes(complication)}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{complication}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Lifestyle Factors */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Lifestyle Factors</h4>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Diet
              </label>
              <select
                name="lifestyle.diet"
                value={formData.lifestyle.diet}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select diet type</option>
                <option value="standard">Standard diet</option>
                <option value="low-carb">Low-carb diet</option>
                <option value="mediterranean">Mediterranean diet</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Physical Activity Level
              </label>
              <select
                name="lifestyle.exercise"
                value={formData.lifestyle.exercise}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select activity level</option>
                <option value="sedentary">Sedentary</option>
                <option value="light">Light activity</option>
                <option value="moderate">Moderate activity</option>
                <option value="active">Very active</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stress Level
              </label>
              <select
                name="lifestyle.stress"
                value={formData.lifestyle.stress}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select stress level</option>
                <option value="low">Low stress</option>
                <option value="moderate">Moderate stress</option>
                <option value="high">High stress</option>
                <option value="severe">Severe stress</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sleep Quality
              </label>
              <select
                name="lifestyle.sleep"
                value={formData.lifestyle.sleep}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select sleep quality</option>
                <option value="poor">Poor (less than 6 hours)</option>
                <option value="fair">Fair (6-7 hours)</option>
                <option value="good">Good (7-8 hours)</option>
                <option value="excellent">Excellent (8+ hours)</option>
              </select>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Blood Sugar Management:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Check blood sugar at consistent times each day
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Keep a log of factors that affect your readings
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Share your readings regularly with your healthcare team
                </span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={() => onComplete(formData)}
              disabled={!isFormValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Diet Plan
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiabetesStep1;