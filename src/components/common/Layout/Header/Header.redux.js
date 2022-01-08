import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = (state) => ({
  logged: state.currentUser.logged,
});

export default connect(mapStateToProps)(Header);
