import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, Activity } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FormData {
  systolicBP: string;
  diastolicBP: string;
  totalCholesterol: string;
  hdlCholesterol: string;
  ldlCholesterol: string;
  triglycerides: string;
  lastReadingDate: string;
  medications: string[];
  symptoms: string[];
  familyHistory: string[];
  lifestyle: {
    smoking: string;
    alcohol: string;
    diet: string;
    exercise: string;
    stress: string;
  };
}

interface BPCholesterolStep1Props {
  onComplete: (data: FormData) => void;
}

const BPCholesterolStep1: React.FC<BPCholesterolStep1Props> = ({ onComplete }) => {
  const [formData, setFormData] = useState<FormData>({
    systolicBP: '',
    diastolicBP: '',
    totalCholesterol: '',
    hdlCholesterol: '',
    ldlCholesterol: '',
    triglycerides: '',
    lastReadingDate: '',
    medications: [],
    symptoms: [],
    familyHistory: [],
    lifestyle: {
      smoking: '',
      alcohol: '',
      diet: '',
      exercise: '',
      stress: ''
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
    'Blood pressure medication',
    'Statins',
    'Beta blockers',
    'ACE inhibitors',
    'Diuretics',
    'Calcium channel blockers',
    'Aspirin',
    'Other cholesterol medication'
  ];

  const commonSymptoms = [
    'Headaches',
    'Dizziness',
    'Shortness of breath',
    'Chest pain',
    'Fatigue',
    'Vision problems',
    'Irregular heartbeat',
    'Nausea'
  ];

  const familyHistoryConditions = [
    'High blood pressure',
    'High cholesterol',
    'Heart disease',
    'Stroke',
    'Diabetes',
    'Early heart attack (before 55)',
    'Sudden cardiac death',
    'Peripheral artery disease'
  ];

  const isFormValid = () => {
    return (
      formData.systolicBP &&
      formData.diastolicBP &&
      formData.lastReadingDate &&
      formData.lifestyle.smoking &&
      formData.lifestyle.exercise
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Record Your Baseline Readings</CardTitle>
        <p className="text-gray-600 mt-2">
          Enter your most recent blood pressure and cholesterol measurements to establish your starting point.
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
                    Always consult with your healthcare provider about your blood pressure and cholesterol readings.
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

          {/* Blood Pressure Readings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Systolic Blood Pressure (top number)
              </label>
              <input
                type="number"
                name="systolicBP"
                value={formData.systolicBP}
                onChange={handleInputChange}
                placeholder="120"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Diastolic Blood Pressure (bottom number)
              </label>
              <input
                type="number"
                name="diastolicBP"
                value={formData.diastolicBP}
                onChange={handleInputChange}
                placeholder="80"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Cholesterol Readings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Cholesterol (mg/dL)
              </label>
              <input
                type="number"
                name="totalCholesterol"
                value={formData.totalCholesterol}
                onChange={handleInputChange}
                placeholder="200"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                HDL Cholesterol (mg/dL)
              </label>
              <input
                type="number"
                name="hdlCholesterol"
                value={formData.hdlCholesterol}
                onChange={handleInputChange}
                placeholder="50"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LDL Cholesterol (mg/dL)
              </label>
              <input
                type="number"
                name="ldlCholesterol"
                value={formData.ldlCholesterol}
                onChange={handleInputChange}
                placeholder="100"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Triglycerides (mg/dL)
              </label>
              <input
                type="number"
                name="triglycerides"
                value={formData.triglycerides}
                onChange={handleInputChange}
                placeholder="150"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {/* Last Reading Date */}
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

          {/* Symptoms */}
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

          {/* Family History */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Family History (Select all that apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {familyHistoryConditions.map((condition) => (
                <label key={condition} className="flex items-center">
                  <input
                    type="checkbox"
                    name="familyHistory"
                    value={condition}
                    checked={formData.familyHistory.includes(condition)}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{condition}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Lifestyle Factors */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Lifestyle Factors</h4>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Smoking Status
              </label>
              <select
                name="lifestyle.smoking"
                value={formData.lifestyle.smoking}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select status</option>
                <option value="never">Never smoked</option>
                <option value="former">Former smoker</option>
                <option value="current">Current smoker</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alcohol Consumption
              </label>
              <select
                name="lifestyle.alcohol"
                value={formData.lifestyle.alcohol}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select consumption</option>
                <option value="none">None</option>
                <option value="occasional">Occasional (1-2 drinks/week)</option>
                <option value="moderate">Moderate (3-7 drinks/week)</option>
                <option value="heavy">Heavy (>7 drinks/week)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Diet Quality
              </label>
              <select
                name="lifestyle.diet"
                value={formData.lifestyle.diet}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select diet quality</option>
                <option value="poor">Poor - High in processed foods</option>
                <option value="fair">Fair - Mix of healthy and unhealthy</option>
                <option value="good">Good - Mostly healthy choices</option>
                <option value="excellent">Excellent - Very healthy diet</option>
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
                <option value="sedentary">Sedentary - Little to no exercise</option>
                <option value="light">Light - 1-2 days/week</option>
                <option value="moderate">Moderate - 3-4 days/week</option>
                <option value="active">Active - 5+ days/week</option>
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
                <option value="low">Low - Rarely stressed</option>
                <option value="moderate">Moderate - Sometimes stressed</option>
                <option value="high">High - Often stressed</option>
                <option value="severe">Severe - Constantly stressed</option>
              </select>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Accurate Readings:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Take blood pressure at the same time each day
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Fast for 12 hours before cholesterol tests
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Keep a log of readings to share with your doctor
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
              Continue to Dietary Changes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BPCholesterolStep1;