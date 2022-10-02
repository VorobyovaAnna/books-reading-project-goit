import { StyledBookIcon } from '../BooksTable.styled';
import { FiTrash } from 'react-icons/fi';
import { StyledDeleteButton } from '../BooksTable.styled';
import EllipsisText from 'react-ellipsis-text';
import PropTypes from 'prop-types';
import { booksOperations } from 'redux/book';
import { useDispatch } from 'react-redux';

const TableRow = ({ id, title, author, year, pages }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(booksOperations.deleteBook(id));
  };

  return (
    <tr>
      <td>
        <StyledBookIcon />
        <EllipsisText text={title} length={50} />
      </td>
      <td>{author}</td>
      <td>{year}</td>
      <td>{pages}</td>
      <td>
        <StyledDeleteButton htmlType="button" onClick={handleClick}>
          <FiTrash size={20} />
        </StyledDeleteButton>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
};

export default TableRow;
