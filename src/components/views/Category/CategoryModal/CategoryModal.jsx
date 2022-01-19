import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../common/Form/Modal/Modal.redux';
import { Input, TextArea } from '../../../common/Form';

import { useInputChange } from '../../../../hooks';
import { getInitialState, getUpdatedState } from './CategoryModal.helpers';
import { createEvent } from '../../../../utils/inputHelpers';

const CategoryModal = (props) => {
  const { isOpen, hideModal, createCategory, selectedCategory } = props;
  const [loading, setLoading] = useState(false);
  const [state, handlers] = useInputChange(getInitialState());

  useEffect(() => {
    if (selectedCategory._id)
      handlers.updateState(getUpdatedState(selectedCategory));
  }, [selectedCategory._id]);

  const modalTitle = 'Add category for your new purpose';

  const validateAll = async () => {
    const inputs = ['categoryName', 'description'];
    const promises = inputs.map((input) =>
      handlers.validateInput(createEvent(input, state[input]))
    );
    const res = await Promise.all(promises);
    return !res.some((error) => error && error !== '');
  };

  const handleSubmit = useCallback(async () => {
    const { errors, ...category } = state;
    const valid = await validateAll();
    if (!valid) return;
    try {
      setLoading(true);
      await createCategory(category);
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
        errorMessage={state.errors.categoryName}
        id="categoryName"
        placeholder="Programming"
        labelText="Name of category"
        value={state.categoryName}
        onChange={handlers.changeInput}
        autoFocus
      />
      <Input
        id="color"
        labelText="Color"
        value={state.color}
        onChange={handlers.changeInput}
        type="color"
      />
      <Input
        id="points"
        labelText={`Weekly points (${state.points})`}
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

CategoryModal.propTypes = {
  isOpen: PropTypes.bool,
  hideModal: PropTypes.func,
  createCategory: PropTypes.func,
};

export default CategoryModal;
