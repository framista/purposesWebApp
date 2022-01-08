import { connect } from 'react-redux';

import Auth from './Auth';

import { loginUser } from '../../../store/currentUser/currentUser.actions';

const mapStateToProps = (state) => ({
  logged: state.currentUser.logged,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
