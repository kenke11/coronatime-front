import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    isLoggedIn: false,
    user: [],
  },
  reducers: {
    login(state, action) {
      console.log('action', action);
      console.log('action', state);
    },
    logout(state, action) {
      console.log('action', action);
      console.log('action', state);
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
