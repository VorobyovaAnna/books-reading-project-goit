import MyTraining from 'components/MyTraining';
import MyGoal from 'components/MyGoal';
import Container from 'components/Container';
import ProgressChart from 'components/ProgressChart';
import Result from 'components/Results/Results';
import YearTimer from 'components/Timer/YearTimer';
import GoalTimer from 'components/Timer/GoalTimer';
import StatisticsTableComponent from 'components/Statistics/StatisticsTableComponent'
import { useMatchMedia } from 'hooks';
import { StyledAddButton, MyTrainingWrapper } from 'components/MyTraining/MyTraining.styled';
import { ReactComponent as AddIcon } from 'images/svg/iconAdd.svg';
import { useState, useEffect } from 'react';
import { useGetTrainingQuery } from 'redux/RTKQuery/booksApi';
import { TimersMainWrapper } from 'components/Timer/YearTimer/YearTimer.styled'

const Training = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const [isVisible, setIsVisible] = useState();
  const [isActiveTraining, setIsActiveTraining] = useState();
  // const [isTrainingFinished, useIsTrainingFinished] = useState();
  const { data: trainings } = useGetTrainingQuery();

  useEffect(() => {
    trainings?.training.length === 0
      ? setIsActiveTraining(false)
      : setIsActiveTraining(true);
  }, [trainings?.training.length]);

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  // useEffect(() => {
  //   const timeFinished =
  //     new Date().getTime() >= new Date(trainings?.training[0].finish).getTime();
  //   const pagesFinished = !trainings?.training[0].books.find(
  //     ({ status }) => status === false
  //   );
  // }, [trainings?.training]);

  return (
    <Container>
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
          {isActiveTraining &&
            (<div>
              <TimersMainWrapper>
                <YearTimer />
                <GoalTimer />
              </TimersMainWrapper>
            </div>)}
            <MyGoal />
            {!isActiveTraining && <MyTraining isFormVisible={isVisible} toggleForm={toggleForm} />}
            {isActiveTraining &&
              (<>
                <StatisticsTableComponent />
                <ProgressChart />
                <Result />
              </>)}
          {!isActiveTraining && <ProgressChart />}
        </>
      )}

      {isDesktop && (
        <MyTrainingWrapper>
          <MyGoal />
          {!isActiveTraining && <MyTraining isFormVisible={isVisible} toggleForm={toggleForm} />}
          {isActiveTraining &&
            (<div>
              <TimersMainWrapper>
                <YearTimer />
                <GoalTimer />
              </TimersMainWrapper>
              <StatisticsTableComponent />
              <Result />
            </div>)}
          <ProgressChart />
        </MyTrainingWrapper>
      )}
    </Container>
  );
};

export default Training;
