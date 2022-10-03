import theme from '../../styles/theme';
import styled from 'styled-components';
import device from '../../styles/device';

export const Section = styled.div`
  width: 280px;
  padding: 22px;

  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.header};
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 704px;
  }
  @media ${device.desktop} {
    width: 288px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 12px;
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
    line-height: 17px;
  }
`;
