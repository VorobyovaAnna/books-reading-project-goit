import { StyledButton } from './StartTrainingButton.styled';
import { useNavigate } from 'react-router-dom';

const StartTrainingButton = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/statistics');

  return (
    <StyledButton type="button" onClick={handleClick}>
      Почати тренування
    </StyledButton>
  );
};

export default StartTrainingButton;
