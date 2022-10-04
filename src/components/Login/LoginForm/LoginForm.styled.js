import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Form, Field, ErrorMessage } from 'formik';

import device from 'styles/device';

import mobileBackground from 'images/auth-background/login-background-mob.jpg';
import tabletBackground from 'images/auth-background/login-background-tablet.jpg';
import desktopBackground from 'images/auth-background/login-background-desktop.jpg';

export const FormWrapper = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-repeat: no-repeat;
  background-position: center;
  font-family: Montserrat;

  @media ${device.mobile} {
    background-image: url(${mobileBackground});
  }

  @media ${device.tablet} {
    padding: 65px;
    background-image: url(${tabletBackground});
  }
  @media ${device.desktop} {
    padding: 158px 75px;
    background-image: url(${desktopBackground});
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #091e3fcc;
`;

export const StyledForm = styled(Form)`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.mobile} {
    padding: 32px 20px;
    width: 320px;
  }

  @media ${device.tablet} {
    padding: 40px;
    width: 400px;
    background-color: ${p => p.theme.colors.white};
  }

  @media ${device.desktop} {
    width: 400px;
  }
`;

export const GoogleButton = styled.a`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 28px;
  padding: 8px 14px;
  width: 150px;
  height: 40px;
  outline: none;
  border: none;
  color: ${p => p.theme.colors.googleFontColor};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  background-color: ${p => p.theme.colors.inputBackground};
  box-shadow: ${p => p.theme.shadows.hero};
  cursor: pointer;
  transition: ${p => p.theme.transition.transitionFunction};

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.google};
    background-color: ${p => p.theme.colors.modalBackground};
    color: ${p => p.theme.colors.googleFontColor};
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media ${device.mobile} {
  }

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const FieldName = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.214;
  color: ${p => p.theme.colors.white};

  @media ${device.mobile} {
    font-weight: 600;
  }

  @media ${device.tablet} {
    font-weight: 500;
    color: ${p => p.theme.colors.secondaryFontColor};
  }

  @media ${device.desktop} {
    font-weight: 500;
    color: ${p => p.theme.colors.secondaryFontColor};
  }
`;

export const AccentedMark = styled.span`
  color: ${p => p.theme.colors.accentColor};
`;

export const StyledField = styled(Field)`
  padding: 8px 12px;
  outline: none;
  border: 1px solid ${p => p.theme.colors.inputBackground};
  box-shadow: ${p => p.theme.shadows.input};
  background-color: ${p => p.theme.colors.inputBackground};
  transition: ${p => p.theme.transition.transitionFunction};

  :hover,
  :focus {
    border: 1px solid ${p => p.theme.colors.headerBackground};
  }
`;

export const ValidationError = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 600;
  color: ${p => p.theme.colors.accentColor};
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 60px;
  outline: none;
  border: none;
  background-color: ${p => p.theme.colors.accentColor};
  color: ${p => p.theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
  transition: ${p => p.theme.transition.transitionFunction};

  :hover {
    background-color: ${p => p.theme.colors.hover};
  }

  :disabled {
    background-color: ${p => p.theme.colors.headerBackground};
    color: ${p => p.theme.colors.secondaryFontColor};
    cursor: not-allowed;
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 16px;
  text-decoration: underline;
`;
