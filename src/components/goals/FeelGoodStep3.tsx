import React, { useState, useEffect } from 'react';
import { ArrowRight, Wind, Eye, Lock, Play, Pause, RefreshCw } from 'lucide-react';
import Button from '../ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface FeelGoodStep3Props {
  onComplete: () => void;
}

const FeelGoodStep3: React.FC<FeelGoodStep3Props> = ({ onComplete }) => {
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathingSeconds, setBreathingSeconds] = useState(180); // 3 minutes
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [observationNotes, setObservationNotes] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isBreathingActive && breathingSeconds > 0) {
      timer = setInterval(() => {
        setBreathingSeconds(prev => {
          if (prev <= 1) {
            setIsBreathingActive(false);
            return 0;
          }
          return prev - 1;
        });

        // Update breathing phase every 4 seconds
        setBreathingPhase(prev => {
          switch (prev) {
            case 'inhale': return 'hold';
            case 'hold': return 'exhale';
            case 'exhale': return 'inhale';
            default: return 'inhale';
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isBreathingActive, breathingSeconds]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleBreathing = () => {
    if (!isBreathingActive && breathingSeconds === 0) {
      setBreathingSeconds(180);
    }
    setIsBreathingActive(!isBreathingActive);
  };

  const resetBreathing = () => {
    setIsBreathingActive(false);
    setBreathingSeconds(180);
    setBreathingPhase('inhale');
  };

  const getBreathingInstruction = () => {
    switch (breathingPhase) {
      case 'inhale': return 'Breathe in...';
      case 'hold': return 'Hold...';
      case 'exhale': return 'Breathe out...';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Mindfulness Practice</CardTitle>
          <p className="text-gray-600 mt-2">
            Take a moment to calm your mind and connect with the present moment.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Breathing Exercise */}
            <div className="bg-primary-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">3-Minute Breathing Exercise</h3>
                <div className="text-sm font-medium text-gray-600">
                  {formatTime(breathingSeconds)}
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center justify-center p-8">
                  <div 
                    className={`w-32 h-32 rounded-full border-4 border-primary-500 flex items-center justify-center mb-4 transition-transform duration-1000 ${
                      isBreathingActive && breathingPhase === 'inhale' ? 'scale-110' :
                      isBreathingActive && breathingPhase === 'exhale' ? 'scale-90' : ''
                    }`}
                  >
                    <Wind 
                      className={`h-12 w-12 text-primary-500 transition-opacity duration-300 ${
                        isBreathingActive ? 'opacity-100' : 'opacity-50'
                      }`} 
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    {isBreathingActive ? getBreathingInstruction() : 'Ready to begin?'}
                  </p>
                  <div className="flex space-x-2">
                    <Button
                      onClick={toggleBreathing}
                      variant="outline"
                      size="sm"
                      leftIcon={isBreathingActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    >
                      {isBreathingActive ? 'Pause' : 'Start'}
                    </Button>
                    <Button
                      onClick={resetBreathing}
                      variant="outline"
                      size="sm"
                      leftIcon={<RefreshCw className="h-4 w-4" />}
                    >
                      Reset
                    </Button>
                  </div>
                </div>

                {/* Premium overlay */}
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-lg flex items-center justify-center">
                  <div className="text-center p-6">
                    <Lock className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="text-white font-medium mb-2">Premium Feature</p>
                    <p className="text-gray-200 text-sm mb-4">
                      Unlock guided audio meditation and breathing exercises
                    </p>
                    <Button size="sm">Upgrade to Premium</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mindful Observation */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">60-Second Mindful Observation</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-start mb-4">
                  <Eye className="h-5 w-5 text-gray-500 mt-1 mr-3" />
                  <div>
                    <p className="text-gray-700 mb-2">
                      Take a minute to observe your surroundings. Notice:
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• 3 things you can see</li>
                      <li>• 2 things you can hear</li>
                      <li>• 1 thing you can smell</li>
                    </ul>
                  </div>
                </div>
                
                <textarea
                  value={observationNotes}
                  onChange={(e) => setObservationNotes(e.target.value)}
                  placeholder="Write your observations here..."
                  className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-4">Mindfulness Tips:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    There's no "right way" to practice mindfulness - simply observe without judgment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    If your mind wanders, gently bring your attention back to the present
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-200 rounded-full mr-2 mt-2"></span>
                  <span className="text-gray-700">
                    Practice regularly, even if just for a few minutes each day
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex justify-between pt-6">
              <Button
                onClick={onComplete}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                fullWidth
              >
                Continue to Sleep Tips
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeelGoodStep3;