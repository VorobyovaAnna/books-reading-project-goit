// import axios from 'axios';
import { useMatchMedia } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { booksOperations, getBooks } from 'redux/book';

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzYyMTNiYzVjZjdkYjY1MDQxZmRiOCIsImlhdCI6MTY2NDQ5MTgzNSwiZXhwIjoxNjY0NDk1NDM1fQ.beHrnNi-lxbFOoQDsTWfm39zXQc7tdrN7JqvC7w0-iA';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// axios.defaults.baseURL = 'http://127.0.0.1:3002';

const useLibraryComponent = () => {
  const { isMobile } = useMatchMedia();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector(getBooks);
  const [planBooks, setPlanBooks] = useState([]);
  const [alreadyBooks, setAlreadyBooks] = useState([]);
  const [nowBooks, setNowBooks] = useState([]);
  console.log(planBooks, alreadyBooks, nowBooks);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    let plan = [];
    let already = [];
    let now = [];

    books.forEach(item => {
      if (item.status === 'plan') {
        plan.push(item);
      }
      if (item.status === 'already') {
        already.push(item);
      }
      if (item.status === 'now') {
        now.push(item);
      }

      setPlanBooks(plan);
      setAlreadyBooks(already);
      setNowBooks(now);
    });
  }, [books]);

  return { isMobile, alreadyBooks, nowBooks, planBooks, navigate };
};

export default useLibraryComponent;
