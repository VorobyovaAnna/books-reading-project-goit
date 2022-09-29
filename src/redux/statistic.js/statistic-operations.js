import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://nodejs-final-project-goit.herokuapp.com/api';

const fetchStatistics = createAsyncThunk(
  'statistics/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/statistics');
      return data.data.statistic;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const updateStatistics = createAsyncThunk(
  'statistics/update',
  async ({ statisticId, newStatistic }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/books/${statisticId}`, newStatistic);
      return data.data.statistics;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const operations = {
  fetchStatistics,
  updateStatistics,
};

export default operations;