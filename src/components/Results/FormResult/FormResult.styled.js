import theme from '../../../styles/theme';
import styled from 'styled-components';
import device from '../../../styles/device';
import { Form, DatePicker, Button } from 'antd';
export const FormStyled = styled(Form)`
  & .ant-form-item {
    margin: 0;
  }
  & .ant-form-item:not(:last-child) {
    margin-right: 18px;
  }
  & .ant-form-item:last-child {
    flex-direction: column;
  }
`;
export const LabelList = styled.div`
  display: flex;
  margin-bottom: 28px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
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
    color: ${({ theme }) => theme.colors.secondaryFontColor};
  }
  .ant-col-24.ant-form-item-label {
    padding: 0;
    flex: 0 0 110px;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
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
    min-width: 130px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.hover};
    border: none;
  }
`;
