// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { getIsAuthenticated } from 'path/to/selector';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  //Розкоментувати селектор після написання Redux
  //const isAuthenticated = useSelector(getIsAuthenticated);
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
