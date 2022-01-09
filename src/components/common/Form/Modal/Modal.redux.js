import { connect } from 'react-redux';

import Modal from './Modal';

const mapPropsToState = (state) => ({
  uiStateMode: state.uiState.mode,
});

export default connect(mapPropsToState)(Modal);
