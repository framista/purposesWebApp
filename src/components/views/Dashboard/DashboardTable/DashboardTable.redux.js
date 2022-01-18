import { connect } from 'react-redux';

import DashboardTable from './DashboardTable';

const mapStateToProps = (state) => ({
  searchValue: state.dashboard.searchValue,
  allTasks: state.tasks.allTasks,
  allCategories: state.categories.allCategories,
  allActivities: state.activities.allActivities,
  sortingColumn: state.dashboard.sortingColumn,
  sortingWay: state.dashboard.sortingWay,
  selectedCategories: state.categories.selectedCategories,
});

export default connect(mapStateToProps)(DashboardTable);
