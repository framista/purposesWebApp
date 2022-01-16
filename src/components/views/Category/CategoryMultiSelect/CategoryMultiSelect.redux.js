import { connect } from 'react-redux';

import {
  toggleCategory,
  deselectAllCategories,
  selectAllCategorieries,
  setSearchCategories,
} from '../../../../store/categories/categories.actions';

import CategoryMultiSelect from './CategoryMultiSelect';

const mapStateToProps = (state) => ({
  allCategories: state.categories.allCategories,
  selectedCategories: state.categories.selectedCategories,
  searchCategory: state.categories.searchCategory,
});

const mapDispatchToProps = {
  toggleCategory,
  deselectAllCategories,
  selectAllCategorieries,
  setSearchCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryMultiSelect);
