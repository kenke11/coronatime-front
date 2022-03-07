import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  status: null,
};

export const getCountries = createAsyncThunk(
  'statistics/getCountries',
  async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/sanctum/csrf-cookie`, {
      withCredentials: true,
    });

    let res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/countries`,
      {
        withCredentials: true,
      }
    );

    return await res.data;
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
      state.countries = payload;
      state.status = 'success';
    },
    [getCountries.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default countryStatistics.reducer;
