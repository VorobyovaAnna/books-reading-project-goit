import moment from 'moment';
import {
  StyledHeading,
  StyledButtonBack,
  ModalWrapper,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledOption,
  SubmitButton,
} from './AddTrainingComponent.styled';
import Container from 'components/Container';
import { ReactComponent as IconBack } from 'images/svg/iconBack.svg';
import { useNavigate } from 'react-router-dom';

const AddTrainingComponent = () => {
  const navigate = useNavigate();
  const disabledDate = current => {
    // Can not select days before today
    return current < moment().startOf('day');
  };

  const handleClick = () => navigate('/training');

  return (
    <Container>
      <ModalWrapper>
        <StyledButtonBack type="button" onClick={handleClick}>
          <IconBack />
        </StyledButtonBack>
        <StyledHeading>Моє тренування</StyledHeading>
        <StyledForm>
          <StyledInput
            name="dateStart"
            format="DD-MM-YYYY"
            disabledDate={disabledDate}
            placeholder="Початок"
          />
          <StyledInput
            name="dateEnd"
            format="DD-MM-YYYY"
            disabledDate={disabledDate}
            placeholder="Завершення"
          />
          <StyledSelect
            mode="multiple"
            showArrow="true"
            placeholder="Обрати книги з бібліотеки"
          >
            <StyledOption value="jack">Jack</StyledOption>
            <StyledOption value="Daniels">Daniels</StyledOption>
            <StyledOption value="Beem">Beem</StyledOption>
          </StyledSelect>
          <SubmitButton>Додати</SubmitButton>
        </StyledForm>
      </ModalWrapper>
    </Container>
  );
};

export default AddTrainingComponent;
