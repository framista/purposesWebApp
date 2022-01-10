import { connect } from 'react-redux';

import { CATEGORY_MODAL } from '../../../../constants/modalTypes';
import { hideModal } from '../../../../store/uiState/uiState.actions';
import { createCategory } from '../../../../store/categories/categories.actions';

import CategoryModal from './CategoryModal';

const mapStateToProps = (state) => ({
  isOpen: state.uiState.modalType === CATEGORY_MODAL,
});

const mapDispatchToProps = {
  hideModal,
  createCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);
