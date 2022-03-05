import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  status: null,
};

export const getCountries = createAsyncThunk(
  'statistics/getCountries',
  async () => {
    return await axios
      .get(
        'https://coronatime-api.tazo.redberryinternship.ge/sanctum/csrf-cookie'
      )
      .then(async () => {
        return await axios
          .get(
            'https://coronatime-api.tazo.redberryinternship.ge/api/countries',
            {
              withCredentials: true,
            }
          )
          .then(async (response) => {
            return await response.data;
          });
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
      state.countries = payload;
      state.status = 'success';
    },
    [getCountries.rejected]: (state) => {
      state.status = 'error';
    },
  },
});

export default countryStatistics.reducer;
