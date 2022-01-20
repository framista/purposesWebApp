import { connect } from 'react-redux';

import DashboardCharts from './DashboardCharts';

const mapStateToProps = (state) => ({
  dailyPoints: state.statistics.dailyPoints,
});

export default connect(mapStateToProps)(DashboardCharts);
