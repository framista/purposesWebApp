import React from 'react';
import Chart from 'react-apexcharts';

const RadialMultiple = ({ height }) => {
  return (
    <div>
      <Chart
        series={[10, 20, 50, 123]}
        type="radialBar"
        height={height}
        options={{
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
          colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
          stroke: {
            width: 1,
          },
        }}
      />
    </div>
  );
};

export default RadialMultiple;
