import { createSlice } from '@reduxjs/toolkit';
import statisticsOperations from './statistic-operations';
import { authOperations } from 'redux/auth';
const initialState = [];

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: {
    [statisticsOperations.updateStatistics.fulfilled](state, action) {
      state = state.map(statistic =>
        statistic._id === action.payload._id ? action.payload : statistic
      );
    },
    [statisticsOperations.fetchStatistics.fulfilled](_, action) {
      return action.payload;
    },
    [authOperations.logOut.fulfilled]() {
      return [];
    },
  },
});

export default statisticsSlice.reducer;
