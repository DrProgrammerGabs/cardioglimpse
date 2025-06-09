import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Heart, Clock, Apple } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';

const ManageDiabetesPage: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Manage Diabetes</h1>

          <div className="space-y-8">
            {/* Step 1 */}
            <Card className="p-6">
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Activity className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Step 1: Monitor Blood Sugar</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Check blood sugar regularly</li>
                    <li>Keep a log of readings</li>
                    <li>Learn your patterns</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-6">
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Apple className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Step 2: Balanced Diet</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Count carbohydrates</li>
                    <li>Choose low glycemic foods</li>
                    <li>Regular meal timing</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-6">
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Heart className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Step 3: Exercise Plan</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>30 minutes daily activity</li>
                    <li>Mix cardio and strength</li>
                    <li>Monitor blood sugar during exercise</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-6">
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Step 4: Medication Schedule</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Take medications as prescribed</li>
                    <li>Set reminders</li>
                    <li>Keep emergency supplies</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Link
                to="/goals"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                ← Back to Goals
              </Link>
              <Link
                to="/for-athletes"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                For Athletes →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageDiabetesPage;