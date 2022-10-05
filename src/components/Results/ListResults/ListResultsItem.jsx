
import { Item, Date, Time, Page, PagesName } from './ListResults.styled';

export const ListResultsItem = ({ date, time, pages }) => {
  return (
    <Item>
      <Date>{date}</Date>
      <Time>{time}</Time>
      <PagesName>
        <Page>{pages}</Page>
        стор.
      </PagesName>
    </Item>
  );
};