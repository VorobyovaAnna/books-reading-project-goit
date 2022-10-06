import styled from 'styled-components';
import device from 'styles/device';
import theme from 'styles/theme';

export const GoalTimerWrapper = styled.div`
  @media ${device.mobile} and (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 24px;
  }
`;

export const TimerСontainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.goals};

  @media ${device.mobile} {
    width: 280px;
    height: 60px;
    left: 20px;
    top: 214px;
  }

  @media ${device.tablet} {
    width: 290px;
    height: 60px;
    left: 400px;
    top: 125px;
  }

  @media ${device.desktop} {
    width: 290px;
    height: 60px;
    left: 517px;
  }
`;

export const TimerHeader = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.secondaryFontColor};

  width: 247px;
  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
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
