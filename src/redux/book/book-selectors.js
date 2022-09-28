export const getBooks = ({ books }) => books;
export const getBookById = (state, bookId) =>
  state.books.find(({ _id }) => _id === bookId);
