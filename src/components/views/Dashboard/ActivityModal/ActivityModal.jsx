import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../common/Form/Modal/Modal.redux';
import { Input, Select } from '../../../common/Form';

import { useInputChange } from '../../../../hooks';
import { getInitialState, getUpdatedState } from './ActivityModal.helpers';
import { createEvent } from '../../../../utils/inputHelpers';

const ActivityModal = (props) => {
  const {
    isOpen,
    hideModal,
    createActivity,
    allCategories,
    allTasks,
    selectedActivity,
    selectedCategory,
    selectedTask,
    updateActivity,
  } = props;
  const [loading, setLoading] = useState(false);
  const [state, handlers] = useInputChange(getInitialState());

  useEffect(() => {
    if (selectedActivity._id)
      handlers.updateState(
        getUpdatedState(selectedActivity, selectedCategory, selectedTask)
      );
  }, [selectedActivity._id]);

  const categoriesOptions = useMemo(
    () => Object.values(allCategories),
    [allCategories]
  );

  const tasksOptions = useMemo(
    () =>
      Object.values(allTasks).filter(
        (task) => task.category_id === state.category._id
      ),
    [state, allTasks]
  );

  const modalTitle = 'Add activity';

  const changeCategory = useCallback((e) => {
    handlers.changeInput(e);
    handlers.changeInput(createEvent('task', {}));
  }, []);

  const changeTask = useCallback((e) => {
    handlers.changeInput(e);
    handlers.changeInput(createEvent('points', e.target.value.points));
  }, []);

  const validateAll = async () => {
    const inputs = ['task', 'category', 'date'];
    const promises = inputs.map((input) =>
      handlers.validateInput(createEvent(input, state[input]))
    );
    const res = await Promise.all(promises);
    return !res.some((error) => error && error !== '');
  };

  const handleSubmit = useCallback(async () => {
    const { errors, ...activity } = state;
    const valid = await validateAll();
    if (!valid) return;
    try {
      setLoading(true);
      if (activity._id) {
        await updateActivity(activity);
      } else {
        await createActivity(activity);
      }
    } finally {
      setLoading(false);
      hideAndClear();
    }
  }, [state]);

  const hideAndClear = useCallback(() => {
    handlers.setInitState();
    hideModal();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={hideAndClear}
      onSubmit={handleSubmit}
      title={modalTitle}
      loading={loading}
    >
      <Select
        errorMessage={state.errors.category}
        id="category"
        placeholder="Choose category of your activity"
        labelText="Category"
        value={state.category}
        onChange={changeCategory}
        options={categoriesOptions}
      />
      <Select
        errorMessage={state.errors.task}
        id="task"
        placeholder="Choose task of your activity"
        labelText="Task"
        value={state.task}
        onChange={changeTask}
        options={tasksOptions}
      />
      <Input
        id="points"
        labelText={`Default points (${state.points})`}
        value={state.points}
        onChange={handlers.changeInput}
        type="range"
        min="1"
        max="100"
      />
      <Input
        errorMessage={state.errors.date}
        id="date"
        labelText="Date"
        value={state.date}
        onChange={handlers.changeInput}
        type="date"
      />
    </Modal>
  );
};

ActivityModal.propTypes = {
  isOpen: PropTypes.bool,
  hideModal: PropTypes.func,
  createActivity: PropTypes.func,
};

export default ActivityModal;
