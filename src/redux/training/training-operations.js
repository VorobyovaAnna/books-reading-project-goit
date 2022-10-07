import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://nodejs-final-project-goit.herokuapp.com/api';

const fetchTraining = createAsyncThunk(
  'training/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/trainings');
      return data.data.training;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const createTraining = createAsyncThunk(
  'training/create',
  async (training, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/trainings', training);
      return data.data.training;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const operations = {
  fetchTraining,
  createTraining,
};

export default operations;
