import React, { useMemo } from 'react';
import {
  Area,
  Radar,
  RadialMultiple,
  TimelineMultiRange,
} from '../../../common/Charts';

import './DashboardCharts.scss';

const DashboardCharts = ({
  dailyPoints,
  datesForCategories,
  selectedCategories,
}) => {
  const timelineChartData = useMemo(
    () =>
      datesForCategories.filter(({ _id }) => selectedCategories.includes(_id)),
    [selectedCategories, datesForCategories]
  );

  return (
    <div className="dashboardCharts">
      <Radar height={'400px'} />
      <RadialMultiple height={'400px'} />
      <Area height={'400px'} data={dailyPoints} />
      <TimelineMultiRange height={'400px'} data={timelineChartData} />
    </div>
  );
};

export default React.memo(DashboardCharts);
