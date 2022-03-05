import { createSlice } from '@reduxjs/toolkit';

const initialState = { successMessage: '', errorMessage: '' };

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setSuccessMessage: (state, action) => {
      console.log('action message', action);
      return { successMessage: action.payload, errorMessage: '' };
    },
    setErrorMessage: (state, action) => {
      console.log('action message', action);
      return { successMessage: '', errorMessage: action.payload };
    },
    clearMessage: () => {
      return { successMessage: '', errorMessage: '' };
    },
  },
});

const { reducer, actions } = messageSlice;

export const { setSuccessMessage, setErrorMessage, clearMessage } = actions;
export default reducer;
