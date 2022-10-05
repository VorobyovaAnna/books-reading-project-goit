import { useEffect, useState } from 'react';
import { Section, Title } from './Results.styled';
import FormResult from './FormResult/index';
import ListResults from './ListResults/ListResults';
import {
  useGetTrainingQuery,
  useGetStatisticsByIdQuery,
} from 'redux/RTKQuery/booksApi';

const Results = () => {
  const [results, setResults] = useState();
  const [statisticId, setStatisticId] = useState(undefined);
  const { data: training } = useGetTrainingQuery();
  const {
    data: statistic,
    error,
    isLoading,
  } = useGetStatisticsByIdQuery(statisticId, {
    skip: statisticId instanceof String,
  });

  useEffect(() => {
    console.log(training);
    // setStatisticId(training?.training[0].statistics);
  }, [training?.training]);

  const onSubmit = ({ date, pages }) => {
    console.log(pages);
    console.log(date.format());
  };
  const result = [{ date: '2022-10-05T13:03:45+03:00', pages: 66 }];
  return (
    <Section>
      <Title>Результати</Title>
      <FormResult onSubmit={onSubmit} />
      {result && <ListResults results={result} />}
    </Section>
  );
};

export default Results;
