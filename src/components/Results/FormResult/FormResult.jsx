import { Button, DatePicker, Form, Input } from 'antd';
import {
  Label,
  FormStyled,
  LabelList,
  DataPickerStyled,
  ButtonStyled,
} from './FormResult.styled';
const FormResult = ({ onSubmit }) => {
  return (
    <FormStyled
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 10,
      }}
      layout="horizontal"
      onFinish={onSubmit}
    >
      <LabelList>
        <Label label="Дата">
          <DataPickerStyled size="110px" placeholder="" />
        </Label>
        <Label label="Кількість сторінок">
          <Input />
        </Label>
      </LabelList>
      <ButtonStyled>Button</ButtonStyled>
    </FormStyled>
  );
};

export default FormResult;
