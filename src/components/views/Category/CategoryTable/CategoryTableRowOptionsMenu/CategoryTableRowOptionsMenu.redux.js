import { connect } from 'react-redux';

import { setSelectedCategories } from '../../../../../store/categories/categories.actions';

import CategoryTableRowOptionsMenu from './CategoryTableRowOptionsMenu';

const mapDispatchToProps = {
  setSelectedCategories,
};

export default connect(null, mapDispatchToProps)(CategoryTableRowOptionsMenu);
