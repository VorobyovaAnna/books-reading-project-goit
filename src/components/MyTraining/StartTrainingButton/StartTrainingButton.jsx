import { StyledButton } from './StartTrainingButton.styled';
import PropTypes from 'prop-types';

const StartTrainingButton = ({ onClick, disabled }) => {
  return (
    <StyledButton htmlType="button" onClick={onClick} disabled={disabled}>
      Почати тренування
    </StyledButton>
  );
};

StartTrainingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default StartTrainingButton;
