import { connect } from 'react-redux';

import MultiSelect from './MultiSelect';

const mapStateToProps = (state) => ({
  uiStateMode: state.uiState.mode,
});

export default connect(mapStateToProps)(MultiSelect);
