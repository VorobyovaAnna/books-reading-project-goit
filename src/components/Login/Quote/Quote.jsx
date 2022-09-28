import { ReactComponent as QuoteIcon } from '../../../images/svg/quote.svg';
import { QouteWrapper, Text, Author } from './Qoute.styled';

const Qoute = () => {
  return (
    <QouteWrapper>
      <QuoteIcon />
      <Text>
        Книги – це кораблі думки, що мандрують по хвилях часу і обережно несуть
        свій дорогоцінний вантаж від покоління до покоління.
      </Text>
      <Author>Бекон Ф.</Author>
    </QouteWrapper>
  );
};

export default Qoute;
