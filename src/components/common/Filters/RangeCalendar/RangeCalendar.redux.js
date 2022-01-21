import { connect } from 'react-redux';

import RangeCalendar from './RangeCalendar';

const mapStateToProps = (state) => ({
  uiStateMode: state.uiState.mode,
});

export default connect(mapStateToProps)(RangeCalendar);
