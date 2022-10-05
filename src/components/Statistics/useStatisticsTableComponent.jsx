import { useMatchMedia } from 'hooks';
import { useGetBooksQuery, useGetTrainingQuery } from 'redux/RTKQuery/booksApi';
import { useEffect, useState } from 'react';

const useStatisticsTableComponent = () => {
  const { data: trainingsData, isLoading: isLoadingTrainingsData } =
    useGetTrainingQuery();

  const { data: booksData, isLoading: isLoadingBooksData } = useGetBooksQuery();

  const [booksForTable, setBooksForTable] = useState([]);

  const { isMobile } = useMatchMedia();

  useEffect(() => {
    let array = [];
    if (trainingsData?.training[0] && booksData?.books.length !== 0) {
      trainingsData?.training[0].books.forEach(book => {
        const bookById = booksData?.books.find(item => item._id === book.book);

        bookById &&
          array.push({
            title: {
              title: bookById.title,
              status: book.status,
            },
            author: bookById.author,
            publication: bookById.publication,
            leftPages: book.leftPages,
          });
      });

      setBooksForTable(array);
    }
  }, [booksData, trainingsData]);

  return {
    isLoadingTrainingsData,
    isLoadingBooksData,
    isMobile,
    booksForTable,
  };
};

export default useStatisticsTableComponent;
