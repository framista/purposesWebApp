import React from 'react';
import PropTypes from 'prop-types';

import Chart from 'react-apexcharts';

import './Area.scss';
import { COLOR_PRIMARY } from '../../../../constants/color';

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
          colors: [COLOR_PRIMARY],
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
