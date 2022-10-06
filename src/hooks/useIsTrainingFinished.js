import { useEffect, useState } from 'react';
import { useGetTrainingQuery } from 'redux/RTKQuery/booksApi';

const useTrainingFinished = () => {
  const { data: training } = useGetTrainingQuery();
  const [isTrainingFinished, setIsTrainingFinished] = useState();

  useEffect(() => {
    if (training?.training && training?.training.length !== 0) {
      const timeFinished =
        new Date().getTime() >=
        new Date(training?.training[0].finish).getTime();
      const pagesFinished = !training?.training[0].books.find(
        ({ status }) => status === false
      );
      timeFinished && pagesFinished && setIsTrainingFinished('all');
      timeFinished && setIsTrainingFinished('date');
      pagesFinished && setIsTrainingFinished('pages');
    }
  }, [training?.training]);

  return { training, isTrainingFinished };
};
export default useTrainingFinished;
