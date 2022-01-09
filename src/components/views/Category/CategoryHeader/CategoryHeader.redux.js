import { connect } from 'react-redux';

import CategoryHeader from './CategoryHeader';

import { showModal } from '../../../../store/uiState/uiState.actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryHeader);
