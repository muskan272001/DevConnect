import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserSelection from './pages/UserSelection';
import DeveloperLogin from './pages/DeveloperLogin';
import UserLogin from './pages/UserLogin';
import DeveloperSignup from './pages/DeveloperSignup';
import UserSignup from './pages/UserSignup';
import DeveloperDashboard from './pages/DeveloperDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/select" element={<UserSelection />} />
          <Route path="/developer/login" element={<DeveloperLogin />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/developer/signup" element={<DeveloperSignup />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/developer/dashboard" element={<DeveloperDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;