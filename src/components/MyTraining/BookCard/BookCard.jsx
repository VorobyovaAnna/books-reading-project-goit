import {
  StyledWrapper,
  StyledTable,
  StyledIcon,
  StyledDeleteButton,
  StyledTitle,
} from './BooksCard.styled';
import { ReactComponent as BookIcon } from 'images/svg/bookIconGrey.svg';
import { FiTrash } from 'react-icons/fi';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import { booksOperations } from 'redux/book';
import { useDispatch } from 'react-redux';

const BookCard = ({ id, title, author, year, pages }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(booksOperations.deleteBook(id));
  };

  return (
    <StyledWrapper>
      <StyledIcon>
        <BookIcon />
      </StyledIcon>
      <StyledTitle>
        <EllipsisText text={title} length={50} />
      </StyledTitle>
      <StyledTable>
        <tbody>
          <tr>
            <td>Автор:</td>
            <td>{author}</td>
          </tr>
          <tr>
            <td>Рік</td>
            <td>{year}</td>
          </tr>
          <tr>
            <td>Стор.:</td>
            <td>{pages}</td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledDeleteButton htmlType="button" onClick={handleClick}>
        <FiTrash size={20} />
      </StyledDeleteButton>
    </StyledWrapper>
  );
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
};

export default BookCard;