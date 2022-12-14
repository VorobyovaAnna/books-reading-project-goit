import moment from 'moment';
import {
  TrainingFormWrapper,
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
import PropTypes from 'prop-types';

const TrainingForm = ({
  books,
  submitCallback,
  handleStartChange,
  handleFinishChange,
  start,
  finish,
}) => {
  const [form] = Form.useForm();

  const disabledStartDate = current => {
    // Can not select days before today
    return current < moment().startOf('hour');
  };
  const disabledFinishDate = current => {
    // Can not select days before tomorrow & after month
    return (
      current < moment(start).add(1, 'day') ||
      current > moment(start).add(32, 'day')
    );
  };

  const handleSubmit = ({ books }) => {
    submitCallback(books);
    form.setFieldsValue({
      books: null,
    });
  };

  const validateMessages = {
    required: `Обов'язкове поле`,
  };

  return (
    <TrainingFormWrapper>
      <StyledHeading>Моє тренування</StyledHeading>
      <StyledForm
        form={form}
        onFinish={handleSubmit}
        validateMessages={validateMessages}
      >
        <CalendarWrapper>
          <Form.Item
            name="start"
            initialValue={start}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <StyledDatePicker
              onChange={(_, dateString) => {
                handleStartChange(dateString);
              }}
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledStartDate}
              showTime
              placeholder="Початок"
              style={{
                margin: '0 20px 0 0',
              }}
            />
          </Form.Item>
          <Form.Item
            name="finish"
            initialValue={finish}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <StyledDatePicker
              onChange={(_, dateString) => {
                handleFinishChange(dateString);
              }}
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledFinishDate}
              showTime
              placeholder="Завершення"
              disabled={!start}
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
    </TrainingFormWrapper>
  );
};

TrainingForm.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publication: PropTypes.string.isRequired,
      pages: PropTypes.number.isRequired,
    })
  ).isRequired,
  submitCallback: PropTypes.func.isRequired,
  handleStartChange: PropTypes.func.isRequired,
  handleFinishChange: PropTypes.func.isRequired,
};

export default TrainingForm;
