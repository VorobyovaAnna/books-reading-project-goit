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

const BookCard = ({ title, author, year, pages }) => {
  const handleClick = () => {
    console.log(year);
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
      <StyledDeleteButton onClick={handleClick}>
        <FiTrash size={20} />
      </StyledDeleteButton>
    </StyledWrapper>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
};

export default BookCard;
