import { StyledTable, StyledBookIcon } from './BooksTable.styled';
import TableRow from './TableRow';
import PropTypes from 'prop-types';

const BooksTable = ({ books, onClick }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <td>Назва книги</td>
          <td>Автор</td>
          <td>Рік</td>
          <td>Стор.</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {books.map(({ _id, title, author, publication, pages }) => (
          <TableRow
            key={_id}
            id={_id}
            title={title}
            author={author}
            year={publication}
            pages={pages}
            onClick={onClick}
          />
        ))}
        <tr>
          <td>
            <StyledBookIcon />
            <>...</>
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

BooksTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publication: PropTypes.string.isRequired,
      pages: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BooksTable;
