// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { ListResultsItem } from './ListResultsItem';
import { Title, List } from './ListResults.styled';

const ListResults = ({ results }) => {
  const pad = value => {
    return String(value).padStart(2, '0');
  };

  return (
    <>
      <Title>Статистика</Title>
      {/* <OverlayScrollbarsComponent
        options={{
          scrollbars: {
            autoHide: 'scroll',
          },
        }}
      > */}
      <List>
        {results.map(({ date, pages }, id) => {
          const currentDate = new Date(date);
          const day = pad(currentDate.getDate());
          const month = pad(currentDate.getMonth() + 1);
          const year = currentDate.getFullYear();
          const hours = pad(currentDate.getHours());
          const minutes = pad(currentDate.getMinutes());
          const seconds = pad(currentDate.getSeconds());
          const dateResult = `${day}.${month}.${year}`;
          const time = `${hours}:${minutes}:${seconds}`;
          return (
            <ListResultsItem
              key={id}
              date={dateResult}
              time={time}
              pages={pages}
            />
          );
        })}
      </List>
      {/* </OverlayScrollbarsComponent> */}
    </>
  );
};

export default ListResults;
