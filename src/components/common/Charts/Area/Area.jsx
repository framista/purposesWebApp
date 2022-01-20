import React from 'react';
import PropTypes from 'prop-types';

import Chart from 'react-apexcharts';

import './Area.scss';

const Area = ({ height, data }) => {
  return (
    <div className="area">
      <Chart
        series={[
          {
            name: 'series1',
            data,
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

Area.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  height: PropTypes.string,
};

export default Area;
