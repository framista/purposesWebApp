import { connect } from 'react-redux';

import { getDashboardRouteData } from '../../../store/dashboard/dashboard.actions';

import Dashboard from './Dashboard';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  getDashboardRouteData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
