import theme from '../../../styles/theme';
import styled from 'styled-components';
import device from '../../../styles/device';
import { Form, DatePicker, Button } from 'antd';
export const FormStyled = styled(Form)`
  margin-bottom: 24px;
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    display: flex;
    align-items: flex-end;
    margin-bottom: 21px;
    & .ant-row {
      display: block;
    }
  }

  & .ant-form-item {
    margin: 0;
  }

  & .ant-form-item:not(:last-child) {
    margin-right: 18px;
  }
`;
export const LabelList = styled.div`
  display: flex;

  margin-bottom: 28px;
  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    margin-right: 32px;
    margin-bottom: 0;
  }
  & .ant-form-item-row .ant-col-10 {
    max-width: 110px;
    width: 110px;
    margin: 0;
  }
`;
export const DataPickerStyled = styled(DatePicker)`
  & .ant-form-item-control {
    width: 110px;
  }
`;
export const Label = styled(Form.Item)`
  .ant-form-item-label > label {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    height: 13px;
  }
  .ant-col-24.ant-form-item-label {
    padding: 0;
    flex: 0 0 110px;
  }
  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional):before {
    display: none;
  }
  .ant-form-item-explain {
    font-size: 10px;
  }
  .ant-input,
  .ant-picker-input > input {
    font-size: 10px;
  }
  .ant-picker,
  .ant-input {
    padding: 11px;
  }
`;

export const ButtonStyled = styled(Button)`
  min-width: 244px;
  min-height: 40px;
  padding: 5px;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.21;
  background: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.instrustion};
  transition: ${({ theme }) => theme.transition};

  @media ${device.tablet} and (max-width: ${theme.breakpoints.desktop}) {
    min-width: 240px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.hover};
    border: none;
  }
`;
