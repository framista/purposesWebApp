import React from 'react';
import { TimelineMultiRange, RadialMultiple } from '../../../common/Charts';

import './DashboardCharts.scss';

const DashboardCharts = () => {
  return (
    <div className="dashboardCharts">
      <TimelineMultiRange height={'400px'} />
      <RadialMultiple height={'400px'} />
      <TimelineMultiRange height={'400px'} />
    </div>
  );
};

export default DashboardCharts;
