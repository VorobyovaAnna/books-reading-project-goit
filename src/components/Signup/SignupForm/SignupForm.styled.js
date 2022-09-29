import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

import device from 'styles/device';
import theme from 'styles/theme';

// import FilteredPropsInputField from './FilteredPropsInputField';

import mobileBackground from 'images/auth-background/signup-background-mob.jpg';
import tabletBackground from 'images/auth-background/signup-background-tablet.jpg';
import desktopBackground from 'images/auth-background/signup-background-desktop.jpg';

export const FormWrapper = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-repeat: no-repeat;
  background-position: center;

  @media ${device.mobile} {
    /* padding: 20px; */
    background-image: url(${mobileBackground});

    /* width: 100%; */
  }

  @media ${device.tablet} {
    padding: 65px;
    background-image: url(${tabletBackground});

    /* width: 100%; */
  }
  @media ${device.desktop} {
    padding: 158px 75px;
    background-image: url(${desktopBackground});

    /* width: 100%; */
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

export const Form = styled.form`
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
    background-color: ${theme.colors.white};
  }

  @media ${device.desktop} {
    width: 400px;
  }
`;

export const GoogleButton = styled.button`
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
  color: #707375;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  box-shadow: ${theme.shadows.google};
  cursor: 'pointer';
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
  color: ${theme.colors.white};

  @media ${device.mobile} {
    font-weight: 600;
  }

  @media ${device.tablet} {
    font-weight: 500;
    color: ${theme.colors.secondaryFontColor};
  }

  @media ${device.desktop} {
    font-weight: 500;
    color: ${theme.colors.secondaryFontColor};
  }
`;

export const AccentedMark = styled.span`
  color: ${theme.colors.accentColor};
`;

export const StyledField = styled(Field)`
  padding: 8px 12px;
  outline: none;
  border: 1px solid ${theme.colors.inputBackground};
  box-shadow: ${theme.shadows.input};
  background-color: ${theme.colors.inputBackground};

  :hover,
  :focus {
    border: 1px solid ${theme.colors.headerBackground};
  }
`;

export const ValidationError = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.accentColor};
`;

export const SubmitButton = styled.button`
  height: 60px;
  outline: none;
  border: none;
  background-color: ${theme.colors.accentColor};
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;

  :disabled {
    background-color: ${theme.colors.headerBackground};
    color: ${theme.colors.secondaryFontColor};
    cursor: not-allowed;
  }
`;

export const LoginLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;
`;

export const StyledLink = styled(Link)`
  text-align: center;

  text-decoration: underline;
`;

export const IsRegistredParagraph = styled.p`
  color: ${theme.colors.secondaryFontColor};
`;