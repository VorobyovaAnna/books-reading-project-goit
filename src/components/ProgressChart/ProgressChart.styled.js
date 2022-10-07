import styled from 'styled-components';
import device from '../../styles/device';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 290px;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.header};
  @media ${device.tablet} {
    margin-top: 40px;
    width: 704px;
    height: 340px;
  }
  @media ${device.desktop} {
    width: 928px;
    height: 340px;
    margin-top: 0;
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
