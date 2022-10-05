import StatisticsTable from './StatisticsTable/StatisticsTable';
import StatisticsTableMobile from './StatisticsTableMobile/StatisticsTableMobile';
import useStatisticsTableComponent from './useStatisticsTableComponent';

const StatisticsTableComponent = () => {
  const {
    isLoadingTrainingsData,
    isLoadingBooksData,
    isMobile,
    booksForTable,
  } = useStatisticsTableComponent();

  return (
    <>
      {!isLoadingTrainingsData && !isLoadingBooksData && (
        <>
          {isMobile ? (
            <>
              {!!booksForTable.length && (
                <StatisticsTableMobile books={booksForTable} />
              )}
            </>
          ) : (
            <>
              {!!booksForTable.length && (
                <StatisticsTable books={booksForTable} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default StatisticsTableComponent;
