import React from 'react';

import DashboardCharts from './DashboardCharts/DashboardCharts.redux';
import DashboardHeader from './DashboardHeader/DashboardHeader.redux';

const Dashboard = () => {
  return (
    <div className="app__content">
      <DashboardHeader />
      <DashboardCharts />
    </div>
  );
};

export default Dashboard;
