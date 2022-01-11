import { connect } from 'react-redux';

import CategoryTableHeader from './CategoryTableHeader';

import { changeSortingForCategory } from '../../../../../store/categories/categories.actions';

const mapStateToProps = (state) => ({
  sortingColumn: state.categories.sortingColumn,
  sortingWay: state.categories.sortingWay,
});

const mapDispatchToProps = {
  changeSortingForCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryTableHeader);
