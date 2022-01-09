import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../common/Form/Modal/Modal.redux';

const CategoryModal = (props) => {
  const { isOpen, hideModal } = props;
  const [loading, setLoading] = useState(true);
  const modalTitle = 'Add category of your purpose';

  return (
    <Modal
      isOpen={isOpen}
      onClose={hideModal}
      title={modalTitle}
      loading={loading}
    >
      <p>sdaf</p>
    </Modal>
  );
};

CategoryModal.propTypes = {
  isOpen: PropTypes.bool,
  hideModal: PropTypes.func,
};

export default CategoryModal;
