import { connect } from 'react-redux';

import { ACTIVITY_MODAL } from '../../../../constants/modalTypes';
import { hideModal } from '../../../../store/uiState/uiState.actions';
import { createTask } from '../../../../store/tasks/tasks.actions';

import ActivityModal from './ActivityModal';

const mapStateToProps = (state) => ({
  isOpen: state.uiState.modalType === ACTIVITY_MODAL,
  allCategories: state.categories.allCategories,
  allTasks: state.tasks.allTasks,
});

const mapDispatchToProps = {
  hideModal,
  createTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityModal);
