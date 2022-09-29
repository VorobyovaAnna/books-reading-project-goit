import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://nodejs-final-project-goit.herokuapp.com/api';

const fetchBooks = createAsyncThunk(
  'books/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/books');
      return data.data.books;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const createBook = createAsyncThunk(
  'books/create',
  async (book, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/books', book);
      return data.data.book;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const deleteBook = createAsyncThunk(
  'books/delete',
  async (bookId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${bookId}`);
      return data.data.book;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const fetchBookById = createAsyncThunk(
  'books/getById',
  async (bookId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/books/${bookId}`);
      return data.data.book;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const updateBookReview = createAsyncThunk(
  'books/review',
  async ({ bookId, review }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/books/${bookId}/review`, review);
      return data.data.book;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const operations = {
  fetchBooks,
  createBook,
  deleteBook,
  fetchBookById,
  updateBookReview,
};

export default operations;
