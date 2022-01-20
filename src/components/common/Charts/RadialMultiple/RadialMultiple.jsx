import React from 'react';
import Chart from 'react-apexcharts';

const RadialMultiple = ({ height, data }) => (
  <div>
    <Chart
      series={data.data}
      type="radialBar"
      height={height}
      options={{
        labels: data.labels,
        colors: data.colors,
        stroke: {
          width: 1,
        },
      }}
    />
  </div>
);

export default RadialMultiple;
