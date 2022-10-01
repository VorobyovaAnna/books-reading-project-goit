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

export const ModalWrapper = styled.div`
  padding-top: 24px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled(DatePicker)`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  margin-bottom: 32px;
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
`;

export const StyledOption = styled(Option)``;
