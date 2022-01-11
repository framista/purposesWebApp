import { connect } from 'react-redux';

import CategoryTable from './CategoryTable';

const mapStateToProps = (state) => ({
  searchValue: state.categories.searchValue,
  allCategories: state.categories.allCategories,
  sortingColumn: state.categories.sortingColumn,
  sortingWay: state.categories.sortingWay,
});

export default connect(mapStateToProps)(CategoryTable);
