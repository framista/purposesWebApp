import { connect } from 'react-redux';

import DashboardCharts from './DashboardCharts';

const mapStateToProps = (state) => ({
  dailyPoints: state.statistics.dailyPoints,
  datesForCategories: state.statistics.datesForCategories,
  selectedCategories: state.categories.selectedCategories,
});

export default connect(mapStateToProps)(DashboardCharts);
