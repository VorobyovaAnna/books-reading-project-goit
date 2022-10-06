import { useMatchMedia } from 'hooks';
import { useGetBooksQuery, useGetTrainingQuery } from 'redux/RTKQuery/booksApi';
import { useEffect, useState } from 'react';
import usePreviousValue from 'hooks/usePreviousValue';

const useStatisticsTableComponent = () => {
  const { data: trainingsData, isLoading: isLoadingTrainingsData } =
    useGetTrainingQuery();

  const { data: booksData, isLoading: isLoadingBooksData } = useGetBooksQuery();

  const [booksForTable, setBooksForTable] = useState([]);

  const { isMobile } = useMatchMedia();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const prevStateRef = usePreviousValue(booksForTable);

  useEffect(() => {
    if (!!prevStateRef?.length && !!booksForTable?.length) {
      const prevArray = prevStateRef.filter(item => item.title.status === true);
      const newArray = booksForTable.filter(item => item.title.status === true);
      if (prevArray.length < newArray.length) {
        setIsModalVisible(true);
      }
    } else {
      return;
    }
  }, [booksForTable, prevStateRef]);

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
            _id: book._id,
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
    isModalVisible,
    toggleModal,
  };
};

export default useStatisticsTableComponent;
