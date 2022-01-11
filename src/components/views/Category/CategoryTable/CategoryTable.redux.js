import { connect } from 'react-redux';

import CategoryTable from './CategoryTable';

const mapStateToProps = (state) => ({
  searchValue: state.categories.searchValue,
  allCategories: state.categories.allCategories,
});

export default connect(mapStateToProps)(CategoryTable);
