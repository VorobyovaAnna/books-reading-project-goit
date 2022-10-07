import { Wrapper } from './Loader.styled';
import PacmanLoader from 'react-spinners/PacmanLoader';
import theme from 'styles/theme';

const Loader = () => {
  return (
    <Wrapper>
      <PacmanLoader color={theme.colors.accentColor} />
    </Wrapper>
  );
};

export default Loader;
