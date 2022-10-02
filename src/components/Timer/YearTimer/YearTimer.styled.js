import styled from 'styled-components';
import device from 'styles/device';
import theme from 'styles/theme';

export const TimerСontainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.goals};

  @media ${device.mobile} {
    width: 280px;
    height: 60px;
    left: 20px;
    top: 105px;
  }

  @media ${device.tablet} {
    width: 290px;
    height: 60px;
    left: 78px;
    top: 125px;
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

export const Timer = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 38px;
  color: ${theme.colors.timer};

  text-align: center;
  display: flex;
  justify-content: space-around;
  padding-right: 20px;
  padding-left: 20px;
`;

export const LabelTimer = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: ${theme.colors.secondaryFontColor};

  text-align: center;
  display: flex;
  justify-content: space-around;
  padding-right: 10px;
  padding-left: 10px;
`;
