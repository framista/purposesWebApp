import { connect } from 'react-redux';

import TaskTableHeader from './TaskTableHeader';

import { changeSortingForTask } from '../../../../../store/tasks/tasks.actions';

const mapStateToProps = (state) => ({
  sortingColumn: state.tasks.sortingColumn,
  sortingWay: state.tasks.sortingWay,
});

const mapDispatchToProps = {
  changeSortingForTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTableHeader);
