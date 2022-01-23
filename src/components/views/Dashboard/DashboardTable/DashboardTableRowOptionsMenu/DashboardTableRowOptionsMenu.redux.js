import { connect } from 'react-redux';

import { showModal } from '../../../../../store/uiState/uiState.actions';

import DashboardTableRowOptionsMenu from './DashboardTableRowOptionsMenu';

const mapDispatchToProps = {
  showModal,
};

export default connect(null, mapDispatchToProps)(DashboardTableRowOptionsMenu);
