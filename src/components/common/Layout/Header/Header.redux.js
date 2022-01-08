import { connect } from 'react-redux';

import Header from './Header';

import { toogleUiStateMode } from '../../../../store/uiState/uiState.actions';

const mapStateToProps = (state) => ({
  logged: state.currentUser.logged,
  uiStateMode: state.uiState.mode,
});

const mapDispatchToProps = {
  toogleUiStateMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
