import { connect } from 'react-redux';

import OptionsMenu  from './OptionsMenu';

const mapStateToProps = (state) => ({
  uiStateMode: state.uiState.mode,
});

export default connect(mapStateToProps)(OptionsMenu);
