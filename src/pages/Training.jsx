import MyTraining from 'components/MyTraining';
import MyGoal from 'components/MyGoal';
import Container from 'components/Container';
import ProgressChart from 'components/ProgressChart';
// import BooksListEmptyMobile from 'components/MyTraining/BooksListEmptyMobile';
import { useMatchMedia } from 'hooks';
import { StyledAddButton } from 'components/MyTraining/MyTraining.styled';
import { ReactComponent as AddIcon } from 'images/svg/iconAdd.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { trainingsOperations } from 'redux/training';
// import { getTraining } from 'redux/training';

const Training = () => {
  const { isMobile } = useMatchMedia();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState();

  // const handleClick = () => navigate('/training/add');

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(trainingsOperations.fetchTraining());
  // }, [dispatch]);

  // const training = useSelector(getTraining);

  // training ?? console.log(training);

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isMobile && !isVisible && (
        <Container>
          <MyGoal />
          <MyTraining isFormVisible={isVisible} toggleForm={toggleForm} />
          <ProgressChart />
          <StyledAddButton type="button" onClick={toggleForm}>
            <AddIcon />
          </StyledAddButton>
        </Container>
      )}
      {isMobile && isVisible && (
        <Container>
          <MyTraining isFormVisible={isVisible} />
        </Container>
      )}
      {!isMobile && (
        <Container>
          {/* <MyGoal /> */}
          <MyTraining />
          {/* <ProgressChart /> */}
        </Container>
      )}
    </>
  );
};

export default Training;
