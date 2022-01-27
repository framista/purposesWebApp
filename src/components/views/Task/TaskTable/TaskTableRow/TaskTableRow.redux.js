import { connect } from 'react-redux';

import { showModal } from '../../../../../store/uiState/uiState.actions';

import TaskTableRow from './TaskTableRow';

const mapStateToProps = (state, ownProps) => ({
  category: state.categories.allCategories[ownProps?.task?.category_id] || {},
});

const mapDispatchToProps = {
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTableRow);
