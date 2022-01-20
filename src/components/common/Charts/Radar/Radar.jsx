import React from 'react';
import Chart from 'react-apexcharts';

import { COLOR_PRIMARY } from '../../../../constants/color';

import './Radar.scss';

const Radar = ({ height, data }) => {
  return (
    <div className="radar">
      <Chart
        series={[{ data: data.data }]}
        type="radar"
        height={height}
        options={{
          colors: [COLOR_PRIMARY],
          markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: COLOR_PRIMARY,
            strokeWidth: 2,
          },
          xaxis: {
            categories: data.labels,
            labels: {
              style: {
                cssClass: 'radar__label',
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                cssClass: 'radar__label',
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
