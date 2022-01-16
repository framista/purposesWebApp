import React from 'react';
import Chart from 'react-apexcharts';

import './TimelineMultiRange.scss';

const TimelineMultiRange = ({ height }) => {
  const d1Start = new Date('2019-03-05');
  const d1End = new Date('2019-03-05');
  d1Start.setUTCHours(0, 0, 0, 0);
  d1End.setUTCHours(23, 59, 59, 999);
  const d2Start = new Date('2019-03-06');
  const d2End = new Date('2019-03-06');
  d2Start.setUTCHours(0, 0, 0, 0);
  d2End.setUTCHours(23, 59, 59, 999);
  const d3Start = new Date('2019-03-09');
  const d3End = new Date('2019-03-09');
  d3Start.setUTCHours(0, 0, 0, 0);
  d3End.setUTCHours(23, 59, 59, 999);

  const series = [
    {
      data: [
        {
          x: 'Programming',
          y: [d1Start.getTime(), d1End.getTime()],
          fillColor: '#008FFB',
          strokeColor: 'none',
        },
        {
          x: 'Programming',
          y: [d2Start.getTime(), d2End.getTime()],
          fillColor: '#008FFB',
          strokeColor: 'none',
        },
        {
          x: 'Programming',
          y: [d3Start.getTime(), d3End.getTime()],
          fillColor: '#008FFB',
          strokeColor: 'none',
        },
        {
          x: 'English',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime(),
          ],
          fillColor: '#00E396',
          strokeColor: 'none',
        },
      ],
    },
  ];
  return (
    <div>
      <Chart
        series={series}
        type="rangeBar"
        height={height}
        options={{
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '80%',
            },
          },
          xaxis: {
            type: 'datetime',
            labels: {
              style: {
                cssClass: 'timelineMultiRange__label',
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                cssClass: 'timelineMultiRange__label',
              },
            },
          },
          stroke: {
            width: 1,
          },
          fill: {
            type: 'solid',
            opacity: 0.9,
          },
        }}
      />
    </div>
  );
};

export default TimelineMultiRange;
