import { connect } from 'react-redux';

import RequireAuth from './RequireAuth';

const mapStateToProps = (state) => ({
  logged: state.currentUser.logged,
});

export default connect(mapStateToProps)(RequireAuth);
