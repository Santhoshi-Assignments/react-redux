
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const userName = useSelector((state) => state.user.name);

  return (
    <div className="dashboard-container">
      <h1>Hello {userName}</h1>
      <nav>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
