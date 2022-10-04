import moment from 'moment';
import {
  StyledHeading,
  StyledForm,
  StyledDatePicker,
  StyledSelect,
  StyledOption,
  SubmitButton,
  CalendarWrapper,
  FlexWrapper,
  StyledInputWrapper,
} from './TrainingForm.styled';
import { Form } from 'antd';
import { useState } from 'react';

const TrainingForm = ({ books, submitCallback }) => {
  const [form] = Form.useForm();
  const [start, setStart] = useState();
  const [finish, setFinish] = useState();

  const disabledDate = current => {
    // Can not select days before today
    return current < moment().startOf('minute');
  };

  const handleSubmit = ({ books }) => {
    const data = {
      books,
      start,
      finish,
    };
    submitCallback(data);
    form.resetFields();
  };

  return (
    <>
      <StyledHeading>Моє тренування</StyledHeading>
      <StyledForm form={form} onFinish={handleSubmit}>
        <CalendarWrapper>
          <Form.Item
            name="start"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <StyledDatePicker
              onChange={(_, dateString) => {
                setStart(dateString);
              }}
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledDate}
              showTime
              placeholder="Початок"
              style={{
                margin: '0 20px 0 0',
              }}
            />
          </Form.Item>
          <Form.Item
            name="finish"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <StyledDatePicker
              onChange={(_, dateString) => {
                setFinish(dateString);
              }}
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledDate}
              showTime
              placeholder="Завершення"
            />
          </Form.Item>
        </CalendarWrapper>
        <FlexWrapper>
          <StyledInputWrapper
            name="books"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <StyledSelect
              mode="multiple"
              showArrow="true"
              placeholder="Обрати книги з бібліотеки"
              allowClear
            >
              {books.map(({ _id, title }) => (
                <StyledOption key={_id} value={_id}>
                  {title}
                </StyledOption>
              ))}
            </StyledSelect>
          </StyledInputWrapper>
          <Form.Item>
            <SubmitButton htmlType="submit">Додати</SubmitButton>
          </Form.Item>
        </FlexWrapper>
      </StyledForm>
    </>
  );
};

export default TrainingForm;