import { connect } from 'react-redux';

import CategoryHeader from './CategoryHeader';

import { showModal } from '../../../../store/uiState/uiState.actions';
import { changeSearchValueForCategory } from '../../../../store/categories/categories.actions';

const mapStateToProps = (state) => ({
  searchValue: state.categories.searchValue,
});

const mapDispatchToProps = {
  showModal,
  changeSearchValueForCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryHeader);
