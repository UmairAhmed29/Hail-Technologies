import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import Dashboard from './components/Dashboard.jsx';
import VoucherPage from './components/VoucherPage.jsx';
import Sidebar from './components/sidebar.jsx';

const App = () => {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vouchers" element={<VoucherPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

