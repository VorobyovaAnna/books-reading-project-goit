// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { getIsAuthenticated } from 'path/to/selector';
import PropTypes from 'prop-types';

const PublicRoute = ({ children, restricted = false }) => {
  // Розкоментувати після написання Redux
  //   const isAuthenticated = useSelector(getIsAuthenticated);
  const isAuthenticated = false;
  const shouldRedirect = isAuthenticated && restricted;

  return shouldRedirect ? <Navigate to="/library" replace={true} /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool,
};

export default PublicRoute;
