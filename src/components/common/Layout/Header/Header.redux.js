import { connect } from 'react-redux';

import Header from './Header';

import {
  toogleUiStateMode,
  toggleSidebarOpen,
} from '../../../../store/uiState/uiState.actions';
import { logoutUser } from '../../../../store/currentUser/currentUser.actions';

const mapStateToProps = (state) => ({
  logged: state.currentUser.logged,
  uiStateMode: state.uiState.mode,
});

const mapDispatchToProps = {
  toogleUiStateMode,
  logoutUser,
  toggleSidebarOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
