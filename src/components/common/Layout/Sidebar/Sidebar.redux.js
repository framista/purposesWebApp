import { connect } from 'react-redux';

import { setSidebarOpen } from '../../../../store/uiState/uiState.actions';
import Sidebar from './Sidebar';

const mapStateToProps = (state) => ({
  logged: state.currentUser.logged,
  sidebarOpen: state.uiState.sidebarOpen,
});

const mapDispatchToProps = {
  setSidebarOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
