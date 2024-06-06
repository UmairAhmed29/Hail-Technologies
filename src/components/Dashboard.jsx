import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/vouchers">Vouchers</Link></li>
        </ul>
      </nav>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};

export default Dashboard;

