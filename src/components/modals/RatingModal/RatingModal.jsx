import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import {
  StyledBox,
  StyledRatingBox,
  StyledRatingButtonBack,
  StyledRatingButtonSave,
  StyledRatingForm,
  StyledRatingLabel,
  StyledRatingResumeText,
  StyledRatingText,
  StyledRatingTextArea,
} from './RatingModal.styled';
import Rating from 'react-rating';
import { SvgEmptyStar, SvgFullStar } from './RatingModal.styled';
import { useDispatch } from 'react-redux';
import operations from 'redux/book/book-operations';
import { useSelector } from 'react-redux';
import { getFinishedBooks } from 'redux/book';

const RatingModal = ({ onClose, index }) => {
  // const books = useSelector(getFinishedBooks);
  // const book = books.find(book => book.id === index);
  // const [review, setReview] = useState(() => book.review ?? '');
  // const [rating, setRating] = useState(() => Number(book.rating) || 0);

  const saveBtnRef = useRef(null);

  const dispatch = useDispatch();

  const handleRating = rate => {
    // if (saveBtnRef.current.disabled) {
    //   saveBtnRef.current.disabled = false;
    // }
    // setRating(rate);
  };

  const handleChange = event => {
    // if (saveBtnRef.current.disabled) {
    //   saveBtnRef.current.disabled = false;
    // }
    // setReview(event.target.value);
  };

  const handleSubmit = event => {
    // event.preventDefault();
    // if (!review) {
    //   toast.info('Заповніть відгук');
    //   return;
    // }
    // if (!rating) {
    //   toast.info('Вкажіть рейтинг');
    //   return;
    // }
    // dispatch(operations.updateBookReview({ index, body: { rating, review } }));
    // onClose();
  };

  return (
    <StyledRatingBox>
      <StyledRatingForm onSubmit={handleSubmit}>
        <StyledRatingText>Обрати рейтинг книги</StyledRatingText>
        <Rating
          onClick={handleRating}
          // initialRating={rating}
          fullSymbol={<SvgFullStar />}
          emptySymbol={<SvgEmptyStar />}
        />

        <StyledRatingLabel>
          <StyledRatingResumeText>Резюме</StyledRatingResumeText>

          <StyledRatingTextArea
// value={review}
            onChange={handleChange}
          ></StyledRatingTextArea>
        </StyledRatingLabel>

        <StyledBox>
          <StyledRatingButtonBack onClick={onClose} marginRight="16px">
          Назад
          </StyledRatingButtonBack>
          <StyledRatingButtonSave
            type="submit"
            ref={saveBtnRef}
            disabled={true}
          >
            Зберегти
          </StyledRatingButtonSave>
        </StyledBox>
      </StyledRatingForm>
    </StyledRatingBox>
  );
};
export default RatingModal;
