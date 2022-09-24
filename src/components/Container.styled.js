import styled from 'styled-components';
import device from '../CONSTANTS/device';

const Container = styled.div`
  margin: 0 auto;

  @media ${device.mobile} {
    width: 280px;
    padding: 0 20px;
  }

  @media ${device.tablet} {
    width: 704px;
    padding: 0 32px;
  }

  @media ${device.desktop} {
    width: 1248px;
    padding: 0 16px;
  }
`;

export default Container;
