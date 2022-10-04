import { StyledButton } from './StartTrainingButton.styled';

const StartTrainingButton = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Почати тренування
    </StyledButton>
  );
};

export default StartTrainingButton;
