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
        <Label
          name="date"
          label="Дата"
          rules={[
            {
              required: true,
              message: 'Please input date!',
            },
          ]}
        >
          <DataPickerStyled
            size="110px"
            placeholder=""
            disabledDate={current => {
              return current && current < new Date();
            }}
          />
        </Label>
        <Label
          name="pages"
          label="Кількість сторінок"
          rules={[
            {
              required: true,
              message: 'Please input pages!',
            },
          ]}
        >
          <Input />
        </Label>
      </LabelList>
      <ButtonStyled htmlType="submit">Button</ButtonStyled>
    </FormStyled>
  );
};

export default FormResult;
