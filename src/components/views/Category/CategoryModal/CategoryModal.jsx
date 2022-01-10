import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../common/Form/Modal/Modal.redux';
import { Input, TextArea } from '../../../common/Form';

import { useInputChange } from '../../../../hooks';
import { getInitialState } from './CategoryModal.helpers';

const CategoryModal = (props) => {
  const { isOpen, hideModal, createCategory } = props;
  const [loading, setLoading] = useState(false);
  const [state, handlers] = useInputChange(getInitialState());

  const modalTitle = 'Add category for your new purpose';

  const handleSubmit = useCallback(async () => {
    const { errors, ...category } = state;
    try {
      setLoading(true);
      await createCategory(category);
    } finally {
      setLoading(false);
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
        errorMessage={state.errors.name}
        id="name"
        placeholder="Programming"
        labelText="Name"
        value={state.name}
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
};

export default CategoryModal;
