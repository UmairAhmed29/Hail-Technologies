import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/Dashboard" className="sidebar-button">Dashboard</Link>
          </li>
          <li>
            <Link to="/Login" className="sidebar-button">Login</Link>
          </li>
          <li>
            <Link to="/Vouchers" className="sidebar-button">Vouchers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
