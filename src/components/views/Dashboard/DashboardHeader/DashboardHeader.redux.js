import { connect } from 'react-redux';

import DashboardHeader from './DashboardHeader';

import { showModal } from '../../../../store/uiState/uiState.actions';
import {
  changeSearchValueForDashboard,
  getDashboardRouteData,
} from '../../../../store/dashboard/dashboard.actions';

const mapStateToProps = (state) => ({
  searchValue: state.dashboard.searchValue,
});

const mapDispatchToProps = {
  showModal,
  changeSearchValueForDashboard,
  getDashboardRouteData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
