import MyTraining from 'components/MyTraining';
import MyGoal from 'components/MyGoal';
import Container from 'components/Container';
import ProgressChart from 'components/ProgressChart';
import Result from 'components/Results/Results';
import { useMatchMedia } from 'hooks';
import { StyledAddButton } from 'components/MyTraining/MyTraining.styled';
import { ReactComponent as AddIcon } from 'images/svg/iconAdd.svg';
import { useState, useEffect } from 'react';
import { useGetTrainingQuery } from 'redux/RTKQuery/booksApi';

const Training = () => {
  const { isMobile } = useMatchMedia();
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
      {isMobile && !isVisible && <MyGoal />}

      {isMobile && (
        <MyTraining isFormVisible={isVisible} toggleForm={toggleForm} />
      )}

      {isMobile && !isVisible && (
        <>
          <ProgressChart />
          <StyledAddButton type="button" onClick={toggleForm}>
            <AddIcon />
          </StyledAddButton>
        </>
      )}

      {!isMobile && (
        <>
          <MyGoal />
          <MyTraining isFormVisible={isVisible} toggleForm={toggleForm} />
          <ProgressChart />
        </>
      )}
      {isActiveTraining && <Result />}
    </Container>
  );
};

export default Training;
