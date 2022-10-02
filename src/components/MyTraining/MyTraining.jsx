import moment from 'moment';
import { useMatchMedia } from 'hooks';
import BooksListEmptyMobile from './BooksListEmptyMobile';
import BooksListFilledMobile from './BooksListFilledMobile';
import BooksTable from './BooksTable';
import StartTrainingButton from './StartTrainingButton';
import {
  StyledHeading,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledOption,
  SubmitButton,
} from 'components/AddTrainingComponent/AddTrainingComponent.styled';
import { FlexWrapper, CalendarWrapper } from './MyTraining.styled';

const MyTraining = () => {
  const { isMobile } = useMatchMedia();
  const bookList = true;

  const disabledDate = current => {
    // Can not select days before today
    return current < moment().startOf('day');
  };

  return (
    <>
      {isMobile & !bookList && <BooksListEmptyMobile />}
      {isMobile & bookList && (
        <>
          <BooksListFilledMobile />
          <StartTrainingButton />
        </>
      )}
      {!isMobile && (
        <>
          <StyledHeading>Моє тренування</StyledHeading>
          <StyledForm>
            <CalendarWrapper>
              <StyledInput
                name="dateStart"
                format="DD-MM-YYYY"
                disabledDate={disabledDate}
                placeholder="Початок"
                style={{
                  margin: '0 20px 0 0',
                }}
              />
              <StyledInput
                name="dateEnd"
                format="DD-MM-YYYY"
                disabledDate={disabledDate}
                placeholder="Завершення"
              />
            </CalendarWrapper>
            <FlexWrapper>
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
            </FlexWrapper>
          </StyledForm>
          <BooksTable />
          <StartTrainingButton />
        </>
      )}
    </>
  );
};

export default MyTraining;
