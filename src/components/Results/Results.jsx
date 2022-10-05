import { Section, Title } from './Results.styled';
import FormResult from './FormResult/index';

const Results = () => {
  const onSubmit = ({ date, pages }) => {
    console.log(pages);
    console.log(date.format());
  };
  return (
    <Section>
      <Title>Результати</Title>
      <FormResult onSubmit={onSubmit} />
    </Section>
  );
};

export default Results;
