import { connect } from 'react-redux';

import { TASK_MODAL } from '../../../../constants/modalTypes';
import { hideModal } from '../../../../store/uiState/uiState.actions';
import { createTask } from '../../../../store/tasks/tasks.actions';

import TaskModal from './TaskModal';

const mapStateToProps = (state) => ({
  isOpen: state.uiState.modalType === TASK_MODAL,
  allCategories: state.categories.allCategories,
});

const mapDispatchToProps = {
  hideModal,
  createTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskModal);
