import BookCard from '../BookCard';
import { tableData } from '../../Library/Table/data';

const BooksListFilledMobile = () => {
  return (
    <>
      <ul>
        {tableData.map(({ id, title, author, publication, pages }) => (
          <BookCard
            key={publication}
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

export default BooksListFilledMobile;
