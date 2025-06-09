import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const PreventHeartDiseasePage: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link to="/for-athletes" className="inline-flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to For Athletes
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Prevent Heart Disease & Stroke</h1>

            <div className="space-y-8">
              {/* Step 1 */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Know your risk</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Family history?</li>
                    <li>• Cholesterol?</li>
                    <li>• BP?</li>
                    <li>• Weight?</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Adopt the DASH or Mediterranean diet</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Low-sodium</li>
                    <li>• Heart-healthy fats</li>
                    <li>• Whole foods</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Get moving</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>• 150 mins moderate exercise/week</li>
                    <li>• Walking</li>
                    <li>• Swimming</li>
                    <li>• Yoga</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 4: Track BP, cholesterol, and weight</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Log weekly</li>
                    <li>• Set reminders</li>
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-8 border-t border-gray-200">
                <Link to="/for-athletes">
                  <Button variant="outline">Back to For Athletes</Button>
                </Link>
                <Link to="/goals">
                  <Button>Back to Goals</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PreventHeartDiseasePage;