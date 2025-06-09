import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import RiskCheckerPage from './pages/RiskCheckerPage';
import SymptomCheckerPage from './pages/SymptomCheckerPage';
import HospitalLocatorPage from './pages/HospitalLocatorPage';
import GoalsPage from './pages/GoalsPage';
import GoalDetailPage from './pages/GoalDetailPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ManageDiabetesPage from './pages/ManageDiabetesPage';
import ForAthletesPage from './pages/ForAthletesPage';
import PreventHeartDiseasePage from './pages/PreventHeartDiseasePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/risk-checker" element={<RiskCheckerPage />} />
          <Route path="/symptom-checker" element={<SymptomCheckerPage />} />
          <Route path="/hospital-locator" element={<HospitalLocatorPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/goals/:goalId" element={<GoalDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/manage-diabetes" element={<ManageDiabetesPage />} />
          <Route path="/for-athletes" element={<ForAthletesPage />} />
          <Route path="/prevent-heart-disease" element={<PreventHeartDiseasePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;