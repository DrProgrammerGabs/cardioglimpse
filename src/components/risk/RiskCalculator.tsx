import React, { useState } from 'react';
import { Heart, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

interface FormData {
  age: number;
  gender: string;
  systolicBP: number;
  diastolicBP: number;
  totalCholesterol: number;
  hdlCholesterol: number;
  smoker: boolean;
  diabetic: boolean;
  physicallyActive: boolean;
}

const initialFormData: FormData = {
  age: 40,
  gender: '',
  systolicBP: 120,
  diastolicBP: 80,
  totalCholesterol: 200,
  hdlCholesterol: 50,
  smoker: false,
  diabetic: false,
  physicallyActive: true,
};

const RiskCalculator: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const calculateRisk = () => {
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Simple mock calculation (would be replaced with actual algorithm or API call)
      let risk = 5; // Base risk
      
      // Add risk factors
      if (formData.age > 50) risk += 10;
      if (formData.smoker) risk += 15;
      if (formData.diabetic) risk += 10;
      if (formData.systolicBP > 140) risk += 10;
      if (formData.totalCholesterol > 240) risk += 8;
      if (formData.hdlCholesterol < 40) risk += 7;
      
      // Reduce risk for positive factors
      if (formData.physicallyActive) risk -= 5;
      
      // Clamp between 1-100
      risk = Math.max(1, Math.min(100, risk));
      
      setResult(risk);
      setLoading(false);
    }, 1500);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setResult(null);
    setStep(1);
  };

  const renderStep1 = () => (
    <div className="animate-fade-in">
      <h3 className="text-xl font-semibold mb-6">Basic Information</h3>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="flex justify-end mt-8">
        <Button onClick={nextStep} disabled={!formData.gender}>
          Next
        </Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="animate-fade-in">
      <h3 className="text-xl font-semibold mb-6">Blood Pressure & Cholesterol</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 mb-2">Systolic BP (mmHg)</label>
          <input
            type="number"
            name="systolicBP"
            value={formData.systolicBP}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">Diastolic BP (mmHg)</label>
          <input
            type="number"
            name="diastolicBP"
            value={formData.diastolicBP}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 mb-2">Total Cholesterol (mg/dL)</label>
          <input
            type="number"
            name="totalCholesterol"
            value={formData.totalCholesterol}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">HDL Cholesterol (mg/dL)</label>
          <input
            type="number"
            name="hdlCholesterol"
            value={formData.hdlCholesterol}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>
          Next
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="animate-fade-in">
      <h3 className="text-xl font-semibold mb-6">Lifestyle Factors</h3>
      
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="smoker"
            name="smoker"
            checked={formData.smoker}
            onChange={handleInputChange}
            className="h-5 w-5 text-primary-600 rounded focus:ring-primary-500"
          />
          <label htmlFor="smoker" className="ml-2 text-gray-700">
            Do you smoke?
          </label>
        </div>
        
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="diabetic"
            name="diabetic"
            checked={formData.diabetic}
            onChange={handleInputChange}
            className="h-5 w-5 text-primary-600 rounded focus:ring-primary-500"
          />
          <label htmlFor="diabetic" className="ml-2 text-gray-700">
            Do you have diabetes?
          </label>
        </div>
        
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="physicallyActive"
            name="physicallyActive"
            checked={formData.physicallyActive}
            onChange={handleInputChange}
            className="h-5 w-5 text-primary-600 rounded focus:ring-primary-500"
          />
          <label htmlFor="physicallyActive" className="ml-2 text-gray-700">
            Are you physically active? (30+ minutes exercise, 3+ times a week)
          </label>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={calculateRisk} isLoading={loading}>
          Calculate Risk
        </Button>
      </div>
    </div>
  );

  const renderResult = () => {
    let riskLevel = 'low';
    let riskColor = 'text-success-600';
    let recommendations = [];
    
    if (result) {
      if (result < 10) {
        riskLevel = 'low';
        riskColor = 'text-success-600';
        recommendations = [
          'Continue your healthy lifestyle',
          'Get regular check-ups',
          'Stay physically active'
        ];
      } else if (result < 20) {
        riskLevel = 'moderate';
        riskColor = 'text-warning-600';
        recommendations = [
          'Consider increasing physical activity',
          'Monitor blood pressure regularly',
          'Maintain a heart-healthy diet'
        ];
      } else {
        riskLevel = 'high';
        riskColor = 'text-error-600';
        recommendations = [
          'Consult with a healthcare provider',
          'Follow a strict heart-healthy diet',
          'Regular monitoring of blood pressure and cholesterol',
          'Consider medication if prescribed by your doctor'
        ];
      }
    }
    
    return (
      <div className="animate-fade-in text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-primary-100 p-4 mb-6">
          <Heart className="h-12 w-12 text-primary-600" />
        </div>
        
        <h3 className="text-2xl font-bold mb-2">Your Heart Risk Assessment</h3>
        
        <div className="my-8">
          <div className="relative h-44 w-44 mx-auto">
            <svg viewBox="0 0 36 36" className="h-44 w-44 stroke-current">
              <path
                className="text-gray-200"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={result && result < 10 ? "text-success-500" : result && result < 20 ? "text-warning-500" : "text-error-500"}
                strokeWidth="3"
                strokeDasharray={`${result}, 100`}
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">{result}%</span>
              <span className={`text-lg font-medium capitalize ${riskColor}`}>{riskLevel} risk</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-lg mb-3">AI Recommendations:</h4>
          <ul className="space-y-2">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center rounded-full bg-primary-100 p-1 mr-2">
                  <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-primary-50 p-4 rounded-lg mb-6 flex items-start">
          <AlertCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            This assessment is for informational purposes only and does not replace professional medical advice. Please consult with a healthcare provider for a comprehensive evaluation.
          </p>
        </div>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={resetForm}>
            Start Over
          </Button>
          <Button>
            Save Results
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Heart Risk Calculator</h2>
        <p className="text-gray-600 mt-2">
          Enter your information to receive a personalized heart risk assessment
        </p>
      </div>
      
      {/* Progress bar */}
      {!result && (
        <div className="mb-8">
          <div className="flex justify-between mb-1">
            <span className={`text-sm ${step >= 1 ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
              Basic Info
            </span>
            <span className={`text-sm ${step >= 2 ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
              Medical Data
            </span>
            <span className={`text-sm ${step >= 3 ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
              Lifestyle
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-primary-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {result !== null && renderResult()}
    </div>
  );
};

export default RiskCalculator;