import { connect } from 'react-redux';

import {
  toggleCategory,
  deselectAllCategories,
  selectAllCategorieries,
} from '../../../../store/categories/categories.actions';

import CategoryMultiSelect from './CategoryMultiSelect';

const mapStateToProps = (state) => ({
  allCategories: state.categories.allCategories,
  selectedCategories: state.categories.selectedCategories,
});

const mapDispatchToProps = {
  toggleCategory,
  deselectAllCategories,
  selectAllCategorieries,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryMultiSelect);
