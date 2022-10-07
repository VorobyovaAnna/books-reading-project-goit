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

const MyTraining = ({ isFormVisible, toggleForm }) => {
  const [books, setBooks] = useState([]);
  const [booksForTable, setBooksForTable] = useState([]);
  const [booksForSelect, setBooksForSelect] = useState([]);
  const [start, setStart] = useState();
  const [finish, setFinish] = useState();
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

  const handleSubmit = ({ start, finish, books }) => {
    setStart(start);
    setFinish(finish);

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
          <TrainingForm books={booksForSelect} submitCallback={handleSubmit} />
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
          <TrainingForm books={booksForSelect} submitCallback={handleSubmit} />
          <BooksTable books={booksForTable} onClick={removeBook} />
          <StartTrainingButton
            htmlType="button"
            onClick={handleStartTraining}
            disabled={!start}
          />
        </>
      )}
    </>
  );
};

MyTraining.propTypes = {
  isFormVisible: PropTypes.bool,
  toggleForm: PropTypes.func.isRequired,
};

export default MyTraining;
