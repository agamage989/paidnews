import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {newsApi} from '../api';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;

export const Actions = {};
