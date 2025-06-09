import React from 'react';
import { Dumbbell } from 'lucide-react';
import Button from '../ui/Button';

interface GainWeightStep4Props {
  onComplete: () => void;
}

const GainWeightStep4: React.FC<GainWeightStep4Props> = ({ onComplete }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Dumbbell className="w-6 h-6 mr-2 text-primary-500" />
          Strength Training Program
        </h3>
        
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h4 className="font-medium text-lg mb-3">Weekly Training Split</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 text-sm font-medium mr-3">
                  Day 1
                </div>
                <div>
                  <p className="font-medium">Upper Body Focus</p>
                  <p className="text-gray-600 text-sm">Chest, shoulders, triceps</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 text-sm font-medium mr-3">
                  Day 2
                </div>
                <div>
                  <p className="font-medium">Lower Body Focus</p>
                  <p className="text-gray-600 text-sm">Quadriceps, hamstrings, calves</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 text-sm font-medium mr-3">
                  Day 3
                </div>
                <div>
                  <p className="font-medium">Rest & Recovery</p>
                  <p className="text-gray-600 text-sm">Light stretching and mobility work</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 text-sm font-medium mr-3">
                  Day 4
                </div>
                <div>
                  <p className="font-medium">Back & Arms</p>
                  <p className="text-gray-600 text-sm">Back, biceps, forearms</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary-100 text-primary-700 rounded-full px-3 py-1 text-sm font-medium mr-3">
                  Day 5
                </div>
                <div>
                  <p className="font-medium">Full Body & Core</p>
                  <p className="text-gray-600 text-sm">Compound movements and core strength</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-b pb-4">
            <h4 className="font-medium text-lg mb-3">Training Guidelines</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Focus on compound exercises for maximum muscle gain
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Aim for 3-4 sets of 8-12 reps per exercise
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Rest 60-90 seconds between sets
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Progressive overload: Increase weight or reps each week
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Stay hydrated and warm up properly
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-3">Recovery Tips</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Get 7-9 hours of sleep per night
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Stay consistent with your meal timing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Consider post-workout protein supplements
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                Listen to your body and adjust intensity as needed
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={onComplete} variant="primary" size="lg" className="w-full">
            Complete Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GainWeightStep4;