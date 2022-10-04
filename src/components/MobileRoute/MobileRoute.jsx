import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useMatchMedia } from 'hooks';
import AboutApp from 'components/Signup/AboutApp';

const MobileRoute = () => {
  const { isMobile } = useMatchMedia();

  return isMobile ? <AboutApp /> : <Navigate to="/library" />;
};

// MobileRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default MobileRoute;
