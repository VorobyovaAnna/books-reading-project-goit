import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../axiosBaseQuery';

export const booksApi = createApi({
  reducerPath: 'booksRTK',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://books-reading-nodejs-final-project.onrender.com/api',
  }),
  tagTypes: ['Books', 'BookById', 'Trainings', 'Statistics'],
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
    getTraining: builder.query({
      query: () => ({ url: '/trainings', method: 'GET' }),
      providesTags: ['Trainings'],
    }),
    addTraining: builder.mutation({
      query: values => ({ url: '/trainings', method: 'POST', data: values }),
      invalidatesTags: ['Books', 'BookById', 'Trainings', 'Statistics'],
    }),
    deleteTrainingById: builder.mutation({
      query: id => ({ url: `/trainings/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Trainings', 'Statistics'],
    }),
    getStatisticsById: builder.query({
      query: id => ({ url: `/statistics/${id}`, method: 'GET' }),
      providesTags: ['Statistics', 'Trainings'],
    }),
    updateStatisticsById: builder.mutation({
      query: params => ({
        url: `/statistics/${params.id}`,
        method: 'PATCH',
        data: params.data,
      }),
      invalidatesTags: ['Books', 'BookById', 'Trainings', 'Statistics'],
    }),
    deleteStatisticsById: builder.mutation({
      query: id => ({ url: `/statistics/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Statistics', 'Trainings'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useGetBookByIdQuery,
  useUpdateBookReviewMutation,
  useGetTrainingQuery,
  useAddTrainingMutation,
  useDeleteTrainingByIdMutation,
  useGetStatisticsByIdQuery,
  useUpdateStatisticsByIdMutation,
  useDeleteStatisticsByIdMutation,
} = booksApi;

// ------- Приклад використання хуків
// const { data: trainings } = useGetTrainingQuery();
// console.log('trainings:', trainings);

// const statisticsId = trainings?.data.training[0].statistics;

// console.log('statisticsId', statisticsId);

// const { data: statistics } = useGetStatisticsByIdQuery(statisticsId);

// console.log('statistics:', statistics);

// const [addTraining, { isLoading }] =
//   useAddTrainingMutation();

// const [updateStatisticsById] = useUpdateStatisticsByIdMutation();

// const dataValue = {
//   start: '01-10-2022 13:13:13',
//   finish: '11-10-2022 13:13:13',
//   books: ['633b46275953dc5cd9e39ffa'],
// };

// const statisticsValue = {
//   date: '12-10-2022 13:13:13',
//   pages: 25,
// };

// ------- Приклад використання мутацій
// <Button
//   onClick={() => {
//     addTraining(dataValue);
//   }}
// >
//   add
// </Button>
// <Button
//   onClick={() => {
//     updateStatisticsById({
//       id: statisticsId,
//       data: { ...statisticsValue },
//     });
//   }}
// >
//   add stat
// </Button>
