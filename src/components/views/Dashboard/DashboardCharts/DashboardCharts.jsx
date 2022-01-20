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
  pointsCategorySummary,
}) => {
  const timelineChartData = useMemo(
    () =>
      datesForCategories.filter(({ _id }) => selectedCategories.includes(_id)),
    [selectedCategories, datesForCategories]
  );

  const pointsData = useMemo(() => {
    const [labels, data, colors] = [[], [], []];
    selectedCategories.forEach((categoryId) => {
      const { name, points, totalPoints, color } =
        pointsCategorySummary[categoryId];
      labels.push(name);
      data.push(((points / totalPoints) * 100).toFixed(0));
      colors.push(color);
    });
    return { labels, data, colors };
  }, [pointsCategorySummary, selectedCategories]);

  if (selectedCategories.length === 0) return null;

  return (
    <div className="dashboardCharts">
      <Radar height={'400px'} data={pointsData} />
      <RadialMultiple height={'400px'} data={pointsData} />
      <Area height={'400px'} data={dailyPoints} />
      <TimelineMultiRange height={'400px'} data={timelineChartData} />
    </div>
  );
};

export default React.memo(DashboardCharts);
