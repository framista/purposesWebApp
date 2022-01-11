import { connect } from 'react-redux';

import { getCategoryRouteData } from '../../../store/categories/categories.actions';

import Category from './Category';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getCategoryRouteData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
