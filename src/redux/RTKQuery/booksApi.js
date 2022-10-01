import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../axiosBaseQuery';

export const booksApi = createApi({
  reducerPath: 'booksRTK',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://nodejs-final-project-goit.herokuapp.com/api',
  }),
  tagTypes: ['Books'],
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => ({ url: '/books', method: 'GET' }),
      providesTags: ['Books'],
    }),
    addBook: builder.mutation({
      query: values => ({ url: '/books', method: 'POST', data: values }),
      invalidatesTags: ['Books'],
    }),
    deleteBook: builder.mutation({
      query: id => ({ url: `/books/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Books'],
    }),
    getBookById: builder.query({
      query: id => ({ url: `/books/${id}`, method: 'GET' }),
    }),
    updateBookReview: builder.mutation({
      query: (id, review) => ({
        url: `/books/${id}/review`,
        method: 'POST',
        data: review,
      }),
      invalidatesTags: ['Books'],
    }),
  }),
});

export const {
  useAddBookMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useGetBooksQuery,
  useUpdateBookReviewMutation,
} = booksApi;
