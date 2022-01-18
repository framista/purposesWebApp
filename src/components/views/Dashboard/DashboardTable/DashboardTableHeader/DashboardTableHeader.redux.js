import { connect } from 'react-redux';

import DashboardTableHeader from './DashboardTableHeader';

import { changeSortingForDashboard } from '../../../../../store/dashboard/dashboard.actions';

const mapStateToProps = (state) => ({
  sortingColumn: state.dashboard.sortingColumn,
  sortingWay: state.dashboard.sortingWay,
});

const mapDispatchToProps = {
  changeSortingForDashboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTableHeader);
