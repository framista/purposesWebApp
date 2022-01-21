import { connect } from 'react-redux';

import { changeDates } from '../../../../store/dates/dates.actions';

import RangeCalendar from './RangeCalendar';

const mapStateToProps = (state) => ({
  uiStateMode: state.uiState.mode,
  startDate: state.dates.startDate,
  endDate: state.dates.endDate,
});

const mapDispatchToProps = {
  changeDates,
};

export default connect(mapStateToProps, mapDispatchToProps)(RangeCalendar);
