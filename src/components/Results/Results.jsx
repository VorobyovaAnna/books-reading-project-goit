import { Section, Title } from './Results.styled';
import FormResult from './FormResult/index';
import ListResults from './ListResults/ListResults';
import useResult from './useResult';

const Results = () => {
  const { onSubmit, results, form, training } = useResult();
  return (
    <Section>
      <Title>Результати</Title>
      {training?.training[0] && (
        <FormResult
          onSubmit={onSubmit}
          form={form}
          start={training?.training[0].start}
          finish={training?.training[0].finish}
        />
      )}
      {results && results?.length !== 0 && <ListResults results={results} />}
      {results?.length === 0 && <p>Додайте свої перші результати!</p>}
    </Section>
  );
};

export default Results;
