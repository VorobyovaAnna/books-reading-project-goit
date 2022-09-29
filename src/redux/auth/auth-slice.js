import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](state) {
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
      state.isFetchingUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingUser = false;
    },
  },
});

export default authSlice.reducer;
