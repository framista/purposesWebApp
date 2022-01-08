import { connect } from 'react-redux';

import UiState from './UiState';

import { setUiStateMode } from '../../../../store/uiState/uiState.actions';

const mapStateToProps = (state) => ({
  uiStateMode: state.uiState.mode,
});

const mapDispatchToProps = {
  setUiStateMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(UiState);
