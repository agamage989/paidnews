import {createSlice} from '@reduxjs/toolkit';

type ArticleStateType = {
  selectedArticle: any;
};

const initialState: ArticleStateType = {
  selectedArticle: {},
};

export const ArticlesReducer = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    updateSelectedArticle(state, action) {
      state.selectedArticle = action.payload;
    },
  },
});

export const ArticlesReducerActions = ArticlesReducer.actions;

export default ArticlesReducer.reducer;
