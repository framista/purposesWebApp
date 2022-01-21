import { connect } from 'react-redux';

import About from './About';

const mapStateToProps = (state) => ({
  logged: state.currentUser.logged,
});

export default connect(mapStateToProps)(About);
