import PropTypes from 'prop-types';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children, logged }) => {
  const location = useLocation();

  return logged ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
};

RequireAuth.propTypes = {
  children: PropTypes.node,
  logged: PropTypes.bool,
};

export default RequireAuth;
