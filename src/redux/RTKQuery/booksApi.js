import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../axiosBaseQuery';

export const booksApi = createApi({
  reducerPath: 'booksRTK',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://nodejs-final-project-goit.herokuapp.com/api',
  }),
  tagTypes: ['Books', 'BookById'],
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
      providesTags: ['BookById'],
    }),
    updateBookReview: builder.mutation({
      query: params => ({
        url: `/books/${params.id}/review`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Books', 'BookById'],
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
