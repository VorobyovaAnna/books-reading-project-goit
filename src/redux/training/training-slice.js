import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';
import trainingsOperation from './training-operations';

const initialState = [];

const trainingsSlice = createSlice({
  name: 'trainings',
  initialState,
  extraReducers: {
    [trainingsOperation.createTraining.fulfilled](state, action) {
      state.push(action.payload);
    },
    [trainingsOperation.fetchTraining.fulfilled](_, action) {
      return action.payload;
    },
    [authOperations.logOut.fulfilled]() {
      return [];
    },
  },
});

export default trainingsSlice.reducer;
