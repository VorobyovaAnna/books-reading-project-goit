import theme from '../../styles/theme';
import styled from 'styled-components';
import device from '../../styles/device';

export const NumberContainer = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  padding: ${props =>
    props.theme.noBooksLeft ? '44px 30px' : '32px 36px 32px 31px'};

  width: fit-content;

  box-shadow: ${theme.shadows.header};

  background-color: ${theme.colors.white};

  @media ${device.tablet} {
    padding: 0px;
    box-shadow: none;
  }

  @media ${device.desktop} {
    padding: ${props =>
      props.theme.noBooksLeft ? '48px 34px' : '80px 25px 79px 18px'};
    box-shadow: ${theme.shadows.header};
    width: 288px;
    height: 269px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const Item = styled.li`
  max-width: ${props => props.theme.noBooksLeft === false && '63px'};
  text-align: center;
  &:not(:last-child) {
    margin-right: ${props => (props.theme.noBooksLeft ? '20px' : '12px')};
  }

  @media ${device.tablet} {
    max-width: ${props => props.theme.noBooksLeft === false && '100px'};
    &:not(:last-child) {
      ${props => (props.theme.noBooksLeft ? '40px' : '12px')};
    }
  }
  @media ${device.desktop} {
    &:not(:last-child) {
      margin-right: 20px;
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

  width: ${props => (props.theme.noBooksLeft ? '100px' : '63px')};
  height: ${props => (props.theme.noBooksLeft ? '100px' : '63px')};

  margin-bottom: 14px;

  color: ${props => (props.primary ? '#FF6B08' : '#091e3f;')};
  background-color: ${theme.colors.inputBackground};
  box-shadow: ${theme.shadows.goals};

  @media ${device.tablet} {
    height: 60px;
    width: 100px;

    font-size: 40px;
    line-height: 38px;

    margin-bottom: 4px;
  }
  @media ${device.desktop} {
    height: 100px;

    font-size: 42px;
    line-height: 38px;

    margin-bottom: 15px;

    width: ${props => (props.theme.noBooksLeft ? '100px' : '66px')};
    height: ${props => (props.theme.noBooksLeft ? '100px' : '66px')};
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

  width: 280px;
  padding: 18px 29px;

  color: ${theme.colors.white};
  background-color: ${theme.colors.headerBackground};

  @media ${device.tablet} {
    width: 275px;

    margin-right: ${props => (props.theme.noBooksLeft ? '109px' : '20px')};

    padding: 18px 27px 18px 28px;
  }
  @media ${device.desktop} {
    width: 288px;
  }
`;

export const Section = styled.div`
  width: 280px;
  @media ${device.mobile} and (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 40px;
  }

  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    display: flex;
    background-color: ${theme.colors.white};
    margin-top: 36px;
    padding: ${props =>
      props.theme.noBooksLeft ? '20px 52px 8px 28px' : '20px 43px 15px 42px'};
    width: 704px;
    justify-content: center;
    align-items: flex-start;
    box-shadow: ${theme.shadows.header};
  }
  @media ${device.desktop} {
    left: 976px;
    display: block;
    box-shadow: none;
    width: 288px;
  }
`;
