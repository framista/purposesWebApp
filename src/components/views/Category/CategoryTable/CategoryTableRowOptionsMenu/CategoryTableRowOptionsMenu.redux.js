import { connect } from 'react-redux';

import { setSelectedCategories } from '../../../../../store/categories/categories.actions';
import { showModal } from '../../../../../store/uiState/uiState.actions';

import CategoryTableRowOptionsMenu from './CategoryTableRowOptionsMenu';

const mapDispatchToProps = {
  setSelectedCategories,
  showModal,
};

export default connect(null, mapDispatchToProps)(CategoryTableRowOptionsMenu);
