import moment from 'moment';
import {
  StyledHeading,
  StyledButtonBack,
  Wrapper,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledOption,
  SubmitButton,
} from './AddTrainingComponent.styled';
import Container from 'components/Container';
import { ReactComponent as IconBack } from 'images/svg/iconBack.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from 'redux/book';
import { booksOperations } from 'redux/book';
import { trainingsOperations } from 'redux/training';
import { useEffect } from 'react';

const AddTrainingComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  const books = useSelector(getBooks);

  const booksPlan = () => {
    return books && books.filter(book => book.status === 'plan');
  };

  const disabledDate = current => {
    // Can not select days before today
    return current < moment().startOf('minute');
  };

  const handleClick = () => navigate('/training');

  let selectedBooks = null;
  const handleChange = value => {
    selectedBooks = value;
    console.log(selectedBooks);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const start = form.elements.dateStart.value;
    const finish = form.elements.dateEnd.value;

    const data = {
      start,
      finish,
      books: selectedBooks,
    };
    console.log(data);
    dispatch(trainingsOperations.createTraining(data));
    navigate('/training');
  };

  return (
    <Container>
      <Wrapper>
        <StyledButtonBack htmlType="button" onClick={handleClick}>
          <IconBack />
        </StyledButtonBack>
        <StyledHeading>Моє тренування</StyledHeading>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            name="dateStart"
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDate}
            showTime
            placeholder="Початок"
          />
          <StyledInput
            name="dateEnd"
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDate}
            showTime
            placeholder="Завершення"
          />
          <StyledSelect
            mode="multiple"
            showArrow="true"
            placeholder="Обрати книги з бібліотеки"
            onChange={handleChange}
          >
            {books &&
              booksPlan().map(({ _id, title }) => (
                <StyledOption key={_id} value={_id}>
                  {title}
                </StyledOption>
              ))}
          </StyledSelect>
          <SubmitButton htmlType="submit">Додати</SubmitButton>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default AddTrainingComponent;
