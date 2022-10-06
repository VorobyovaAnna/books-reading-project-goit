import MyTraining from 'components/MyTraining';
import MyGoal from 'components/MyGoal';
import Container from 'components/Container';
import ProgressChart from 'components/ProgressChart';
import Result from 'components/Results/Results';
import YearTimer from 'components/Timer/YearTimer';
import GoalTimer from 'components/Timer/GoalTimer';
import StatisticsTableComponent from 'components/Statistics/StatisticsTableComponent';
import { useMatchMedia } from 'hooks';
import { StyledAddButton } from 'components/MyTraining/MyTraining.styled';
import { ReactComponent as AddIcon } from 'images/svg/iconAdd.svg';
import { useState, useEffect, useCallback } from 'react';
import { useGetTrainingQuery } from 'redux/RTKQuery/booksApi';
import useTrainingFinished from 'hooks/useIsTrainingFinished';
import WellDoneModal from 'components/modals/WellDoneModal';
import Modal from 'components/modals/Modal/Modal';
import { TimersMainWrapper } from 'components/Timer/YearTimer/YearTimer.styled';
import styled from 'styled-components';


const Training = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const [isVisible, setIsVisible] = useState();
  const [isActiveTraining, setIsActiveTraining] = useState();
  const { training, isTrainingFinished } = useTrainingFinished();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    training?.training.length === 0
      ? setIsActiveTraining(false)
      : setIsActiveTraining(true);
  }, [training?.training.length]);
  useEffect(() => {
    !!isTrainingFinished && setIsModalVisible(true);
  }, [isTrainingFinished]);

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  const onModalClose = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible]);

  return (
    <Container>

      {isModalVisible && (
        <Modal onClose={onModalClose}>
          <WellDoneModal onClose={onModalClose} status={isTrainingFinished} />
        </Modal>
      )}
      {isMobile && !isVisible && !isActiveTraining && <MyGoal />}


      {isMobile && !isActiveTraining && (
        <MyTraining isFormVisible={isVisible} toggleForm={toggleForm} />
      )}

      {isMobile && !isVisible && !isActiveTraining && (
        <>
          <ProgressChart />
          <StyledAddButton type="button" onClick={toggleForm}>
            <AddIcon />
          </StyledAddButton>
        </>
      )}

      {isMobile && isActiveTraining && (
        <>
          <TimersMainWrapper>
            <YearTimer />
            <GoalTimer />
          </TimersMainWrapper>
          <MyGoal />
          <StatisticsTableComponent />
          <ProgressChart />
          <Result />
        </>
      )}

      {isTablet && (
        <>
          {isActiveTraining && (
            <div>
              <TimersMainWrapper>
                <YearTimer />
                <GoalTimer />
              </TimersMainWrapper>
            </div>
          )}
          <MyGoal />
          {!isActiveTraining && (
            <MyTraining isFormVisible={isVisible} toggleForm={toggleForm} />
          )}
          {isActiveTraining && (
            <>
              <StatisticsTableComponent />
              <ProgressChart />
              <Result />
            </>
          )}
          {!isActiveTraining && <ProgressChart />}
        </>
      )}

      {isDesktop && (
        <StyledContainer>
          {!isActiveTraining && (
            <div>
              <MyTraining isFormVisible={isVisible} toggleForm={toggleForm} />
            </div>
          )}

          {isActiveTraining && (
            <div>
              <TimersMainWrapper>
                <YearTimer />
                <GoalTimer />
              </TimersMainWrapper>
              <StatisticsTableComponent />
            </div>
          )}
          <MyGoal />

          <ProgressChart />
          {isActiveTraining && (
            <>
              <Result />
            </>
          )}
        </StyledContainer>
      )}
    </Container>
  );
};

export default Training;

export const StyledContainer = styled.div`
  padding-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 32px;
`;
