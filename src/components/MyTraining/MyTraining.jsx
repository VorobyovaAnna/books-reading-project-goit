import moment from 'moment';
import { useMatchMedia } from 'hooks';
import BooksListEmptyMobile from './BooksListEmptyMobile';
import BooksListFilledMobile from './BooksListFilledMobile';
import BooksTable from './BooksTable';
import StartTrainingButton from './StartTrainingButton';
import {
  StyledHeading,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledOption,
  SubmitButton,
} from 'components/AddTrainingComponent/AddTrainingComponent.styled';
import { FlexWrapper, CalendarWrapper } from './MyTraining.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from 'redux/book';
import { booksOperations } from 'redux/book';
import { trainingsOperations } from 'redux/training';

const MyTraining = () => {
  const { isMobile } = useMatchMedia();
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

  let selectedBooks = null;
  const handleChange = value => {
    selectedBooks = value;
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
    dispatch(trainingsOperations.createTraining(data));
  };

  return (
    <>
      {isMobile & (booksPlan().length === 0) && <BooksListEmptyMobile />}
      {isMobile & (booksPlan().length !== 0) && (
        <>
          <BooksListFilledMobile books={booksPlan()} />
          <StartTrainingButton />
        </>
      )}
      {!isMobile && (
        <>
          <StyledHeading>Моє тренування</StyledHeading>
          <StyledForm onSubmit={handleSubmit}>
            <CalendarWrapper>
              <StyledInput
                name="dateStart"
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={disabledDate}
                showTime
                placeholder="Початок"
                style={{
                  margin: '0 20px 0 0',
                }}
              />
              <StyledInput
                name="dateEnd"
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={disabledDate}
                showTime
                placeholder="Завершення"
              />
            </CalendarWrapper>
            <FlexWrapper>
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
            </FlexWrapper>
          </StyledForm>
          <BooksTable books={booksPlan()} />
          <StartTrainingButton />
        </>
      )}
    </>
  );
};

export default MyTraining;
