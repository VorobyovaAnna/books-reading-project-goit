import BookCard from '../BookCard';
import PropTypes from 'prop-types';

const BooksListFilledMobile = ({ books, onClick }) => {
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
            onClick={onClick}
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
  onClick: PropTypes.func.isRequired,
};

export default BooksListFilledMobile;
