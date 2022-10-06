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
import useTrainingFinished from 'hooks/useIsTrainingFinished';
import WellDoneModal from 'components/modals/WellDoneModal';

const Training = () => {
  const { isMobile } = useMatchMedia();
  const [isVisible, setIsVisible] = useState();
  const [isActiveTraining, setIsActiveTraining] = useState();
  const { training, isTrainingFinished } = useTrainingFinished();

  useEffect(() => {
    training?.training.length === 0
      ? setIsActiveTraining(false)
      : setIsActiveTraining(true);
  }, [training?.training.length]);

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };
  // console.log(!!isTrainingFinished);

  return (
    <Container>
      {!!isTrainingFinished && <WellDoneModal status={isTrainingFinished} />}
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
