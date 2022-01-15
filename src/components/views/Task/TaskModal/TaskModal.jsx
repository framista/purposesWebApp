import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../common/Form/Modal/Modal.redux';
import { Input, Select, TextArea } from '../../../common/Form';

import { useInputChange } from '../../../../hooks';
import { getInitialState } from './TaskModal.helpers';
import { createEvent } from '../../../../utils/inputHelpers';

const TaskModal = (props) => {
  const { isOpen, hideModal, createTask, allCategories } = props;
  const [loading, setLoading] = useState(false);
  const [state, handlers] = useInputChange(getInitialState());
  const categoriesOptions = useMemo(
    () => Object.values(allCategories),
    [allCategories]
  );
  const modalTitle = 'Add task';

  const validateAll = async () => {
    const inputs = ['taskName', 'description', 'category'];
    const promises = inputs.map((input) =>
      handlers.validateInput(createEvent(input, state[input]))
    );
    const res = await Promise.all(promises);
    return !res.some((error) => error && error !== '');
  };

  const handleSubmit = useCallback(async () => {
    const { errors, ...task } = state;
    const valid = await validateAll();
    if (!valid) return;
    try {
      setLoading(true);
      await createTask(task);
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
      <Input
        errorMessage={state.errors.taskName}
        id="taskName"
        placeholder="Do excercise on codewars"
        labelText="Name of task"
        value={state.taskName}
        onChange={handlers.changeInput}
        autoFocus
      />
      <Select
        errorMessage={state.errors.category}
        id="category"
        placeholder="Choose category of your task"
        labelText="Category"
        value={state.category}
        onChange={handlers.changeInput}
        options={categoriesOptions}
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
      <TextArea
        errorMessage={state.errors.description}
        id="description"
        labelText="Description"
        value={state.description}
        onChange={handlers.changeInput}
      />
    </Modal>
  );
};

TaskModal.propTypes = {
  isOpen: PropTypes.bool,
  hideModal: PropTypes.func,
  createTask: PropTypes.func,
};

export default TaskModal;
