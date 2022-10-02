import styled from 'styled-components';
import device from 'styles/device';
import theme from 'styles/theme';

export const TimerСontainer = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.goals};

  @media ${device.mobile} {
    /* padding: 32px 20px; */
    width: 280px;
    height: 60px;
    left: 20px;
    top: 105px;
  }

  @media ${device.tablet} {
    /* padding: 40px; */
    width: 290px;
    height: 60px;
    left: 78px;
    top: 125px; */
  }

  @media ${device.desktop} {
    width: 290px;
    height: 60px;
    left: 153px;
    top: 113px;
  }
`;

export const TimerHeader = styled.h1`
  position: absolute;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.secondaryFontColor};

  width: 241px;

  @media ${device.mobile} {
    left: 40px;
    top: 80px;
  }

  @media ${device.tablet} {
    left: 103px;
    top: 100px;
  }

  @media ${device.desktop} {
    left: 181px;
    top: 88px;
  }
`;
