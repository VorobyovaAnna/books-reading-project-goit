import { useMatchMedia } from 'hooks';
import BooksListEmptyMobile from './BooksListEmptyMobile';
import BooksListFilledMobile from './BooksListFilledMobile';
import BooksTable from './BooksTable';
import StartTrainingButton from './StartTrainingButton';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBooks } from 'redux/book';
import { booksOperations } from 'redux/book';
import { trainingsOperations } from 'redux/training';
import TrainingForm from 'components/TrainingForm';

const MyTraining = ({ isFormVisible, toggleForm }) => {
  const { isMobile } = useMatchMedia();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  const books = useSelector(getBooks);

  const [booksForTable, setBooksForTable] = useState([]);
  const [start, setStart] = useState();
  const [finish, setFinish] = useState();

  const booksPlan = books?.filter(book => book.status === 'plan');
  const [booksForSelect, setBooksForSelect] = useState(booksPlan);

  const handleSubmit = ({ start, finish, books }) => {
    console.log(start, finish, books);
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
    // navigate('/statistics');
    const books = booksForTable.map(book => book._id);
    const trainingData = { start, finish, books };
    console.log('запит на бек для створення тренінгу', trainingData);
    dispatch(trainingsOperations.createTraining(trainingData));
  };

  const removeBook = id => {
    const addBooks = booksForTable.filter(book => {
      return book._id !== id;
    });
    setBooksForTable(addBooks);

    const queBook = booksForTable.filter(book => {
      return book._id === id;
    });
    // console.log(queBook);
    setBooksForSelect([...booksForSelect, ...queBook]);
  };

  return (
    <>
      {isMobile & isFormVisible && (
        <TrainingForm books={booksForSelect} submitCallback={handleSubmit} />
      )}
      {isMobile & !isFormVisible & (booksForTable.length === 0) && (
        <BooksListEmptyMobile />
      )}
      {isMobile & !isFormVisible & (booksForTable.length !== 0) && (
        <>
          <BooksListFilledMobile books={booksForTable} />
          <StartTrainingButton />
        </>
      )}
      {!isMobile && (
        <>
          <TrainingForm books={booksForSelect} submitCallback={handleSubmit} />
          <BooksTable books={booksForTable} onClick={removeBook} />
          <StartTrainingButton
            htmlType="button"
            onClick={handleStartTraining}
          />
        </>
      )}
    </>
  );
};

export default MyTraining;
