import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../services/auth.service';
import { setMessage } from './message';

const user = JSON.parse(localStorage.getItem('user'));

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password, remember_me }, thunkAPI) => {
    console.log('req', { username, password, remember_me });
    try {
      const data = await AuthService.login(username, password, remember_me);

      return { user: data };
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.signup(username, email, password);
      console.log('response signup', response);
      console.log('response.data.message', response.data.message);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      console.log('error', error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [signup.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

const { reducer } = authSlice;

export default reducer;
