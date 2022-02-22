import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  status: null,
};

export const getCountries = createAsyncThunk(
  'statistics/getCountries',
  async () => {
    return axios.get('http://127.0.0.1:8000/api/countries').then((response) => {
      return response.data;
    });
  }
);

const countryStatistics = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: {
    [getCountries.pending]: (state) => {
      state.status = 'loading';
    },
    [getCountries.fulfilled]: (state, { payload }) => {
      console.log('fulfilled', payload);
      state.countries = payload;
      state.status = 'success';
    },
    [getCountries.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default countryStatistics.reducer;
