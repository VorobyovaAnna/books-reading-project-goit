import { useEffect, useState } from 'react';
import {
  useGetTrainingQuery,
  useGetStatisticsByIdQuery,
  useUpdateStatisticsByIdMutation,
} from 'redux/RTKQuery/booksApi';

import openNotificationWithIcon from 'components/Notification';
const useResult = () => {
  const [results, setResults] = useState();
  const [statisticId, setStatisticId] = useState(undefined);
  const { data: training } = useGetTrainingQuery();
  const { data: statistic } = useGetStatisticsByIdQuery(statisticId, {
    skip: typeof statisticId !== 'string',
  });
  const [updateStatisticsById] = useUpdateStatisticsByIdMutation();

  useEffect(() => {
    if (training?.training.length !== 0) {
      setStatisticId(training?.training[0].statistics);
      setResults(statistic?.statistic.result);
    }
  }, [training?.training, statistic]);

  const onSubmit = async ({ date, pages }) => {
    const newDate = date.format();
    const update = await updateStatisticsById({
      id: statisticId,
      data: { date: newDate, pages },
    });
    if ('error' in update) {
      openNotificationWithIcon('error', update.error.data.message);
    } else {
      openNotificationWithIcon('success', 'Результат успішно додано!');
    }
  };
  return { onSubmit, results };
};

export default useResult;
