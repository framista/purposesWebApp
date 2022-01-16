import React from 'react';
import Chart from 'react-apexcharts';

import { COLOR_PRIMARY } from '../../../../constants/color';

import './Radar.scss';

const Radar = () => {
  return (
    <div className="radar">
      <Chart
        series={[{ data: [10, 20, 50, 123] }]}
        type="radar"
        height={'100%'}
        options={{
          colors: [COLOR_PRIMARY],
          markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: COLOR_PRIMARY,
            strokeWidth: 2,
          },
          xaxis: {
            categories: ['Apples', 'Oranges', 'Bananas', 'Berries'],
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
          tooltip: {
            enabled: true,
            y: {
              formatter: undefined,
              title: {
                formatter: () => '',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Radar;
