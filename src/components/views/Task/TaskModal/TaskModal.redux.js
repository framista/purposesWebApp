import { connect } from 'react-redux';

import { TASK_MODAL } from '../../../../constants/modalTypes';
import { hideModal } from '../../../../store/uiState/uiState.actions';
import { createTask, updateTask } from '../../../../store/tasks/tasks.actions';

import TaskModal from './TaskModal';

const mapStateToProps = (state) => {
  const selectedTask = state.tasks.allTasks[state.uiState.modalProps._id] || {};
  return {
    isOpen: state.uiState.modalType === TASK_MODAL,
    allCategories: state.categories.allCategories,
    selectedTask,
    selectedCategory:
      state.categories.allCategories[selectedTask.category_id] || {},
  };
};

const mapDispatchToProps = {
  hideModal,
  createTask,
  updateTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);
