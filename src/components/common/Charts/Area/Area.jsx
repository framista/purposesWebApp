import React from 'react';
import Chart from 'react-apexcharts';

import './Area.scss';

const Area = ({ height }) => {
  return (
    <div className="area">
      <Chart
        series={[
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100],
          },
        ]}
        type="area"
        height={height}
        options={{
          xaxis: {
            labels: {
              style: {
                cssClass: 'area__label',
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                cssClass: 'area__label',
              },
            },
          },
          tooltip: {
            enabled: false,
          },
        }}
      />
    </div>
  );
};

export default Area;
