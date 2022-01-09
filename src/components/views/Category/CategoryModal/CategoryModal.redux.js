import { connect } from 'react-redux';

import { CATEGORY_MODAL } from '../../../../constants/modalTypes';
import { hideModal } from '../../../../store/uiState/uiState.actions';

import CategoryModal from './CategoryModal';

const mapStateToProps = (state) => ({
  isOpen: state.uiState.modalType === CATEGORY_MODAL,
});

const mapDispatchToProps = {
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal);
