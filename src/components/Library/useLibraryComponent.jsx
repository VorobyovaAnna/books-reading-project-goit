import { useMatchMedia } from 'hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetBooksQuery } from 'redux/RTKQuery/booksApi';

const useLibraryComponent = () => {
  const { isMobile } = useMatchMedia();
  const navigate = useNavigate();
  const [planBooks, setPlanBooks] = useState([]);
  const [alreadyBooks, setAlreadyBooks] = useState([]);
  const [nowBooks, setNowBooks] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const { data, error, isLoading } = useGetBooksQuery();

  useEffect(() => {
    if (data) {
      let plan = [];
      let already = [];
      let now = [];

      data.books.forEach(item => {
        if (item.status === 'plan') {
          plan.push(item);
        }
        if (item.status === 'already') {
          already.push(item);
        }
        if (item.status === 'now') {
          now.push(item);
        }
      });

      setPlanBooks(plan);
      setAlreadyBooks(already);
      setNowBooks(now);
      setIsEmpty(!!plan.length || !!already.length || !!now.length);
    }
  }, [data]);

  return {
    isMobile,
    alreadyBooks,
    nowBooks,
    planBooks,
    navigate,
    isEmpty,
    isLoading,
    error,
  };
};

export default useLibraryComponent;
