import { connect } from 'react-redux';

import Sidebar from './Sidebar';

const mapStateToProps = (state) => ({
  logged: state.currentUser.logged,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
