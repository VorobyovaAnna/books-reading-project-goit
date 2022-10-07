import { StyledBookIcon } from '../BooksTable.styled';
import { FiTrash } from 'react-icons/fi';
import { StyledDeleteButton } from '../BooksTable.styled';
import EllipsisText from 'react-ellipsis-text';
import PropTypes from 'prop-types';

const TableRow = ({ id, title, author, year, pages, onClick }) => {
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
        <StyledDeleteButton
          htmlType="button"
          onClick={() => {
            onClick(id);
          }}
        >
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
  onClick: PropTypes.func.isRequired,
};

export default TableRow;
