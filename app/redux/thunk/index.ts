import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchAllArticles = createAsyncThunk(
  'newsApi/fetchAll',
  async () => {
    try {
      //   const response = await API();
      //   return response?.json();
      return {};
    } catch (ex) {
      return null;
    }
  },
);
