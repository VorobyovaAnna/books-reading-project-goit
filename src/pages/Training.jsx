import MyTraining from 'components/MyTraining';
import MyGoal from 'components/MyGoal';
import Container from 'components/Container';
import ProgressChart from 'components/ProgressChart';
// import BooksListEmptyMobile from 'components/MyTraining/BooksListEmptyMobile';
import { useMatchMedia } from 'hooks';
import { StyledAddButton } from 'components/MyTraining/MyTraining.styled';
import { ReactComponent as AddIcon } from 'images/svg/iconAdd.svg';
import { useNavigate } from 'react-router-dom';

const Training = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const navigate = useNavigate();
  const handleClick = () => navigate('/training/add');

  return (
    <>
      {isMobile && (
        <Container>
          <MyGoal />
          <MyTraining />
          <ProgressChart />
          <StyledAddButton type="button" onClick={handleClick}>
            <AddIcon />
          </StyledAddButton>
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
