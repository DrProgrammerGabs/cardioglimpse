import React, { useState } from 'react';
import { ArrowLeft, Scale, LineChart, Calendar, Brain, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface GainWeightStep5Props {
  onComplete: () => void;
}

const GainWeightStep5: React.FC<GainWeightStep5Props> = ({ onComplete }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState<string>('');
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);

  const trackingFrequencies = [
    { id: 'daily', name: 'Daily Tracking', description: 'Best for detailed progress monitoring' },
    { id: 'weekly', name: 'Weekly Check-ins', description: 'Good for steady progress tracking' },
    { id: 'biweekly', name: 'Bi-weekly Measurements', description: 'Minimum recommended frequency' }
  ];

  const metrics = [
    { id: 'weight', name: 'Body Weight', description: 'Track overall weight changes' },
    { id: 'measurements', name: 'Body Measurements', description: 'Monitor specific body parts' },
    { id: 'strength', name: 'Strength Progress', description: 'Record lifting improvements' },
    { id: 'photos', name: 'Progress Photos', description: 'Visual documentation' }
  ];

  const toggleMetric = (metricId: string) => {
    setSelectedMetrics(prev =>
      prev.includes(metricId)
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">Track Your Progress</CardTitle>
        <p className="text-gray-600 mt-2">
          Set up your tracking system to monitor your weight gain journey effectively.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Tracking Frequency */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Choose Tracking Frequency</h3>
            <div className="grid gap-4">
              {trackingFrequencies.map((frequency) => (
                <button
                  key={frequency.id}
                  onClick={() => setSelectedFrequency(frequency.id)}
                  className={`p-4 rounded-lg border text-left transition-colors duration-200 ${
                    selectedFrequency === frequency.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h4 className="font-medium text-gray-900">{frequency.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{frequency.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Tracking Metrics */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Select Tracking Metrics</h3>
            <div className="grid gap-4">
              {metrics.map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => toggleMetric(metric.id)}
                  className={`p-4 rounded-lg border text-left transition-colors duration-200 ${
                    selectedMetrics.includes(metric.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <h4 className="font-medium text-gray-900">{metric.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{metric.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Progress Visualization */}
          {showDemo && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="font-medium text-gray-900 mb-4">Progress Tracker Preview</h4>
              <div className="space-y-4">
                <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Weight gain trend chart</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-success-50 rounded-lg">
                    <div className="text-success-600 font-medium">Current</div>
                    <div className="text-sm text-gray-600">70 kg</div>
                  </div>
                  <div className="p-4 bg-primary-50 rounded-lg">
                    <div className="text-primary-600 font-medium">Target</div>
                    <div className="text-sm text-gray-600">75 kg</div>
                  </div>
                  <div className="p-4 bg-warning-50 rounded-lg">
                    <div className="text-warning-600 font-medium">Progress</div>
                    <div className="text-sm text-gray-600">+2.5 kg</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tips Section */}
          <div className="bg-primary-50 rounded-lg p-6">
            <h4 className="font-medium text-gray-900 mb-4">Tracking Tips:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Weigh yourself at the same time each day
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Take measurements in the same way each time
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                <span className="text-gray-700">
                  Use progress photos in consistent lighting and poses
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
                Advanced analytics and trends
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Body composition tracking
              </li>
              <li className="flex items-center text-gray-600">
                <Lock className="w-4 h-4 mr-2" />
                Custom progress reports
              </li>
            </ul>
          </div>

          {/* Demo Toggle */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDemo(!showDemo)}
            >
              {showDemo ? 'Hide Preview' : 'Show Progress Preview'}
            </Button>
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
  );
};

export default GainWeightStep5;