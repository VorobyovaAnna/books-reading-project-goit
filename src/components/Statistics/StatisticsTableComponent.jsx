import CongratsModal from 'components/modals/CongratsModal';
import Modal from 'components/modals/Modal/Modal';
import StatisticsTable from './StatisticsTable/StatisticsTable';
import StatisticsTableMobile from './StatisticsTableMobile/StatisticsTableMobile';
import useStatisticsTableComponent from './useStatisticsTableComponent';

const StatisticsTableComponent = () => {
  const {
    isLoadingTrainingsData,
    isLoadingBooksData,
    isMobile,
    booksForTable,
    isModalVisible,
    toggleModal,
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
      {isModalVisible && (
        <Modal onClose={toggleModal}>
          <CongratsModal onBtnClick={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default StatisticsTableComponent;
