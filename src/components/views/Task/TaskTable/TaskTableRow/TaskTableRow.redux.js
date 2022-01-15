import { connect } from 'react-redux';

import TaskTableRow from './TaskTableRow';

const mapStateToProps = (state, ownProps) => ({
  category: state.categories.allCategories[ownProps?.task?.category_id] || {},
});

export default connect(mapStateToProps)(TaskTableRow);
