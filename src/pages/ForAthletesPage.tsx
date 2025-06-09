import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Brain, Clock, Battery, ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ForAthletesPage: React.FC = () => {
  const steps = [
    {
      title: 'Define Your Sport and Goal',
      description: 'Whether you\'re focused on endurance, strength, recovery, or competition, we\'ll tailor your plan accordingly.',
      icon: <Dumbbell className="h-6 w-6" />,
      items: [
        'Sport-specific training plans',
        'Performance goals assessment',
        'Competition preparation',
        'Recovery strategies'
      ]
    },
    {
      title: 'Nutrition Strategy',
      description: 'Optimize your nutrition timing and intake for peak performance.',
      icon: <Brain className="h-6 w-6" />,
      items: [
        'Hydration planning',
        'Protein timing optimization',
        'Micronutrient analysis',
        'Pre/post workout nutrition'
      ]
    },
    {
      title: 'Periodized Training',
      description: 'Structure your training cycles for optimal performance gains.',
      icon: <Clock className="h-6 w-6" />,
      items: [
        'Build phase planning',
        'Peak performance timing',
        'Rest and adaptation periods',
        'Competition tapering'
      ]
    },
    {
      title: 'Recovery & Sleep',
      description: 'Monitor and optimize your recovery for sustained performance.',
      icon: <Battery className="h-6 w-6" />,
      items: [
        'Sleep cycle tracking',
        'Recovery session planning',
        'Active recovery protocols',
        'Stress management techniques'
      ]
    }
  ];

  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <Container>
        <div className="mb-8">
          <Link to="/manage-diabetes" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Manage Diabetes
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Optimize Performance: For Athletes</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Take your athletic performance to the next level with personalized training and recovery plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-primary-100 p-3 text-primary-600">
                    {step.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-200 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-primary-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Elevate Your Performance?</h3>
          <p className="text-gray-600 mb-6">
            Get started with a personalized assessment and receive a tailored plan designed for your specific sport and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Start Assessment</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link to="/prevent-heart-disease">
            <Button rightIcon={<ArrowLeft className="w-4 h-4 rotate-180" />}>
              Next: Prevent Heart Disease & Stroke
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ForAthletesPage;