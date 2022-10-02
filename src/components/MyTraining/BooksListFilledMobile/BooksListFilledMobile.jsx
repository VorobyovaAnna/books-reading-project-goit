import BookCard from '../BookCard';
// import { tableData } from '../../Library/Table/data';
import PropTypes from 'prop-types';

const BooksListFilledMobile = ({ books }) => {
  return (
    <>
      <ul>
        {books.map(({ _id, title, author, publication, pages }) => (
          <BookCard
            key={_id}
            id={_id}
            title={title}
            author={author}
            year={publication}
            pages={pages}
          />
        ))}
      </ul>
    </>
  );
};

BooksListFilledMobile.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publication: PropTypes.string.isRequired,
      pages: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BooksListFilledMobile;