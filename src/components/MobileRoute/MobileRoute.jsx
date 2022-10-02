import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMatchMedia } from 'hooks';

const MobileRoute = ({ children }) => {
  const { isMobile } = useMatchMedia();

  return isMobile ? children : <Navigate to="/library" />;
};

MobileRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileRoute;
