import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  title: 'Amazing News API',
  subtitle: 'News Headlines',
};

export const MetaReducer = createSlice({
  name: 'meta',
  initialState,
  reducers: {},
});

export const MetaReducerActions = MetaReducer.actions;

export default MetaReducer.reducer;
