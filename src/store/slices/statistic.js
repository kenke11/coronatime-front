import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  status: null,
};

export const getCountries = createAsyncThunk(
  'statistics/getCountries',
  async () => {
    return axios
      .get(
        'https://coronatime-api.tazo.redberryinternship.ge/sanctum/csrf-cookie'
      )
      .then((response) => {
        console.log(response);

        return axios
          .get(
            'https://coronatime-api.tazo.redberryinternship.ge/api/countries',
            {
              withCredentials: true,
            }
          )
          .then((response) => {
            return response.data;
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
