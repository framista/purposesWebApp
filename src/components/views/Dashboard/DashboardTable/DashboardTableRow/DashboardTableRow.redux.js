import { connect } from 'react-redux';

import DashboardTableRow from './DashboardTableRow';

const mapStateToProps = (state, ownProps) => ({
  category: state.categories.allCategories[ownProps?.activity?.category_id] || {},
  task: state.tasks.allTasks[ownProps?.activity?.task_id] || {},
});

export default connect(mapStateToProps)(DashboardTableRow);
