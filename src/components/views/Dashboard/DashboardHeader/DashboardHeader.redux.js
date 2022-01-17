import { connect } from 'react-redux';

import DashboardHeader from './DashboardHeader';

import { showModal } from '../../../../store/uiState/uiState.actions';
import { changeSearchValueForDashboard } from '../../../../store/dashboard/dashboard.actions';

const mapStateToProps = (state) => ({
  searchValue: state.dashboard.searchValue,
});

const mapDispatchToProps = {
  showModal,
  changeSearchValueForDashboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
