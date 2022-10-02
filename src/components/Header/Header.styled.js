import styled from 'styled-components';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  width: 28px;
  height: 27px;

  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.35;

  color: ${p => p.theme.colors.mainFontColor};

  &:hover {
    color: ${p => p.theme.colors.mainFontColor};
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33px;
  height: 33px;
  margin-right: 8px;

  border-radius: 50%;
  color: ${p => p.theme.colors.placeholderFontColor};

  transition: background-color ${p => p.theme.transition.transitionFunction};

  &:hover {
    background-color: ${p => p.theme.colors.inputBackground};
  }
  &.active {
    background-color: ${p => p.theme.colors.inputBackground};
  }
`;

export const StatsLink = styled(StyledLink)`
  position: relative;
  margin-right: 22px;

  &:after {
    position: absolute;
    bottom: 0;
    right: -8px;

    content: '';

    width: 1px;
    height: 33px;
    background: #e0e5eb;
  }
`;

export const UserLogo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33px;
  height: 33px;
  margin: 0;
  margin-right: 14px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;

  border-radius: 50%;
  background-color: ${p => p.theme.colors.inputBackground};
  color: ${p => p.theme.colors.mainFontColor};
`;

export const ExitButton = styled(Button)`
  width: 40px;
  height: 17px;
  padding: 0;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;

  text-decoration: underline;
  color: ${p => p.theme.colors.mainFontColor};
  border: none;

  transition: color ${p => p.theme.transition.transitionFunction};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;

export const UserName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;

  color: ${p => p.theme.colors.mainFontColor};
`;

export const BackgroundWrapper = styled.div`
  background-color: ${p => p.theme.colors.white};
  border: 1px solid rgba(224, 229, 235, 1);
  backdrop-filter: blur(2px);
  box-shadow: ${p => p.theme.shadows.header};
`;
