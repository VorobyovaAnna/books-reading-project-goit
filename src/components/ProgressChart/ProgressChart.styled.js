import styled from 'styled-components';
import device from '../../styles/device';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 290px;
  box-shadow: ${theme.shadows.header};
  @media ${device.tablet} {
    width: 704px;
    height: 340px;
  }
  @media ${device.desktop} {
    width: 928px;
    height: 340px;
  }
`;

export const GraphContainer = styled.div`
  width: 270px;
  height: 240px;
  @media ${device.tablet} {
    width: 600px;
    height: 300px;
  }
  @media ${device.desktop} {
    width: 800px;
    height: 300px;
  }
`;
