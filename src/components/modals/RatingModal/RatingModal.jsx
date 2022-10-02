import {
  FormItem,
  StyledBox,
  StyledRatingBox,
  StyledRatingButton,
  StyledRatingLabel,
  StyledRatingResumeText,
  StyledRatingText,
  StyledTextArea,
} from './RatingModal.styled';

import Loader from 'components/Loader';
import { Form, Rate } from 'antd';
import useRatingModal from './useRatingModal';

const RatingModal = ({ onClose, bookId }) => {
  const {
    isLoading,
    error,
    form,
    onFinish,
    rating,
    setRating,
    resume,
    setResume,
    isDisabled,
  } = useRatingModal(bookId, onClose);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledRatingBox>
          {error ? (
            error.data.message
          ) : (
            <>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <StyledRatingText>Обрати рейтинг книги</StyledRatingText>
                <Rate
                  style={{ width: '120px', fontSize: '17px' }}
                  value={rating}
                  onChange={value => {
                    setRating(value);
                  }}
                />
                <FormItem name={'resume'}>
                  <StyledRatingLabel>
                    <StyledRatingResumeText>Резюме</StyledRatingResumeText>
                    <StyledTextArea
                      value={resume}
                      onChange={e => {
                        setResume(e.currentTarget.value);
                      }}
                      autoSize={{ minRows: 7 }}
                    />
                  </StyledRatingLabel>
                </FormItem>

                <StyledBox>
                  <StyledRatingButton onClick={onClose}>
                    Назад
                  </StyledRatingButton>
                  <StyledRatingButton
                    type="primary"
                    htmlType="submit"
                    disabled={!isDisabled}
                  >
                    Зберегти
                  </StyledRatingButton>
                </StyledBox>
              </Form>
            </>
          )}
        </StyledRatingBox>
      )}
    </>
  );
};
export default RatingModal;
