import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://books-reading-nodejs-final-project.onrender.com/api';

const fetchStatistics = createAsyncThunk(
  'statistics/fetch',
  async (statisticId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/statistics/${statisticId}`);
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
