import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

type BreakingNewsAPIQuery = {
  country: string;
};

type SearchNewsAPIQuery = {
  search: string;
};

const authenticatedURL = (url: string, params: any) =>
  `${url}?${new URLSearchParams({
    ...params,
    apiKey: Config.API_KEY,
  }).toString()}`;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_BASE_URL,
  }),
  endpoints: builder => ({
    getBreakingNews: builder.query({
      query: ({country}: BreakingNewsAPIQuery) =>
        authenticatedURL('top-headlines', {country}),
    }),
    searchNews: builder.query({
      query: ({search}: SearchNewsAPIQuery) =>
        authenticatedURL('everything', {q: search, sortBy: 'popularity'}),
    }),
  }),
});

export const {useLazyGetBreakingNewsQuery, useLazySearchNewsQuery} = newsApi;
