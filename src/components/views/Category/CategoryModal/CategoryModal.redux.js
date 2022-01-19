import { connect } from 'react-redux';

import { CATEGORY_MODAL } from '../../../../constants/modalTypes';
import { hideModal } from '../../../../store/uiState/uiState.actions';
import { createCategory } from '../../../../store/categories/categories.actions';

import CategoryModal from './CategoryModal';

const mapStateToProps = (state) => ({
  isOpen: state.uiState.modalType === CATEGORY_MODAL,
  selectedCategory:
    state.categories.allCategories[state.uiState.modalProps._id] || {},
});

const mapDispatchToProps = {
  hideModal,
  createCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);
