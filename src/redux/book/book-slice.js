import { createSlice } from '@reduxjs/toolkit';
import booksOperations from './book-operations';
import { authOperations } from 'redux/auth';
const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [booksOperations.createBook.fulfilled](state, action) {
      state.push(action.payload);
    },
    [booksOperations.fetchBooks.fulfilled](_, action) {
      return action.payload;
    },
    [booksOperations.deleteBook.fulfilled](state, action) {
      return state.filter(item => item._id !== action.payload._id);
    },
    [booksOperations.fetchBookById.fulfilled](state, action) {
      return state.filter(book => book._id === action.payload._id);
    },
    [booksOperations.updateBookReview.fulfilled](state, action) {
      state = state.map(book =>
        book._id === action.payload._id ? action.payload : book
      );
    },
    [authOperations.logOut.fulfilled]() {
      return [];
    },
  },
});

export default booksSlice.reducer;
