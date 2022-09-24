import styled from 'styled-components';
import device from 'styles/device';

const Container = styled.div`
  margin: 0 auto;

  @media ${device.mobile} {
    width: 320px;
    padding: 0 20px;
  }

  @media ${device.tablet} {
    width: 768px;
    padding: 0 32px;
  }

  @media ${device.desktop} {
    width: 1280px;
    padding: 0 16px;
  }
`;

export default Container;
