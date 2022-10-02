import { Button, DatePicker, Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

export const StyledHeading = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  background-color: ${p => p.theme.colors.headerBackground};

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  color: ${p => p.theme.colors.white};

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 928px;
  }
`;

export const StyledButtonBack = styled(Button)`
  background: none;
  border: none;

  margin-bottom: 32px;

  &:hover {
    background: none;
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  padding-top: 24px;
`;

export const StyledForm = styled.form`
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 0;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;

    width: 928px;
  }
`;

export const StyledInput = styled(DatePicker)`
  width: 100%;
  height: 42px;
  margin-bottom: 20px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 250px;
  }
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  margin-bottom: 32px;

  .ant-select-selector {
    height: 42px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 483px;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 715px;
    margin-right: 32px;
  }
`;

export const SubmitButton = styled(Button)`
  width: 141px;
  height: 42px;

  color: ${p => p.theme.colors.mainFontColor};
  background: none;
  border: 1px solid ${p => p.theme.colors.mainFontColor};

  &:hover {
    border: 1px solid ${p => p.theme.colors.accentColor};
    color: ${p => p.theme.colors.mainFontColor};
    background: none;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 171px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 181px;
  }
`;

export const StyledOption = styled(Option)`
  height: 42px;
`;
