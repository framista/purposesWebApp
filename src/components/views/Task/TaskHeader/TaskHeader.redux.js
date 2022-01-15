import { connect } from 'react-redux';

import TaskHeader from './TaskHeader';

import { showModal } from '../../../../store/uiState/uiState.actions';
import { changeSearchValueForTask } from '../../../../store/tasks/tasks.actions';

const mapStateToProps = (state) => ({
  searchValue: state.tasks.searchValue,
});

const mapDispatchToProps = {
  showModal,
  changeSearchValueForTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskHeader);
