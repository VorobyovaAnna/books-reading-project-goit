import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMatchMedia } from 'hooks';

const MobileRoute = ({ children, redirectTo }) => {
  const { isMobile } = useMatchMedia();

  return isMobile ? children : <Navigate to={redirectTo} />;
};

MobileRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default MobileRoute;
