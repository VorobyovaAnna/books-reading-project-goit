import theme from '../../styles/theme';
import styled from 'styled-components';
import device from '../../styles/device';

export const Section = styled.div`
  width: 280px;
  padding: 22px;

  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.header};
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    margin-top: 40px;
    width: 704px;
    padding: 30px 96px;
  }

  @media ${device.mobile} and (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 32px;
  }

  @media ${device.desktop} {
    left: 976px;
    top: 487px;
    width: 288px;
    height: 340px;
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
