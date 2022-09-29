import styled from 'styled-components';
import device from 'styles/device';
import { theme } from 'styles';
import listStyleImage from 'images/svg/list-style-image.svg';

export const AboutAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};

  @media ${device.mobile} {
    padding: 16px 46px;
  }

  @media ${device.tablet} {
    padding: 71px 121px;
  }

  @media ${device.desktop} {
    padding: 266px 167px;
  }
`;

export const AppName = styled.h2`
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 1.12;

  @media ${device.mobile} {
    margin-bottom: 32px;
  }

  @media ${device.tablet} {
    margin-bottom: 48px;
  }

  @media ${device.desktop} {
    margin-bottom: 48px;
  }
`;

export const BulletsTitle = styled.h3`
  align-self: flex-start;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
`;

export const BulletList = styled.ul`
  align-self: flex-start;
  list-style-image: url(${listStyleImage});
`;

export const Bullet = styled.li``;
