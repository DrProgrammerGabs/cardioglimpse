import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface HeartDiseaseStep1Props {
  onComplete: (data: FormData) => void;
}

interface FormData {
  age: string;
  gender: string;
  bloodPressure: {
    systolic: string;
    diastolic: string;
  };
  cholesterol: {
    total: string;
    hdl: string;
    ldl: string;
  };
  familyHistory: string[];
  lifestyle: {
    smoking: string;
    exercise: string;
    diet: string;
    stress: string;
  };
}

const HeartDiseaseStep1: React.FC<HeartDiseaseStep1Props> = ({ onComplete }) => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    gender: '',
    bloodPressure: {
      systolic: '',
      diastolic: ''
    },
    cholesterol: {
      total: '',
      hdl: '',
      ldl: ''
    },
    familyHistory: [],
    lifestyle: {
      smoking: '',
      exercise: '',
      diet: '',
      stress: ''
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [category, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [category]: {
          ...prev[category as keyof FormData],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFamilyHistoryChange = (condition: string) => {
    setFormData(prev => ({
      ...prev,
      familyHistory: prev.familyHistory.includes(condition)
        ? prev.familyHistory.filter(c => c !== condition)
        : [...prev.familyHistory, condition]
    }));
  };

  const isFormValid = () => {
    return (
      formData.age &&
      formData.gender &&
      formData.bloodPressure.systolic &&
      formData.bloodPressure.diastolic &&
      formData.cholesterol.total &&
      formData.lifestyle.smoking &&
      formData.lifestyle.exercise
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Heart Disease Risk Assessment</CardTitle>
        <p className="text-gray-600 mt-2">
          Complete this assessment to help us understand your heart disease risk factors.
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Blood Pressure */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Blood Pressure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Systolic (mmHg)
                </label>
                <input
                  type="number"
                  name="bloodPressure.systolic"
                  value={formData.bloodPressure.systolic}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Diastolic (mmHg)
                </label>
                <input
                  type="number"
                  name="bloodPressure.diastolic"
                  value={formData.bloodPressure.diastolic}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Cholesterol */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Cholesterol Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Cholesterol
                </label>
                <input
                  type="number"
                  name="cholesterol.total"
                  value={formData.cholesterol.total}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HDL (Good)
                </label>
                <input
                  type="number"
                  name="cholesterol.hdl"
                  value={formData.cholesterol.hdl}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LDL (Bad)
                </label>
                <input
                  type="number"
                  name="cholesterol.ldl"
                  value={formData.cholesterol.ldl}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Family History */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Family History</h3>
            <p className="text-sm text-gray-600 mb-4">
              Select any conditions that run in your immediate family:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Heart Disease',
                'High Blood Pressure',
                'High Cholesterol',
                'Diabetes',
                'Stroke',
                'Early Heart Attack'
              ].map(condition => (
                <label key={condition} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.familyHistory.includes(condition)}
                    onChange={() => handleFamilyHistoryChange(condition)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{condition}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Lifestyle Factors */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Lifestyle Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  Exercise Level
                </label>
                <select
                  name="lifestyle.exercise"
                  value={formData.lifestyle.exercise}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select level</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Light activity</option>
                  <option value="moderate">Moderate activity</option>
                  <option value="vigorous">Vigorous activity</option>
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
                  <option value="">Select quality</option>
                  <option value="poor">Poor</option>
                  <option value="fair">Fair</option>
                  <option value="good">Good</option>
                  <option value="excellent">Excellent</option>
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
                  <option value="">Select level</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                  <option value="severe">Severe</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={() => onComplete(formData)}
              disabled={!isFormValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Lifestyle Plan
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default HeartDiseaseStep1;