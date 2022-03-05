import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setErrorMessage, setSuccessMessage } from 'store/slices/message';
import AuthService from 'store/services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password, remember_me }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password, remember_me);
      if (data.status === 'success') {
        localStorage.setItem('user', JSON.stringify(data));
        thunkAPI.dispatch(setSuccessMessage(data.message));
      } else if (data.status === 'error') {
        thunkAPI.dispatch(setErrorMessage(data.error));
      }
      return { user: data };
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setErrorMessage(message));
    }
  }
);

export const logout = createAsyncThunk('auth/logout', () => {
  AuthService.logout();
});

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.signup(username, email, password);
      if (response.status === 'success') {
        thunkAPI.dispatch(setSuccessMessage(response.message));
      } else if (response.status === 'error') {
        thunkAPI.dispatch(setErrorMessage(response.errors));
      }

      return response;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setErrorMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const confirmationEmail = createAsyncThunk(
  'auth/confirmEmail',
  async ({ email }, thunkAPI) => {
    try {
      const response = await AuthService.confirmationEmail(email);
      if (response.status === 'success') {
        thunkAPI.dispatch(setSuccessMessage(response.message));
      } else if (response.status === 'error') {
        thunkAPI.dispatch(setErrorMessage(response.errors));
      }

      return response;
    } catch (error) {
      console.log('catch error', error);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, password }, thunkAPI) => {
    try {
      const response = await AuthService.resetPassword(token, password);
      if (response.status === 'success') {
        thunkAPI.dispatch(setSuccessMessage(response.message));
      } else if (response.status === 'error') {
        thunkAPI.dispatch(setErrorMessage(response.errors));
      }
      return response;
    } catch (error) {
      console.log('error', error);
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
      if (action.payload.user.status === 'success') {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      } else {
        state.isLoggedIn = false;
        state.user = null;
      }
    },
    [login.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [signup.fulfilled]: (state) => {
      state.isLoggedIn = false;
    },
    [signup.rejected]: (state) => {
      state.isLoggedIn = false;
    },
    [confirmationEmail.fulfilled]: (state) => {
      state.isLoggedIn = false;
    },
    [confirmationEmail.rejected]: (state) => {
      state.isLoggedIn = false;
    },
  },
});

const { reducer } = authSlice;

export default reducer;
