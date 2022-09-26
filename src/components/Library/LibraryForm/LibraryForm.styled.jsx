import { Button, Form, Input } from 'antd';
import styled from 'styled-components';

export const FormItem = styled(Form.Item)`
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;

    color: ${p => p.theme.colors.secondaryFontColor};
  }

  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin-right: 16px;
    margin-bottom: 0;

    :nth-child(2) {
      width: 150px;
    }
    :nth-child(3) {
      width: 150px;
    }
  }
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    :nth-child(2) {
      width: 152px;
    }
    :nth-child(3) {
      width: 152px;
    }
  }
`;

export const StyledInput = styled(Input)`
  height: 42px;

  border-radius: 0;
  background-color: ${p => p.theme.colors.mainBackground};

  &:hover,
  :focus {
    border-color: ${p => p.theme.colors.mainBackground};
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.shadows.input};
  }
`;

export const TitleInput = styled(StyledInput)`
  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 346px;
  }
`;

export const AuthorInput = styled(StyledInput)`
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 336px;
  }

  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 250px;
  }
`;

export const StyledBox = styled(Form.Item)`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`;

export const StyledButton = styled(Button)`
  margin-left: auto;

  height: 42px;
  min-width: 170px;

  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin-top: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 1279px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: flex;
    gap: 32px;
  }

  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    gap: 0px;
    margin-right: 32px;
  }
`;

export const StyledForm = styled(Form)`
  font-family: 'Montserrat';

  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
  }
`;
