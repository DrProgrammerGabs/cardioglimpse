import React, { useState } from 'react';
import { ArrowRight, Brain, AlertTriangle, Clock, Activity } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface StressAssessment {
  triggers: string[];
  physicalSigns: string[];
  emotionalSigns: string[];
  stressLevel: string;
  peakStressTimes: string[];
  notes: string;
}

interface StressStep1Props {
  onComplete: (data: StressAssessment) => void;
}

const StressStep1: React.FC<StressStep1Props> = ({ onComplete }) => {
  const [assessment, setAssessment] = useState<StressAssessment>({
    triggers: [],
    physicalSigns: [],
    emotionalSigns: [],
    stressLevel: '',
    peakStressTimes: [],
    notes: ''
  });

  const commonTriggers = [
    'Work deadlines',
    'Financial concerns',
    'Relationship issues',
    'Health worries',
    'Family responsibilities',
    'Social situations',
    'Major life changes',
    'Time pressure'
  ];

  const physicalSigns = [
    'Muscle tension',
    'Headaches',
    'Rapid heartbeat',
    'Fatigue',
    'Sleep issues',
    'Digestive problems',
    'Shallow breathing',
    'Sweating'
  ];

  const emotionalSigns = [
    'Anxiety',
    'Irritability',
    'Overwhelm',
    'Difficulty focusing',
    'Mood swings',
    'Racing thoughts',
    'Restlessness',
    'Low motivation'
  ];

  const timeSlots = [
    'Early Morning (5-8 AM)',
    'Morning (8-11 AM)',
    'Midday (11 AM-2 PM)',
    'Afternoon (2-5 PM)',
    'Evening (5-8 PM)',
    'Night (8-11 PM)'
  ];

  const handleTriggerToggle = (trigger: string) => {
    setAssessment(prev => ({
      ...prev,
      triggers: prev.triggers.includes(trigger)
        ? prev.triggers.filter(t => t !== trigger)
        : [...prev.triggers, trigger]
    }));
  };

  const handlePhysicalSignToggle = (sign: string) => {
    setAssessment(prev => ({
      ...prev,
      physicalSigns: prev.physicalSigns.includes(sign)
        ? prev.physicalSigns.filter(s => s !== sign)
        : [...prev.physicalSigns, sign]
    }));
  };

  const handleEmotionalSignToggle = (sign: string) => {
    setAssessment(prev => ({
      ...prev,
      emotionalSigns: prev.emotionalSigns.includes(sign)
        ? prev.emotionalSigns.filter(s => s !== sign)
        : [...prev.emotionalSigns, sign]
    }));
  };

  const handleTimeToggle = (time: string) => {
    setAssessment(prev => ({
      ...prev,
      peakStressTimes: prev.peakStressTimes.includes(time)
        ? prev.peakStressTimes.filter(t => t !== time)
        : [...prev.peakStressTimes, time]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAssessment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = () => {
    return (
      assessment.triggers.length > 0 &&
      assessment.stressLevel &&
      (assessment.physicalSigns.length > 0 || assessment.emotionalSigns.length > 0)
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Identify Your Stress Triggers</CardTitle>
        <p className="text-gray-600 mt-2">
          Understanding what causes your stress is the first step to managing it effectively.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Health Warning */}
          <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-warning-500 mt-0.5 mr-3" />
              <div>
                <h4 className="text-warning-800 font-medium">Important Notice</h4>
                <p className="text-warning-700 text-sm mt-1">
                  If you're experiencing severe stress or anxiety, please consult a mental health professional.
                  This tool is not a substitute for professional medical advice.
                </p>
              </div>
            </div>
          </div>

          {/* Stress Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Stress Level
            </label>
            <select
              name="stressLevel"
              value={assessment.stressLevel}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select stress level</option>
              <option value="low">Low - Manageable daily stress</option>
              <option value="moderate">Moderate - Noticeable but coping</option>
              <option value="high">High - Affecting daily life</option>
              <option value="severe">Severe - Overwhelming stress</option>
            </select>
          </div>

          {/* Common Triggers */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              What triggers your stress? (Select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {commonTriggers.map((trigger) => (
                <button
                  key={trigger}
                  onClick={() => handleTriggerToggle(trigger)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-200 ${
                    assessment.triggers.includes(trigger)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {trigger}
                </button>
              ))}
            </div>
          </div>

          {/* Physical Signs */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Physical Signs of Stress
            </label>
            <div className="grid grid-cols-2 gap-3">
              {physicalSigns.map((sign) => (
                <button
                  key={sign}
                  onClick={() => handlePhysicalSignToggle(sign)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-200 ${
                    assessment.physicalSigns.includes(sign)
                      ? 'border-warning-500 bg-warning-50 text-warning-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <Activity className="h-4 w-4 mr-2" />
                    {sign}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Emotional Signs */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Emotional Signs of Stress
            </label>
            <div className="grid grid-cols-2 gap-3">
              {emotionalSigns.map((sign) => (
                <button
                  key={sign}
                  onClick={() => handleEmotionalSignToggle(sign)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-200 ${
                    assessment.emotionalSigns.includes(sign)
                      ? 'border-warning-500 bg-warning-50 text-warning-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <Brain className="h-4 w-4 mr-2" />
                    {sign}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Peak Stress Times */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              When do you feel most stressed?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeToggle(time)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-200 ${
                    assessment.peakStressTimes.includes(time)
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {time}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={assessment.notes}
              onChange={handleInputChange}
              placeholder="Any other observations about your stress patterns..."
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tips for Stress Awareness:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Notice patterns in your stress levels throughout the day
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Pay attention to both physical and emotional responses
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Consider how different situations affect your stress levels
                </span>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              onClick={() => onComplete(assessment)}
              disabled={!isFormValid()}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              fullWidth
            >
              Continue to Quick Stress Busters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StressStep1;