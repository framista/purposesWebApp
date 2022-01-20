import React from 'react';
import {
  Area,
  Radar,
  RadialMultiple,
  TimelineMultiRange,
} from '../../../common/Charts';

import './DashboardCharts.scss';

const DashboardCharts = ({ dailyPoints }) => {
  return (
    <div className="dashboardCharts">
      <Radar height={'400px'} />
      <RadialMultiple height={'400px'} />
      <Area height={'400px'} data={dailyPoints} />
      <TimelineMultiRange height={'400px'} />
    </div>
  );
};

export default React.memo(DashboardCharts);
