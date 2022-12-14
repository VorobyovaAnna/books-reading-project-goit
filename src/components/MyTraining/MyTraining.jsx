import moment from 'moment';
import { useMatchMedia } from 'hooks';
import BooksListEmptyMobile from './BooksListEmptyMobile';
import BooksListFilledMobile from './BooksListFilledMobile';
import BooksTable from './BooksTable';
import StartTrainingButton from './StartTrainingButton';
import { useState, useEffect, useMemo } from 'react';
import TrainingForm from 'components/TrainingForm';
import PropTypes from 'prop-types';
import { StyledButtonBack, FormWrapper } from './MyTraining.styled';
import { ReactComponent as IconBack } from 'images/svg/iconBack.svg';
import { useGetBooksQuery } from 'redux/RTKQuery/booksApi';
import { useAddTrainingMutation } from 'redux/RTKQuery/booksApi';

const MyTraining = ({
  isFormVisible,
  toggleForm,
  handleStartChange,
  handleFinishChange,
  start,
  finish,
}) => {
  const [books, setBooks] = useState([]);
  const [booksForTable, setBooksForTable] = useState([]);
  const [booksForSelect, setBooksForSelect] = useState([]);
  const [startTimer, setStartTimer] = useState(false);

  const { isMobile } = useMatchMedia();
  const { data } = useGetBooksQuery();
  const [addTraining] = useAddTrainingMutation();

  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  const booksPlan = useMemo(
    () => books?.filter(book => book.status === 'plan'),
    [books]
  );

  useEffect(() => {
    setBooksForSelect(booksPlan);
  }, [booksPlan]);

  const handleSubmit = books => {
    const addedBooks = booksPlan.filter(({ _id }) => {
      return books.includes(_id);
    });
    setBooksForTable([...booksForTable, ...addedBooks]);

    const restOfBooks = booksForSelect.filter(({ _id }) => {
      return !books.includes(_id);
    });
    setBooksForSelect([...restOfBooks]);

    toggleForm();
  };

  const handleStartTraining = () => {
    const books = booksForTable.map(book => book._id);
    const trainingData = { start, finish, books };
    setStartTimer(true);

    addTraining(trainingData);
  };

  const removeBook = id => {
    const addBooks = booksForTable.filter(book => {
      return book._id !== id;
    });
    setBooksForTable(addBooks);

    const queBook = booksForTable.filter(book => {
      return book._id === id;
    });

    setBooksForSelect([...booksForSelect, ...queBook]);
  };

  return (
    <>
      {isMobile && isFormVisible && (
        <FormWrapper>
          <StyledButtonBack htmlType="button" onClick={() => toggleForm()}>
            <IconBack />
          </StyledButtonBack>
          <TrainingForm
            books={booksForSelect}
            submitCallback={handleSubmit}
            handleStartChange={handleStartChange}
            handleFinishChange={handleFinishChange}
            start={start ? moment(`${start}`, 'YYYY-MM-DD HH:mm:ss') : ''}
            finish={finish ? moment(`${finish}`, 'YYYY-MM-DD HH:mm:ss') : ''}
          />
        </FormWrapper>
      )}
      {isMobile && !isFormVisible && booksForTable.length === 0 && (
        <BooksListEmptyMobile />
      )}
      {isMobile && !isFormVisible && booksForTable.length !== 0 && (
        <>
          <BooksListFilledMobile books={booksForTable} onClick={removeBook} />
          <StartTrainingButton
            htmlType="button"
            onClick={handleStartTraining}
          />
        </>
      )}
      {!isMobile && (
        <>
          <TrainingForm
            books={booksForSelect}
            submitCallback={handleSubmit}
            handleStartChange={handleStartChange}
            handleFinishChange={handleFinishChange}
            start={start ? moment(`${start}`, 'YYYY-MM-DD HH:mm:ss') : null}
            finish={finish ? moment(`${finish}`, 'YYYY-MM-DD HH:mm:ss') : null}
          />
          <BooksTable books={booksForTable} onClick={removeBook} />
          <StartTrainingButton
            htmlType="button"
            onClick={handleStartTraining}
            disabled={booksForTable.length === 0}
          />
        </>
      )}
    </>
  );
};

MyTraining.propTypes = {
  isFormVisible: PropTypes.bool,
  toggleForm: PropTypes.func.isRequired,
  handleStartChange: PropTypes.func.isRequired,
  handleFinishChange: PropTypes.func.isRequired,
  start: PropTypes.string.isRequired,
  finish: PropTypes.string.isRequired,
};

export default MyTraining;
