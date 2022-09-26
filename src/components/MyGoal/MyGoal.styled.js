import theme from '../../styles/theme';
import styled from 'styled-components';
import device from '../../styles/device';

export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 44px 30px;
  width: fit-content;

  box-shadow: ${theme.shadows.header};

  background-color: ${theme.colors.white};

  @media ${device.tablet} {
    padding: 0px;
    box-shadow: none;
  }

  @media ${device.desktop} {
    padding: 48px 34px;
    box-shadow: ${theme.shadows.header};
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }

  @media ${device.tablet} {
    &:not(:last-child) {
      margin-right: 40px;
      margin-top: 20px;
      margin-bottom: 8px;
    }
  }
  @media ${device.tablet} {
    &:not(:last-child) {
      margin-right: 20px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
`;

export const Number = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 38px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  margin-bottom: 14px;

  color: #091e3f;
  background-color: ${theme.colors.inputBackground};
  box-shadow: ${theme.shadows.goals};

  @media ${device.tablet} {
    height: 60px;

    font-size: 40px;
    line-height: 38px;

    margin-bottom: 0px;
  }
  @media ${device.desktop} {
    height: 100px;

    font-size: 42px;
    line-height: 38px;

    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  color: ${theme.colors.secondaryFontColor};

  font-size: 11px;
  line-height: 13px;

  @media ${device.tablet} {
    font-size: 11px;
    line-height: 13px;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  padding: 18px 29px;

  color: ${theme.colors.white};
  background-color: ${theme.colors.headerBackground};

  @media ${device.tablet} {
    height: 60px;
    margin-right: 109px;
    margin-top: 23px;
    margin-bottom: 22px;
  }
  @media ${device.desktop} {
    margin: 0;
  }
`;

export const Section = styled.div`
  width: 280px;
  @media ${device.tablet} {
    width: 704px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.header};
  }
  @media ${device.desktop} {
    display: block;
    background-color: ${theme.colors.white};
    box-shadow: none;
    width: 288px;
  }
`;
