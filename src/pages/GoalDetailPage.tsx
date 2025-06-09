import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import WeightLossPlan from '../components/goals/WeightLossPlan';
import HealthyRoutinePlan from '../components/goals/HealthyRoutinePlan';
import FeelGoodPlan from '../components/goals/FeelGoodPlan';
import BetterSleepPlan from '../components/goals/BetterSleepPlan';
import GainWeightPlan from '../components/goals/GainWeightPlan';

const GoalDetailPage: React.FC = () => {
  const { goalId } = useParams<{ goalId: string }>();

  const renderGoalPlan = () => {
    switch (goalId) {
      case 'weight-loss':
        return <WeightLossPlan />;
      case 'fit-healthy':
        return <HealthyRoutinePlan />;
      case 'feel-good':
        return <FeelGoodPlan />;
      case 'better-sleep':
        return <BetterSleepPlan />;
      case 'gain-weight':
        return <GainWeightPlan />;
      default:
        return (
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold">Plan Coming Soon</h3>
            <p className="text-gray-600 mt-2">
              This wellness plan is currently under development. Check back soon!
            </p>
          </div>
        );
    }
  };

  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <Container>
        {renderGoalPlan()}
      </Container>
    </div>
  );
};

export default GoalDetailPage;