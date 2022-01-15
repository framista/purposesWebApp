import { connect } from 'react-redux';

import TaskTable from './TaskTable';

const mapStateToProps = (state) => ({
  searchValue: state.tasks.searchValue,
  allTasks: state.tasks.allTasks,
  allCategories: state.categories.allCategories,
  sortingColumn: state.tasks.sortingColumn,
  sortingWay: state.tasks.sortingWay,
});

export default connect(mapStateToProps)(TaskTable);
