import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';

import device from 'styles/device';
import theme from 'styles/theme';

// import FilteredPropsInputField from './FilteredPropsInputField';

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
    /* background-image: url(${mobileBackground}); */
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
  font-weight: 600;
  box-shadow: ${theme.shadows.google};
  cursor: 'pointer';
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  /* width: 280px; */

  @media ${device.mobile} {
  }

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const FieldName = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.214;
  color: ${theme.colors.white};

  @media ${device.mobile} {
  }

  @media ${device.tablet} {
    color: ${theme.colors.secondaryFontColor};
  }

  @media ${device.desktop} {
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

export const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 16px;
  text-decoration: underline;
`;

// export const Input = styled(FilteredPropsInputField)`
//   border: 1px solid lightgrey;
//   border-radius: 4px;
//   font-size: 1rem;
//   line-height: 1.5rem;
//   font-style: normal;
//   font-weight: 400;
//   width: 100%;
//   margin-top: 0.5rem;
//   padding: 0.75rem 0.75rem;

//   &:focus,
//   &:active {
//     box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
//       rgb(227, 230, 232) 0px 0px 0px 3px;
//     border: 1px solid rgb(26, 33, 43);
//     outline: none;
//   }

//   /* Autocomplete styles in Chrome*/
//   &:-webkit-autofill,
//   &:-webkit-autofill:hover,
//   &:-webkit-autofill:focus {
//     background-color: white;
//     border: 1px solid lightgrey;
//     box-shadow: 0 0 0px 1000px #fff inset;
//     -webkit-box-shadow: 0 0 0px 1000px #fff inset;
//     transition: background-color 5000s ease-in-out 0s;
//     -webkit-text-fill-color: black;
//   }

//   ${({ valid }) =>
//     valid &&
//     css`
//       border: 1px solid rgb(0, 156, 38);

//       &:focus,
//       &:active {
//         border: 1px solid rgb(0, 156, 38);
//         box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
//           rgb(177, 247, 160) 0px 0px 0px 3px;
//         outline: none;
//       }

//       /* Autocomplete styles in Chrome*/
//       &:-webkit-autofill,
//       &:-webkit-autofill:hover,
//       &:-webkit-autofill:focus {
//         border: 1px solid rgb(0, 156, 38);
//       }
//     `}

//   ${({ error }) =>
//     error &&
//     css`
//       border: 1px solid rgb(191, 49, 12);
//       outline: none;

//       &:focus,
//       &:active {
//         box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
//           rgb(251, 178, 174) 0px 0px 0px 3px;
//         border: 1px solid rgb(191, 49, 12);
//         outline: none;
//       }

//       /* Autocomplete styles in Chrome*/
//       &:-webkit-autofill,
//       &:-webkit-autofill:hover,
//       &:-webkit-autofill:focus {
//         border: 1px solid rgb(191, 49, 12);
//       }
//     `}
// `;
