import { connect } from 'react-redux';

import { ACTIVITY_MODAL } from '../../../../constants/modalTypes';
import { hideModal } from '../../../../store/uiState/uiState.actions';
import {
  createActivity,
  updateActivity,
} from '../../../../store/activities/activities.actions';

import ActivityModal from './ActivityModal';

const mapStateToProps = (state) => {
  const selectedActivity =
    state.activities.allActivities[state.uiState.modalProps._id] || {};
  return {
    isOpen: state.uiState.modalType === ACTIVITY_MODAL,
    allCategories: state.categories.allCategories,
    allTasks: state.tasks.allTasks,
    selectedActivity,
    selectedCategory:
      state.categories.allCategories[selectedActivity.category_id] || {},
    selectedTask: state.tasks.allTasks[selectedActivity.task_id] || {},
  };
};

const mapDispatchToProps = {
  hideModal,
  createActivity,
  updateActivity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityModal);
