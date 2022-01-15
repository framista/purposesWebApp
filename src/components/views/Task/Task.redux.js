import { connect } from 'react-redux';

import { getTaskRouteData } from '../../../store/tasks/tasks.actions';

import Task from './Task';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getTaskRouteData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
