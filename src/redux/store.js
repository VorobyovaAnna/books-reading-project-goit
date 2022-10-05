import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';
import { booksReducer } from './book';
import { trainingReducer } from './training';
import { statisticsReducer } from './statistic.js';
import { booksApi } from './RTKQuery/booksApi';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    books: booksReducer,
    trainings: trainingReducer,
    statistics: statisticsReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    booksApi.middleware,
  ],

  devTools: process.env.NODE_ENV !== 'production',
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
