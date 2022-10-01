export const getBooks = ({ books }) => books;
export const getBookById = (state, bookId) =>
  state.books.find(({ _id }) => _id === bookId);
export const getFinishedBooks = state => state.books.library.finished;
