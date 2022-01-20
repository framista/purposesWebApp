import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

import './TimelineMultiRange.scss';

const TimelineMultiRange = ({ height, data }) => (
  <div>
    <Chart
      series={[{ data }]}
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
        tooltip: {
          enabled: false,
        },
      }}
    />
  </div>
);

TimelineMultiRange.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string,
      fillColor: PropTypes.string,
      strokeColor: PropTypes.string,
    })
  ),
};

export default TimelineMultiRange;
